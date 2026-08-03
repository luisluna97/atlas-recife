# Relatório do Cientista — sites premium e distintos com IA em 2026

## Registro e proveniência

- **ID:** `RSR-AI-PREMIUM-WEB-2026-v0`
- **Estado:** pesquisa para decisão e desenho de experimentos; nenhuma ferramenta incorporada
- **Data de corte:** 2026-08-03
- **Executor:** agente `scientist`, modelo Codex/GPT-5, sob missão do Maestro
- **Entradas internas:** `ATLAS.md`, `ATLAS_Recife_Handoff_Codex.md`, Manual Fundador v0.1, `DECISIONS.md`, `AGENTS.md`, `05-agents/scientist.md`, ADR-0043, ADR-0045, ADR-0046 e ADR-0047
- **Entradas externas:** páginas oficiais, documentação, GitHub, Reddit e resultados públicos indexados do X; links no corpo e no inventário de fontes
- **Método:** pesquisa exploratória orientada por hipóteses; triangulação entre fontes oficiais, comunidades e inspeção da arquitetura de referência do Harvey; classificação de ferramentas por função, custo, licença, maturidade, risco e lock-in
- **Classes:** fatos de produto e licença são `observed`; interpretação de padrões e recomendações são `inferred`; efeitos esperados são `hypothesis`
- **Limitações:** não houve benchmark prático, instalação, compra ou teste A/B; preço e planos mudam; X ofereceu baixa cobertura pública/indexável; popularidade em GitHub não prova adequação; estética é contextual e não pode ser reduzida a um score automático.

## Resposta executiva

