# Pesquisa v0 — melhores práticas para os dois serviços demonstrativos

- **ID:** `RESEARCH-DEMO-SERVICE-0001`
- **Missão:** seleção e preparação dos dois demonstrativos do Atlas Recife
- **Versão:** `0.1.0-research`
- **Estado:** pesquisa candidata; não equivale a adoção nem autorização comercial
- **Data de execução:** 2026-07-31
- **Data de acesso às fontes web:** 2026-07-31
- **Executor:** `scientist` (Cientista do Atlas Recife, via Codex)
- **Método:** revisão documental do Atlas; busca dirigida na web; preferência por
  fontes primárias e normas; triangulação entre UX, SEO, performance,
  acessibilidade, analytics, prototipação e compliance jurídico; síntese crítica
  em práticas comprovadas, novidades promissoras e inferências Atlas.
- **Entradas internas principais:** `ATLAS.md`,
  `ATLAS_Recife_Handoff_Codex.md`, `DECISIONS.md`,
  `05-agents/scientist.md`, `05-agents/scientist-benchmark-operating-model.md`,
  `06-research/reference-criteria-v0.md` e
  `06-research/benchmark-measurement-model-v0.md`.
- **Restrições:** nenhum contato, formulário, publicação, instalação ou compra;
  nenhuma alegação de resultado real sem dados do cliente.

## Pergunta

Como estruturar, com baixo custo e qualidade comparável a boas práticas de
mercado, dois demonstrativos diferentes?

1. **Caminho A — Leonardo Coêlho Advocacia:** diagnóstico completo da presença
   digital e plano de transformação do site inteiro.
2. **Caminho B — organização a selecionar:** uma landing page demonstrativa,
   moderna e privada, para tornar visível uma transformação rápida.

## Resposta executiva

Os dois trabalhos não devem ser versões curta e longa do mesmo PDF.

- O **Caminho A** vende capacidade de diagnóstico e decisão. A unidade central
  é o achado rastreável: evidência, impacto provável, limitação, recomendação,
  esforço e prioridade. O material culmina em uma arquitetura futura e um
  roadmap, sem fingir conhecer conversão, receita ou processos internos.
- O **Caminho B** vende capacidade de execução visual. A unidade central é uma
  hipótese demonstrável: problema observado, decisão de design, página privada,
  comparação antes/depois e especificação de SEO, performance, acessibilidade
  e mensuração. Aparência, sozinha, não basta.

