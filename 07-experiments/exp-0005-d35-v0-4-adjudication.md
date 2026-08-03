# EXP-0005 — Adjudicação D3.5 v0.4

- **Versão:** `0.4.0`
- **Data:** `2026-07-31`
- **Executor:** Codex adjudicator
- **Modelo:** GPT-5
- **Partição:** development
- **Escopo:** somente `D35V04-6d4e31d9301f`
- **Scoring autorizado:** `false`

## Missão e limites

Adjudicar a única divergência indicada, usando somente os registros, rationales e excerpts dos reviewers A e B. Holdout, features algorítmicas, scores, código e outros pares permaneceram fora do escopo.

## Decisão

| pair_id | same_page_family | label | confidence |
|---|---|---|---:|
| `D35V04-6d4e31d9301f` | `yes` | `distinct_content` | 0.90 |

As páginas pertencem à mesma coleção de segmentos e compartilham shell, ordem editorial e vocabulário do setor financeiro. Nos excertos, porém, a página de bancos desenvolve conteúdo próprio sobre demandas bancárias, carteiras volumosas e jurimetria; a página de serviços financeiros amplia o tratamento para fintechs, instituições de pagamento, processos sancionadores, compliance e integração multidisciplinar. A semelhança substantiva é principalmente temática e estrutural, sem repetição literal suficiente além do boilerplate para `repeated_template` no escopo v0.4.

O reviewer A marcou `repeated_template` com confiança 0,82. O reviewer B marcou `distinct_content` com confiança 0,96. A adjudicação acompanha B porque o protocolo v0.4 mede repetição literal interna e não autoria, paráfrase ou mera proximidade temática.

## Entradas e método

Entradas: os JSON e notes dos reviewers A e B do development v0.4 e o protocolo D3.5 v0.4. Método: comparação humana cega das rationales e dos excerpts, separando boilerplate compartilhado de conteúdo substantivo. Ferramentas: leitura local direcionada e julgamento assistido por LLM. Custo externo: R$ 0.

## Controle, testes e escalonamento

- KPI: 1 par solicitado, 1 adjudicado, 0 pares fora do escopo abertos.
- Logs: holdout, features, scores e código não foram abertos.
- Testes: artefato contém exatamente um par, todos os campos pedidos e `scoring_authorized: false`.
- Auditoria: decisão rastreável aos dois reviews e ao protocolo; nenhuma evidência externa foi introduzida.
- Escalonamento: qualquer uso em scoring exige novo gate do Auditor. Autoria, paráfrase e originalidade externa permanecem fora do escopo.
