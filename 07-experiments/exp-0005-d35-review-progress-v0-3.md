# EXP-0005 — Progresso do benchmark D3.5 v0.3

- **Estado:** rotulagem dupla concluída; adjudicação pendente
- **Scoring:** proibido
- **Pares elegíveis:** 13
- **Development:** 10
- **Holdout selado:** 3
- **Organizações com pares:** 5 de 8

## Revisão independente

- Revisor A: 13/13, SHA-256 `faca82f1095f7f91b3b5cce78759742e44cb4950502d803eec4c9eee1e8e9502`.
- Revisor B: 13/13, SHA-256 `0211e6cadc6f9395535f77d436db1df789c1356836330017de62b697603ee180`.
- Acordo de rótulo: 12/13 (92,3%).
- Cohen's kappa: 0,8523.
- Acordo sobre tipo de página: 11/13 (84,6%).

## Divergências

- `D35PAIR-3fb07173f6a2` (holdout): divergência de rótulo e validade do tipo.
- `D35PAIR-e82eb3de2fc1` (development): mesmo rótulo, divergência sobre validade do tipo.

O terceiro job de adjudicação foi interrompido após duas execuções sem materializar saída. Nenhuma decisão foi fabricada pelo Maestro. O holdout não foi comparado ao algoritmo.

## Próximo gate

1. concluir adjudicação independente dos dois casos;
2. gerar gold set versionado;
3. congelar regra usando somente development;
4. avaliar uma única vez no holdout;
5. submeter pacote completo ao Auditor.