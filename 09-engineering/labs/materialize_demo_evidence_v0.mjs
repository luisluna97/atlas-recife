import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import { DatabaseSync } from 'node:sqlite';

const dbPath = process.argv[2] ?? 'tmp/miss0005-audit/atlas-miss0005-v0.sqlite';
const outputPath = process.argv[3];
if (!outputPath) throw new Error('Usage: node materialize_demo_evidence_v0.mjs <db> <output.json>');

const candidateIds = ['CAND-LEGAL-REC-21', 'CAND-ACCOUNT-REC-05'];
const variableIds = [
  'D1.1','D1.2','D1.3','D1.4','D1.5',
  'D2.1','D2.2','D2.3','D2.4','D2.5',
  'D3.1','D3.2','D3.3','D3.4',
  'D4.1','D4.2','D4.3','D4.4','D4.5',
];

const db = new DatabaseSync(dbPath, { readOnly: true });
const statement = db.prepare(`
  WITH accepted AS (
    SELECT *, ROW_NUMBER() OVER (
      PARTITION BY candidate_id, variable_id
      ORDER BY datetime(observed_at) DESC, rowid DESC
    ) AS recency_rank
    FROM atomic_variable_values
    WHERE candidate_id = ?
      AND review_status = 'accepted_by_auditor'
      AND variable_id IN (${variableIds.map(() => '?').join(',')})
  )
  SELECT a.candidate_id, a.variable_id, a.value, a.applicability, a.confidence,
         a.method_version, a.observed_at,
         json_extract(a.evidence_refs, '$[0]') AS atomic_evidence_id,
         e.source_evidence_id, e.source_url, e.exact_excerpt,
         e.element_or_action, e.evidence_class, e.executor
  FROM accepted a
  LEFT JOIN atomic_evidence_items e
    ON e.atomic_evidence_id = json_extract(a.evidence_refs, '$[0]')
  WHERE a.recency_rank = 1
  ORDER BY a.variable_id
`);

const organizations = Object.fromEntries(candidateIds.map((candidateId) => [
  candidateId,
  statement.all(candidateId, ...variableIds),
]));

const payload = {
  artifact_id: 'DEMO-EVIDENCE-SNAPSHOT-V0',
  generated_at: new Date().toISOString(),
  executor: '09-engineering/labs/materialize_demo_evidence_v0.mjs',
  method_version: 'demo-evidence-materialization-v0.1',
  selection_rule: 'latest accepted_by_auditor record per candidate-variable; fixed D1-D4 allowlist; D3.5 and D5 excluded',
  source: {
    path: dbPath,
    sha256: createHash('sha256').update(readFileSync(dbPath)).digest('hex'),
  },
  organizations,
};

writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
console.log(JSON.stringify({ outputPath, counts: Object.fromEntries(candidateIds.map(id => [id, organizations[id].length])) }));
