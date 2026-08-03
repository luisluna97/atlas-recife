# Dossiê da pesquisa de escritórios — v0

Status: consolidação para alinhamento com o fundador  
Data: 2026-08-03  
Escopo: escritórios jurídicos e contábeis  
Território comercial: Recife  
Executor: código para coleta, parsing, validação e cálculo; Codex para interpretação documentada  

## 1. O que estamos tentando descobrir

A pesquisa deve ajudar o Atlas a responder quatro perguntas diferentes:

1. quais empresas possuem presença digital que pode ser melhorada;
2. em quais delas a transformação pode ser demonstrada com força;
3. quais serviços e buscas podem aproximar essas empresas de potenciais clientes;
4. quais empresas devem ser abordadas primeiro quando o processo comercial for autorizado.

Essas perguntas não podem ser respondidas por um único score. Aparência ruim,
lacuna técnica, demanda de busca e chance de compra são variáveis diferentes.

## 2. Universo atual

- 66 organizações no estudo;
- 50 escritórios locais de Recife: 25 jurídicos e 25 contábeis;
- 16 referências nacionais e internacionais, comparadas separadamente;
- 60 homes observadas por coleta estrutural;
- 6 casos encaminhados para diagnóstico de acesso, sem receber nota zero;
- nenhum benchmark é tratado como prospect local.

O conjunto é uma amostra de desenvolvimento e calibração. Ele ainda não prova
representatividade estatística de todos os escritórios de Recife.

## 3. O que foi observado

### Disponibilidade

- resolução de domínio;
- TLS;
- resposta HTTP e acesso pelo navegador;
- estabilidade observável.

Bloqueio do coletor não é tratado como site ruim quando a página funciona em
navegador. Indisponibilidade comprovada reduz apenas disponibilidade.

### Estrutura pública da home

- título, descrição, H1, headings e idioma;
- canonical, Open Graph e dados estruturados;
- robots e sitemap;
- telefone, e-mail, WhatsApp e formulário;
- analytics, tag manager e pixels detectáveis;
- páginas, palavras, especialidades e links;
- evidência, método, executor, versão e horário.

### Proposição, conteúdo e jornada — PAS experimental

- clareza do serviço, público e especialidade;
- alinhamento entre página, navegação, título e conteúdo;
- profundidade sobre problemas, escopo e experiência declarada;
- contato contextual, destino válido e fricção observável;
- consistência entre propriedades, ainda incompleta.

Cada item usa 0–3 ou `unknown`. Ausência de evidência nunca vira zero.
Cobertura, confiança e fonte acompanham a avaliação.

## 4. O que ainda não foi medido de forma suficiente

- qualidade visual comparável em desktop e celular para as 50 empresas locais;
- demanda local por serviço, problema e intenção de busca;
- posição real no Google e no mapa;
- qualidade do Google Business e das redes sociais;
- Core Web Vitals repetidos e acessibilidade multipágina;
- conversões, contatos, clientes, receita, capacidade operacional e satisfação;
- propensão de compra, orçamento, decisor e momento comercial.

Sem esses dados, não podemos afirmar que uma empresa será um bom cliente, que
um redesign trará determinado volume de visitas ou que haverá aumento de vendas.

## 5. Estado dos rankings

O PAS não é ranking comercial nem nota geral do site. Ele organiza sinais de
proposição, estrutura, conteúdo e jornada.

O `evidence_priority_score` v0.1 prioriza a próxima investigação. Ele combina
lacunas técnicas, contato, material reaproveitável, potencial de conteúdo/SEO,
PAS aceito e observabilidade. Sua lista inicial colocou Sinergia e EA nas duas
primeiras posições, mas a direção visual e os materiais foram rejeitados pelo
fundador. Isso demonstrou que o score técnico não substitui avaliação visual.

Qualidade visual e demanda de busca permanecem `null` na saída geral. Portanto,
o Atlas ainda não possui um ranking final de transformação nem de vendas.

## 6. Por que RS e NSC viraram os pilotos atuais

RS e NSC foram escolhidas depois da correção metodológica e de uma avaliação
visual específica. A seleção não declara que são as duas piores empresas da
amostra nem as duas com maior chance de compra.

### RS Consultoria

Oportunidade observada:

- apresentação e estrutura antigas;
- ausência detectada de descrição, H1, sitemap e dados locais;
- telefone sem clique e nenhuma medição detectada;
- quatro áreas de serviço e recursos reais que podem ser preservados;
- contraste demonstrável entre a página atual e uma presença moderna.

