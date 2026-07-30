# Hipótese — Telegram como interface dos agentes

- **Estado:** candidato para pesquisa e experimento
- **Solicitante:** Luis
- **Data:** 2026-07-30

## Objetivo

Permitir comunicação móvel e assíncrona com o Maestro e o Cientista, mantendo
histórico, identidade, autorização, custos e decisões rastreáveis.

## Experiência desejada

### Maestro

- receber novas missões;
- responder “como foi desde meu último acesso?”;
- mostrar resultados das áreas;
- apresentar custos, falhas e aprovações;
- aceitar comandos seguros e auditáveis.

### Cientista

- receber perguntas e temas de pesquisa;
- apresentar descobertas com fontes;
- propor experimentos;
- nunca incorporar ferramenta sem aprovação do Laboratório.

## Hipótese inicial

Um único bot do Atlas pode expor dois contextos explícitos:

- `/maestro`
- `/cientista`

Isso reduz credenciais, infraestrutura e fragmentação. Os agentes continuam com
contratos, memória e permissões separados no backend. A experiência com dois
bots independentes permanece alternativa a comparar.

## Fluxo conceitual

```text
Luis no Telegram
      ↓
Gateway autenticado
      ↓
Comando ou mensagem registrada
      ↓
Maestro ou Cientista
      ↓
Missão / pesquisa / aprovação
      ↓
Supabase futuro + evidências + GitHub quando durável
      ↓
Resposta no Telegram
```

## Decisões necessárias

- um bot ou dois;
- comandos autorizados;
- confirmação de ações críticas;
- vínculo seguro entre Telegram e identidade de Luis;
- retenção e privacidade das mensagens;
- webhook ou processamento local;
- comportamento quando o Alienware estiver offline;
- formato de auditoria e custo;
- canal para alertas P0/P1;
- limite entre conversa efêmera e memória oficial.

## Restrições

- token do bot nunca entra no Git;
- mensagens não viram decisão formal automaticamente;
- contato externo, gasto e dado privado exigem política;
- o Telegram é interface, não fonte oficial;
- GitHub continua como fonte documental;
- Supabase será a memória operacional.

## Experimento futuro

Construir um protótipo somente leitura e com allowlist de usuário. Validar
autenticação, latência, auditoria, custo e clareza antes de aceitar comandos.