O Atlas não precisa de “uma IA que faça sites bonitos”. Precisa de um **sistema de direção criativa assistido por IA**. As ferramentas atuais já geram código e páginas com velocidade, mas convergem para a média quando recebem briefs genéricos: hero enorme, gradiente roxo, cartões arredondados, brilho, fonte geométrica e animações de entrada. Essa crítica aparece repetidamente em comunidades de web design e vibe coding ([Reddit: por que todos os sites de IA parecem iguais](https://www.reddit.com/r/webdesign/comments/1m2om61), [Reddit: ferramentas diferentes, mesmo resultado](https://www.reddit.com/r/vibecoding/comments/1o18bb4/why_do_all_ai_generated_websites_look_the_same/), [Reddit: homogeneização em 2026](https://www.reddit.com/r/webdesign/comments/1t3ymps/so_many_websites_look_the_same_with_ai/)). É evidência anedótica, não estudo controlado, mas o padrão é coerente com nossas próprias tentativas rejeitadas.

A solução não é acumular prompts de “premium”. É separar papéis, obrigar divergência visual antes do código, trabalhar com referências de princípios — não cópias — e auditar narrativa, tipografia, composição, materialidade, movimento, conversão e desempenho em gates distintos.

**Recomendação:** adotar um sistema operacional criativo reutilizável, com três rotas visuais realmente divergentes, escolha humana precoce, protótipo curto e motion intencional. Código e IA aceleram execução; direção, seleção e gosto permanecem responsabilidades explícitas.

## O que Harvey ensina — sem virar template Harvey

Na página atual, o Harvey abre com uma promessa curta, mostra imediatamente confiança institucional, conecta o produto a tarefas reconhecíveis, intercala prova social, histórias de clientes, impacto mensurável, segurança e uma chamada final. A página não depende de um único “hero bonito”; ela acumula confiança em uma sequência ([Harvey.ai](https://www.harvey.ai/)).

Princípios transferíveis:

1. **Uma ideia por cena.** A rolagem controla o ritmo e evita despejar argumentos.
2. **Produto ou trabalho visível.** Interface, documentos, pessoas, casos e resultados substituem decoração abstrata.
3. **Tipografia com hierarquia editorial.** Tamanho, contraste, comprimento de linha e espaço são parte da narrativa.
4. **Prova cedo.** Marcas, história, publicações, equipe, casos ou método reduzem o risco percebido.
5. **Motion como orientação.** Movimento revela relações e mudança de estado; não serve apenas para “dar vida”.
6. **Sistema consistente, cenas variadas.** A identidade permanece, mas cada seção não repete o mesmo cartão.

O que não transferir automaticamente: estética de empresa de tecnologia, quantidade de prova de uma companhia global, WebGL, menus complexos ou alegações de impacto sem dados. Escritórios locais precisam de autoridade verdadeira, especialidade compreensível, situações reconhecíveis e contato responsável.

## Por que a IA cai na mesmice

Esta é uma inferência sustentada por observação comunitária e comportamento conhecido das ferramentas:

- briefs falam em adjetivos (“moderno”, “premium”, “impactante”), não em decisões visuais verificáveis;
- modelos escolhem padrões frequentes e seguros do material de treinamento;
- bibliotecas de componentes e Tailwind tornam cartões e grids a resposta de menor resistência;
- uma única geração mistura estratégia, copy, design e código, sem crítica independente;
- o usuário pede refinamentos locais em vez de descartar uma direção fraca;
- faltam ativos específicos: fotografia real, arquivos, texturas, documentos, mapas, objetos e voz própria;
- referências são copiadas pela superfície, sem entender o mecanismo narrativo;
- movimento é adicionado no fim como efeito, não concebido junto da experiência;
- não existe vocabulário de exclusão: o agente não sabe quais clichês são proibidos naquele projeto.

## Radar de ferramentas — funções diferentes, não substitutas

Os custos são faixas para triagem e devem ser confirmados no Laboratório antes de uso.

| Categoria | Candidatos | Custo/licença/maturidade | Utilidade provável | Risco e lock-in | Decisão científica |
|---|---|---|---|---|---|
| Geração de interface/código | v0, Claude/Codex, Lovable, Bolt, Replit Agent | v0 tem plano grátis e planos pagos desde US$20/mês ([preços oficiais](https://v0.app/docs/pricing)); demais são proprietários e baseados em assinatura/créditos | explorar estrutura, implementar componentes e gerar variantes rápidas | convergência estética, custo variável, dependência do provedor, código desigual | **Testar como executor, nunca como diretor criativo** |
| Direção visual e protótipo | Figma/Make, Framer, Webflow, Relume | proprietários; free tiers limitados; Webflow alterou preços e créditos em 2026 ([aviso oficial](https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026)) | moodboards, sistemas, protótipos, handoff e CMS | seat + hospedagem, exportação parcial, dependência de editor | **Testar um fluxo Figma-first e um code-first** |
| Conhecimento procedural para agentes | [UI Skills para Codex](https://www.ui-skills.com/agents/codex/), [OpenAI Skills](https://github.com/openai/skills), Motion AI Kit | UI Skills agrega instruções de acessibilidade, motion, craft, tipografia e performance; licença de cada skill precisa ser verificada; Motion+ é pago | reduz esquecimento de regras e cria checklists reproduzíveis | skill pode ser desatualizada, conflitante ou “slop” instrucional; não garante gosto | **Enviar skills selecionadas ao Laboratório; não instalar em massa** |
| Animação frontend | CSS/Web Animations API, Motion, GSAP/ScrollTrigger, Lenis | Motion possui núcleo acessível e integração React; GSAP e complementos exigem checagem de licença atual; Lenis é open source | transições, scroll-linked, layout, SVG e microinterações | excesso de JS, acessibilidade, enjoo, manutenção e Core Web Vitals | **Motion/CSS como baseline; GSAP só se o caso justificar** |
| Motion gerado/agente | [Motion, da Mosaic](https://motion.so/blog/introducing-motion) | produto proprietário lançado em 2026; API/MCP, custo a confirmar | gerar vídeo/motion graphics por agente; não é a biblioteca Motion para React | confusão de nome, custo, consistência de marca | **Candidato para peças e demonstrações, não baseline do site** |
| Análise de criativos de anúncios | [Motion Creative Analytics no Claude](https://claude.com/connectors/motion) | conector proprietário ligado à plataforma de creative analytics | descobrir padrões em anúncios Meta, fadiga e desempenho criativo | depende de dados/campanhas; não anima frontend nem desenha site | **Útil depois, para mídia; fora do pipeline de construção visual** |
| 3D/WebGL | Three.js e [React Three Fiber](https://github.com/pmndrs/react-three-fiber) | R3F é MIT, maduro e ativo; 31 mil estrelas e versão recente observadas em 2026 | cenas autorais, produto 3D, mapas e experiências especiais | alto custo de arte, GPU, mobile, acessibilidade e manutenção | **Exceção premium, não componente padrão** |
| Ativos visuais | fotografia real, ilustração editorial, modelos de imagem/vídeo, Spline/Rive/Lottie | mistura de autoria, assinatura e geração; licenças por ativo | materialidade e identidade; evita páginas feitas só de UI | artefatos sintéticos, mãos/texto errados, direitos e representação falsa | **Fotografia/arte dirigida antes de geração decorativa** |
| Inspiração e benchmark | Awwwards, SiteInspire, Godly, Land-book, Lapa Ninja, Mobbin, referências setoriais | muitos têm acesso gratuito parcial; termos/licenças variam | repertório, padrões, motion e composição | copiar, seguir moda, viés SaaS e seleção por beleza sem conversão | **Biblioteca de princípios com tags e proveniência** |
| Auditoria visual/técnica | Playwright screenshots, Lighthouse, axe-core, visual regression, testes reais | grande parte open source; serviços gerenciados podem cobrar | responsividade, acessibilidade, regressão, performance e consistência | snapshots frágeis; scores automáticos não avaliam gosto nem verdade | **Baseline obrigatório e determinístico** |

### Duas ferramentas chamadas Motion

Há uma ambiguidade importante:

- **Motion / Motion for React** é uma biblioteca de animação de interface. Sua documentação cobre scroll, layout, gestos, SVG e redução de movimento, e relata um engine híbrido baseado em APIs do navegador ([documentação oficial](https://motion.dev/docs/react)).
- **Motion Creative Analytics**, acessível pelo conector do Claude, analisa desempenho de criativos de anúncios. Não cria animação de site.
- **Motion, da Mosaic AI Labs**, é um agente de motion design/vídeo anunciado em junho de 2026, acessível por MCP/API. É outra categoria.

Confundir esses produtos leva a decisões erradas de arquitetura.

## Novidades relevantes em 2026

1. **Skills de design estão virando camada operacional do agente.** UI Skills organiza conhecimento por motion, craft, taste, tipografia, cor, acessibilidade e performance. O ganho potencial não é “mais uma IA”, mas persistência de procedimentos entre sessões ([UI Skills](https://www.ui-skills.com/agents/codex/)).
2. **Ferramentas de animação estão oferecendo kits específicos para agentes.** Motion+ anuncia skill e acesso a centenas de exemplos para construir e auditar animação ([Motion for React](https://motion.dev/docs/react)). Isso merece benchmark, sobretudo contra documentação oficial sem assinatura.
3. **Agentes especializados de motion/vídeo passam a expor MCP/API.** O lançamento da Mosaic indica que cenas e vídeos podem ser tratados como jobs; ainda é produto recente e precisa de teste de consistência, custo e direitos ([anúncio](https://motion.so/blog/introducing-motion)).
4. **Construtores se tornam agentic, mas não resolvem direção.** v0, Figma Make e novas gerações de builders reduzem o tempo entre intenção e protótipo; a necessidade de edição humana e sistema visual aumenta, não desaparece.
5. **Sites precisam servir humanos, busca e agentes.** Trabalhos recentes propõem interfaces “agent-ready”; para o Atlas, a aplicação prudente é semântica, acessibilidade, dados estruturados, conteúdo verificável e ações claras — sem sacrificar a experiência humana ([paper de 2026](https://arxiv.org/abs/2607.12056)).
6. **O premium está ficando mais contido.** Microanimações e materialidade específica podem transmitir mais intenção que rolagens cinematográficas pesadas. Essa é tendência editorial, não regra universal.

## Sistema Operacional Criativo Atlas (SOCA v0)

### Gate 0 — verdade e objetivo

Entradas: evidências do Observatório, ativos autorizados, especialidades declaradas, público hipotético, restrições do setor e evento de conversão. Sem isso, não há geração visual.

Saída: uma frase de trabalho: **“Ajudar [público] a reconhecer [situação], confiar em [capacidade demonstrável] e realizar [próxima ação mensurável].”** Hipóteses permanecem rotuladas.

### Gate 1 — briefing de tensão, não de adjetivos

Registrar:

- o que o visitante sente antes e depois;
- qual objeto, ambiente ou comportamento pertence de verdade ao negócio;
- três provas disponíveis;
- uma ação principal;
- cinco clichês proibidos;
- restrições legais, de acessibilidade e desempenho;
- referências “por quê”, nunca “faça igual”.

### Gate 2 — pesquisa visual com proveniência

Coletar 12–20 referências de fontes e épocas diferentes. Cada recorte recebe URL, data, autor/estúdio quando disponível, elemento estudado e proibição de cópia. Classificar por: ritmo, tipografia, composição, cor, material, fotografia, interação, prova e conversão.

### Gate 3 — três rotas divergentes

Gerar três direções antes do site:

- **Editorial:** tipografia, texto, documentos, fotografia e ritmo de publicação;
- **Material/local:** espaços, objetos, texturas, mapas e sinais do território;
- **Sistêmica/digital:** interface, dados, diagramas e movimento de processo.

Cada rota entrega moodboard, hero estático, cena intermediária, sistema tipográfico, paleta, gesto de motion e anti-padrões. Divergência é testada: se apenas cor e fonte mudaram, o gate falhou.

### Gate 4 — escolha humana precoce

Luis/direção escolhe uma rota ou manda descartar. Avaliação cega de cinco critérios: distintividade, adequação ao negócio, clareza, confiança e potencial de conversão. Não se investe em código completo antes dessa escolha.

### Gate 5 — protótipo de três cenas

Implementar somente:

1. primeira dobra;
2. mecanismo de valor/especialidade;
3. conversão.

Testar desktop e celular. A demonstração precisa funcionar sem animação e sem texto explicativo externo.

### Gate 6 — motion storyboard

Antes de codificar animação, descrever: gatilho, elemento, duração, easing, intenção e fallback de `prefers-reduced-motion`. Regra: cada movimento deve orientar atenção, demonstrar mudança ou dar feedback. Efeito sem função é removido.

### Gate 7 — conteúdo e humanização

Copy nasce dos problemas, provas e linguagem do setor. Depois passa por `atlas-public-language`: corta jargão, cadência de IA e exagero, sem inventar fatos. O texto deve sobreviver ao teste “um empresário entende em cinco segundos?”.

### Gate 8 — auditorias independentes

- **Narrativa:** a sequência conduz ao próximo passo?
- **Visual:** há assinatura ou só tendências?
- **Tipografia:** hierarquia e leitura funcionam em tamanhos reais?
- **Motion:** propósito, redução de movimento e desempenho?
- **Conversão:** ação principal, contexto preservado e tracking projetado?
- **Técnica:** Lighthouse, axe, responsividade, links, formulários e regressão visual.
- **Verdade/compliance:** alegações, ativos, privacidade e regras setoriais.

IA pode apontar defeitos; aprovação estética final não é automática.

### Gate 9 — aprendizado pós-publicação

Versionar hipótese, rota, elementos, eventos e resultados. Medir primeiro: avanço para especialidade/serviço, CTA, início de contato, envio válido e qualidade do lead no CRM. A estética entra como hipótese, não como causa provada. Testes alteram uma família de variável por vez quando o tráfego permitir.

## Arquitetura de agentes recomendada

Não criar um “Designer IA” onipotente. Separar contratos:

1. **Pesquisador Visual:** repertório, fontes, tags, direitos e princípios.
2. **Diretor Criativo:** três rotas, tensão e anti-padrões.
3. **Designer de Sistemas:** tokens, tipografia, grid, componentes e estados.
4. **Motion Designer:** storyboard, timing, reduced motion e performance.
5. **Builder:** implementação fiel e responsiva.
6. **Copywriter + gate Humanize:** clareza pública sem falsidade.
7. **Auditor Visual/Técnico:** comparação, regressão, acessibilidade e clichês.
8. **Growth/Analytics:** eventos, funil, hipóteses e resultado.

O Diretor e o Auditor não devem ser a mesma execução/modelo quando a decisão for crítica. Tarefas determinísticas — screenshots, diffs, lint, métricas, extração de tokens e validação — ficam em código.

## Scorecard de qualidade para gate, não ranking universal

Avaliar de 0 a 4 com justificativa e evidência:

- especificidade da marca;
- clareza em cinco segundos;
- força da primeira cena;
- coerência narrativa;
- originalidade composicional;
- tipografia;
- qualidade e verdade dos ativos;
- motion com propósito;
- confiança/prova;
- conversão e mensuração;
- mobile;
- acessibilidade e performance.

**Bloqueios:** ativo enganoso, alegação sem fonte, contraste crítico, ação que não funciona, cópia identificável de referência, movimento incompatível com redução de movimento ou ausência de versão mobile. Não somar tudo em uma nota única antes de calibrar avaliadores.

## Experimentos recomendados

### EXP-DESIGN-001 — divergência antes do código

- **Dataset:** Leonardo + RS + um terceiro segmento contrastante.
- **Baseline:** prompt único → página completa.
- **Candidato:** SOCA Gates 0–5, três rotas e escolha humana.
- **Métricas:** distância entre rotas por checklist, preferência cega, tempo, custo, retrabalho e taxa de clichês.
- **Sucesso:** três rotas materialmente distintas, preferência humana clara e no máximo 30% de aumento de tempo até o protótipo — compensado por menos retrabalho posterior.

### EXP-DESIGN-002 — skills como procedimento

- **Candidatos:** subconjunto de UI Skills para craft, tipografia, motion, performance e acessibilidade; Motion AI Kit apenas como braço pago.
- **Baseline:** documentação e contrato Atlas sem skills externas.
- **Métricas:** defeitos por auditoria, aderência, tokens, tempo, conflitos e licença.
- **Gate:** nenhuma instalação antes de inventário e revisão integral de cada skill.

### EXP-DESIGN-003 — motion mínimo vs expressivo

- **Variantes:** CSS/Motion discreto; Motion narrativo; GSAP/scroll avançado quando justificado.
- **Métricas:** percepção humana, completion da tarefa, Lighthouse, long tasks, tamanho do JS e reduced-motion.
- **Critério:** efeito expressivo só vence se aumentar compreensão/preferência sem ultrapassar orçamento técnico.

### EXP-DESIGN-004 — auditor de “cara de IA”

- **Gold set inicial:** 30 páginas humanas e assistidas por IA, rotuladas cegamente por três revisores.
- **Variáveis:** cartões repetidos, gradiente, glow, excesso de rounded, ícones genéricos, hero intercambiável, frases vazias, fotos sintéticas, repetição de composição.
- **Objetivo:** produzir alertas e exemplos, não detector de autoria.
- **Risco:** confundir tendência com IA e punir convenções úteis.

### EXP-DESIGN-005 — pipeline visual determinístico

- screenshots em breakpoints fixos;
- comparação visual por versão;
- Lighthouse e axe;
- links/formulário/CTA;
- captura com e sem movimento reduzido.

Sucesso: relatório reproduzível ligado ao commit, navegador, viewport, executor e data.

## Recomendação de stack inicial de baixo custo

Sem incorporar nada ainda, a hipótese mais alinhada ao Atlas é:

- **execução:** Next.js/React ou HTML/CSS conforme complexidade, sem builder proprietário obrigatório;
- **sistema:** CSS variables/tokens e componentes próprios por cliente, não um tema Atlas visível;
- **motion baseline:** CSS + Web Animations/Motion quando React justificar;
- **3D:** somente por conceito e orçamento;
- **pesquisa:** biblioteca interna de referências com proveniência;
- **qualidade:** Playwright + Lighthouse + axe + revisão humana;
- **IA:** pesquisa, divergência, crítica e implementação assistida;
- **humano:** escolha de rota, gosto, verdade, contexto cultural e decisão final.

Isso reduz lock-in e custo, preserva código e permite usar modelos diferentes. Framer/Webflow podem vencer em clientes que precisam editar visualmente, mas precisam provar custo total, exportação, manutenção e hospedagem no Laboratório.

## Decisões recomendadas ao fundador

1. Aceitar o SOCA v0 como **protocolo de Laboratório**, não padrão produtivo ainda.
2. Suspender páginas completas geradas por um único prompt.
3. Exigir três rotas visuais antes de qualquer demo de alto investimento.
4. Criar biblioteca Atlas de referências por princípio e setor, com fonte e proibição de cópia.
5. Testar UI Skills seletivamente; rejeitar instalação em massa.
6. Usar Motion/CSS como baseline de animação; reservar GSAP/WebGL para casos justificáveis.
7. Tratar Harvey como benchmark de construção de confiança, não estilo a reproduzir.
8. Vincular sempre site bonito a ação e mensuração: encontrar → entender → confiar → contatar → atribuir → aprender.

## Inventário de fontes principais

- [Harvey](https://www.harvey.ai/) — referência visual e arquitetura pública observada em 2026-08-03.
- [UI Skills para Codex](https://www.ui-skills.com/agents/codex/) — catálogo procedural; não incorporado.
- [OpenAI Skills no GitHub](https://github.com/openai/skills) — formato/ecossistema e licenças por skill.
- [Motion for React](https://motion.dev/docs/react) — animação frontend e AI Kit.
- [Motion/Mosaic](https://motion.so/blog/introducing-motion) — agente recente de motion/video.
- [Claude Motion connector](https://claude.com/connectors/motion) — creative analytics; categoria diferente.
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) — WebGL/3D React, MIT.
- [v0 pricing](https://v0.app/docs/pricing) — custo oficial observado.
- [Webflow update 2026](https://help.webflow.com/hc/en-us/articles/51059955082387-Updated-pricing-and-simplified-plans-for-May-2026) — preço/créditos e risco de plataforma.
- [Reddit: same AI website design](https://www.reddit.com/r/webdesign/comments/1m2om61), [Reddit: vibe tools look alike](https://www.reddit.com/r/vibecoding/comments/1o18bb4/why_do_all_ai_generated_websites_look_the_same/), [Reddit: 2026 sameness](https://www.reddit.com/r/webdesign/comments/1t3ymps/so_many_websites_look_the_same_with_ai/) — percepção comunitária, tratada como anedótica.
- [X: crítica a repositórios de skills sem curadoria](https://x.com/PovilasKorop/status/2030975143816618201) — sinal público isolado; cobertura do X foi limitada.
- [Agent-ready websites, 2026](https://arxiv.org/abs/2607.12056) — direção emergente de legibilidade e ação por agentes.

## Conclusão

O salto de qualidade não virá de escolher “a melhor IA”. Virá de impedir que a IA decida tudo de uma vez. O Atlas deve transformar pesquisa visual, divergência, escolha, motion, humanização, auditoria e aprendizado em um processo rastreável. Assim, cada site pode parecer pertencer ao cliente — não ao modelo que o gerou — enquanto continua preparado para converter e medir.
