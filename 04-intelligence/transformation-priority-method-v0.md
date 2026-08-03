# Prioridade de transformação v0.1

Status: pré-ranking experimental para revisão; não é ranking comercial  
Data: 2026-08-03

## Pergunta

Quais organizações já coletadas merecem primeiro uma auditoria visual e de
demanda por combinarem lacunas observáveis com material real para transformação?

## Separação obrigatória

- `evidence_priority_score`: organiza a próxima investigação usando evidência já existente;
- `visual_gap`: permanece `null` até comparação padronizada desktop/mobile;
- `search_demand`: permanece `null` até pesquisa de intenção e demanda;
- ranking final de transformação: proibido enquanto os dois campos acima faltarem;
- ranking comercial: modelo separado, dependente de capacidade e fit ainda não observados.

As 50 organizações do Recife são prospects. As 16 referências nacionais e
internacionais são benchmarks e nunca entram no mesmo ranking.

## Componentes do pré-ranking

| Componente | Máximo | Fonte |
|---|---:|---|
| lacunas técnicas da home | 20 | `home_structure_checks` |
| lacunas de contato | 15 | `home_structure_checks` |
| ativos reaproveitáveis | 20 | páginas, palavras e especialidades |
| material para SEO | 20 | especialidades, páginas e lacunas on-page |
| oportunidade PAS | 15 | apenas valores aceitos, cobertura >=14 |
| viabilidade de observação | 10 | acesso e confiança do roster |

O score só aparece com pelo menos 55% do peso observado. `unknown` não vira
zero. O resultado prioriza auditoria; nota alta não prova beleza ruim, demanda,
capacidade de compra, propensão de contratação ou resultado possível.

## Próximo gate

1. capturas comparáveis das homes locais;
2. rubrica visual humana e auditada;
3. mapa serviço-intenção e demanda por clusters;
4. validação de ativos e canais;
5. somente então, ranking de transformação e ranking comercial separados.

## Proveniência

Banco `tmp/miss0005-audit/atlas-miss0005-v0.sqlite`; métodos
`home-structure-v0.1`, `pas-readiness-v0.2` e últimas observações
`accepted_by_auditor` D1-D4; executor `09-engineering/labs/transformation_priority_v0.mjs`;
versão `transformation-priority-v0.1`.
