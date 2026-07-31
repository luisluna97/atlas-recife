# Correção da onda PAS atômica contábil v0.3.3.1

- **Método-base:** `pas-atomic-v0.3.3`
- **Versão corrigida:** `pas-atomic-wave-account-v0.3.3.1`
- **Artefato anterior preservado:** `pas-atomic-wave-account-v0.3.3`
- **Data:** 2026-07-30
- **Estado:** aguardando nova auditoria
- **Banco SQLite:** não alterado

## Motivo da correção

A pré-ingestão rejeitou o artefato anterior porque cinco candidatos bloqueados
estavam agregados, a confiança estava categórica e não existia um
`atomic_evidence_item` para cada variável.

## Estrutura materializada

- 9 candidatos × 20 variáveis = 180 valores;
- 180 registros em `atomic_variable_values`;
- 180 registros em `atomic_evidence_items`;
- 180 chaves de valor únicas;
- 180 `atomic_evidence_id` únicos;
- 58 valores aplicáveis;
- 122 valores `unknown`;
- 0 itens D4 aplicáveis sem log;
- nenhum score único.

Os 122 `unknown` abrangem 100 valores dos cinco bloqueados, 20 valores D4 sem
logs de navegador e D3.5 de HMA e RS sem teste reproduzível de originalidade.

## Confiança numérica

| Categoria de preparação | Valor |
|---|---:|
| high | 0,85 |
| medium | 0,65 |
| low | 0,35 |

O JSON contém somente números no campo `confidence`.

## Evidência de lacuna

Cada `unknown` possui `atomic_evidence_id`, rationale e ação requerida próprios.
Quando não há fonte, `source_evidence_id`, `source_url` e `exact_excerpt`
permanecem nulos, sem fabricação de evidência.

## Scores dimensionais preparados

Sem score único e excluindo `unknown` do denominador:

| Candidate ID | D1 | D2 | D3 | D4 |
|---|---:|---:|---:|---:|
| `CAND-ACCOUNT-REC-04` | 2,0 (5/5) | 1,8 (5/5) | 1,75 (4/5) | unknown |
| `CAND-ACCOUNT-REC-05` | 1,6 (5/5) | 1,6 (5/5) | 1,5 (4/5) | unknown |
| `CAND-ACCOUNT-REC-14` | 2,4 (5/5) | 2,8 (5/5) | 2,0 (5/5) | unknown |
| `CAND-ACCOUNT-REC-18` | 2,8 (5/5) | 2,8 (5/5) | 2,6 (5/5) | unknown |

Integralmente `unknown`: `CAND-ACCOUNT-INT-01`,
`CAND-ACCOUNT-NAT-05`, `CAND-ACCOUNT-REC-06`,
`CAND-ACCOUNT-REC-19` e `CAND-ACCOUNT-REC-24`.

## Controles

- nenhuma prospecção ou contato;
- nenhum formulário ou canal acionado;
- histórico anterior preservado;
- banco não alterado;
- lote não promovido.

## Pedido de nova auditoria

Auditar
`tmp/miss0005-audit/pas-atomic-wave-account-v0-3-3-1.json` antes de qualquer
ingestão, conferindo schema, contagens, unicidade, rationales, confiança,
`unknown` e aderência às páginas válidas.
