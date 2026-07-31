# Variáveis e revisão humana v0

- **Missão:** MISS-0005
- **Estado:** experimental
- **Amostra:** 66 organizações

## 1. Variáveis já coletadas para todos ou quase todos

### Contexto — não pontuado

- organização, segmento e camada geográfica;
- bairro/cidade e país;
- URL oficial candidata;
- especialidade/modelo inicialmente declarado;
- fonte, timestamp, executor, método, versão e limitações.

### Acesso e saúde técnica

- resolução DNS;
- status HTTP e redirects;
- URL final;
- tipo e tamanho da resposta;
- hash da evidência;
- validade e cadeia do certificado TLS nos casos anômalos;
- bloqueio anti-automação;
- classe de indisponibilidade e tratamento métrico.

### Estrutura da home

- title;
- meta description;
- idioma;
- canonical;
- quantidade e texto de H1;
- JSON-LD;
- Open Graph;
- sinais compatíveis com GA4/Google tag, GTM e Meta Pixel;
- WhatsApp, telefone, e-mail e formulário detectáveis.

Presença não significa qualidade ou eficácia.

### Evidência de páginas

- URL e papel da página;
- title, H1 e headings;
- trecho textual e contagem de palavras;
- termos de especialidade;
- CTAs;
- hash, data, método e confiança;
- falhas e necessidade de navegador.

## 2. Variáveis PAS em julgamento

### PAS-D1 — Clareza da proposição (25%)

- macrogrupo principal;
- público e problema declarado;
- especialidades/famílias;
- prioridade e diferenciação;
- coerência da promessa.

### PAS-D2 — Alinhamento estrutural (20%)

- páginas dedicadas;
- menu e navegação;
- title/H1/headings;
- links internos;
- arquitetura das áreas e serviços.

### PAS-D3 — Profundidade substantiva (25%)

- problemas e cenários atendidos;
- escopo da atuação;
- explicações e conteúdo relacionado;
- autoria/credenciais declaradas;
- evidência além de simples listas.

### PAS-D4 — Alinhamento da jornada (15%)

- CTA contextual;
- destino e canal;
- WhatsApp, contato, agenda ou formulário;
- continuidade entre serviço e ação;
- fricções observáveis, sem enviar formulário.

### PAS-D5 — Consistência entre propriedades (15%)

Exige site, redes, listagens e outras propriedades. Permanece `unknown` nesta passagem quando não houver coleta comparável.

## 3. Variáveis planejadas, ainda não concluídas nos 66

- Core Web Vitals de campo e Lighthouse repetido;
- acessibilidade automática e revisão WCAG amostral;
- validade e alinhamento de structured data;
- SEO técnico multipágina e links internos;
- comportamento de cookies e consentimento;
- eventos de analytics observáveis;
- consistência com redes sociais e Google Business;
- qualidade visual;
- resultados reais de leads, conversão, atendimento ou receita.

Estas variáveis não podem aparecer como se já estivessem medidas.

## 4. Revisão humana por amostragem

### Amostra-base

14 organizações selecionadas deterministicamente:

- 5 contábeis e 5 jurídicas de Recife;
- 1 nacional de cada segmento;
- 1 internacional de cada segmento.

Seed: `PAS-AUDIT-2026-07-30`.

### Inclusões obrigatórias

Além da base entram:

- todos os erros de acesso;
- todos abaixo do gate de confiança;
- falsos negativos corrigidos por navegador;
- scores com confiança abaixo de 0,70;
- futuramente, extremos superior/inferior e contradições.

A amostra atual possui 24 organizações únicas: 36,4% dos 66.

### O que o revisor verifica

- identidade e domínio corretos;
- evidência realmente sustenta a proposição;
- páginas e trechos citados existem;
- score corresponde à rubrica;
- unknown não virou zero;
- ausência do parser não é conteúdo ausente;
- CTA, especialidade e profundidade não foram exagerados;
- confiança e limitações são adequadas;
- compliance e alegações sensíveis estão sinalizados.

### Papel do fundador

Luis não revisa cada observação. O sistema e o Auditor fazem a revisão; o fundador aprova:

- catálogo de variáveis;
- pesos e gates;
- mudanças de método;
- exceções materiais;
- promoção de experimental para oficial;
- uso comercial dos resultados.

## 5. Regra de publicação

Nunca publicar apenas uma nota. Mostrar score, cobertura, confiança, versão e limitações. Resultados ainda são experimentais e não medem qualidade profissional ou resultado de negócio.
