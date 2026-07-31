# EXP-0005 — Microteste D3.5 v0.2

- **Estado:** candidato de Laboratório; scoring proibido
- **Executor:** Engenharia Experimental / Codex
- **Código:** `09-engineering/labs/d35_similarity_v0_2.mjs`
- **Teste:** `09-engineering/labs/d35_similarity_v0_2.test.mjs`
- **Snapshot congelado:** `07-experiments/exp-0005-d35-input-snapshot-v0-1.json`
- **Benchmark:** `07-experiments/exp-0005-d35-benchmark-v0-2.json`
- **Saída:** `07-experiments/exp-0005-d35-similarity-microtest-v0-2.json`

## Mudanças metodológicas

1. Validação interna do hash canônico do snapshot e dos 39 textos.
2. Tipagem determinística de páginas em editorial, contato, institucional, especialidade, home e outros.
3. Comparação principal somente entre páginas do mesmo tipo.
4. Remoção aproximada de boilerplate: 5-gramas presentes em pelo menos 80% das páginas substantivas, somente em corpus com três ou mais páginas.
5. Benchmark provisório com dois controles positivos de template repetido e dois negativos de conteúdo distinto.

A primeira tentativa v0.2 usou 60% e falhou por remover conteúdo temático repetido. O limiar foi corrigido para 80%, preservando o erro como achado de Laboratório.

## Resultado

O benchmark passou em 4/4 casos:

| Caso | Classe humana provisória | Jaccard limpo | Gate |
|---|---|---:|---|
| Marjuhh — duas páginas setoriais | template repetido | 0,566 | passa |
| Clifford Chance — dois setores | template repetido | 0,975 | passa |
| Trust — dentistas × veterinários | conteúdo distinto | 0,056 | passa |
| JHN — áreas × administração | conteúdo distinto | 0,000 | passa |

Marjuhh e Clifford permanecem casos obrigatórios de revisão. O resultado identifica repetição literal interna; não prova plágio, falta de autoria ou baixa qualidade profissional.

## Execução reproduzível

```powershell
node 09-engineering/labs/d35_similarity_v0_2.mjs 07-experiments/exp-0005-d35-input-snapshot-v0-1.json 07-experiments/exp-0005-d35-benchmark-v0-2.json 07-experiments/exp-0005-d35-similarity-microtest-v0-2.json
node 09-engineering/labs/d35_similarity_v0_2.test.mjs
```

## Limites e gate

- quatro casos são insuficientes para calibrar uma escala 0–3;
- limpeza de boilerplate é aproximada e local ao pequeno corpus;
- corpus com menos de três páginas não recebe limpeza automática;
- tipagem de página é heurística;
- 5-gramas não detectam paráfrase;
- não existe comparação com a web externa;
- todos os D3.5 continuam `unknown`;
- scoring depende de revisão humana independente, ampliação do benchmark e novo gate do Auditor.