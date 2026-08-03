import fs from 'node:fs';
import crypto from 'node:crypto';
import { normalize, tokens, pageType, sha256 } from './d35_similarity_v0_2.mjs';

const pairId=(candidateId,a,b)=>'D35PAIR-'+crypto.createHash('sha256').update([candidateId,...[a,b].sort()].join('|')).digest('hex').slice(0,12);
const excerpt=text=>normalize(text).split(' ').slice(0,220).join(' ');

export function build(snapshot){
  const allowed=new Set(snapshot.candidate_ids);
  const pages=snapshot.pages.filter(p=>allowed.has(p.candidate_id)).map(p=>({...p,page_type:pageType(p),normalized_words:tokens(p.visible_text_excerpt).length})).filter(p=>p.normalized_words>=150);
  const pairs=[];
  for(const candidateId of snapshot.candidate_ids){
    const own=pages.filter(p=>p.candidate_id===candidateId);
    for(let i=0;i<own.length;i++)for(let j=i+1;j<own.length;j++)if(own[i].page_type===own[j].page_type){
      const [a,b]=[own[i],own[j]].sort((x,y)=>x.page_url.localeCompare(y.page_url));
      pairs.push({pair_id:pairId(candidateId,a.page_url,b.page_url),candidate_id:candidateId,page_type:a.page_type,page_a:{evidence_id:a.evidence_id,url:a.page_url,text_sha256:a.text_sha256,review_excerpt:excerpt(a.visible_text_excerpt)},page_b:{evidence_id:b.evidence_id,url:b.page_url,text_sha256:b.text_sha256,review_excerpt:excerpt(b.visible_text_excerpt)}});
    }
  }
  for(const candidateId of snapshot.candidate_ids){
    const own=pairs.filter(p=>p.candidate_id===candidateId).sort((a,b)=>a.pair_id.localeCompare(b.pair_id));
    const holdoutCount=own.length>=2?Math.max(1,Math.floor(own.length*0.30)):0;
    for(let i=0;i<own.length;i++) own[i].partition=i<holdoutCount?'holdout':'development';
  }
  pairs.sort((a,b)=>a.pair_id.localeCompare(b.pair_id));
  const reviewItems=pairs.map(({candidate_id,...p})=>({...p,candidate_id_hidden:true,organization_may_be_visible_in_url_or_text:true,algorithm_features_hidden:true,review:{page_type_valid:null,label:null,confidence:null,rationale:null}}));
  return {packet_version:'d35-review-packet-v0.3',status:'blind_labeling_pending',created_at:'2026-07-31',source_snapshot_sha256:snapshot.snapshot_sha256,selection:{minimum_words:150,same_page_type_only:true,partition_rule:'per candidate: pair_id sort; first max(1,floor(30%)) is holdout when candidate has >=2 pairs',algorithm_features_excluded:true},label_contract:{page_type_valid:['yes','no','uncertain'],label:['repeated_template','distinct_content','uncertain'],confidence:[0,1],rationale:'required'},counts:{pairs:reviewItems.length,development:reviewItems.filter(x=>x.partition==='development').length,holdout:reviewItems.filter(x=>x.partition==='holdout').length,candidates_with_pairs:new Set(pairs.map(x=>x.candidate_id)).size},items:reviewItems};
}

if(process.argv[1]?.endsWith('d35_benchmark_packet_v0_3.mjs')){
  const snapshot=JSON.parse(fs.readFileSync(process.argv[2],'utf8')); const packet=build(snapshot);
  fs.writeFileSync(process.argv[3],JSON.stringify(packet,null,2));
  const manifest={packet_version:packet.packet_version,packet_sha256:sha256(JSON.stringify(packet,null,2)),source_snapshot_sha256:packet.source_snapshot_sha256,counts:packet.counts,reviewers:['reviewer-a','reviewer-b'],policy:'reviewers label independently; no algorithm output is provided; disagreements go to adjudication; holdout remains sealed until rules are frozen'};
  fs.writeFileSync(process.argv[4],JSON.stringify(manifest,null,2));
  if(process.argv[5]) fs.writeFileSync(process.argv[5],JSON.stringify({...packet,reviewer_id:'reviewer-a'},null,2));
  if(process.argv[6]) fs.writeFileSync(process.argv[6],JSON.stringify({...packet,reviewer_id:'reviewer-b'},null,2));
}
