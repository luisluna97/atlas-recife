# EXP-0005 — Consulta controlada dos 66 escritórios

- **Missão:** `MISS-0005`
- **Estado:** iniciado; coleta externa aguardando rede do executor
- **Banco operacional:** `tmp/miss0005-audit/atlas-miss0005-v0.sqlite`

## Ondas

| Onda | Escopo | N | Estado |
|---|---|---:|---|
| WAVE-0001 | calibração profunda, 3 jurídicos + 3 contábeis | 6 | em execução |
| WAVE-0002 | locais, lote A balanceado | 12 | retomável |
| WAVE-0003 | locais, lote B balanceado | 12 | retomável |
| WAVE-0004 | locais, lote C balanceado | 10 | retomável |
| WAVE-0005 | locais, lote D balanceado | 10 | retomável |
| WAVE-0006 | referências jurídicas | 8 | retomável, comparação separada |
| WAVE-0007 | referências contábeis | 8 | retomável, comparação separada |

## Escopo máximo por domínio

Home, institucional, serviço principal, especialidade/vertical quando existir, conteúdo recente quando existir, contato e privacidade. Sem crawl irrestrito e sem envio de formulários.

## Sequência de custo

1. identidade e URL;
2. HTTP/parser;
3. browser e axe por template;
4. consentimento em sessões limpas;
5. Lighthouse repetido;
6. rubrica humana/LLM somente onde julgamento agrega valor.

## Controle de qualidade

Revisão manual mínima de 20%, nunca menos de dois casos por lote, além de todos os erros, extremos e casos de baixa confiança. Performance volátil requer três execuções, configuração fixada e armazenamento de mediana e dispersão.

## Stop conditions

Parar a onda se: identidade/domínio incorreto >2%; erro crítico de feature >5%; cobertura <75%; unknown >20% em dimensão essencial; custo ou tempo >150% do previsto; ranking instável; ou compliance não resolvido.

## Primeira execução

Em 2026-07-30, foi tentada uma única requisição HTTP por domínio, com concorrência 4 e timeout 15 s. As 66 falharam de modo uniforme no executor antes de alcançar os sites. A tentativa foi registrada como `network_environment_unavailable` e não entra em nenhum score. Ela deve ser repetida em ambiente com rede, preservando o registro da falha.


## Retomada bem-sucedida

A rota externa foi validada em 2026-07-30. A passagem estrutural de uma página por domínio obteve 60 respostas HTTP 200 e separou seis casos para revisão. Resultados em [exp-0005-first-structure-results.md](exp-0005-first-structure-results.md).
