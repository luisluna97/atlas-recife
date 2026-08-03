# Padrão Atlas de Experiência Humana v0

- **Estado:** princípio fundador; implementação operacional em elaboração
- **Decisão:** `ADR-0043`
- **Aplicação:** contato, conversa, diagnóstico, proposta, produto, entrega e acompanhamento

## Princípio

O cliente não deve receber uma experiência genérica, mecânica ou intercambiável.
Mesmo quando agentes executam o trabalho, cada interação deve demonstrar que o
contexto da empresa foi compreendido e preservado.

“Humano” significa atenção, continuidade, linguagem natural, memória correta,
juízo proporcional e responsabilidade. Não significa fingir que um agente é uma
pessoa. O Atlas não fabrica nomes, histórias, emoções ou assinaturas humanas e
informa o uso de automação quando isso for material para confiança, consentimento,
privacidade, segurança ou conformidade.

## Cinco sinais obrigatórios

1. **Contexto:** a interação usa fatos e decisões daquele cliente, com proveniência.
2. **Continuidade:** o cliente não precisa repetir o que o Atlas já deveria saber.
3. **Especificidade:** conteúdo, visual e recomendação não serviriam igualmente para qualquer empresa.
4. **Critério:** o agente explica escolhas relevantes, limites e incertezas sem despejar raciocínio interno.
5. **Cuidado:** tom, ritmo, canal e próximo passo respeitam a situação do cliente.

## Jornada

| Etapa | Experiência esperada | Falha a evitar |
|---|---|---|
| primeiro contato | mensagem contextual, breve e relevante | spam, elogio genérico, falsa familiaridade |
| conversa | memória do contexto e perguntas necessárias | roteiro rígido ou repetição |
| diagnóstico | evidência, prioridade e incerteza separadas | texto inflado ou certeza inventada |
| proposta | solução ligada ao problema observado | pacote genérico com nome trocado |
| material | direção visual e editorial própria | estética média de IA |
| acompanhamento | continuidade, registro e próximo passo claro | mensagens automáticas sem contexto |
| exceção | escalonamento humano quando necessário | agente improvisar autoridade |

## Regras para agentes

- ler memória e estado antes de responder;
- distinguir fato, inferência, hipótese e decisão;
- adaptar linguagem sem imitar artificialmente o cliente;
- evitar clichês, superlativos vazios e frases que poderiam ser copiadas para outro caso;
- não dizer que “lembra” algo ausente dos registros;
- não inventar empatia, experiência pessoal ou presença física;
- declarar limitações importantes no momento em que afetam a decisão;
- escalar temas sensíveis, conflito, reclamação, negociação material e exceções de autoridade;
- preservar entrada, método, executor/modelo, versão e resultado relevante.

## Gate de qualidade

Antes de uma saída chegar ao cliente, um revisor deve conseguir responder:

- quais elementos provam que isto pertence a este cliente?
- o que foi preservado de conversas e decisões anteriores?
- há alguma frase, seção ou layout intercambiável?
- o próximo passo é claro e proporcional?
- existe risco de o cliente ser induzido a acreditar que falou com uma pessoa específica?
- há automação material que precisa ser informada?

## Medição candidata

- repetição desnecessária percebida pelo cliente;
- taxa de correção de contexto;
- trechos genéricos identificados na auditoria;
- continuidade entre canais e etapas;
- clareza do próximo passo;
- satisfação e confiança, sem perguntar de modo manipulativo;
- escalonamentos corretos e falhas de transparência.

Os limiares e instrumentos ainda são decisões abertas e devem passar pelo Laboratório.

## Relações

- [[../06-research/visual-distinction-ai-sites-v0|Pesquisa de distinção visual]]
- [[../07-experiments/exp-0006-visual-distinction-protocol-v0|EXP-0006]]
- [[../05-agents/art-director|Diretor de Arte]]
- [[../05-agents/maestro|Maestro]]

