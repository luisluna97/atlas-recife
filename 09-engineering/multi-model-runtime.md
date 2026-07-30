# Arquitetura de operação multi-modelo

## Princípio

Agentes não ficam pensando continuamente. Código mantém a operação viva; modelos
são chamados apenas por jobs que exigem interpretação.

## Componentes

```text
Scheduler / eventos
        ↓
Fila de jobs
        ↓
Policy engine ── orçamento, risco, dados e criticidade
        ↓
Model router
   ├── código determinístico
   ├── modelo local
   ├── modelo econômico
   ├── modelo intermediário
   └── modelo premium
        ↓
Saída estruturada
        ↓
Auditoria e próximo evento
```

## Provedores candidatos

- OpenAI API;
- Anthropic API;
- DeepSeek API;
- modelos locais;
- outros provedores após Laboratório.

Assinaturas de ChatGPT e Claude podem apoiar trabalho humano e Claude Code/Codex,
mas workers autônomos usam integrações e credenciais próprias aprovadas.

## Roteamento por classe

### Sem modelo

- HTTP e parsing;
- normalização;
- hashing;
- deduplicação inicial;
- validação de schema;
- agendamento;
- persistência;
- regras explícitas.

### Econômico ou local

- extração ambígua;
- classificação simples;
- sumarização curta;
- rotulagem;
- triagem;
- detecção de idioma e tema.

### Intermediário

- síntese de múltiplas fontes;
- classificação com justificativa;
- análise setorial;
- comparação;
- geração de hipótese.

### Premium

- Maestro;
- Cientista;
- Auditor crítico;
- arquitetura;
- compliance complexo;
- decisão com alto impacto;
- revisão de divergência entre modelos.

## Independência de auditoria

Quando viável, o produtor e o auditor usam famílias ou provedores diferentes.
Isso reduz correlação de erro, mas não substitui regras nem revisão humana.

## Estado

Arquitetura aprovada como direção. SDKs, modelos específicos, limites e
provedores ativos dependem de benchmark e orçamento.
