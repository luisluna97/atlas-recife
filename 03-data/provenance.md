# Proveniência

Toda observação registra entidade, variável, classe, valor, fonte, instante UTC,
método e versão, executor, evidência, confiança, limitações, validade e execução.

## Imutabilidade lógica

Correções criam nova observação ou evento. O estado atual deve ser reconstruível
sem apagar histórico relevante.

## Classes

- `observed`: capturado diretamente;
- `inferred`: interpretação probabilística;
- `derived`: cálculo reproduzível;
- `estimated`: aproximação com premissas;
- `private`: dado autorizado de cliente.

Recomendações devem permitir navegar até scores, observações, evidências, jobs,
executor e versões.
