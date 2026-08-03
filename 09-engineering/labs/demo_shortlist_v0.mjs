import { DatabaseSync } from 'node:sqlite';

const dbPath = process.argv[2] ?? 'tmp/miss0005-audit/atlas-miss0005-v0.sqlite';
const db = new DatabaseSync(dbPath, { readOnly: true });
const variables = [
  'D1.1','D1.2','D1.3','D1.4','D1.5',
  'D2.1','D2.2','D2.3','D2.4','D2.5',
  'D3.1','D3.2','D3.3','D3.4',
  'D4.1','D4.2','D4.3','D4.4','D4.5',
];

const rows = db.prepare(`
  WITH accepted AS (
    SELECT v.*,
      ROW_NUMBER() OVER (
        PARTITION BY v.candidate_id, v.variable_id
        ORDER BY datetime(v.observed_at) DESC, rowid DESC
      ) AS recency_rank
    FROM atomic_variable_values v
    WHERE v.review_status = 'accepted_by_auditor'
      AND v.variable_id IN (${variables.map(() => '?').join(',')})
  )
  SELECT r.candidate_id, r.observed_name, r.segment, r.official_url,
         g.collection_gate, g.identity_gate, g.b2b_gate, g.proposition_gate,
         a.variable_id, a.value, a.applicability, a.confidence,
         a.method_version, a.observed_at, a.rationale
  FROM roster_candidates r
  JOIN accepted a ON a.candidate_id = r.candidate_id AND a.recency_rank = 1
  LEFT JOIN pas_candidate_gates g ON g.candidate_id = r.candidate_id
  WHERE r.geography_layer = 'recife'
  ORDER BY r.candidate_id, a.variable_id
`).all(...variables);

const candidates = new Map();
for (const row of rows) {
  if (!candidates.has(row.candidate_id)) {
    candidates.set(row.candidate_id, {
      candidate_id: row.candidate_id,
      observed_name: row.observed_name,
      segment: row.segment,
      official_url: row.official_url,
      gates: {
        collection: row.collection_gate,
        identity: row.identity_gate,
        b2b: row.b2b_gate,
        proposition: row.proposition_gate,
      },
      variables: {},
    });
  }
  candidates.get(row.candidate_id).variables[row.variable_id] = {
    value: row.value,
    applicability: row.applicability,
    confidence: row.confidence,
    method_version: row.method_version,
    observed_at: row.observed_at,
    rationale: row.rationale,
  };
}

const result = [...candidates.values()].map((candidate) => {
  const known = variables.filter((id) => candidate.variables[id]?.applicability === 'applicable' && candidate.variables[id]?.value !== null);
  const unknown = variables.filter((id) => !known.includes(id));
  const byDimension = {};
  for (const dimension of ['D1','D2','D3','D4']) {
    const ids = known.filter((id) => id.startsWith(`${dimension}.`));
    byDimension[dimension] = {
      known: ids.length,
      values: Object.fromEntries(ids.map((id) => [id, candidate.variables[id].value])),
      low_signals: ids.filter((id) => candidate.variables[id].value <= 1),
      average_confidence: ids.length ? Number((ids.reduce((sum,id) => sum + candidate.variables[id].confidence, 0) / ids.length).toFixed(3)) : null,
    };
  }
  return {
    ...candidate,
    coverage: `${known.length}/${variables.length}`,
    unknown,
    low_signal_count: known.filter((id) => candidate.variables[id].value <= 1).length,
    dimensions: byDimension,
  };
});

console.log(JSON.stringify({
  method: 'latest accepted_by_auditor value per candidate-variable; Recife only; D3.5 and D5 excluded; unknowns not converted to zero',
  variable_ids: variables,
  candidates: result,
}, null, 2));
