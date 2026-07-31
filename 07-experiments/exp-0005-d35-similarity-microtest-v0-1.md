# EXP-0005 — Microteste D3.5 v0.1

- **Estado:** candidato de Laboratório; scoring proibido
- **Código:** `09-engineering/labs/d35_similarity_v0_1.mjs`
- **Snapshot congelado:** `07-experiments/exp-0005-d35-input-snapshot-v0-1.json`
- **Saída:** `07-experiments/exp-0005-d35-similarity-microtest-v0-1.json`
- **Banco-fonte SHA-256:** `2cbe5e254efab704e7a4090f89063b6b3e64eee5c2ab74d63933c97fe02a27d6`
- **Snapshot SHA-256:** `f74665ba87bb96c005eb8bcfaccaed22d40dcd032a4cd26b2b50a0860fd65891`

## Execução reproduzível

```powershell
node 09-engineering/labs/d35_similarity_v0_1.mjs 07-experiments/exp-0005-d35-input-snapshot-v0-1.json 07-experiments/exp-0005-d35-similarity-microtest-v0-1.json
```

O snapshot congela exatamente oito candidatos e os textos públicos usados. Código e JSON compartilham o mesmo schema e calculam similaridade interna e entre candidatos.

## Achados

| Organização | páginas substantivas | Jaccard interno máximo | Jaccard cruzado máximo |
|---|---:|---:|---:|
| HMA Contabilidade | 3 | 0.259 | 0.000 |
| RS Consultoria Empresarial Contábil | 2 | 0.095 | 0.000 |
| Marjuhh | 5 | 0.704 | 0.001 |
| Trust Contabilidade | 4 | 0.165 | 0.001 |
| Clifford Chance | 6 | 0.992 | 0.000 |
| Demarest | 3 | 0.126 | 0.000 |
| JHN Advogados Associados | 3 | 0.191 | 0.000 |
| Serur Advogados | 4 | 0.482 | 0.000 |

Marjuhh e Clifford Chance continuam como casos obrigatórios de revisão de template/boilerplate. A comparação cruzada literal foi quase nula e não demonstra originalidade externa.

## Limitações e gate

- boilerplate ainda não foi removido;
- tipos de página ainda não foram separados;
- 5-gramas exatos não detectam paráfrase;
- comparação entre candidatos não equivale a busca externa;
- nenhum valor D3.5 pode ser alterado por este experimento;
- benchmark separado e revisão humana são obrigatórios antes de scoring.
