# EXP-0005 — Prontidão pré-captura D3.5 v0.4.2

- **Estado:** candidato ao gate pré-captura
- **Split:** quatro organizações development × quatro holdout, disjuntas
- **Scoring:** proibido

## Development

| Organização | Segmento | Família | Páginas verificadas/propostas |
|---|---|---|---:|
| Marjuhh | contábil | especialidades | 8 |
| Contabilizei | contábil | guias editoriais | 6 |
| Mattos Filho | jurídico | áreas de atuação | 4 |
| Serur | jurídico | segmentos | 4 |

## Holdout

| Organização | Segmento | Família | Páginas verificadas/propostas |
|---|---|---|---:|
| Pilot | contábil | guias editoriais | 5 |
| Trust | contábil | editoriais | 5 |
| Demarest | jurídico | práticas | 4 |
| Clifford Chance | jurídico | setores | 4 |

Total planejado: 40 páginas first-party, limitado a oito organizações. HMA, RS e JHN foram excluídas por profundidade insuficiente, sem penalidade e sem relaxar o gate. Substitutos pertencem ao roster original de 66.

## Gate antes da captura

- validar split v0.4.2;
- confirmar famílias equivalentes e domínio first-party;
- proibir interseção de organização, URL e hash entre partições;
- capturar corpo, timestamp, método, status e SHA-256 em snapshot imutável;
- manter rótulos e features do holdout inacessíveis durante calibração;
- não gerar score nesta etapa.