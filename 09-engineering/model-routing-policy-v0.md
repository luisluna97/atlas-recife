# Política de roteamento de modelos v0

## Entrada do roteador

Cada job declara:

- tipo de tarefa;
- criticidade;
- volume;
- latência máxima;
- sensibilidade;
- qualidade mínima;
- orçamento;
- necessidade de ferramentas;
- modelo permitido e proibido;
- fallback.

## Ordem de decisão

1. Código resolve de forma determinística?
2. Modelo local aprovado resolve?
3. Modelo econômico atende ao benchmark?
4. Modelo intermediário é necessário?
5. Modelo premium possui ganho medido?
6. O job deve aguardar aprovação ou orçamento?

## Controles de custo

- teto por job;
- teto diário por agente;
- teto mensal global;
- limite de tokens de entrada e saída;
- máximo de tentativas;
- máximo de chamadas encadeadas;
- cache de entradas repetidas;
- batch para trabalho sem urgência;
- circuit breaker quando custo ou erro sobe;
- amostragem premium em vez de revisão total;
- desligamento automático ao atingir orçamento.

## Fallbacks

Fallback nunca é silencioso. A execução registra:

- modelo solicitado;
- modelo utilizado;
- motivo;
- diferença de qualidade esperada;
- custo;
- necessidade de nova auditoria.

## Política inicial sugerida

- premium: no máximo uma produção e uma auditoria por item crítico;
- tarefas em lote: econômico primeiro, auditoria premium por amostra;
- retries: até dois para falha transitória;
- contexto: somente documentos necessários;
- saídas: JSON estruturado e curto;
- nenhuma recarga automática de créditos na fundação.

## Gate

Nenhum modelo entra no roteador sem:

- credencial segura;
- preço registrado;
- avaliação mínima;
- política de dados;
- limite de gasto;
- teste de falha e fallback.
