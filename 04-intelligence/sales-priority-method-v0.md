# Método de prioridade comercial — v0

Status: hipótese executável em calibração  
Decisão: ADR-0057  

## Objetivo

Ordenar prospects pela força provável de uma abordagem comercial baseada em
transformação visual imediata e diagnóstico específico de SEO.

## Estrutura

### 1. Transformação visual — dominante

Compara screenshots atuais e conceito novo em desktop e celular. Avalia idade
percebida, hierarquia, legibilidade, confiança, adaptação móvel e magnitude do
contraste possível. Sem screenshot, a nota visual permanece `null`.

### 2. Oportunidade de SEO

Verifica serviços reais, páginas existentes, lacunas on-page, intenção de busca,
concorrência local e capacidade de criar uma arquitetura sem inventar demanda.

### 3. Material demonstrável

Confirma serviços, localização, contatos, equipe, história, fotos, conteúdos e
integrações que precisam ser preservados e podem sustentar a nova página.

### 4. Oportunidade de contato

Observa se telefone, WhatsApp e formulários existem, funcionam e mantêm o
contexto do serviço procurado.

### 5. Prontidão comercial

Confirma empresa ativa, decisor acessível, capacidade aparente, canal permitido,
momento e ausência de impedimento de compliance. Dados desconhecidos não viram
zero.

## Pesos de calibração

- transformação visual: 45%;
- oportunidade de SEO: 25%;
- material demonstrável: 15%;
- oportunidade de contato: 10%;
- prontidão: 5%.

Os pesos são uma hipótese do fundador e serão recalibrados com respostas,
reuniões, propostas e contratos. O estágio 0 usa antiguidade técnica apenas para
ordenar a auditoria visual; ele não substitui a nota visual.

## Saídas obrigatórias

- componentes separados;
- score e cobertura;
- evidências e data;
- campos `visual_gap`, `search_demand` e `commercial_probability` explícitos;
- razão de prioridade em linguagem comum;
- próximo gate e limitações.

`commercial_probability` permanece `null` até existir histórico comercial
suficiente para calibração. O primeiro ranking é prioridade, não probabilidade.
