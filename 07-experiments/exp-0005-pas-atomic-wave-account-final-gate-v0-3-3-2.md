# EXP-0005 — Gate final da onda atômica contábil v0.3.3.2

- Data: 2026-07-30
- Executor: Auditor independente / Codex
- Escopo: auditoria somente leitura
- Artefato:
  `tmp/miss0005-audit/pas-atomic-wave-account-v0-3-3-2.json`
- Relatório:
  `07-experiments/exp-0005-pas-atomic-wave-account-v0-3-3-2.md`
- Versão anterior comparada:
  `tmp/miss0005-audit/pas-atomic-wave-account-v0-3-3-1.json`
- Banco de referência:
  `tmp/miss0005-audit/atlas-miss0005-v0.sqlite`

## Parecer

**ACCEPT para ingestão de `pas-atomic-wave-account-v0.3.3.2`.**

## Controles verificados

- 180 valores e 180 evidências atômicas;
- 180 chaves de valor e 180 IDs de evidência únicos;
- 58 valores `applicable` e 122 valores `unknown`;
- zero fonte nula entre os 58 valores conhecidos;
- zero campo-fonte não nulo entre os 122 valores desconhecidos;
- zero divergência entre candidato, URL e `source_evidence_id`;
- os 58 vínculos foram reproduzidos por lookup exato e único de
  `candidate_id + page_url` em `pas_page_evidence`, restringindo
  `validity_status != 'invalid'`;
- zero valor D4 aplicável;
- `single_score` permanece nulo;
- confiança permanece restrita a `0.85`, `0.65` e `0.35`;
- scores, aplicabilidade, rationales, confiança, URLs, trechos, classes e
  ações de evidência não mudaram em relação à v0.3.3.1.

As demais diferenças observadas são esperadas para uma nova versão imutável:
`method_version`, IDs e referências atômicas versionadas, metadados do novo
gate e o preenchimento de `source_evidence_id` nos 58 registros conhecidos.

## Autorização resultante

A ingestão da onda contábil v0.3.3.2 está autorizada, desde que preserve
integralmente a versão, os IDs atômicos e os vínculos de proveniência
auditados. A autorização não se estende a versões posteriores ou a conteúdo
modificado.

Nenhum artefato auditado ou banco foi alterado nesta auditoria.
