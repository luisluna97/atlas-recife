# EXP-0008 — prioridade comercial orientada por transformação visual

Estado: estágio 0 executado; gate visual aberto  
Data: 2026-08-03  
Decisão: ADR-0057  

## Hipótese

Prospects com maior contraste visual demonstrável, oportunidade específica de
SEO e material real suficiente devem sustentar uma abordagem comercial mais
forte do que prospects priorizados apenas por lacunas técnicas ou conteúdo.

## Execução do estágio 0

O código aplicou pesos provisórios aos 50 prospects:

- 45% transformação visual, representada temporariamente por antiguidade técnica;
- 25% oportunidade de SEO;
- 15% material demonstrável;
- 10% lacuna de contato;
- 5% prontidão operacional observável.

Quarenta e dois candidatos atingiram cobertura suficiente. O campo
`commercial_probability` permaneceu `null`.

## Primeira saída

1. NSC Soluções Empresariais;
2. Sinergia Consultoria Empresarial;
3. RS Consultoria Empresarial Contábil;
4. Rabelo & Amorim Advogados;
5. HMA Contabilidade.

## Falsificação imediata

Sinergia apareceu em segundo lugar por combinar sinais técnicos, ativos e SEO.
A revisão visual anterior do fundador concluiu que sua presença já era
relativamente estruturada e que o contraste demonstrativo era menor. EA também
permaneceu alta apesar de exigir arquitetura ampla e não uma transformação
simples.

Resultado: o estágio 0 é aceito somente como fila para captura. Ele é rejeitado
como ranking comercial. Antiguidade técnica não substitui visual renderizado.

## Lote visual aberto

### Candidatos de transformação

- NSC Soluções Empresariais;
- RS Consultoria Empresarial Contábil;
- Rabelo & Amorim Advogados;
- HMA Contabilidade;
- Sá Leitão Auditores e Consultores;
- Conexão Contabilidade e Consultoria Empresarial;
- Martorelli Advogados;
- Saires Contabilidade;
- Queiroz Cavalcanti Advocacia;
- Magalhães Advogados;
- Marjuhh;
- Da Fonte Advogados;
- Antonio Faria Advogados.

### Controles obrigatórios

- Sinergia: controle de falso positivo técnico;
- EA Advocacia & Compliance: controle de site estruturado e escopo amplo;
- RS e NSC: controles positivos aprovados para contraste demonstrativo.

## Rubrica do gate visual

Cada home será comparada em desktop e celular:

1. aparência datada ou degradada;
2. hierarquia, tipografia e densidade;
3. qualidade e coerência das imagens;
4. adaptação móvel e legibilidade;
5. clareza do serviço e do próximo passo;
6. magnitude da transformação possível sem remover conteúdo;
7. capacidade de uma demonstração inicial explicar valor em segundos.

Cada nota exige screenshot, executor, data, URL final e justificativa. Casos sem
captura permanecem `unknown`.

## Próxima saída

Ranking de transformação visual auditado + diagnóstico de SEO dos dez melhores.
Somente essa combinação promove candidatos para prioridade comercial v0.1.

## Artefatos

- `04-intelligence/sales-priority-method-v0.md`;
- `04-intelligence/sales-priority-stage0-v0.md`;
- `04-intelligence/sales-priority-stage0-v0.json`;
- `04-intelligence/sales-priority-stage0-v0.csv`;
- `09-engineering/labs/sales_priority_stage0_v0.mjs`.
