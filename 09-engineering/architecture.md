# Arquitetura inicial

```text
GitHub/Markdown ── decisões, contratos, schemas, código e histórico
        │
        ├── Obsidian ── interface sobre os mesmos arquivos
        │
        ▼
Missão → Job → Executor → Resultado → Auditoria → Próximo estado
                    │           │
                    ├── logs e custos
                    └── observações + evidências
                                │
                                ▼
                   Supabase/PostgreSQL futuro
```

## Fronteiras

O Git guarda visão e definições duráveis. O banco futuro guarda entidades,
observações, jobs, execuções e custos, referenciando versões do Git. Evidências
terão metadados e hash; storage e retenção ainda serão decididos.

## Requisitos

Idempotência, retries controlados, schemas versionados, privilégio mínimo, UTC,
rastreabilidade ponta a ponta, custos por execução, isolamento de dados privados
e reconstrução de estado.

## Adiamentos explícitos

Sem Supabase provisionado, fila, worker 24h, painel, scraping, landing ou
framework multiagente nesta versão.
