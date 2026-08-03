# Relatório do Cientista — design premium clean para RS e NSC

## Registro e proveniência

- **ID:** `RSR-PREMIUM-CLEAN-RS-NSC-2026-v0`
- **Data de corte:** 2026-08-03
- **Executor:** agente `scientist`, sob missão do Maestro
- **Escopo:** pesquisa de referências EUA/Europa, design systems e UI kits licenciáveis, motion funcional, aplicação prudente de padrões Apple-like e preservação do conteúdo legado de RS Consultoria e NSC Soluções Empresariais
- **Entradas primárias:** [RS Consultoria](https://rsconsultoria-pe.com.br/), [NSC Soluções Empresariais](https://nscsolucoesempresariais.com.br/), documentação/licenças oficiais citadas no corpo
- **Entradas internas:** `ATLAS.md`, Manual Fundador, `DECISIONS.md`, contrato do Cientista e `ai-premium-web-design-2026-v0.md`
- **Método:** inventário semântico superficial das páginas públicas; pesquisa comparativa de sites de serviços profissionais; triagem de kits por licença, custo, controle e lock-in; síntese de arquitetura e experimentos
- **Estado:** recomendação para Laboratório. Nenhum kit foi comprado, instalado ou incorporado. Nenhuma landing foi implementada.
- **Limitações:** não houve inspeção completa de DOM/assets, crawl exaustivo, Lighthouse, Search Console, analytics ou teste com usuários; preços podem mudar; “premium” é julgamento contextual, não fato mensurável isoladamente.

## Conclusão executiva

RS e NSC não devem receber a mesma “landing contábil premium”. Elas têm ativos e problemas diferentes:

- **RS** possui conteúdo institucional curto, serviços tradicionais, utilidades e sinais de continuidade, mas a home não estabelece uma especialidade nem traduz serviço em situações concretas. Sua melhor direção é **confiança silenciosa e precisão**: poucas cores, tipografia editorial, documentos e decisões empresariais como matéria visual.
- **NSC** já declara especialidades por segmento, apresenta depoimentos, canais, plataformas e uma história de atendimento. Sua melhor direção é **especialização acessível e energia empresarial**: pessoas/setores reais, provas e caminhos claros por tipo de negócio.

O “Apple-like” útil não é copiar preto, branco, fonte San Francisco ou vidro. É aplicar hierarquia rigorosa, uma ideia por cena, espaço que organiza, ativos nítidos, motion que explica estado e redução de distração. A própria Apple recomenda motion proposital, opcional e nunca como único meio de comunicar informação ([HIG Motion](https://developer.apple.com/design/human-interface-guidelines/motion?changes=_2_2)).

**Stack recomendada para o Laboratório:** Figma ou HTML estático para direção; Next.js/React somente se a experiência justificar; Tailwind/CSS variables; shadcn/ui como infraestrutura acessível, não estética; componentes autorais do Atlas; Motion/CSS para transições; Playwright, Lighthouse e axe para auditoria. Tailwind Plus ou Untitled UI podem acelerar estrutura, mas não devem definir a aparência final.

## O que deve ser preservado

### RS Consultoria

Conteúdo observado e que não pode desaparecer silenciosamente:

- nome e endereço em Boa Viagem;
- telefone e e-mail;
- atuação declarada em Contábil, Tributária, Fiscal e Trabalhista;
- orientação com base em legislação atualizada;
- promessa de apoio ao crescimento e fortalecimento administrativo-financeiro;
- emissão de notas fiscais, facilitador contábil e modelos de documentos;
- agenda de obrigações, índice de finanças, formulários e certidões;
- notícias empresariais;
- área restrita de clientes e acesso a condomínio;
- links externos hoje operacionais, inclusive dependências de `sitecontabil.com.br` e `finaxweb.com.br`.

O redesign pode rebaixar utilidades genéricas na hierarquia, mas não deve apagá-las antes de verificar uso, origem, responsabilidade e valor para clientes existentes.

### NSC Soluções Empresariais

Conteúdo observado e que precisa de decisão explícita:

- Contabilidade Especializada em Recife;
- segmentos: advogados, comércio/varejo, MEI, pousadas, restaurantes, salão de beleza, prestadores de serviço e oficina mecânica;
- controle financeiro e certificado digital;
- portais NFE, ERP e contabilidade online;
- alegações de segurança de dados e plataforma web;
- depoimentos nominais e duração das relações;
- endereço, telefone, e-mail, WhatsApp e formulário;
- alegações “mais de 5 mil clientes” e “15 anos de história”;
- página antiga de Imposto de Renda 2019;
- blog e política de privacidade.

As alegações numéricas, certificação digital, segurança e autorização precisam de revalidação documental antes de serem destacadas. A página “Imposto de Renda 2019” não deve ser republicada como conteúdo atual; deve ser atualizada, arquivada ou redirecionada com decisão registrada.

## Referências EUA e Europa — princípios aproveitáveis

### Pilot — Estados Unidos

A [Pilot](https://pilot.com/) não vende “contabilidade completa” em abstrato. Abre com uma tensão reconhecível — o fundador enterrado na contabilidade — e transforma serviços em perguntas: cortar custos, contratar, modelar caixa e preparar captação. Depois mostra pessoas, cenários, casos estruturados em problema/solução/resultado e caminhos de entrada.

**Aplicação:** fazer o visitante se reconhecer em uma situação antes de mostrar a lista de serviços. Para NSC, isso favorece entradas por restaurante, pousada ou varejo. Para RS, por decisões fiscais, organização financeira e obrigações.

### Graphite Financial — Estados Unidos

A [Graphite](https://www.graphitefinancial.com/) apresenta contabilidade, finanças, impostos, folha e RH como um sistema integrado. A linguagem trabalha controle, clareza e decisão; logos e depoimentos sustentam a promessa.

**Aplicação:** RS pode comunicar coordenação e tranquilidade sem parecer uma software house. Não transferir jargão de startups nem alegações grandiosas.

### Numbercloud — Reino Unido

A [Numbercloud](https://www.numbercloud.co.uk/) prova que um escritório contábil pode ter identidade editorial e setorial. Organiza a entrada em Creative Media, Creative Services e Creative Experiences, usa clientes reais como matéria visual e torna a especialização a própria navegação.

**Aplicação:** é a referência mais importante para NSC. Seus segmentos já existem; falta convertê-los em uma identidade e em histórias específicas, não em ícones ou cards intercambiáveis.

### Saffery — Reino Unido

A [Saffery](https://www.saffery.com/) combina grande amplitude de serviços com uma arquitetura limpa de serviços, setores, insights, pessoas e escritórios. O aprendizado é taxonomia e confiança institucional, não o volume de conteúdo.

**Aplicação:** RS pode separar serviços, conhecimento e acesso de cliente sem colocar tudo na home. NSC pode estruturar especialidades, soluções e provas em níveis claros.

### Practice Pages — Reino Unido, referência comercial

A [Practice Pages](https://www.practicepages.co.uk/) é menos sofisticada visualmente, mas relevante para o Atlas porque vende exatamente um redesign demonstrativo para contadores: reutiliza conteúdo existente, cria mockup antes da compra, hospeda, instala fundamentos de SEO/analytics e mantém o site. É uma referência de **modelo e redução de risco**, não de direção visual.

**Aplicação:** mostrar uma visão nova e explicar em linguagem simples o que será preservado, melhorado, medido e mantido.

## Três direções visuais recomendadas para teste

Nenhuma deve ser construída integralmente antes de uma escolha humana.

### RS — Rota A: Precisão tranquila

- fundo mineral claro, preto suave e um único acento profundo;
- serif editorial para títulos + sans humanista para leitura;
- documentos, linhas, tabelas, datas e marcações como linguagem gráfica;
- fotografia real do escritório, equipe ou Recife corporativo somente se autorizada;
- composição assimétrica, sem mural de cards;
- narrativa: “a empresa segue; números, obrigações e decisões ficam em ordem”.

### RS — Rota B: Escritório de decisão

- visual mais escuro e institucional, com planos de trabalho e luz natural;
- cada seção corresponde a um momento: organizar, cumprir, compreender, decidir;
- motion revela relações entre documento, prazo e decisão;
- contatos e área do cliente aparecem como utilidade, não propaganda.

### NSC — Rota A: Negócios de verdade

- fotografia editorial por setor, preferencialmente clientes/ambientes autorizados;
- cor viva controlada e tipografia franca;
- especialidades como capítulos visuais, não cards com ícones;
- depoimentos ligados ao setor e ao problema resolvido;
- narrativa: “entendemos a operação por trás do seu tipo de negócio”.

### NSC — Rota B: Sistema próximo

- combina calor humano com pequenas visualizações de fluxo financeiro/documental;
- portais e certificado aparecem como recursos concretos;
- formulário começa pelo tipo de negócio ou situação;
- motion funcional demonstra passagem de desorganização para visão clara.

## Padrões Apple-like que fazem sentido

1. **Uma mensagem por viewport**, sem obrigar uma tela cheia artificial.
2. **Escala tipográfica disciplinada**, com no máximo dois tipos e poucos pesos.
3. **Imagens como argumento**, não banco de imagens decorativo.
4. **Detalhe progressivo:** benefício primeiro; explicação e termos depois.
5. **Transições contínuas:** o objeto permanece reconhecível quando muda de estado.
6. **Feedback imediato:** hover, foco, envio e erro têm estados claros.
7. **Motion opcional:** respeitar `prefers-reduced-motion`; nenhuma prova ou instrução depende de animação.
8. **Orçamento de atenção:** um elemento dominante por cena.
9. **Performance percebida:** conteúdo prioritário aparece rapidamente; efeitos não bloqueiam interação.

Anti-padrão: “Apple-like” como fundo branco + produto flutuante + textos gigantes. Sem produto físico ou interface própria, isso vira imitação vazia.

## Kits e design systems licenciáveis

### 1. shadcn/ui — baseline recomendado

- **Licença observada:** MIT no [repositório oficial](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).
- **Custo:** zero para o código; custo de manutenção é interno.
- **Maturidade:** alta e ecossistema amplo.
- **Vantagem:** o código passa a pertencer ao projeto e pode ser modificado; bom para acessibilidade e estados de formulário.
- **Risco:** aparência shadcn reconhecível quando os defaults são mantidos; componentes de terceiros podem ter licenças diferentes.
- **Regra Atlas:** usar comportamento e estrutura, substituir tokens, proporções, raios, tipografia e composição. Preservar o aviso MIT conforme aplicável.

### 2. Tailwind Plus — candidato pago mais equilibrado

- **Licença:** compra individual, uso em produtos ilimitados e clientes ilimitados; não permite criar um builder concorrente. Ver [licença oficial](https://tailwindcss.com/plus/license).
- **Custo:** compra única; preço corrente deve ser confirmado no gate de compra.
- **Maturidade:** alta.
- **Vantagem:** blocos sólidos e responsivos economizam estrutura repetitiva.
- **Risco:** identidade Tailwind Plus e uso por muitos sites; licença por pessoa; fonte não pode ser redistribuída como biblioteca.
- **Regra Atlas:** usar como andaime invisível, não como template visual entregue sem transformação.

### 3. Untitled UI — candidato para Figma + React

- **Licença/custo:** versão Figma gratuita para um usuário e projetos comerciais; produtos Pro são compra única, com uso em projetos ilimitados, conforme [preços oficiais](https://www.untitledui.com/pricing?atp=newpulse). Termos completos precisam de revisão jurídica antes de uso em repositório/agência.
- **Maturidade:** alta no ecossistema Figma.
- **Vantagem:** tokens, variantes e ligação mais direta entre design e frontend.
- **Risco:** visual corporativo/SaaS facilmente reconhecível; volume excessivo induz composição por catálogo.
- **Regra Atlas:** candidato para acelerar documentação do sistema, nunca para determinar a direção.

### 4. Relume — candidato para arquitetura e wireframe

- **Licença:** uso pessoal/comercial e múltiplos produtos finais; proíbe redistribuir componentes e criar produto concorrente. Ver [acordo oficial](https://www.relume.ai/legal/licensing-agreement).
- **Custo:** assinatura; preço precisa ser confirmado no Laboratório.
- **Maturidade:** estabelecida em Webflow/Figma.
- **Vantagem:** sitemap, wireframe e blocos podem acelerar arquitetura.
- **Risco:** lock-in de fluxo, assinatura, assinatura codificada nos componentes e forte tendência a sites modulares semelhantes.
- **Regra Atlas:** testar apenas para informação/estrutura; direção visual continua autoral.

### 5. UI Skills / Motion AI Kit — conhecimento, não kit visual

- UI Skills organiza procedimentos por craft, motion, tipografia, acessibilidade e performance ([catálogo](https://www.ui-skills.com/agents/codex/)).
- Motion oferece biblioteca frontend e um kit pago para agentes com exemplos/documentação ([Motion](https://motion.dev/docs/react)).
- Licença e custo devem ser verificados por skill/produto.
- Úteis para consistência de execução, mas uma skill ruim pode apenas automatizar a mesmice.

## Stack recomendada para experimento

### Rota code-first — recomendada como baseline

- HTML/CSS para protótipo; Next.js/React somente quando estados, CMS ou manutenção justificarem;
- Tailwind CSS ou CSS Modules + design tokens próprios;
- shadcn/ui apenas para formulário, diálogo, navegação e acessibilidade;
- CSS Transitions/Web Animations; Motion para sequências e layout quando houver propósito;
- fontes open source ou licenciadas por cliente, registradas no manifesto de ativos;
- imagens próprias/autorizadas; formatos AVIF/WebP com dimensões explícitas;
- Playwright screenshots, Lighthouse, axe e teste de links/formulários;
- analytics e eventos definidos, mas não ativados em demonstração privada.

**Custo de software esperado no piloto:** zero, além dos modelos já disponíveis. Custo real: direção, produção de ativos e revisão.

### Rota design-first — candidata

- Figma gratuito/profissional conforme necessidade;
- Untitled UI Free ou biblioteca Atlas própria para fundação;
- implementação code-first após aprovação;
- Tailwind Plus apenas se o experimento provar redução de tempo sem perda de distinção.

### Stack não recomendada como padrão inicial

- Webflow/Framer para todos os clientes: velocidade possível, mas custo por site, hosting e lock-in podem ferir a tese de baixo custo;
- GSAP/WebGL como default: alto custo de manutenção e risco de performance;
- templates completos de marketplace: aceleram justamente a aparência intercambiável que queremos evitar.

## Regras contra estética genérica de IA

1. Proibir os adjetivos “moderno”, “clean”, “premium” e “impactante” desacompanhados de decisões verificáveis.
2. Não iniciar pelo código. Primeiro: conteúdo, tensão, provas, material visual e três rotas.
3. Nenhuma rota pode diferir apenas por cor, fonte e fotografia.
4. Limite inicial de cards: se três seções seguidas usam cards, redesenhar ao menos duas.
5. Não usar gradiente, glow, grid pontilhado, glassmorphism, pill ou mockup flutuante sem função específica.
6. Evitar ícones abstratos para serviços que podem ser explicados por situação, documento, prazo ou pessoa.
7. Cada site recebe uma “matéria própria”: documentos/precisão para RS; setores/clientes para NSC.
8. Hero intercambiável é rejeitado: se trocar o logo e servir para outro contador, falhou.
9. Motion precisa declarar intenção, gatilho, duração, fallback e orçamento de desempenho.
10. Toda referência registra o princípio estudado e o que não pode ser copiado.
11. O kit nunca fornece o acabamento final; tokens padrão são sempre substituídos.
12. Auditor separado avalia clichês, mobile, verdade, acessibilidade e conversão.

## Preservação do conteúdo legado

O redesign não começa apagando o site antigo. Começa criando uma fotografia reproduzível dele.

### Inventário obrigatório

Para cada URL:

- URL, status, canonical, title, description, H1 e headings;
- texto, imagens, PDFs, formulários, links internos/externos e CTAs;
- data observada, hash do conteúdo e screenshot desktop/mobile;
- finalidade, público, proprietário e atualidade;
- backlinks/tráfego/conversão, quando o cliente autorizar acesso;
- destino: preservar, corrigir, reescrever, fundir, arquivar ou remover;
- nova URL e regra de redirect.

### Regras de migração

1. Preservar o domínio sempre que possível.
2. Preservar URLs úteis; quando mudarem, mapear uma a uma para o destino semanticamente equivalente.
3. Usar redirect permanente adequado, sem mandar todas as páginas para a home. O Google recomenda mapa preciso de URLs e redirects em mudanças de site ([guia oficial](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?rd=1&visit_id=639173949904219235-3045031717), [documentação de redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects)).
4. Atualizar links internos, canonicals, sitemap, robots e dados estruturados.
5. Não publicar texto antigo como atual: registrar atualização, arquivo ou remoção.
6. Preservar conteúdo legal, contato, áreas restritas e integrações até validação funcional.
7. Recriar formulários somente depois de confirmar destino, consentimento, privacidade e logs.
8. Comparar inventário antigo e novo deterministicamente; nenhum item some sem decisão.
9. Manter rollback e cópia recuperável do legado.
10. Monitorar 404, indexação, tráfego e eventos após lançamento.

### Regra específica para os dois sites

- **RS:** não romper links da área restrita, condomínio ou utilidades antes de saber se clientes dependem deles.
- **NSC:** verificar portais NFE/ERP, certificado digital, formulário e WhatsApp; validar depoimentos e números antes de reutilizar; tratar conteúdo datado de IR como migração editorial, não simples cópia.

## Experimentos recomendados

### EXP-UIKIT-001 — fundação sem rosto de kit

Implementar o mesmo protótipo de três cenas com:

- shadcn/ui + tokens próprios;
- Tailwind Plus modificado;
- componentes próprios mínimos.

Medir tempo, tamanho do código, acessibilidade, defeitos, semelhança percebida com templates e capacidade de manutenção. Não comprar Tailwind Plus antes de confirmar preço/licença e desenho do teste.

### EXP-RS-ROUTES-001

Produzir somente moodboard + hero estático + uma seção de processo para “Precisão tranquila” e “Escritório de decisão”. Teste cego com critérios: confiança, clareza, especificidade, vontade de continuar e adequação a Recife.

### EXP-NSC-ROUTES-001

Comparar “Negócios de verdade” e “Sistema próximo”, usando conteúdo legado real. Hipótese principal: especialidade setorial + prova reconhecível gera mais compreensão que uma lista genérica de vantagens.

### EXP-MIGRATION-001

Executar crawl/inventário determinístico completo dos dois sites, sem publicar nada. Critério: 100% das URLs e ativos conhecidos recebem hash, screenshot, destino proposto e validação humana para alegações sensíveis.

## Recomendação ao fundador

1. Aprovar apenas a pesquisa e os quatro experimentos como candidatos de Laboratório.
2. Escolher uma dupla de rotas para cada empresa antes de qualquer landing completa.
3. Fazer o inventário legado antes de mudar arquitetura ou texto.
4. Usar shadcn/ui como baseline técnico, não visual.
5. Não comprar kits até o teste demonstrar economia real de trabalho.
6. Manter RS e NSC visualmente distintas desde o primeiro moodboard.
7. Avaliar o site por confiança, reconhecimento e ação mensurável — não por quantidade de efeitos.

## Fontes principais

- [RS Consultoria](https://rsconsultoria-pe.com.br/) e [NSC](https://nscsolucoesempresariais.com.br/) — conteúdo público observado.
- [Pilot](https://pilot.com/), [Graphite](https://www.graphitefinancial.com/), [Numbercloud](https://www.numbercloud.co.uk/), [Saffery](https://www.saffery.com/) — referências EUA/Reino Unido.
- [Apple HIG — Motion](https://developer.apple.com/design/human-interface-guidelines/motion?changes=_2_2) — propósito e acessibilidade.
- [shadcn/ui MIT](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md), [Tailwind Plus License](https://tailwindcss.com/plus/license), [Untitled UI Pricing](https://www.untitledui.com/pricing?atp=newpulse), [Relume License](https://www.relume.ai/legal/licensing-agreement) — licença/custo.
- [Google Search Central — site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?rd=1&visit_id=639173949904219235-3045031717) e [redirects](https://developers.google.com/search/docs/crawling-indexing/301-redirects) — preservação técnica.

