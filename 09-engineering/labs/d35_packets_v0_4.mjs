import fs from 'node:fs';
import crypto from 'node:crypto';
const x=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
const sha=v=>crypto.createHash('sha256').update(v).digest('hex');
const id=(cid,a,b)=>'D35V04-'+sha([cid,...[a,b].sort()].join('|')).slice(0,12);
const excerpt=t=>t.split(/\s+/).slice(0,260).join(' ');
const make=partition=>{
 const pages=x.pages.filter(p=>p.partition===partition&&p.status==='captured'&&p.visible_text_words>=150); const items=[];
 for(const cid of [...new Set(pages.map(p=>p.candidate_id))]){const own=pages.filter(p=>p.candidate_id===cid); for(let i=0;i<own.length;i++)for(let j=i+1;j<own.length;j++){const [a,b]=[own[i],own[j]].sort((u,v)=>u.url.localeCompare(v.url)); items.push({pair_id:id(cid,a.url,b.url),candidate_id_hidden:true,organization_may_be_visible:true,algorithm_features_hidden:true,page_a:{url:a.url,text_sha256:a.visible_text_sha256,review_excerpt:excerpt(a.visible_text)},page_b:{url:b.url,text_sha256:b.visible_text_sha256,review_excerpt:excerpt(b.visible_text)},review:{same_page_family:null,label:null,confidence:null,rationale:null}});}}
 items.sort((a,b)=>a.pair_id.localeCompare(b.pair_id)); return {packet_version:'d35-v0.4.2-'+partition,partition,status:'blind_double_labeling_pending',source_snapshot_sha256:sha(JSON.stringify(x,null,2)),label_contract:{same_page_family:['yes','no','uncertain'],label:['repeated_template','distinct_content','uncertain'],confidence:[0,1],rationale:'required'},items};
};
for(const part of ['development','holdout']){const packet=make(part); for(const reviewer of ['a','b'])fs.writeFileSync(process.argv[3].replace('{partition}',part).replace('{reviewer}',reviewer),JSON.stringify({...packet,reviewer_id:reviewer},null,2)); console.log(part,packet.items.length);}
