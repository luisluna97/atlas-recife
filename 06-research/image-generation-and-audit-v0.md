# Research Record — geração e auditoria de imagens

- **ID:** `RES-IMAGE-0001`
- **Versão/data:** `v0.1` — `2026-07-31`
- **Executor:** Cientista (`cientista_modelos_imagem`)
- **Estado:** pesquisa candidata; modelos externos dependem de Laboratório e orçamento

## Conclusão

Não existe um único melhor gerador nem um score capaz de certificar ausência de
erros. O Atlas deve usar um bake-off curto entre famílias de modelos e aprovação
híbrida: código determinístico, crítica por modelo visual e revisão humana.

## Candidatos

| Candidato | Uso mais promissor | Limites principais |
|---|---|---|
| OpenAI GPT Image 2 | geração e edição com forte seguimento de instruções | confirmar preço e política exata do endpoint antes de dados sensíveis |
| Google Imagen 4 | fotografia realista, API e preço transparente | retenção zero exige configuração adequada |
| Adobe Firefly | material comercial sensível a IP e integração Adobe | custo de API precisa ser cotado |
| FLUX.2 / BFL | controle, múltiplas referências e challenger econômico | licença varia; `dev` local não equivale a uso comercial livre |
| Stability SD 3.5 | controle/self-host futuro | operação de GPU e licença dependem de receita/modelo |
| Midjourney | exploração manual de moodboards | sem automação; conteúdo público por padrão sem plano/configuração adequada |

## Fontes oficiais

- [Catálogo de modelos OpenAI](https://developers.openai.com/api/docs/models)
- [Políticas de uso de dados por endpoint OpenAI](https://platform.openai.com/docs/models/default-usage-policies-by-endpoint)
- [Preço do Vertex AI / Imagen](https://cloud.google.com/vertex-ai/generative-ai/pricing)
- [Zero Data Retention no Vertex AI](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/vertex-ai-zero-data-retention)
- [Abordagem do Adobe Firefly](https://www.adobe.com/ai/overview/firefly/gen-ai-approach.html)
- [Custom Models do Firefly](https://business.adobe.com/products/firefly-business/custom-models/ai-model-training.html)
- [Introdução FLUX.2](https://docs.bfl.ai/quick_start/introduction)
- [Preços BFL](https://docs.bfl.ai/quick_start/pricing)
- [Licença Stability AI](https://stability.ai/license)
- [Preços Stability API](https://platform.stability.ai/pricing)
- [Termos Midjourney](https://docs.midjourney.com/docs/terms-of-service)
- [Privacidade/Stealth no Midjourney](https://docs.midjourney.com/hc/en-us/articles/28014645615373-Keeping-Your-Creations-Private)

Preços são temporais e devem ser reverificados antes de gasto. Como referência
do levantamento: Imagen 4 Fast `US$0,02`, standard `US$0,04` e Ultra `US$0,06`
por imagem. Não extrapolar preços de modelos anteriores para GPT Image 2.

## Estratégia recomendada

- **Piloto mínimo:** 12–20 miniaturas econômicas; shortlist humana; 2–4 finais em qualidade superior.
- **Equilibrado:** GPT Image 2 como produtor e Imagen 4 ou FLUX.2 como challenger; editar o vencedor em vez de regenerar indefinidamente.
- **IP sensível:** Firefly/Photoshop, Content Credentials e revisão de licença.
- **Self-host:** somente quando volume ou privacidade justificarem GPU, manutenção e observabilidade.

## Bake-off proposto

GPT Image 2, Imagen 4 e FLUX.2 recebem o mesmo brief e produzem quatro imagens
cada. Arquivos são randomizados e o Auditor não vê o modelo. A escolha considera
aderência, coerência, ausência de artefatos e distinção — nunca preferência
estética isolada.

## Avaliação

Scores permanecem separados:

1. alinhamento semântico prompt–imagem;
2. preferência estética;
3. anatomia, objetos, texto, física, reflexos, sombras e perspectiva;
4. contexto cultural e risco de representação enganosa;
5. similaridade com acervo e concorrentes;
6. composição da imagem dentro da página responsiva.

[ImageReward](https://github.com/zai-org/ImageReward), CLIPScore e PickScore são
sinais candidatos. [UIClip](https://uimodeling.github.io/uiclip/) é mais adequado
à screenshot da interface completa. Pesquisa sobre [avaliação humana reproduzível](https://openaccess.thecvf.com/content/CVPR2023/papers/Otani_Toward_Verifiable_and_Reproducible_Human_Evaluation_for_Text-to-Image_Generation_CVPR_2023_paper.pdf)
reforça que avaliação automática não encerra o julgamento.

## Recomendação

Executar o [[../07-experiments/exp-0007-image-quality-gate-v0|EXP-0007]] antes de
adotar APIs pagas ou promover um modelo para produção.

