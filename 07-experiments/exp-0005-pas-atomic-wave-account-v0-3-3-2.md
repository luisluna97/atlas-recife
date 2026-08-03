# Correção de proveniência — onda PAS contábil v0.3.3.2

- **Método-base:** `pas-atomic-v0.3.3`
- **Versão:** `pas-atomic-wave-account-v0.3.3.2`
- **Versão anterior preservada:** `pas-atomic-wave-account-v0.3.3.1`
- **Data:** 2026-07-30
- **Estado:** aguardando gate final
- **SQLite:** somente leitura; não alterado

## Motivo

O gate de `v0.3.3.1` rejeitou exclusivamente os 58 itens conhecidos cujo
`source_evidence_id` permanecia nulo. Scores, rationales, confiança,
aplicabilidade e bloqueios não foram reavaliados.

## Correção determinística

Para cada item conhecido:

1. usar `candidate_id + source_url`;
2. consultar `pas_page_evidence` por igualdade exata;
3. excluir evidência com `validity_status = invalid`;
4. exigir exatamente uma correspondência;
5. materializar o `evidence_id` real como `source_evidence_id`;
6. abortar diante de ausência, duplicidade ou divergência.

Para cada `unknown`:

- preservar `source_evidence_id = null`;
- preservar `source_url = null`;
- preservar `exact_excerpt = null`;
- manter lacuna e ação requerida.

## Controles esperados

| Controle | Resultado esperado |
|---|---:|
| `atomic_variable_values` | 180 |
| `atomic_evidence_items` | 180 |
| conhecidos | 58 |
| unknown | 122 |
| conhecidos com fonte nula | 0 |
| unknown com fonte não nula | 0 |
| divergências candidato/URL | 0 |
| chaves de valor únicas | 180 |
| evidence IDs únicos | 180 |
| D4 aplicável | 0 |
| score único | nulo |

## Invariantes

- nenhuma nota alterada;
- nenhum rationale alterado;
- nenhuma confiança alterada;
- nenhuma aplicabilidade alterada;
- nenhuma evidência pública inventada;
- nenhum formulário, telefone, e-mail ou WhatsApp acionado;
- banco e versões anteriores preservados;
- nenhuma promoção declarada.

## Gate final

Auditar
`tmp/miss0005-audit/pas-atomic-wave-account-v0-3-3-2.json` e conferir os
controles impressos pelo gerador antes de qualquer ingestão.
