# EXP-0005 — Ondas PAS e D4 ingeridos

- **Estado:** concluído e aceito para uso experimental
- **Data:** 2026-07-30
- **Uso comercial/prospecção:** não autorizado

## Base metodológica

O piloto `pas-atomic-v0.3.3` foi aceito pelo quarto gate do Auditor. As ondas Jurídica e Contábil passaram por pré-ingestão, correções de proveniência e gates independentes antes da persistência.

## Onda jurídica

- versão: `pas-atomic-wave-legal-v0.3.3.1`;
- 4 organizações;
- 80 valores e 80 evidências;
- 44 conhecidos e 36 `unknown`;
- 80/80 referências resolvidas;
- decisão: `ACCEPT`.

## Onda contábil

- versão: `pas-atomic-wave-account-v0.3.3.2`;
- 9 organizações, incluindo 5 bloqueadas materializadas como `unknown`;
- 180 valores e 180 evidências;
- 58 conhecidos e 122 `unknown`;
- 180/180 referências resolvidas;
- decisão: `ACCEPT`.

## Onda D4 por navegador

- versão aceita: `pas-d4-browser-wave-v0.3.3.1`;
- 8 organizações já presentes nas ondas Jurídica e Contábil;
- 40 valores e 40 evidências;
- 8 logs de navegador, com URL final, hash e limitações;
- nenhuma submissão de formulário ou comunicação externa;
- decisão: `ACCEPT`.

## Reconciliação do banco

| Método aceito | Organizações | Valores | Unknown |
|---|---:|---:|---:|
| piloto v0.3.3 | 6 | 120 | 11 |
| onda jurídica | 4 | 80 | 36 |
| onda contábil | 9 | 180 | 122 |
| D4 por navegador | 8 já contabilizadas | 40 | 0 |
| **Total** | **19 únicas** | **420** | **169** |

- integridade SQLite: `ok`;
- violações de chave estrangeira: 0;
- histórico rejeitado v0.3–v0.3.2 preservado;
- nenhuma mensagem, formulário ou prospecção executada;
- nenhum score único calculado.

## Leitura correta

As médias dimensionais usam somente itens conhecidos e devem sempre aparecer com cobertura. D4 foi completado para oito organizações por uma onda separada e auditada; os demais casos permanecem `unknown`. Organizações bloqueadas não receberam zero.

## Próximo passo recomendado

Auditar a cobertura conjunta D1–D4 e definir a próxima onda limitada, priorizando lacunas que possam ser resolvidas sem coleta em escala.
