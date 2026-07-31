# EXP-0005 — Parecer do microteste de similaridade D3.5 v0

- Data: 2026-07-31
- Executor: Auditor independente / Codex
- Código: `09-engineering/labs/d35_similarity_v0.mjs`
- Relatório: `07-experiments/exp-0005-d35-similarity-microtest-v0.md`
- Resultado: `07-experiments/exp-0005-d35-similarity-microtest-v0.json`
- Escopo do gate: protocolo de Laboratório, não scoring

## Parecer

**REJECT do pacote v0 como experimento reproduzível.**

O conceito pode retornar ao Laboratório após as correções abaixo. Este parecer
não autoriza score D3.5. Todos os valores D3.5 devem permanecer `unknown` até
benchmark separado, revisão humana e novo gate.

## O que foi confirmado

- normalização NFKD, minúsculas e caracteres alfanuméricos;
- limiar mínimo de 150 palavras;
- shingles literais de cinco palavras e Jaccard determinístico;
- o máximo interno de Marjuhh reproduz `0.7041984732824428`, entre as páginas
  de agências de marketing e de arquitetos/designers;
- o máximo interno de Clifford Chance reproduz `0.9919678714859438`, entre as
  páginas setoriais de bancos e bens de consumo/varejo;
- a interpretação desses valores como alerta de template/boilerplate, e não
  como score ou prova de originalidade, é adequada;
- as limitações sobre boilerplate, tipos de página, paráfrase e originalidade
  externa estão corretamente declaradas.

## Bloqueios de reprodutibilidade

1. O código não congela nem filtra os oito candidatos declarados. Contra o
   banco atual, ele produz resultados para 58 candidatos.
2. O código calcula apenas pares internos. Ele não calcula
   `max_cross_candidate_jaccard`, embora esse campo exista no JSON.
3. O código emite `pairs`, enquanto o JSON publicado contém
   `max_internal_jaccard`, `max_cross_candidate_jaccard` e `top_internal`.
   Portanto, o JSON não é a saída direta reproduzível do código entregue.
4. O pacote não fixa identidade/hash do banco ou manifesto das páginas de
   entrada; uma nova coleta pode alterar silenciosamente o resultado.

## Correções obrigatórias

1. congelar os oito `candidate_id` e as evidências de entrada em manifesto;
2. registrar hash/identidade do snapshot SQLite e o comando exato de execução;
3. alinhar o código ao schema do JSON, incluindo seleção e ordenação
   determinísticas;
4. implementar e documentar a comparação entre candidatos ou remover seus
   campos do resultado;
5. gerar novamente JSON e Markdown diretamente do código;
6. manter D3.5 `unknown` e submeter limiares/conversão 0–3 a benchmark separado.

Nenhum dado, score ou artefato auditado foi alterado.