### NSC Soluções Empresariais

Oportunidade observada:

- apresentação visual antiga e conteúdo datado ainda visível;
- título longo e ausência detectada de descrição e H1;
- muitos segmentos competindo simultaneamente;
- patrimônio útil já existente: páginas por segmento, WhatsApp, sitemap,
  dados estruturados, sistemas e conteúdo.

Os pilotos testam a capacidade de transformar sem apagar o que a empresa já
possui. Não autorizam contato, publicação ou promessa de resultado.

## 7. Hipótese de produto que a pesquisa sustenta

O produto inicial do Atlas é uma página ou site novo com SEO incluído. O trabalho
liga uma busca real a uma página específica, apresenta o serviço com clareza e
facilita o contato.

Depois da entrega, o cliente pode contratar acompanhamento mensal opcional para
continuar SEO, analytics, conteúdo, manutenção e tráfego pago. A recorrência
mede o que aconteceu e orienta os próximos ajustes.

O mecanismo é:

`busca relacionada -> página do serviço -> contato -> medição -> melhoria`

O Atlas vende a construção e a operação desse mecanismo. Não vende garantia de
posição, tráfego, contatos, clientes ou receita.

## 8. O que a pesquisa já demonstrou

- coleta e avaliação precisam separar observação, inferência e resultado real;
- conteúdo e recursos existentes devem ser inventariados antes do redesign;
- lacuna técnica e lacuna visual não são a mesma coisa;
- um único score pode esconder incerteza e produzir escolhas ruins;
- SEO precisa nascer junto com a página, não ser anexado depois;
- a demonstração comercial precisa ser curta, específica e visual;
- o motion deve explicar o negócio: gráficos para contabilidade, fluxos e
  elementos próprios do setor para outros segmentos;
- slogans não são o padrão de comunicação do Atlas.

## 9. Próximo ciclo de pesquisa recomendado

1. concluir capturas desktop e mobile padronizadas dos 50 prospects;
2. aplicar rubrica visual com revisão humana amostral e auditoria;
3. pesquisar demanda por clusters de serviço e intenção em Recife;
4. separar três sinais: oportunidade de transformação, oportunidade de busca e
   prontidão comercial, usando os dois primeiros para explicar a prioridade de
   venda;
5. validar o método com casos que contradigam o ranking;
6. somente depois formar a primeira fila de prospecção.

## 10. Decisões que precisam do fundador

- **Decidido:** o próximo ranking prioriza a maior chance de venda. A principal
  hipótese de entrada é que uma transformação visual evidente aumenta a força
  da demonstração; o estudo de SEO mostra como a nova presença pode ser
  encontrada e convertida em contatos mensuráveis.
- O produto inicial será uma página de serviço prioritário ou migração completa
  quando o site tiver patrimônio relevante?
- Quais sinais comerciais mínimos devem existir antes de uma empresa entrar na
  fila de contato?
- Qual tamanho do próximo lote visual e de demanda cabe no orçamento e na
  capacidade de produção?

## 11. Hipótese comercial a validar

O primeiro grupo de prospecção deve combinar:

1. site atual claramente defasado em comparação com referências do setor;
2. transformação visual forte que possa ser demonstrada imediatamente;
3. serviços reais com intenção de busca identificável;
4. diagnóstico de SEO específico, explicado em linguagem comum;
5. caminho simples até telefone, formulário ou WhatsApp;
6. sinais mínimos de empresa ativa e capaz de contratar.

A transformação visual abre a conversa. O estudo de SEO justifica o investimento
como aquisição, não como decoração. Capacidade de compra, acesso ao decisor e
momento comercial continuam necessários, porque oportunidade visual não prova
fechamento.

## Proveniência

Entradas principais: `ATLAS.md`, `DECISIONS.md`,
`03-data/evaluation-variables-v0-3.md`,
`07-experiments/exp-0005-consulta-66.md`,
`04-intelligence/transformation-priority-method-v0.md`,
`04-intelligence/transformation-priority-report-v0.md`,
`04-intelligence/rs-nsc-seo-opportunity-report-v0.md` e contratos do Cientista
e Benchmark Setorial. Método de consolidação: leitura cruzada e separação entre
observado, experimental, hipótese e decisão. Versão: `dossie-pesquisa-v0.1`.
