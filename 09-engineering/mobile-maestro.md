# Maestro móvel

## Objetivo

Permitir que Luis acompanhe e comande a operação pelo celular sem acessar cada
agente ou editar estruturas técnicas.

## Experiência desejada

- resumo desde o último acesso;
- saúde da operação;
- missões e jobs;
- resultados por área;
- falhas e custos;
- aprovações pendentes;
- envio de nova missão;
- pausa segura de operação;
- acesso a evidências e histórico.

## Arquitetura gradual

### Etapa 1 — War Room portátil

GitHub preserva o estado e Obsidian organiza o conhecimento. A comunicação com
o Maestro ainda é assistida.

### Etapa 2 — Briefing operacional

Supabase recebe missões, jobs, eventos e aprovações. Uma interface somente
leitura apresenta o briefing.

### Etapa 3 — Painel CEO responsivo

Aplicação móvel segura permite decisões e novas missões, com autenticação,
auditoria e permissões mínimas.

### Etapa 4 — Alertas

Canal móvel envia apenas P0, P1 com prazo e briefings solicitados.

## Requisitos

Autenticação forte, autorização por ação, logs, confirmação para ações críticas,
nenhum segredo no cliente, funcionamento degradado seguro e custo controlado.

Ferramenta, framework e canal de alerta permanecem decisões abertas.
