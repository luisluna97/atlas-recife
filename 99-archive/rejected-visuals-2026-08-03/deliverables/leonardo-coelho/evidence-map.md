# Mapa de evidências — Leonardo Coêlho Advocacia

Status: v0 interno  
Organização: `CAND-LEGAL-REC-21`  
URL: <https://www.leonardocoelho.adv.br/>

## Regras

`observado` = público preservado; `derivado` = cálculo reproduzível; `hipótese`
= exige confirmação; unknown nunca vira zero. Os evidence IDs foram
materializados no snapshot estruturado; qualquer versão externa ainda exige
checagem de atualidade.

## Matriz PAS aceita

Método `pas-atomic-v0.3.3`; cobertura 19/19; gates coleta/proposição `pass`;
confiança 0,72 por variável; exclusões D3.5/D5.

| Variável | Valor | Confiança | Fonte |
|---|---:|---:|---|
| D1.1 | 1 | 0,72 | `ATOM033-CAND-LEGAL-REC-21-D1_1` |
| D1.2 | 1 | 0,72 | idem |
| D1.3 | 1 | 0,72 | idem |
| D1.4 | 1 | 0,72 | idem |
| D1.5 | 2 | 0,72 | idem |
| D2.1 | 2 | 0,72 | idem |
| D2.2 | 2 | 0,72 | idem |
| D2.3 | 1 | 0,72 | idem |
| D2.4 | 2 | 0,72 | idem |
| D2.5 | 1 | 0,72 | idem |
| D3.1 | 1 | 0,72 | idem |
| D3.2 | 1 | 0,72 | idem |
| D3.3 | 2 | 0,72 | idem |
| D3.4 | 1 | 0,72 | idem |
| D4.1 | 1 | 0,72 | idem |
| D4.2 | 1 | 0,72 | idem |
| D4.3 | 1 | 0,72 | idem |
| D4.4 | 1 | 0,72 | idem |
| D4.5 | 1 | 0,72 | idem |

Derivado: 14 sinais `<=1` em D1–D4. É oportunidade demonstrativa, não
maturidade, qualidade ou propensão de compra.

## Registro factual

| ID | Classe | Afirmação | Fonte/limite |
|---|---|---|---|
| LC-F01 | observado | site identifica Leonardo Coêlho Advocacia | URL + EXP-0005 |
| LC-F02 | observado | informa fundação em 2001 | site + método aceito |
| LC-F03 | observado | atuação empresarial consultiva/contenciosa | idem |
| LC-F04 | observado | Trabalhista, Civil, Contratual, Tributário e Administrativo | idem |
| LC-F05 | observado | declara Nordeste, RJ, SP e Tribunais Superiores | declaração, não verificação externa |
| LC-F06 | observado | prevenção, risco, auditorias, negociação, mediação e arbitragem | site + método |
| LC-F07 | observado | processos estratégicos e de massa | idem |
| LC-F08 | observado | contato genérico | navegação EXP-0005 |
| LC-F09 | observado | formulário: 6 entradas, desafio e upload | navegação EXP-0005 |
| LC-F10 | observado | contato não preserva especialidade de origem | navegação EXP-0005 |

## Hipóteses controladas

- `LC-H01`: frente empresarial liderar — validar com escritório;
- `LC-H02`: organização por problemas — testar;
- `LC-H03`: páginas específicas ligarem busca/conteúdo/contato — pesquisar;
- `LC-H04`: formulário contextual reduzir fricção — validar com analytics;
- `LC-H05`: trajetória/alcance reforçar confiança — revisão factual/jurídica.

## Lacunas pré-apresentação

Verificar atualidade; obter screenshots desktop/mobile; confirmar equipe, frentes,
jurisdições e contatos; baseline SEO/performance/acessibilidade; autorização de
marca/imagens/protótipo; compliance.

## Cadeia

Entrada pública → EXP-0005 → `pas-atomic-v0.3.3` → SQLite → shortlist → auditoria → briefing.

Referências: `tmp/miss0005-audit/atlas-miss0005-v0.sqlite`;
`03-data/evaluation-variables-v0-3.md`;
`07-experiments/exp-0005-demo-target-shortlist-audit-v0.md`;
`06-research/demo-service-best-practices-v0.md`; `DECISIONS.md`. Executor
`brief_leonardo`; consolidação documental, sem nova coleta; v0.

Snapshot com IDs, URLs, trechos, timestamps, métodos e executores das 19 linhas:
[`../demo-evidence-snapshot-v0.json`](../demo-evidence-snapshot-v0.json).
