# Research Record — distinção visual em sites assistidos por IA

- **ID:** `RES-VISUAL-DISTINCTION-0001`
- **Versão/data:** `v0.1` — `2026-07-31`
- **Executor:** Cientista (`cientista_antimesmice`)
- **Estado:** pesquisa candidata; adoção depende do Laboratório
- **Pergunta:** como evitar que os sites do Atlas reproduzam a estética média de geradores de IA?

## Síntese

Não há evidência suficiente para justificar fine-tuning como primeiro passo. A
intervenção de maior retorno é treinar e restringir o **processo de design**:
direção de arte antes do código, geração divergente, referências controladas,
crítica independente e avaliação de similaridade.

A homogeneização não nasceu com a IA: templates, frameworks, padrões de mercado
e convenções de usabilidade já aproximavam os sites. Modelos generativos aceleram
essa convergência quando recebem prompts vagos e escolhem a continuação visual
mais provável.

## Evidências

### Pesquisa e fontes técnicas

- [Interrogating Design Homogenization in Web Vibe Coding](https://arxiv.org/abs/2603.13036): geração sem fricção pode reforçar convenções dominantes; recomenda inserir reflexão e decisões deliberadas.
- [Graphic Design Intelligence: A Survey](https://arxiv.org/abs/2309.01371): design combina iterativamente forma, cor, tipografia e layout; IA deve assistir o processo, não substituir julgamento.
- [Generative AI in co-creative design](https://arxiv.org/abs/2401.14484): apoia variabilidade, imperfeição produtiva e avaliação iterativa na cocriação.
- [Staying true to your identity with Material](https://design.google/library/staying-true-to-your-identity-material-branding): sistemas funcionais ainda permitem diferenciação por tipo, cor, iconografia, imagem, voz, interação e movimento.
- [UIClip](https://uimodeling.github.io/uiclip/): referência técnica para avaliação de screenshots por qualidade e relevância visual.
- [Perceived visual similarity of web pages](https://www.tandfonline.com/doi/abs/10.1080/10447318.2011.555308): estrutura, layout, fundo e conteúdo influenciam a similaridade percebida.

### Evidência qualitativa — Reddit

Relatos são anedóticos e não provam causalidade, mas ajudam a identificar sinais
percebidos por profissionais:

- [Why is every AI website designed the same?](https://www.reddit.com/r/webdesign/comments/1m2om61/why_is_every_ai_website_designed_the_same/): recorrência percebida de roxo, cards, sombras e estética SaaS.
- [So many websites look the same with AI](https://www.reddit.com/r/webdesign/comments/1t3ymps/so_many_websites_look_the_same_with_ai/): referências, sketches, conteúdo e ativos visuais próprios são apontados como diferenciais; padrões familiares ainda protegem a usabilidade.

## Padrões a evitar quando não houver justificativa

- hero central com headline genérica, dois CTAs e mockup flutuante;
- gradiente roxo/azul como substituto de identidade;
- excesso de cards, cantos arredondados, sombras e glassmorphism;
- blobs, ícones e ilustrações genéricos;
- mesma grade e mesma ordem de seções em todos os clientes;
- copy intercambiável entre empresas;
- começar a codificar antes de formular uma tese de direção de arte.

Esses elementos não são proibidos. Exigem justificativa ligada à empresa,
usuário e objetivo.

## Processo recomendado

1. Reunir estratégia, público, verdades de marca, ativos reais, voz, contexto local e concorrentes.
2. Criar três rotas visuais divergentes antes do código.
3. Para cada rota, registrar tese, 6–12 referências variadas e anti-referências.
4. Referenciar atributos, nunca instruir “copie este site”; registrar origem e licença.
5. Diferenciar ao menos quatro eixos: tipografia, composição, paleta/materialidade, imagem/ilustração, voz e movimento.
6. Manter convenções que sustentem navegação, acessibilidade e confiança.
7. Separar os papéis de pesquisa visual, direção de arte, design, implementação e crítica.
8. Executar crítica de marca/usuário e depois crítica de distinção/usabilidade.
9. Exigir que a rota explique por que pertence àquela organização e o que recusou deliberadamente.
10. Preservar referências, decisões, screenshots, versões, executor, modelos e custo.

## Recomendação

Testar o [[../07-experiments/exp-0006-visual-distinction-protocol-v0|Protocolo Atlas de Distinção Visual v0]] no Laboratório. Não incorporar ao processo oficial antes de comparar custo, diversidade, usabilidade e capacidade de atribuição das rotas.

## Riscos

- confundir distinção com dificuldade de uso;
- extravagância sem função;
- cópia ou uso indevido de referências protegidas;
- estereótipos sobre Recife ou o setor;
- aumento de tempo e tokens;
- manipulação de uma futura métrica de similaridade;
- confiar em CLIP, SSIM ou outro número como substituto de crítica humana.

