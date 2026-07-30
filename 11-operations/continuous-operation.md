# Operação contínua e assíncrona

## Princípio

O Atlas funciona continuamente, mas Luis participa por exceção. A ausência do
fundador não paralisa trabalho autorizado nem amplia a autoridade dos agentes.

## Ritmo

Não existe obrigação de interação horária. Eventos acionam trabalho:

- nova missão;
- job concluído ou falho;
- dado que perdeu validade;
- alerta de custo ou qualidade;
- experimento encerrado;
- aprovação necessária;
- horário agendado para lote determinístico.

## Enquanto Luis está ausente

Agentes podem continuar apenas trabalhos:

- previamente autorizados;
- dentro de orçamento;
- reversíveis;
- sem contato externo;
- sem acesso novo a dados privados;
- cobertos por contrato e políticas.

## Ao retornar

O Maestro produz briefing acumulado, agrupando por importância e não por volume.
Logs detalhados ficam disponíveis, mas não são a interface padrão do CEO.

## Escalonamento

P0 gera alerta imediato. P1 entra no próximo briefing ou alerta conforme prazo.
P2 e P3 seguem fila normal.

## Realidade da fase atual

A documentação suporta a rotina, mas operação autônoma 24h ainda depende de
scheduler, filas, workers, banco, observabilidade e controles de custo. Esses
componentes serão implementados incrementalmente e testados antes de operar sem
supervisão.
