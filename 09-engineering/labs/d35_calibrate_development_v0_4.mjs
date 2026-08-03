import fs from 'node:fs';
import crypto from 'node:crypto';
import { normalize, shingles, jaccard } from './d35_similarity_v0_2.mjs';
const sha=v=>crypto.createHash('sha256').update(v).digest('hex');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const snapshotPath='07-experiments/exp-0005-d35-capture-snapshot-v0-4-2.json';
const goldPath='07-experiments/exp-0005-d35-v0-4-development-gold.json';
const forbidden=['holdout','reviewer-a','reviewer-b'];
if(process.argv.slice(2).some(x=>forbidden.some(y=>x.toLowerCase().includes(y))))throw new Error('forbidden input');
const snapshot=read(snapshotPath),gold=read(goldPath);
if(gold.partition!=='development')throw new Error('development gold required');
const pages=snapshot.pages.filter(p=>p.partition==='development'&&p.status==='captured'&&p.visible_text_words>=150);
const clean=new Map();
for(const cid of [...new Set(pages.map(p=>p.candidate_id))]){
 const own=pages.filter(p=>p.candidate_id===cid).map(p=>({...p,raw:shingles(p.visible_text)})); const counts=new Map();
 for(const p of own)for(const s of p.raw)counts.set(s,(counts.get(s)||0)+1);
 const min=Math.max(3,Math.ceil(own.length*.8)); const bp=own.length<3?new Set():new Set([...counts].filter(([,n])=>n>=min).map(([s])=>s));
 for(const p of own)clean.set(p.url,new Set([...p.raw].filter(s=>!bp.has(s))));
}
const rows=gold.items.filter(x=>x.same_page_family==='yes'&&x.label!=='uncertain').map(x=>({...x,clean_jaccard:jaccard(clean.get(x.page_a.url)||new Set(),clean.get(x.page_b.url)||new Set())}));
const metrics=t=>{let tp=0,tn=0,fp=0,fn=0;for(const r of rows){const pred=r.clean_jaccard>=t?'repeated_template':'distinct_content';if(r.label==='repeated_template'&&pred===r.label)tp++;else if(r.label==='distinct_content'&&pred===r.label)tn++;else if(r.label==='distinct_content')fp++;else fn++;}const sensitivity=tp/(tp+fn||1),specificity=tn/(tn+fp||1),precision=tp/(tp+fp||1);return{threshold:t,tp,tn,fp,fn,sensitivity,specificity,precision,balanced_accuracy:(sensitivity+specificity)/2,accuracy:(tp+tn)/rows.length};};
const values=[...new Set(rows.map(x=>x.clean_jaccard))].sort((a,b)=>a-b);const thresholds=[0,...values.slice(0,-1).map((v,i)=>(v+values[i+1])/2),1];
const trials=thresholds.map(metrics).sort((a,b)=>b.balanced_accuracy-a.balanced_accuracy||b.sensitivity-a.sensitivity||b.specificity-a.specificity||b.threshold-a.threshold);
const out={rule_version:'d35-rule-v0.4.2-development',status:'frozen_candidate_pending_audit',created_at:new Date().toISOString(),feature:'candidate-local boilerplate-cleaned exact 5-word Jaccard',prediction:'repeated_template when clean_jaccard >= threshold',selected:trials[0],development_n:rows.length,class_counts:{repeated_template:rows.filter(x=>x.label==='repeated_template').length,distinct_content:rows.filter(x=>x.label==='distinct_content').length},input_allowlist:[snapshotPath,goldPath,'09-engineering/labs/d35_similarity_v0_2.mjs'],input_hashes:{snapshot:sha(fs.readFileSync(snapshotPath)),development_gold:sha(fs.readFileSync(goldPath)),code_v02:sha(fs.readFileSync('09-engineering/labs/d35_similarity_v0_2.mjs'))},holdout_accessed:false,top_trials:trials.slice(0,10),development_cases:rows.map(x=>({pair_id:x.pair_id,label:x.label,clean_jaccard:x.clean_jaccard,prediction:x.clean_jaccard>=trials[0].threshold?'repeated_template':'distinct_content'})),limitations:['development contains three organizations','pairs within an organization are dependent','literal overlap only','rule does not measure authorship paraphrase or external originality'],scoring_authorized:false};
fs.writeFileSync(process.argv[2],JSON.stringify(out,null,2)); console.log(JSON.stringify({selected:out.selected,n:out.development_n,classes:out.class_counts},null,2));
