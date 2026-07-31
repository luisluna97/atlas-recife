# EXP-0005 — Notas do Revisor B D3.5 v0.4 — holdout

- Partição: `holdout`
- Revisor: `b`
- Método: revisão humana independente dos URLs, hashes e excertos fornecidos no pacote cego; sem consulta a rótulos de outro revisor, features, scores ou código de similaridade.
- Itens revisados: 29
- Rótulos: `repeated_template` 3; `distinct_content` 26; `uncertain` 0.
- Hash SHA-256 do snapshot-fonte declarado pelo pacote: `c8ad1be82caa6fcc9c5875986057b9f8e8a5b5f62477fa0ad7aa4104d8630ee3`
- Hash SHA-256 do pacote preenchido: `db6848516379092b1f1708b0bfebd7ffbe40a0ba5bed554f533dc26b0442f9f1`
- Executor: Codex, agente Revisor B
- Versão do método: `d35-v0.4.2-blind-review-b`

## Critério aplicado

`same_page_family` foi julgado pela equivalência observável de tipo e estrutura. `repeated_template` foi usado quando a redação-base e a estrutura compartilhadas dominavam os excertos; `distinct_content` quando havia desenvolvimento substantivo próprio apesar do boilerplate comum. Os pares Clifford Chance receberam confiança menor porque os excertos são fortemente dominados pela navegação global.

## Limitações

A revisão se limita aos excertos cegos preservados nos pacotes. Não avalia autoria, paráfrase, originalidade externa, similaridade algorítmica, calibração ou score D3.5.
