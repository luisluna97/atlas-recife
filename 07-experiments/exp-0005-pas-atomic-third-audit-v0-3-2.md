# Terceiro gate independente — PAS atômico v0.3.2

- **Lote:** `pas-atomic-v0.3.2`
- **Banco:** `tmp/miss0005-audit/atlas-miss0005-v0.sqlite`
- **Auditor:** Auditor independente / Codex
- **Data:** 2026-07-30
- **Decisão:** `REJECT`
- **Efeito:** expansão permanece bloqueada

## Controles confirmados

- 120 valores e 120 referências atômicas únicas;
- 120 rationales individualizados;
- oito `unknown` com valor nulo;
- seis `D3.5` corretamente mantidos como `unknown`;
- 16 notas máximas restantes;
- correções de valor solicitadas no segundo gate foram gravadas;
- quatro `D4.3` foram reduzidos de 3 para 2;
- 30 itens D4 possuem `source_evidence_id` não nulo e resolvido;
- os 30 D4 apontam para seis logs `browser-journey-v0.3.2`;
- os seis logs registram URL final, hash, método/versão, executor, timestamp,
  síntese do DOM e limitação;
- nenhum formulário ou canal foi acionado;
- JPGs da CONASC não alimentam o lote;
- SQLite íntegro, sem violações de chave estrangeira;
- `pas-atomic-v0.3`, `pas-atomic-v0.3.1` e `pas-atomic-v0.3.2` coexistem; o
  histórico foi preservado.

## Correções do segundo gate verificadas

| Item | v0.3.2 | Verificação |
|---|---:|---|
| RHENTALL `D2.1` | 2 | valor reduzido, mas evidência incompatível permanece |
| RHENTALL `D2.5` | 2 | valor reduzido, mas evidência incompatível permanece |
| Brito `D2.1` | 2 | redução conservadora aceitável para seção na home |
| Conexão `D1.5` | 2 | valor reduzido, mas confronto de afirmações não foi registrado |
| RHENTALL `D1.5` | 2 | valor reduzido, mas confronto de afirmações não foi registrado |
| Brito `D1.5` | 2 | valor reduzido, mas confronto de afirmações não foi registrado |

## Bloqueios

### P0 — RHENTALL continua com evidência incompatível

- `CAND-ACCOUNT-REC-07 / D2.1 = 2`
  - A fonte ligada continua sendo `/sobre-nos/`.
  - O trecho mostra menu e conteúdo institucional.
  - Não demonstra página dedicada à especialidade, requisito do item.
  - Reduzir 3 para 2 não corrige a incompatibilidade entre variável e prova.

- `CAND-ACCOUNT-REC-07 / D2.5 = 2`
  - O trecho continua sendo prosa institucional sobre sistema integrado,
    consultoria, inovação e soluções personalizadas.
  - Não demonstra arquitetura que diferencie serviços e públicos.

Esses itens precisam apontar para evidência estrutural adequada ou receber
`unknown`/nota compatível com a observação efetivamente disponível.

### P0 — D1.5 continua sem confronto de afirmações

- `CAND-ACCOUNT-REC-01 / D1.5 = 2`;
- `CAND-ACCOUNT-REC-07 / D1.5 = 2`;
- `CAND-LEGAL-REC-01 / D1.5 = 2`.

Os três itens continuam ligados a uma única passagem. A redução evita nota
máxima, mas não registra comparação entre afirmações, páginas ou proposições.
Uma passagem isolada não demonstra coerência entre afirmações. É necessário
ligar um artefato de confronto multipágina, registrar os pares comparados ou
usar nota/estado compatível com evidência parcial.

### P0 — notas 3 restantes sem suficiência forte

Entre as 16 notas máximas, estas não atingem o nível `forte` segundo a evidência
registrada:

- `CAND-ACCOUNT-REC-01 / D2.1 = 3`
  - a página é “Soluções” geral; a evidência não mostra página dedicada à
    especialidade prioritária de incentivos fiscais;
- `CAND-ACCOUNT-REC-01 / D2.5 = 3`
  - o trecho diferencia serviços, mas não públicos, embora o item exija ambos;
- `CAND-ACCOUNT-REC-07 / D3.2 = 3`
  - o trecho é uma lista de famílias de serviço, sem profundidade forte de
    escopo e entregas;
- `CAND-LEGAL-REC-01 / D3.3 = 3`
  - o trecho contém títulos de conteúdo e elementos de contato, não descrição
    forte de cenários e aplicações.

Esses quatro itens devem ser reduzidos ou receber evidência mais específica.

## D4

O bloqueio transversal de proveniência D4 do segundo gate foi corrigido. Os
logs-fonte são resolvidos e preservam as limitações. As quatro reduções
`D4.3: 3 → 2` são coerentes: diversidade observada não foi confundida com
funcionamento comprovado.

O código HTTP permanece indisponível nos seis logs, mas a limitação está
explícita e não bloqueia esta dimensão experimental.

## Gate

`REJECT`.

A infraestrutura de proveniência está materialmente melhor e o bloco D4 pode
ser aceito como evidência experimental. A expansão, contudo, não é autorizada
porque permanecem evidências incompatíveis e notas máximas sem suficiência.
Uma nova versão deve preservar `v0.3.2`, corrigir apenas os IDs listados e
passar por novo gate independente.