Baymard oferece uma referência real do formato de auditoria: revisão sistemática,
benchmark, recomendações acionáveis e priorizadas, exemplos de implementação,
scorecards e conversa de passagem para implementação. Entretanto, sua base é
predominantemente e-commerce; o Atlas deve reutilizar a **estrutura do método**,
não suas heurísticas ou scores como se fossem validados para escritórios
jurídicos. [Baymard — What Is a UX Audit?](https://baymard.com/learn/ux-audit)

## Práticas comprovadas ou normativas

### 1. Separar auditoria especializada de teste com usuários

Uma auditoria identifica problemas por revisão sistemática e explica por que e
como corrigi-los; teste de usabilidade observa comportamento real. São métodos
complementares. Logo, o Atlas pode produzir um diagnóstico especialista agora,
mas deve chamar conclusões sobre comportamento e conversão de **hipóteses** até
testá-las com usuários ou dados reais. Baymard descreve explicitamente essa
distinção e entrega recomendações priorizadas como saída da auditoria.
[Baymard — What Is a UX Audit?](https://baymard.com/learn/ux-audit)

### 2. Relacionar cada recomendação a evidência e implementação

O padrão útil não é uma lista genérica de “boas práticas”. Um achado deve conter:

`tela/URL → evidência → problema → usuário/tarefa afetada → impacto provável →
recomendação → exemplo ou wireframe → esforço → confiança → validação necessária`

Baymard relata recomendações acompanhadas da descrição do problema, solução e
exemplos de implementação. Sua metodologia também deixa claro que seus pesos
decorrem de pesquisa própria. O Atlas não deve copiar pesos ou usar a marca
Baymard como certificação. [Baymard — metodologia](https://baymard.com/research/methodology)

### 3. Avaliar a jornada e não somente a homepage

Para serviço profissional, a jornada mínima observável é:

`descoberta → entendimento da especialidade → confiança → exploração da solução
→ próximo passo → contato/triagem → confirmação`

Um mapa de jornada ajuda a registrar o que a pessoa faz, pensa, espera e onde
encontra atrito. Um service blueprint pode ser proposto para conectar a parte
visível do site ao atendimento e CRM, mas só pode ser preenchido de verdade com
informação autorizada do escritório. A referência de entregáveis da NN/g define
journey maps e service blueprints como artefatos distintos.
[NN/g — UX Deliverables Glossary](https://media.nngroup.com/media/articles/attachments/UX-Deliverables-Glossary-PDF-2.pdf)

### 4. SEO é conteúdo útil e fundamento técnico, não promessa de posição

O Google recomenda conteúdo original, atualizado, útil e feito para pessoas;
títulos descritivos, texto acessível no DOM, links internos e dados estruturados
coerentes ajudam mecanismos de busca a entender o conteúdo. Não existe segredo
que garanta primeira posição, e dados estruturados não garantem rich results.
[Google — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
[Google — guia para desenvolvedores](https://developers.google.com/search/docs/fundamentals/get-started-developers)
[Google — dados estruturados](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

Consequência Atlas: o demonstrativo apresenta **mapa de intenção e
especificação on-page**, não previsão de tráfego ou ranking. Conteúdo jurídico
substantivo exige validação do especialista responsável antes de publicação.

### 5. Performance precisa separar laboratório e campo

Os Core Web Vitals atuais são LCP, INP e CLS. O Google recomenda avaliar o 75º
percentil das visitas e separar mobile e desktop. Lighthouse é útil em
laboratório, mas não mede INP real; TBT é apenas proxy. Sem tráfego e instrumentação
do cliente, o Atlas deve mostrar resultados sintéticos como `lab`, nunca como
experiência real. [web.dev — Web Vitals](https://web.dev/articles/vitals)
[web.dev — diferenças entre dados de laboratório e campo](https://web.dev/articles/lab-and-field-data-differences)

### 6. Acessibilidade exige automação e julgamento humano

WCAG 2.2 é a referência técnica atual. A W3C afirma que ferramenta automática
alguma determina, sozinha, conformidade; é necessária avaliação humana. O Atlas
deve combinar checks determinísticos com inspeção de teclado, foco, contraste,
estrutura semântica, textos alternativos e mensagens de erro, e nunca declarar
“site acessível” a partir de um score automático.
[W3C — WCAG 2](https://www.w3.org/WAI/standards-guidelines/wcag/)
[W3C — Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/)
[W3C — modelo de relatório](https://www.w3.org/WAI/test-evaluate/report-template/)

### 7. Mensuração deve nascer junto com a jornada

GA4 recomenda `generate_lead` para envio de formulário ou pedido de informação
e dispõe de eventos para acompanhar o funil de leads até qualificação e
fechamento. O plano Atlas deve especificar eventos e critérios de sucesso antes
de implementar a página. Um protótipo privado não produz evidência de conversão.
[Google Analytics — eventos recomendados](https://support.google.com/analytics/answer/9267735)
[Google Analytics — medir geração de leads](https://support.google.com/analytics/answer/12941105)

### 8. Prototipar para aprender, não para fingir que já está validado

O Design Sprint popularizou a sequência compreender, definir, esboçar, decidir,
prototipar e validar. O Google também recomenda ajustar a fidelidade do protótipo
à pergunta e evitar construir partes que não ajudam a testá-la. Isso sustenta uma
landing demonstrativa enxuta e navegável, mas não autoriza apresentá-la como
solução comprovada antes de validação.
[Google Design — Design Sprints](https://design.google/library/design-sprints)
[Google Design — AI Prototyping: Test Before You Build](https://design.google/library/simulating-intelligence)

### 9. Compliance jurídico é requisito de produto

O Provimento OAB 205/2021 permite marketing jurídico dentro dos preceitos
éticos, mas exige informação objetiva e verdadeira, discrição e sobriedade e
veda captação de clientela, mercantilização, promessa de resultado, comparação,
autoengrandecimento e alegação indevida de especialidade. Informações e títulos
devem ser comprováveis. Assim, a copy não pode usar urgência litigiosa, “melhor
escritório”, garantia, vitória, desconto ou chamada agressiva para contratação.
[OAB — Provimento 205/2021](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021)
[OAB — cartilha de dúvidas, 2024](https://www.oab.org.br/Content/pdf/Cartilha%20Digital%20Publicidade%20Advocacia.pdf)

Este relatório não é parecer jurídico. Antes de publicação, o responsável pelo
escritório e, se necessário, profissional de ética/compliance devem revisar a
peça.

## Novidades promissoras em 2025–2026

### Busca com IA sem “SEO mágico”

O Google informa que AI Overviews e AI Mode não exigem markup, arquivo ou
otimização especial: permanecem válidos os fundamentos de SEO, conteúdo útil,
texto rastreável, links internos, boa experiência e dados estruturados
compatíveis com o conteúdo visível. O tráfego dessas experiências aparece no
relatório geral da busca web no Search Console. Portanto:

- **prática suportada:** produzir conteúdo claro, verificável, específico e bem
  conectado;
- **novidade promissora:** acompanhar como consultas complexas e citações de
  fontes alteram descoberta;
- **não comprovado:** vender “AEO/GEO garantido” ou criar arquivo especial para
  IA como requisito do Google.

Fonte: [Google — AI features and your website](https://developers.google.com/search/docs/appearance/ai-features).

### INP e observabilidade real de interação

INP já é Core Web Vital estável. A oportunidade nova não é adicionar mais um
score ao PDF, mas planejar observabilidade de interações e corrigir gargalos
reais após lançamento. Antes disso, TBT e testes manuais são diagnóstico de
laboratório, com limitação explícita.

### Medição conectada ao funil offline

Eventos recomendados de lead em GA4 permitem desenhar uma cadeia
`generate → qualify/disqualify → working → close`. É promissor para a futura
recorrência Atlas com CRM; no demonstrativo, é apenas arquitetura proposta,
pois não há acesso aos processos ou resultados do escritório.

### IA como assistente, nunca fonte silenciosa

LLMs podem ajudar a agrupar achados, explorar variações e detectar lacunas. Não
devem inventar credenciais, casos, clientes, especialidades ou dados de
performance. Toda copy factual deve apontar para fonte pública ou validação do
cliente. Esta é uma inferência operacional do princípio Atlas de proveniência e
das exigências de veracidade da OAB.

## Inferências Atlas a validar

1. Um relatório executivo de 20–35 páginas, apoiado por anexo técnico, tende a
   ser mais utilizável que um volume de 120 páginas para um primeiro escritório
   local. Não há estudo nas fontes consultadas que determine esse tamanho.
2. Mostrar cinco a oito achados prioritários com protótipos direcionados pode
   gerar mais clareza comercial do que expor todas as variáveis coletadas. Isso
   deve ser testado em apresentação humana.
3. Uma landing de alta fidelidade é adequada para demonstrar competência visual,
   mas um protótipo navegável simples pode ser melhor para testar mensagem e
   jornada antes do polimento.
4. Para advocacia B2B, CTA informativo e contextual (“conheça a atuação”, “fale
   com a equipe sobre...”) parece mais aderente que copy de urgência; a revisão
   final precisa considerar a OAB e o contexto específico.

## Formato Atlas A — Dossiê de transformação digital

### Objetivo

Dar ao Leonardo Coêlho Advocacia uma visão auditável do estado atual, da direção
recomendada e da sequência de implementação do site inteiro.

### Entregáveis

1. **Resumo executivo de uma página:** cinco achados, três prioridades e visão
   de futuro; fatos separados de hipóteses.
2. **Escopo e método:** URLs, datas, dispositivos, ferramentas, limitações,
   cobertura e confiança.
3. **Inventário de presença:** páginas, áreas, conteúdos, CTAs, contatos,
   tecnologias e lacunas observáveis.
4. **Posicionamento e arquitetura:** públicos/problemas aparentes, mapa
   especialidade × evidência, proposta de valor e sitemap futuro.
5. **Jornadas prioritárias:** 2–3 cenários, atritos, próximos passos e hipóteses
   de atendimento; backstage não observado fica `unknown`.
6. **Auditoria por famílias:** proposta, conteúdo, SEO, UX/conversão,
   acessibilidade, performance, mensuração, privacidade e compliance.
7. **Benchmark criterial:** referências por dimensão e exemplos anotados; sem
   ranking genérico nem cópia visual.
8. **Conceito futuro:** wireframes ou protótipo de páginas-chave para tornar as
   recomendações concretas.
9. **Roadmap:** agora/próximo/depois, dependências, esforço relativo, impacto
   provável, confiança e critérios de aceite.
10. **Plano de mensuração:** eventos, funil, baseline necessária e perguntas que
    só dados internos podem responder.
11. **Anexo de evidências:** screenshot/URL, timestamp, método, executor e hash
    quando disponível.

### Sequência de produção

`congelar escopo → snapshot reproduzível → auditorias determinísticas → revisão
especialista → mapa de jornada → benchmark → síntese e priorização → conceito
visual → QA/Auditor → apresentação privada`

### Priorização sem score único

Usar faixas, não uma nota total:

- **P0:** risco crítico, quebra de jornada ou compliance;
- **P1:** alto impacto provável e esforço baixo/médio;
- **P2:** fundamento necessário ou impacto moderado;
- **P3:** experimento/otimização após instrumentação.

Cada prioridade declara impacto, esforço, confiança e dependência separadamente.

### Critérios de qualidade

- 100% dos achados materiais ligados a URL/tela e data;
- observado, inferido e desconhecido identificados;
- desktop e mobile incluídos;
- recomendação acionável e critério de aceite para todo P0/P1;
- nenhuma promessa de ranking, conversão ou receita;
- nenhuma credencial, área ou afirmação jurídica inventada;
- auditoria automática distinguida de avaliação humana;
- revisão independente antes da apresentação.

### Pilha de baixo custo candidata ao Laboratório

Browser/Playwright para captura; Lighthouse/axe para sinais automáticos;
PageSpeed Insights/CrUX quando publicamente disponíveis; scripts para inventário,
metadados, links e hashes; Markdown como fonte; HTML/PDF apenas como exportação.
Ferramentas não entram em produção por esta pesquisa.

## Formato Atlas B — Landing demonstrativa privada

### Objetivo

Mostrar, com uma única página, como posicionamento, design, SEO, velocidade e
próximo passo podem ser reorganizados — sem representar que o escritório
encomendou, aprovou ou já obteve resultados.

### Entregáveis

1. **Ficha “por que esta página”:** captura atual, problema visual/jornada,
   evidência e potencial de contraste.
2. **Brief de uma página:** público e necessidade aparentes, mensagem, objetivo
   da landing, CTA compatível e fatos que precisam ser confirmados.
3. **Mapa de intenção de busca:** tema principal, variações, perguntas e
   entidades, tratado como hipótese; sem volume inventado.
4. **Wireframe e hierarquia:** hero informativo, problema/contexto, atuação,
   processo, credenciais verificáveis, conteúdo relacionado e contato.
5. **Landing responsiva privada:** alta fidelidade, sem indexação e claramente
   rotulada “conceito independente / não oficial”.
6. **Especificação SEO:** title, description, URL proposta, headings, links,
   canonical/robots conforme ambiente, OG e schema apenas quando aplicável e
   coerente com texto visível.
7. **Plano de mensuração:** `page_view`, cliques de contato e
   `generate_lead` somente para futura implementação autorizada.
8. **Comparação anotada:** antes/depois por decisões, não por humilhação ou
   adjetivo “pior”.
9. **QA:** mobile/desktop, teclado, contraste, semântica, formulário simulado,
   performance de laboratório e checklist OAB.

### Sequência de produção

`seleção visual auditada → preservar página atual → brief factual → hipótese de
mensagem → wireframe → revisão de conteúdo/compliance → implementação privada →
QA → comparação anotada → apresentação privada`

### Critérios de qualidade

- página não indexável e não publicada como oficial;
- ausência de formulário funcional, contato disparado ou captura real sem
  autorização;
- marca e imagens usadas somente no limite necessário à demonstração privada;
- nenhuma falsa parceria, depoimento, caso, prêmio ou resultado;
- texto crítico acessível no HTML, não apenas em imagem;
- mobile funcional, foco visível, contraste e estrutura semântica;
- performance sintética rotulada como laboratório;
- SEO descrito como fundamento, nunca garantia;
- toda alegação factual vinculada a fonte e pendências marcadas para validação.

### Pilha de baixo custo candidata ao Laboratório

Código estático ou framework já existente no repositório; componentes próprios
ou com licença compatível; fontes locais/sistema quando possível; Playwright para
screenshots e QA; Lighthouse e axe para checks; Git para histórico. Banco, CRM,
analytics real e envio de formulário ficam simulados até autorização.

## Limites éticos e o que não copiar

- Não copiar layout, texto, ilustrações, fotos, componentes proprietários ou
  identidade de referências; extrair princípios e padrões.
- Não chamar a organização de “pior site” no material externo. A classificação
  é uma decisão interna baseada em rubrica visual, com limitações.
- Não publicar redesign especulativo usando marca de terceiro nem induzir que é
  projeto contratado/aprovado.
- Não usar depoimentos, logos de clientes, rankings ou especialidades sem fonte e
  direito de uso.
- Não prometer SEO, leads, conversão, receita, conformidade WCAG ou conformidade
  jurídica com base em protótipo ou ferramenta automática.
- Não converter ausência de dados internos em falha. Analytics, CRM, conversão,
  atendimento e receita permanecem `unknown`.
- Não reutilizar scores proprietários de Baymard/consultorias nem generalizar
  evidência de e-commerce para serviços profissionais sem teste.
- Não realizar dark patterns, urgência artificial ou CTAs incompatíveis com a
  sobriedade exigida à advocacia.

## Lacunas e limitações da pesquisa

- A pesquisa é documental e não inclui entrevista com compradores de serviços,
  usuários finais ou escritórios.
- Parte relevante da metodologia de consultorias é proprietária; foram usadas
  apenas descrições públicas.
- Baymard é uma referência forte de formato, mas sua validação é centrada em
  e-commerce, não advocacia B2B.
- Não foi demonstrada causalidade entre o formato sugerido e fechamento
  comercial; isso deve virar experimento Atlas.
- Normas podem mudar e interpretações éticas variam; revisar novamente antes de
  qualquer publicação ou contato.
- Ferramentas citadas são candidatas e precisam do Laboratório antes de adoção.

## Recomendação ao Maestro

1. Aprovar estes dois **formatos**, não ainda suas ferramentas ou alegações.
2. Finalizar a auditoria visual independente para escolher o Caminho B.
3. Congelar escopo e snapshots dos dois casos antes da produção.
4. Criar dois pacotes separados, com identidade Atlas comum e narrativas
   diferentes: **decisão estratégica** no A e **prova visual** no B.
5. Submeter briefing, copy, claims, comparação e QA ao Auditor antes de mostrar
   qualquer material ao fundador ou a terceiros.

## Fontes consultadas

Todas acessadas em 2026-07-31:

- [Baymard — What Is a UX Audit?](https://baymard.com/learn/ux-audit)
- [Baymard — UX Research Methodology](https://baymard.com/research/methodology)
- [Baymard — Baseline UX Benchmark](https://baymard.com/product/baseline-ux-benchmark)
- [NN/g — Heuristic Evaluation Workbook](https://media.nngroup.com/media/articles/attachments/Heuristic_Evaluation_Workbook_1_Fillable.pdf)
- [NN/g — UX Deliverables Glossary](https://media.nngroup.com/media/articles/attachments/UX-Deliverables-Glossary-PDF-2.pdf)
- [Google Design — Design Sprints](https://design.google/library/design-sprints)
- [Google Design — AI Prototyping: Test Before You Build](https://design.google/library/simulating-intelligence)
- [Google Search — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google Search — Developer Guide](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [Google Search — Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google Search — AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [web.dev — Web Vitals](https://web.dev/articles/vitals)
- [web.dev — Lab and field data](https://web.dev/articles/lab-and-field-data-differences)
- [Google Analytics — Recommended Events](https://support.google.com/analytics/answer/9267735)
- [Google Analytics — Generate more leads](https://support.google.com/analytics/answer/12941105)
- [W3C — WCAG Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [W3C — Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/)
- [W3C — Evaluation Report Template](https://www.w3.org/WAI/test-evaluate/report-template/)
- [OAB — Provimento 205/2021](https://www.oab.org.br/leisnormas/legislacao/provimentos/205-2021)
- [OAB — Principais dúvidas sobre publicidade na advocacia, 2024](https://www.oab.org.br/Content/pdf/Cartilha%20Digital%20Publicidade%20Advocacia.pdf)

