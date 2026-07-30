# Missões

Missões substituem a dependência de sprints temporais para o trabalho diário.
Sprints continuam úteis como agrupadores de construção e revisão, mas a operação
24h avança por missões, jobs e eventos.

## Estados

`proposed → accepted → running → waiting → review → completed`

Estados terminais adicionais: `cancelled` e `failed`.

## Prioridade

- **P0:** incidente ou risco crítico; interrompe a fila.
- **P1:** bloqueia objetivo atual ou exige decisão breve.
- **P2:** trabalho normal priorizado.
- **P3:** pesquisa, melhoria ou oportunidade sem urgência.

## Prazos

Prazo só é usado quando há necessidade real. Caso contrário, a missão é guiada
por prioridade, dependências, orçamento e capacidade disponível.

## Registro

- [MISS-0001 — War Room portátil e Mesa do CEO](MISS-0001.md)

Use o [template de missão](../templates/mission.md).
