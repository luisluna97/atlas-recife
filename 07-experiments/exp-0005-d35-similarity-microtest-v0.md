# EXP-0005 — Microteste de similaridade para D3.5 v0

- **Estado:** candidato de Laboratório; não aprovado para scoring
- **Executor:** Codex, após falha ambiental do agente Cientista
- **Código:** `09-engineering/labs/d35_similarity_v0.mjs`
- **Amostra:** oito organizações com D1–D4

## Objetivo

Testar se normalização determinística e Jaccard de shingles de cinco palavras ajudam a detectar repetição interna. O teste não demonstra autoria nem originalidade externa.

## Resultados de maior sobreposição interna

| Organização | páginas substantivas | Jaccard máximo |
|---|---:|---:|
| HMA Contabilidade | 3 | 0.259 |
| RS Consultoria Empresarial Contábil | 2 | 0.095 |
| Marjuhh | 5 | 0.704 |
| Trust Contabilidade | 4 | 0.165 |
| Clifford Chance | 6 | 0.992 |
| Demarest | 3 | 0.126 |
| JHN Advogados Associados | 3 | 0.191 |
| Serur Advogados | 4 | 0.482 |

Marjuhh (0,704) e Clifford Chance (0,992) exigem revisão de template/boilerplate. Esses números não são scores D3.5.

## Protocolo candidato

1. separar páginas por tipo: institucional, serviço, vertical, artigo e contato;
2. remover navegação, rodapé, banners e blocos repetidos antes do cálculo;
3. exigir ao menos duas páginas substantivas comparáveis;
4. calcular Jaccard/MinHash interno e entre candidatos;
5. usar faixas apenas para triagem: acima de 0,65 = revisão obrigatória; 0,35–0,65 = ambíguo; abaixo de 0,35 = baixa repetição literal;
6. verificar autoria declarada separadamente;
7. originalidade externa exige busca amostral e fonte registrada, nunca varredura em escala;
8. LLM pode julgar casos ambíguos após o filtro determinístico, com orçamento e evidência.

## Limitações

- o microteste v0 ainda contém boilerplate;
- Jaccard literal não detecta paráfrase;
- baixa similaridade na amostra não prova originalidade na web;
- páginas de tipos diferentes não devem ser comparadas diretamente;
- D3.5 permanece `unknown` até benchmark, revisão humana e gate do Auditor.

## Decisões abertas

- unidade de comparação e remoção de boilerplate;
- limiares finais por tipo de página;
- peso de autoria declarada;
- tamanho da busca externa amostral;
- regra que converte sinais em 0–3.
