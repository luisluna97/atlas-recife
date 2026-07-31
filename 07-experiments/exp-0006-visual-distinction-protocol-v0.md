# EXP-0006 — Protocolo Atlas de Distinção Visual v0

- **Estado:** proposto; não iniciado
- **Dono:** Diretor de Arte
- **Apoio:** Cientista, Designer, Implementador e Auditor
- **Objeto inicial:** próximos conceitos visuais privados do Atlas

## Hipótese

Um processo com direção de arte explícita, três rotas divergentes, referências
controladas e crítica independente gera propostas mais atribuíveis à empresa e
menos parecidas com defaults de IA, sem reduzir usabilidade ou acessibilidade.

## Entradas obrigatórias

- verdade de marca e evidências verificáveis;
- público, intenção e tarefa principal;
- concorrentes e acervo Atlas comparável;
- ativos disponíveis e suas licenças;
- referências e anti-referências com proveniência;
- orçamento de tempo, tokens e ferramentas.

## Método

1. Produzir três teses de direção de arte antes de gerar interface.
2. Tornar as rotas divergentes em composição, tipo, cor/materialidade e linguagem visual.
3. Manter o mesmo conteúdo e os mesmos requisitos funcionais para comparação justa.
4. Renderizar cada rota nos mesmos viewports.
5. Aplicar duas revisões cegas: marca/atribuição e distinção/usabilidade.
6. Comparar com concorrentes e entregas anteriores sem formar score oficial na v0.

## Instrumentos candidatos ao Laboratório

- pHash e SSIM: repetição visual literal;
- embeddings CLIP/UIClip: proximidade visual/semântica;
- tokens: fontes, cores, raios, sombras e densidade de cards;
- árvore de layout: ordem, proporções e repetição de seções;
- julgamento humano cego: “a qual organização esta rota pertence e por quê?”.

Ferramentas são candidatas; nenhuma instalação ou adoção está autorizada por este documento.

## Gate humano

- [ ] cada rota possui tese e anti-tese;
- [ ] quatro ou mais eixos têm decisões específicas da organização;
- [ ] nenhum default visual aparece sem justificativa;
- [ ] referências têm origem, atributo usado e licença/limite registrado;
- [ ] conteúdo não seria intercambiável com outro cliente;
- [ ] navegação, contraste, teclado, responsividade e clareza permanecem adequados;
- [ ] crítico independente não participou da geração;
- [ ] escolhas recusadas e custo estão registrados.

## Métricas experimentais

- diversidade entre as três rotas;
- proximidade com concorrentes e acervo Atlas;
- proporção de componentes default justificados;
- aderência à tese de marca;
- atribuição/lembrança em teste rápido;
- usabilidade e acessibilidade;
- rodadas, tempo, tokens e custo.

## Critério inicial de sucesso

Ao menos duas rotas devem ser reconhecidas como diferentes entre si e atribuíveis
à organização por revisores cegos, sem regressão material de usabilidade ou
acessibilidade. Limiares quantitativos permanecem abertos até formar baseline.

## Proveniência

Pesquisa-base: [[../06-research/visual-distinction-ai-sites-v0]]. Executor e
versão de cada artefato deverão constar no manifesto do experimento.

