import fs from 'node:fs';
import crypto from 'node:crypto';

export const normalize = text => text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/https?:\/\/\S+/g, ' ').replace(/&\w+;/g, ' ').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
export const tokens = text => normalize(text).split(' ').filter(x => x.length > 1);
export const shingles = (text, n = 5) => { const t=tokens(text); const out=new Set(); for(let i=0;i<=t.length-n;i++) out.add(t.slice(i,i+n).join(' ')); return out; };
export const jaccard = (a,b) => { if(!a.size&&!b.size)return 0; let intersection=0; for(const x of a)if(b.has(x))intersection++; return intersection/(a.size+b.size-intersection); };
export const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');

export function pageType(page) {
  let pathSignal=page.page_url; try { pathSignal=new URL(page.page_url).pathname; } catch {}
  const s=normalize(`${pathSignal} ${page.page_role}`);
  if(/\b(blog|artigo|article|insight|noticia|news)/.test(s)) return 'editorial';
  if(/\b(contato|contact|fale conosco)/.test(s)) return 'contact';
  if(/\b(sobre|quem somos|historia|about|our firm)/.test(s)) return 'institutional';
  if(/\b(servic|segment|setor|sector|expertise|atuacao|practice|dentist|medic|veterinari|arquitet|marketing)/.test(s)) return 'specialty';
  try { const u=new URL(page.page_url); if(u.pathname==='/'||u.pathname==='') return 'home'; } catch {}
  return 'other';
}

function canonicalSnapshot(snapshot) {
  const clone=structuredClone(snapshot); delete clone.snapshot_sha256;
  return JSON.stringify(clone,null,2);
}

function pairKey(a,b) { return [a,b].sort().join(' || '); }

export function analyze(snapshot, benchmark) {
  const expectedSnapshotHash=sha256(canonicalSnapshot(snapshot));
  if(snapshot.snapshot_sha256!==expectedSnapshotHash) throw new Error(`snapshot hash mismatch: expected ${expectedSnapshotHash}`);
  for(const p of snapshot.pages) if(sha256(p.visible_text_excerpt)!==p.text_sha256) throw new Error(`text hash mismatch: ${p.evidence_id}`);
  const allowed=new Set(snapshot.candidate_ids);
  const pages=snapshot.pages.filter(p=>allowed.has(p.candidate_id)).map(p=>({...p,page_type:pageType(p),norm_words:tokens(p.visible_text_excerpt).length,raw_shingles:shingles(p.visible_text_excerpt)}));
  const substantive=pages.filter(p=>p.norm_words>=150);
  const boilerplateByCandidate=new Map();
  for(const candidateId of snapshot.candidate_ids){
    const own=substantive.filter(p=>p.candidate_id===candidateId); const counts=new Map();
    for(const p of own) for(const sh of p.raw_shingles) counts.set(sh,(counts.get(sh)||0)+1);
    const minPages=Math.max(3,Math.ceil(own.length*0.80));
    boilerplateByCandidate.set(candidateId,own.length<3?new Set():new Set([...counts].filter(([,count])=>count>=minPages).map(([sh])=>sh)));
  }
  for(const p of pages){ const bp=boilerplateByCandidate.get(p.candidate_id)||new Set(); p.clean_shingles=new Set([...p.raw_shingles].filter(sh=>!bp.has(sh))); }
  const allPairs=[]; const results=[];
  for(const candidateId of snapshot.candidate_ids){
    const own=substantive.filter(p=>p.candidate_id===candidateId); const comparable=[]; const diagnostic=[];
    for(let i=0;i<own.length;i++)for(let k=i+1;k<own.length;k++){
      const rec={a:own[i].page_url,b:own[k].page_url,page_type_a:own[i].page_type,page_type_b:own[k].page_type,comparable:own[i].page_type===own[k].page_type,raw_jaccard:jaccard(own[i].raw_shingles,own[k].raw_shingles),clean_jaccard:jaccard(own[i].clean_shingles,own[k].clean_shingles)};
      diagnostic.push(rec); allPairs.push({...rec,candidate_id:candidateId}); if(rec.comparable) comparable.push(rec);
    }
    diagnostic.sort((a,b)=>b.clean_jaccard-a.clean_jaccard); comparable.sort((a,b)=>b.clean_jaccard-a.clean_jaccard);
    const bp=boilerplateByCandidate.get(candidateId);
    results.push({candidate_id:candidateId,total_pages:pages.filter(p=>p.candidate_id===candidateId).length,substantive_pages:own.length,page_types:Object.fromEntries([...new Set(own.map(p=>p.page_type))].sort().map(t=>[t,own.filter(p=>p.page_type===t).length])),boilerplate_shingles_removed:bp.size,comparable_pairs:comparable.length,max_comparable_clean_jaccard:comparable.length?comparable[0].clean_jaccard:null,top_comparable:comparable.slice(0,3),top_diagnostic:diagnostic.slice(0,3)});
  }
  const observed=new Map(allPairs.map(p=>[pairKey(p.a,p.b),p]));
  const benchmarkCases=benchmark.cases.map(c=>{const hit=observed.get(pairKey(c.a,c.b)); return {...c,observed:hit?{comparable:hit.comparable,raw_jaccard:hit.raw_jaccard,clean_jaccard:hit.clean_jaccard}:null,passes:!!hit&&hit.comparable&&(c.label==='repeated_template'?hit.clean_jaccard>=benchmark.thresholds.repeated_template_min:hit.clean_jaccard<=benchmark.thresholds.distinct_content_max)};});
  return {method:'d35-similarity-lab-v0.2',status:'laboratory_candidate_not_scoring',parameters:{minimum_words:150,shingle_size:5,boilerplate_rule:'remove candidate-local shingles present in >=80% of substantive pages; minimum corpus 3 pages and minimum frequency 3',comparison_rule:'score only pairs with the same deterministic page_type',page_type_precedence:['editorial','contact','institutional','specialty','home','other'],normalization:'NFKD lowercase alphanumeric',candidate_ids:snapshot.candidate_ids},provenance:{input_snapshot_sha256:snapshot.snapshot_sha256,source_database_sha256:snapshot.source_database_sha256,benchmark_sha256:sha256(JSON.stringify(benchmark,null,2))},benchmark:{thresholds:benchmark.thresholds,cases:benchmarkCases,passed:benchmarkCases.filter(x=>x.passes).length,total:benchmarkCases.length},results,limitations:['boilerplate removal is corpus-local and approximate','corpora with fewer than three substantive pages receive no automatic boilerplate removal','page types are heuristic rules, not semantic ground truth','exact 5-gram overlap misses paraphrase','eight-site sample does not establish external originality','human review and auditor gate required','no D3.5 scores may be assigned']};
}

if(process.argv[1]?.endsWith('d35_similarity_v0_2.mjs')){
  const snapshot=JSON.parse(fs.readFileSync(process.argv[2],'utf8')); const benchmark=JSON.parse(fs.readFileSync(process.argv[3],'utf8'));
  fs.writeFileSync(process.argv[4],JSON.stringify(analyze(snapshot,benchmark),null,2));
}

