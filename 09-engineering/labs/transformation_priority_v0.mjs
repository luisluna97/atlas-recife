import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';

const dbPath = process.argv[2] ?? 'tmp/miss0005-audit/atlas-miss0005-v0.sqlite';
const outJson = process.argv[3] ?? '04-intelligence/transformation-priority-v0.json';
const outCsv = process.argv[4] ?? '04-intelligence/transformation-priority-v0.csv';
const db = new DatabaseSync(dbPath, { readOnly: true });

const candidates = db.prepare(`SELECT * FROM roster_candidates ORDER BY candidate_id`).all();
const homes = new Map(db.prepare(`SELECT * FROM home_structure_checks`).all().map(r => [r.candidate_id, r]));
const readiness = new Map(db.prepare(`SELECT * FROM pas_expansion_readiness`).all().map(r => [r.candidate_id, r]));
const vars = db.prepare(`
  WITH accepted AS (
    SELECT v.*, ROW_NUMBER() OVER (
      PARTITION BY candidate_id, variable_id ORDER BY datetime(observed_at) DESC, rowid DESC
    ) rank
    FROM atomic_variable_values v
    WHERE review_status='accepted_by_auditor' AND variable_id GLOB 'D[1-4].*'
  ) SELECT * FROM accepted WHERE rank=1
`).all();
const pasByCandidate = new Map();
for (const row of vars) {
  if (!pasByCandidate.has(row.candidate_id)) pasByCandidate.set(row.candidate_id, []);
  pasByCandidate.get(row.candidate_id).push(row);
}

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
const cleanText = value => {
  if (typeof value !== 'string') return value;
  let text = value;
  for (let i = 0; i < 2 && /Ã[\u0080-\u00BF]|Â[\u0080-\u00BF]|Ãƒ/.test(text); i++) {
    text = Buffer.from(text, 'latin1').toString('utf8');
  }
  return text;
};
const rows = candidates.map(c => {
  const h = homes.get(c.candidate_id);
  const r = readiness.get(c.candidate_id);
  const pas = pasByCandidate.get(c.candidate_id) ?? [];
  const homeObserved = Boolean(h?.success && h.http_status >= 200 && h.http_status < 400);

  let technicalGap = null;
  let contactGap = null;
  if (homeObserved) {
    technicalGap = (h.meta_description ? 0 : 5) + (h.h1_count > 0 ? 0 : 5) +
      (h.jsonld_blocks > 0 ? 0 : 4) + (h.canonical_url ? 0 : 3) +
      (h.has_og ? 0 : 2) + (h.html_lang ? 0 : 1);
    contactGap = (h.has_whatsapp ? 0 : 4) + (h.has_phone_link ? 0 : 3) +
      (h.has_email_link ? 0 : 3) + (h.has_form ? 0 : 5);
  }

  let assetStrength = null;
  let seoMaterial = null;
  if (r) {
    assetStrength = clamp(r.page_count / 5, 0, 1) * 7 +
      clamp(r.total_words / 2500, 0, 1) * 7 +
      clamp(r.distinct_specialty_terms / 4, 0, 1) * 6;
    seoMaterial = clamp(r.distinct_specialty_terms / 4, 0, 1) * 10 +
      clamp(r.page_count / 5, 0, 1) * 5 +
      (homeObserved && !h.meta_description ? 2.5 : 0) +
      (homeObserved && !(h.h1_count > 0) ? 2.5 : 0);
  }

  const applicable = pas.filter(v => v.applicability === 'applicable' && v.value !== null);
  const pasOpportunity = applicable.length >= 14
    ? applicable.reduce((sum, v) => sum + (3 - Number(v.value)) / 3, 0) / applicable.length * 15
    : null;
  const feasibility = (homeObserved ? 6 : 0) + Number(c.confidence ?? 0) * 4;

  const components = [
    ['technical_gap', technicalGap, 20], ['contact_gap', contactGap, 15],
    ['asset_strength', assetStrength, 20], ['seo_material', seoMaterial, 20],
    ['pas_opportunity', pasOpportunity, 15], ['feasibility', feasibility, 10]
  ];
  const known = components.filter(([,v]) => v !== null);
  const knownWeight = known.reduce((s,[,,w]) => s+w,0);
  const raw = known.reduce((s,[,v]) => s+v,0);
  const score = knownWeight >= 55 ? Number((raw / knownWeight * 100).toFixed(1)) : null;

  return {
    candidate_id: c.candidate_id, observed_name: cleanText(c.observed_name), segment: c.segment,
    geography_layer: c.geography_layer, neighborhood_or_city: cleanText(c.neighborhood_or_city),
    official_url: c.official_url, prospect_scope: c.geography_layer === 'recife',
    home_observed: homeObserved, evidence_coverage_percent: knownWeight,
    evidence_priority_score: score,
    technical_gap: technicalGap === null ? null : Number(technicalGap.toFixed(1)),
    contact_gap: contactGap === null ? null : Number(contactGap.toFixed(1)),
    asset_strength: assetStrength === null ? null : Number(assetStrength.toFixed(1)),
    seo_material: seoMaterial === null ? null : Number(seoMaterial.toFixed(1)),
    pas_opportunity: pasOpportunity === null ? null : Number(pasOpportunity.toFixed(1)),
    feasibility: Number(feasibility.toFixed(1)),
    visual_gap: null, search_demand: null,
    next_gate: !homeObserved ? 'access_review' : score === null ? 'evidence_enrichment' : 'visual_and_search_review',
    limitation: 'Priority for deeper review, not commercial rank. Visual quality and search demand are unknown.'
  };
});

const localRanked = rows.filter(r => r.prospect_scope && r.evidence_priority_score !== null)
  .sort((a,b) => b.evidence_priority_score - a.evidence_priority_score || a.candidate_id.localeCompare(b.candidate_id));
localRanked.forEach((r,i) => r.evidence_priority_rank = i + 1);
const rankMap = new Map(localRanked.map(r => [r.candidate_id, r.evidence_priority_rank]));
rows.forEach(r => r.evidence_priority_rank = rankMap.get(r.candidate_id) ?? null);

const payload = {
  method_version: 'transformation-priority-v0.1', generated_at: new Date().toISOString(),
  denominator: rows.length, local_prospects: rows.filter(r=>r.prospect_scope).length,
  warning: 'Not a final opportunity score. References are excluded from prospect ranking. Missing visual and demand evidence remain null.',
  rows
};
fs.mkdirSync(path.dirname(outJson), { recursive: true });
fs.mkdirSync(path.dirname(outCsv), { recursive: true });
fs.writeFileSync(outJson, JSON.stringify(payload, null, 2));
const headers = Object.keys(rows[0]);
const quote = v => v === null || v === undefined ? '' : `"${String(v).replaceAll('"','""')}"`;
fs.writeFileSync(outCsv, [headers.join(','), ...rows.map(r => headers.map(h => quote(r[h])).join(','))].join('\n'));
console.log(JSON.stringify({outJson,outCsv,total:rows.length,ranked_local:localRanked.length,top10:localRanked.slice(0,10)},null,2));
