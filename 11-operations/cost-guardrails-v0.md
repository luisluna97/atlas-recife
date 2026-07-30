# Guardrails de custo v0

## Estado

Valores monetários ainda não definidos. Esta política impede ativação sem tetos.

## Orçamentos obrigatórios

- mensal global;
- diário;
- por missão;
- por agente;
- por provedor;
- por job.

## Métricas

- tokens de entrada, cache e saída;
- custo estimado e confirmado;
- chamadas;
- retries;
- latência;
- custo por organização;
- custo por variável;
- custo por achado validado;
- custo de auditoria.

## Regras

- auto-reload desativado inicialmente;
- alerta em 50%, 75% e 90%;
- bloqueio em 100%;
- custo desconhecido bloqueia job;
- modelo premium exige justificativa;
- batch preferido quando SLA permite;
- cache só quando economia líquida for medida;
- prompt e contexto mínimos;
- resultados idempotentes não são recomputados sem motivo.

## Referências econômicas

OpenAI e Anthropic oferecem processamento batch com desconto de 50% para
trabalho assíncrono elegível. DeepSeek possui cache e modelos econômicos, mas
preço, disponibilidade e qualidade serão registrados no momento do benchmark.
