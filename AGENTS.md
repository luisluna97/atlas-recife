# Contrato de trabalho para agentes

A visão de `ATLAS.md` precede arquiteturas genéricas.

## Ordem de leitura

1. `ATLAS.md` e os documentos que ele referencia
2. `DECISIONS.md`
3. documento do domínio
4. contrato em `05-agents/`

## Regras

- Não construir landing nem iniciar scraping em escala nesta fase.
- Não assumir decisões abertas.
- Preservar histórico, rastreabilidade, custos e limitações.
- Preferir código para coleta, parsing, validação, hashing e persistência.
- Usar LLM para interpretação e julgamento que justifiquem o custo.
- Toda ferramenta candidata passa pelo Laboratório.
- Saídas relevantes referenciam entradas, método, executor e versão.

Todo agente declara missão, escopo, entradas, saídas, ferramentas, modelo,
políticas, orçamento, KPIs, logs, testes, auditoria e escalonamento.
