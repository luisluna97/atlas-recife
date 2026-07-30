# Gatilhos e horários

## Operação orientada por eventos

O Atlas não chama LLM apenas porque um relógio disparou. O horário cria ou libera
jobs; o policy engine decide se o job precisa de modelo.

## Gatilhos

### Evento

- nova missão;
- nova evidência;
- observação expirada;
- job concluído ou falho;
- divergência de auditoria;
- nova resposta comercial futura;
- mudança normativa detectada.

### Horário

- lotes determinísticos;
- briefing;
- pesquisa programada;
- revisão de custo;
- auditoria amostral;
- backup e manutenção.

### Manual

- pedido de Luis;
- aprovação;
- comando futuro via Telegram;
- reprocessamento autorizado.

## Ritmo inicial sugerido

### A cada hora

- verificar filas e falhas;
- nenhum modelo se não houver job elegível.

### Madrugada

- coleta autorizada e processamento determinístico;
- batch econômico quando necessário.

### Manhã

- classificação;
- auditoria por regras;
- amostragem de qualidade.

### Tarde

- Cientista e Benchmark, respeitando orçamento e backlog.

### Noite

- consolidar briefing e custos;
- preparar próximos jobs.

## Gatilhos de bloqueio

- orçamento diário atingido;
- taxa de erro acima do limite;
- fonte mudou;
- possível violação de termos;
- dado privado inesperado;
- divergência grave;
- temperatura, CPU, memória ou disco acima do limite;
- falta de evidência.

## Ausência do fundador

Trabalho autorizado continua. Gasto novo, contato externo, mudança crítica e
risco de compliance aguardam aprovação.
