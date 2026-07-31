import { DatabaseSync } from 'node:sqlite';
const dbPath = process.argv[2];
if (!dbPath) throw new Error('usage: node d35_similarity_v0.mjs <sqlite-path>');
const db = new DatabaseSync(dbPath, { readOnly: true });
const normalize = text => text.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/https?:\/\/\S+/g, ' ').replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
const shingles = (text, n = 5) => { const tokens = normalize(text).split(' ').filter(x => x.length > 1); const out = new Set(); for (let i = 0; i <= tokens.length - n; i++) out.add(tokens.slice(i, i + n).join(' ')); return out; };
const jaccard = (a, b) => { if (!a.size && !b.size) return 0; let intersection = 0; for (const x of a) if (b.has(x)) intersection++; return intersection / (a.size + b.size - intersection); };
const rows = db.prepare("SELECT candidate_id,evidence_id,page_url,visible_text_excerpt FROM pas_page_evidence WHERE validity_status!='invalid' AND visible_text_excerpt IS NOT NULL").all();
const pages = rows.map(row => ({ ...row, words: normalize(row.visible_text_excerpt).split(' ').filter(Boolean).length, shingles: shingles(row.visible_text_excerpt) })).filter(row => row.words >= 150);
const results = [];
for (const candidateId of [...new Set(pages.map(row => row.candidate_id))]) {
  const own = pages.filter(row => row.candidate_id === candidateId); const pairs = [];
  for (let i = 0; i < own.length; i++) for (let j = i + 1; j < own.length; j++) pairs.push({ page_a: own[i].page_url, page_b: own[j].page_url, jaccard_5gram: jaccard(own[i].shingles, own[j].shingles) });
  results.push({ candidate_id: candidateId, substantive_pages: own.length, pairs: pairs.sort((a,b) => b.jaccard_5gram - a.jaccard_5gram) });
}
console.log(JSON.stringify({ method: 'd35-similarity-lab-v0', limitation: 'Diagnostic only: boilerplate is not removed and no external originality is established.', results }, null, 2));
