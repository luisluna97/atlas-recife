import fs from 'node:fs';
import crypto from 'node:crypto';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const sha=v=>crypto.createHash('sha256').update(v).digest('hex');
const root='07-experiments/';
const account=read(root+'exp-0005-d35-v0-4-account-page-discovery.json');
const legal=read(root+'exp-0005-d35-v0-4-legal-page-discovery.json');
const accountRep=read(root+'exp-0005-d35-v0-4-account-replacements.json');
const legalRep=read(root+'exp-0005-d35-v0-4-legal-replacement.json');
const split=read(root+'exp-0005-d35-v0-4-organization-split-v0-4-2.json');
const partition=new Map([...split.development.map(x=>[x,'development']),...split.holdout.map(x=>[x,'holdout'])]);
const rows=[];
for(const c of account.candidates.filter(x=>partition.has(x.candidate_id)))for(const p of c.pages.filter(x=>x.include_v0_4))rows.push({candidate_id:c.candidate_id,organization:c.organization,partition:partition.get(c.candidate_id),family:p.page_type,url:p.url,title:p.title});
for(const c of legal.organizations.filter(x=>partition.has(x.candidate_id)))for(const p of c.pages.filter(x=>x.proposed_for_inclusion))rows.push({candidate_id:c.candidate_id,organization:c.organization_name,partition:partition.get(c.candidate_id),family:p.page_role,url:p.url,title:p.title});
for(const c of accountRep.candidates)for(const p of c.pages)rows.push({candidate_id:c.candidate_id,organization:c.organization,partition:partition.get(c.candidate_id),family:p.page_type,url:p.url,title:p.title});
for(const p of legalRep.pages.filter(x=>x.proposed_for_inclusion))rows.push({candidate_id:legalRep.replacement.candidate_id,organization:legalRep.replacement.organization_name,partition:partition.get(legalRep.replacement.candidate_id),family:p.page_role,url:p.url,title:p.title});
if(rows.length!==40)throw new Error(`manifest count ${rows.length}, expected 40`);
if(new Set(rows.map(x=>x.url)).size!==40)throw new Error('duplicate URL in manifest');
if(rows.some(x=>!x.partition))throw new Error('candidate outside split');
const cleanText=html=>html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&nbsp;/gi,' ').replace(/&amp;/gi,'&').replace(/&#39;/g,"'").replace(/&quot;/gi,'"').replace(/\s+/g,' ').trim();
const captured=[];
for(const row of rows){
 const at=new Date().toISOString(); const controller=new AbortController(); const timer=setTimeout(()=>controller.abort(),20000);
 try{const res=await fetch(row.url,{redirect:'follow',signal:controller.signal,headers:{'user-agent':'AtlasRecife-Lab/0.4 directed-research'}}); const body=Buffer.from(await res.arrayBuffer()); const type=res.headers.get('content-type'); const html=type?.includes('text/html')?body.toString('utf8'):''; const text=cleanText(html); captured.push({...row,captured_at:at,method:'single_directed_http_get_v0.4',http_status:res.status,final_url:res.url,content_type:type,body_bytes:body.length,body_sha256:sha(body),visible_text:text,visible_text_words:text?text.split(/\s+/).length:0,visible_text_sha256:text?sha(text):null,status:res.ok&&html?'captured':'failed_or_non_html',error:null});}
 catch(e){captured.push({...row,captured_at:at,method:'single_directed_http_get_v0.4',http_status:null,final_url:null,content_type:null,body_bytes:null,body_sha256:null,visible_text:null,visible_text_words:null,visible_text_sha256:null,status:'capture_failed',error:String(e)});}
 finally{clearTimeout(timer);}
}
const out={snapshot_version:'d35-capture-v0.4.2',created_at:new Date().toISOString(),split_sha256:sha(JSON.stringify(split,null,2)),manifest_count:rows.length,capture_policy:'exactly one directed GET per approved URL; no URL substitution',counts:{captured:captured.filter(x=>x.status==='captured').length,failed:captured.filter(x=>x.status!=='captured').length,development:captured.filter(x=>x.partition==='development').length,holdout:captured.filter(x=>x.partition==='holdout').length},pages:captured,labels_included:false,features_included:false,scoring_authorized:false};
fs.writeFileSync(process.argv[2],JSON.stringify(out,null,2));
console.log(JSON.stringify(out.counts));
