# EXP-0005 — Parecer de pré-ingestão das ondas atômicas corrigidas v0.3.3.1

- Data: 2026-07-30
- Executor: Auditor independente / Codex
- Escopo: auditoria somente leitura
- Banco de referência: `tmp/miss0005-audit/atlas-miss0005-v0.sqlite`
- Artefatos auditados:
  - `07-experiments/exp-0005-pas-atomic-wave-legal-v0-3-3-1.json`
  - `07-experiments/exp-0005-pas-atomic-wave-legal-v0-3-3-1.md`
  - `tmp/miss0005-audit/pas-atomic-wave-account-v0-3-3-1.json`
  - `07-experiments/exp-0005-pas-atomic-wave-account-v0-3-3-1.md`

## Parecer LEGAL

**ACCEPT para ingestão da onda `pas-atomic-wave-legal-v0.3.3.1`.**

Controles verificados:

- 80 valores e 80 evidências atômicas;
- 80 chaves de valor e 80 IDs de evidência únicos;
- 44 valores `applicable` e 36 `unknown`;
- referências 1:1 entre valor e evidência, sem divergência de candidato ou variável;
- confiança numérica e limitada ao intervalo de 0 a 1;
- os 44 conhecidos possuem `source_evidence_id`, URL e trecho;
- os 44 vínculos-fonte resolvem em `pas_page_evidence`, sem divergência de
  candidato ou URL;
- os dez valores dependentes da página setorial ausente de Serur foram
  rebaixados para `unknown`;
- `JHN / D2.1` e `JHN / D3.3` estão `unknown`;
- `JHN / D2.2`, `JHN / D2.4` e `JHN / D2.5` referenciam
  `PASPAGE-CAND-LEGAL-REC-03-f08af4fbf184`;
- médias e coberturas dimensionais do Markdown foram reproduzidas a partir do
  JSON;
- D4 e os testes não executados permanecem `unknown`; não há score único.

A aceitação vale somente para essa versão e esse conteúdo. A ingestão deve
preservar `method_version`, referências atômicas e proveniência.

## Parecer ACCOUNT

**REJECT para ingestão da onda `pas-atomic-wave-account-v0.3.3.1`.**

Controles aprovados:

- 180 valores e 180 evidências atômicas;
- 180 chaves de valor e 180 IDs de evidência únicos;
- 58 valores `applicable` e 122 `unknown`;
- 100 linhas `unknown` materializadas para os cinco candidatos bloqueados;
- zero valor D4 aplicável e `single_score: null`;
- confiança restrita a `0.85`, `0.65` e `0.35`;
- referências atômicas 1:1;
- valores desconhecidos nulos, com rationale e ação/lacuna explícita;
- médias dimensionais reproduzíveis.

### Bloqueador de proveniência

Os 58 valores conhecidos têm `source_url` e `exact_excerpt`, mas os 58
respectivos registros de evidência deixam `source_evidence_id` nulo. A checagem
contra `pas_page_evidence` encontrou exatamente uma página persistida
compatível por candidato e URL em todos os 58 casos. Portanto, as fontes são
resolvíveis, mas o vínculo explícito exigido pelo contrato atômico não foi
materializado no artefato.

Sem esse ID, a ingestão perderia a relação determinística entre a interpretação
e a entrada persistida. URL e trecho, isoladamente, não substituem o vínculo de
proveniência.

Correção mínima para nova auditoria:

1. preencher `source_evidence_id` nos 58 registros conhecidos com o
   `evidence_id` correspondente de `pas_page_evidence`;
2. validar novamente candidato, URL e ID em cada vínculo;
3. manter nulos os campos-fonte dos `unknown` realmente não observados;
4. emitir nova versão imutável e submetê-la a pré-ingestão.

## Autorização resultante

- LEGAL v0.3.3.1: ingestão autorizada.
- ACCOUNT v0.3.3.1: ingestão não autorizada.
- Nenhum artefato auditado ou banco foi alterado por esta auditoria.
