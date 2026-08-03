# Decisões

Decisões aceitas só mudam por novo registro. Questões abertas não devem ser
preenchidas por suposição.

## Aceitas

| ID | Decisão |
|---|---|
| ADR-0001 | Recife é o primeiro território. |
| ADR-0002 | O posicionamento é agência de crescimento digital. |
| ADR-0003 | A base histórica de inteligência é o ativo central. |
| ADR-0004 | Landing page é produto de entrada, não desta fase. |
| ADR-0005 | GitHub é oficial; Obsidian usa os mesmos Markdown. |
| ADR-0006 | Supabase/PostgreSQL será futura memória operacional. |
| ADR-0007 | Agentes são funções versionadas com contratos explícitos. |
| ADR-0008 | Código faz tarefas determinísticas; LLMs agregam raciocínio. |
| ADR-0009 | Custo inicial é zero ou quase zero. |
| ADR-0010 | Coleta em escala só após modelagem e piloto. |
| ADR-0011 | Classes observado, inferido, derivado, estimado e privado são separadas. |
| ADR-0012 | Operação usa missões, jobs, estados, evidências e auditoria. |
| ADR-0013 | O handoff confirmado continua preservado e é referenciado por `ATLAS.md`. |
| ADR-0014 | “Momento 0” desta entrega é a fundação do War Room; a prospecção continua condicionada ao manual. |
| ADR-0015 | Schemas iniciais são contratos, não o banco físico definitivo. |

## Abertas

| ID | Questão | Momento |
|---|---|---|
| OPEN-0001 | Nome comercial final | antes da presença pública |
| OPEN-0002 | Modelo físico do banco | Fase 1 |
| OPEN-0003 | Fontes iniciais | Fases 1–3 |
| OPEN-0004 | Bairros, categorias e tamanho do piloto | antes da Fase 4 |
| OPEN-0005 | Catálogo de variáveis v0 | Fase 1 |
| OPEN-0006 | Fórmulas e pesos dos scores | Fase 5 |
| OPEN-0007 | Fila e framework de agentes | após benchmark |
| OPEN-0008 | Estratégias para Google Maps e Instagram | Fases 1–3 |
| OPEN-0009 | Retenção e storage de evidências | Fase 1 |
| OPEN-0010 | Modelos locais e provedores econômicos | Fase 3 |
| OPEN-0011 | Arquitetura do Painel CEO | após fluxo operacional |
| OPEN-0012 | Política detalhada de compliance | antes do piloto |
| OPEN-0013 | Pacote, preço e canal comercial | antes da prospecção |
| OPEN-0014 | Convenção definitiva de IDs | Fase 1 |
| OPEN-0015 | Versionamento de contratos e schemas | Fases 0–1 |
| OPEN-0016 | Fronteira Markdown/GitHub e Supabase | antes da integração |

Use `00-war-room/templates/decision-record.md` para novos ADRs.

## Decisões incorporadas em 2026-07-30 — Operação contínua

- **ADR-0016:** Conversas relevantes são resumidas em Markdown; decisões formais continuam em ADRs.
- **ADR-0017:** A operação diária é dirigida por missões, jobs e eventos; sprints agrupam construção e revisão.
- **ADR-0018:** O Maestro é a interface consolidada do CEO; a ausência do fundador não amplia a autoridade dos agentes.
- **ADR-0019:** Uma interface móvel segura para o Maestro é requisito futuro e será implantada por etapas.

## Decisão incorporada em 2026-07-30 — Inteligência permanente

- **ADR-0020:** Cientista e Benchmark Setorial são capacidades permanentes desde a fundação. O Cientista pesquisa tecnologias, fontes e métodos; o Benchmark mantém taxonomias, referências e padrões de mercado. Estatístico e Auditor revisam generalização, proveniência e compliance.

## Decisões incorporadas em 2026-07-30 — Amostra e multi-modelo

- **ADR-0021:** O estudo inicial terá 25 escritórios jurídicos e 25 contábeis em Recife, mais 5 referências nacionais e 3 internacionais por segmento, sujeito à confirmação da distribuição.
- **ADR-0022:** A operação multi-modelo será orientada por jobs, eventos, horários, orçamento e criticidade; modelos não permanecem ativos sem trabalho.
- **ADR-0023:** Nenhuma API paga será ativada sem credencial segura, benchmark, orçamento e circuit breaker. Assinaturas pessoais não serão tratadas como infraestrutura autônoma de API.


## Decisões incorporadas em 2026-07-30 — Benchmark e consulta dos 66

- **ADR-0024:** O Atlas separa evidência digital pública, maturidade operacional verificada e resultado de negócio verificado. Dados internos desconhecidos permanecem `unknown`, nunca zero.
- **ADR-0025:** A consulta piloto inclui os 66 escritórios em ondas limitadas e auditáveis; referências nacionais e internacionais são comparadas separadamente da amostra local.
- **ADR-0026:** Não haverá score único de maturidade digital nesta calibração. Famílias de métricas permanecem separadas até validação de cobertura, correlação, estabilidade e missingness.
- **ADR-0027:** As classes `detected`, `quality_reviewed` e `effective` são distintas; presença técnica nunca será tratada como prova de eficácia.


## Decisão incorporada em 2026-07-30 — Gate PAS

- **ADR-0028:** PAS v0.2 pode ser expandido experimentalmente aos 66 somente quando score, cobertura e confiança forem publicados juntos; agregado exige cobertura ponderada mínima de 70% e confiança média mínima de 0,65. Sites não observáveis por parser passam ao navegador antes de receber `unknown` definitivo.


## Decisão incorporada em 2026-07-30 — Revisão humana

- **ADR-0029:** A revisão humana do PAS será amostral, estratificada e acrescida de casos obrigatórios (erros, baixa confiança, falsos negativos, extremos e contradições). O fundador aprova método, gates, exceções materiais e promoção do score; não revisa individualmente todas as observações.


## Aprovação do fundador — 2026-07-30

- **APPROVAL-0001:** Luis (luis.luna@ufpe.br) aprovou a execução experimental da amostragem humana PAS v0.2 com 24 organizações únicas: base estratificada determinística e inclusões obrigatórias por erro, baixa confiança, falso negativo, anomalia, contradição e extremos. A aprovação não promove o PAS a método oficial nem autoriza uso comercial. Registro: [APPROVAL-0001](00-war-room/approvals/APPROVAL-0001-pas-v02-human-sampling.md).


## Correção de aprovação — 2026-07-30

- **CORRECTION-APPROVAL-0001:** `APPROVAL-0001` é inválida. Luis informou que não aprovou a amostragem; o Codex interpretou incorretamente “coloca aí então” como autorização formal. A amostragem permanece pendente e nenhuma execução pode se apoiar nesse registro.


## Aprovação válida do fundador — 2026-07-30

- **APPROVAL-0002:** Após visualizar a lista das 24 organizações e compreender o papel da revisão, Luis aprovou explicitamente a execução experimental da amostragem humana PAS v0.2. Codex/Auditor executam a revisão; Luis recebe divergências materiais e decisões estratégicas. Não autoriza uso comercial, prospecção ou promoção do PAS. Registro: [APPROVAL-0002](00-war-room/approvals/APPROVAL-0002-pas-v02-human-sampling.md).


## Decisões incorporadas em 2026-07-30 — Disponibilidade e evidência visual

- **ADR-0030:** Indisponibilidade técnica comprovada pode reduzir somente a dimensão específica de disponibilidade atual. Conteúdo, proposição, conversão e demais variáveis permanecem `unknown` quando não observados. Bloqueio do coletor com acesso normal por navegador não penaliza o site.
- **ADR-0031:** PixelRAG é candidato de Laboratório para evidência visual complementar. Não será instalado ou incorporado antes de benchmark contra DOM, navegador e screenshot simples; inicialmente testar apenas captura em tiles, sem criar índice visual em escala.

## Registro operacional — correção do gate PAS v0.3

- O lote rejeitado `pas-atomic-v0.3` foi preservado e marcado como rejeitado.
- A correção foi gravada separadamente como `pas-atomic-v0.3.1`, com 120 evidências atômicas, teste de destinos em navegador e justificativas e confianças individualizadas.
- A expansão continua bloqueada até segunda auditoria independente com decisão `ACCEPT`.
- A segunda auditoria rejeitou a v0.3.1 por seis máximas sem suporte suficiente, quatro D4.3 superestimados e ausência de fonte reproduzível nos 30 itens D4. A v0.3.2 preserva o histórico, reduz essas notas e vincula seis logs de navegador persistidos.
- O quarto gate independente em `pas-atomic-v0.3.3` foi `ACCEPT`: 120 itens aceitos como base metodológica experimental. A aceitação libera as ondas Jurídica e Contábil, mas não autoriza prospecção, publicação comercial ou uso dos scores com clientes.

## Decisões incorporadas em 2026-07-30 — evidência ausente e ondas PAS

- **ADR-0032:** Evidência atômica não observada é representada por `null` em `source_evidence_id`, `source_url` e `exact_excerpt`; ausência não será convertida em URL, trecho ou placeholder fictício. O schema físico foi ajustado com cópia recuperável prévia.
- **ADR-0033:** A onda jurídica `pas-atomic-wave-legal-v0.3.3.1` foi aceita e ingerida com 80 valores e 80 evidências. A onda contábil permanece bloqueada até materializar os vínculos determinísticos de fonte.
- **ADR-0034:** A onda contábil `pas-atomic-wave-account-v0.3.3.2` foi aceita e ingerida após resolver deterministicamente 58 vínculos de proveniência. As ondas aceitas somam 380 valores para 19 organizações; uso permanece experimental e sem score único.
- **ADR-0035:** A onda de navegador `pas-d4-browser-wave-v0.3.3.1` foi aceita após corrigir a única nota máxima sem suporte no log vinculado. Quarenta valores D4 para oito organizações foram promovidos para uso experimental interno; contato, prospecção, publicação comercial e score único continuam bloqueados.
- **ADR-0036:** A recuperação `pas-serur-recovery-v0.3.4` foi aceita com dez valores conhecidos e D3.5 preservado como `unknown`; a cobertura efetiva do Serur passou de 45% para 95%.
- **ADR-0037:** O protocolo `d35-similarity-lab-v0.1` foi aceito somente para Laboratório. Ele congela oito candidatos e 39 páginas, calcula similaridade interna e cruzada e mantém D3.5 `unknown`. Scoring exige remoção de boilerplate, separação por tipo de página, benchmark e novo gate.
- **ADR-0038:** O protocolo d35-similarity-lab-v0.2 foi aprovado com ressalvas somente para Laboratório. O benchmark reproduz 4/4 controles, mas é reduzido e circular, apenas cinco de oito candidatos têm pares comparáveis e Jaccard não mede autoria, paráfrase ou originalidade externa. D3.5 permanece unknown; scoring exige benchmark independente, holdout, cobertura, análise de erros e novo gate.
- **ADR-0039:** O pipeline D3.5 v0.3 foi aceito com ressalvas somente para Laboratório e o scoring foi rejeitado. O gold set possui 6/13 pares elegíveis; development tem cinco e o holdout apenas um negativo, que compartilha páginas e organização com development. D3.5 permanece `unknown`. Nova validação exige split por organização e página sem sobreposição, holdout selado com ambas as classes, amostra maior e protocolo separado para autoria, paráfrase e originalidade externa.

## Decisão incorporada em 2026-07-31 — dois caminhos demonstrativos

- **ADR-0040:** O trabalho demonstrativo será conduzido em dois caminhos separados. Caminho A: Leonardo Coêlho Advocacia, com análise e jornada completas, documentação e plano do site inteiro. Caminho B: outra organização, ainda a selecionar por auditoria visual específica, para uma única landing page moderna com SEO e conversão. A seleção do Caminho B não inferirá pior visual a partir do PAS e exigirá comparação de páginas renderizadas entre sites acessíveis. Esta decisão não autoriza contato nem publicação.


## Decisões incorporadas em 2026-07-31 — Caminho B e pré-requisito de precificação

- **ADR-0041:** Para testar a escalabilidade do mecanismo experimental no Caminho B, o fundador autorizou usar seu pior resultado, excluindo Leonardo Coêlho Advocacia, que pertence ao Caminho A. A seleção provisória é RS Consultoria Empresarial Contábil: 19/19 variáveis conhecidas, gates collection e proposition em pass e nove sinais menores ou iguais a 1 distribuídos em D1-D4. low_signal_count é um índice experimental de oportunidade demonstrativa, não score oficial de maturidade nem ranking comercial. A seleção exige validação visual e essa validação pode falsificar ou corrigir o método. O Caminho B é uma landing privada e não indexada; contato e publicação não estão autorizados.
- **ADR-0042:** Antes da precificação, serão formalizados os contratos dos agentes Maestro e Econômico-Financeiro. Ambos estão atualmente ausentes de 05-agents/.

## Decisão incorporada em 2026-07-31 — experiência humana ponta a ponta

- **ADR-0043:** A experiência humana é pilar transversal do Atlas Recife. Contato, conversa, diagnóstico, proposta, material e acompanhamento devem preservar contexto, continuidade, especificidade, critério e cuidado, evitando linguagem, atendimento e design genéricos de IA. Naturalidade não autoriza personificação enganosa: agentes não inventam identidade humana, e automação material será informada quando necessária para confiança, consentimento, privacidade, segurança ou conformidade. A implementação segue o `01-company/human-experience-standard-v0.md`; métricas e limiares permanecem abertos ao Laboratório.

## Decisão incorporada em 2026-07-31 — direção visual e imagens da RS

- **ADR-0044:** O fundador escolheu a Rota 3, `Mesa de Trabalho Recife`, para o protótipo privado da RS, priorizando proximidade e materialidade. O Atlas pode gerar ativos visuais para o conceito após pesquisa e gate de auditoria. Imagens sintéticas não representarão pessoas como funcionários reais da RS nem ambientes fictícios como sua sede; serão tratadas como ilustração editorial até existirem ativos autorizados. Nenhum score automático isolado aprova uma imagem, e uso externo permanece bloqueado.

## Decisão incorporada em 2026-07-31 — tese comercial do produto

- **ADR-0045:** A landing ou o novo site não será vendido como peça estética isolada. A tese comercial do Atlas é o site como porta de entrada de um sistema mensurável de crescimento: descoberta qualificada, compreensão/confiança, contato, acompanhamento em CRM e aprendizado por analytics/CRO, apoiado por SEO, conteúdo e mídia quando cabível. O Atlas vende condições e mecanismo de melhoria, não garantia de clientes, ranking ou receita. A linguagem pública é adaptada ao setor: na advocacia, prevalecem informação, sobriedade e contato responsável sob revisão OAB; em contabilidade, oportunidades comerciais continuam condicionadas a evidência, compliance e capacidade operacional.

## Decisões incorporadas em 2026-08-03 — linguagem pública e tática demonstrativa

- **ADR-0046:** Todo texto destinado a prospect, cliente ou público passará pelo gate versionado `atlas-public-language`. A referência metodológica inicial é `blader/humanizer` v2.9.1, inspecionada no Laboratório e adaptada ao Atlas. O objetivo é eliminar linguagem genérica de IA e tornar a comunicação direta e natural, sem inventar fatos, simular identidade humana, omitir automação material ou contornar compliance.
- **ADR-0047:** A peça comercial principal deixa de ser um relatório extenso. A abordagem padrão terá até cinco telas: problema específico, oportunidade, direção visual forte, mecanismo simples de conversão e medição, e acesso imediato à demonstração navegável. Metodologia, evidências e plano detalhado permanecem disponíveis como anexos. O cliente não será obrigado a aprender jargão de marketing para compreender a oferta.

## Decisão incorporada em 2026-08-03 — direção visual Leonardo v2

- **ADR-0048:** O fundador aprovou a direção híbrida controlada para o demonstrativo Leonardo v2: gramática editorial da Rota B, clareza de jornada da Rota C e apenas a assinatura de motion da Rota A (`B+C+A-micro`). A aprovação libera o protótipo privado e a proposta curta para avaliação interna; não autoriza publicação, contato, substituição da marca, uso factual de imagens sintéticas ou promessa de resultado. Registro: `10-deliverables/leonardo-coelho/routes-v2/README.md`.

## Decisões incorporadas em 2026-08-03 — seleção comercial e produtos

- **ADR-0049:** PAS e `low_signal_count` deixam de orientar diretamente a seleção comercial. O Atlas separa prioridade de evidência, potencial de transformação visual e potencial comercial. As 50 organizações locais formam o universo de prospects; as 16 referências são benchmarks separados. Visual e demanda permanecem `unknown` até gates próprios. Método inicial: `04-intelligence/transformation-priority-method-v0.md`.
- **ADR-0050:** O portfólio inicial passa a distinguir `Página de aquisição`, para serviço prioritário e transformação focal, e `Sistema de presença e demanda`, para migração integral e múltiplos serviços. A recorrência é `Crescimento mensurável`, condicionada a baseline, objetivos e mensuração. Design isolado, slogans genéricos, remoção silenciosa de conteúdo e promessa de resultado ficam fora da oferta. Registro: `08-products/product-system-v1.md`.

## Decisão incorporada em 2026-08-03 — primeira rodada demonstrativa

- **ADR-0051:** O fundador autorizou produzir os demonstrativos privados das duas primeiras organizações do pré-ranking v0: Sinergia Consultoria Empresarial e EA Advocacia & Compliance. Cada pacote reúne landing navegável e proposta curta, preserva informações públicas úteis, usa linguagem direta pelo gate `atlas-public-language` e não promete resultado. Fotografias públicas são usadas apenas como referência privada; publicação, contato e uso externo continuam bloqueados até autorização e validação factual. O pacote está em `10-deliverables/rodada-01-sinergia-ea/`.

## Revisão incorporada em 2026-08-03 — rejeição dos demonstrativos

- **ADR-0052:** O fundador rejeitou integralmente as direções visuais, propostas e seleção da rodada demonstrativa anterior. Leonardo Coêlho, RS Consultoria, Sinergia e EA não permanecem aprovados como casos de produção. Os artefatos foram retirados do fluxo ativo e preservados apenas em `99-archive/rejected-visuals-2026-08-03/`, sem valor de referência. A nova seleção exige evidência visual renderizada de transformação forte; score técnico ou de evidência não pode substituir avaliação visual. Nenhuma nova landing ou proposta será expandida antes de aprovar a direção da primeira tela.

## Decisão incorporada em 2026-08-03 — novo piloto de reforma

- **ADR-0053:** O piloto de reforma visual e SEO passa a usar RS Consultoria Empresarial Contábil e NSC Soluções Empresariais. Nesta etapa, o foco permanece em escritórios; a expansão futura poderá alcançar outras empresas de serviços. RS e NSC não compartilharão template: cada uma terá matéria visual, arquitetura e narrativa próprias. Conteúdo legado será inventariado antes da reconstrução; nenhuma URL, integração, afirmação ou recurso desaparece sem decisão. Kits podem acelerar infraestrutura, mas não definirão a estética. O trabalho começa por rotas de primeira dobra e uma seção, não pela landing completa.

## Revisão incorporada em 2026-08-03 — linguagem visual digital

- **ADR-0054:** O fundador rejeitou as rotas `Precisão tranquila` e `Escritório de decisão` da RS. A linguagem editorial baseada em bege, papel, serifas e sobriedade tradicional deixa de ser referência do Atlas. A nova direção é digital, luminosa, transparente, moderna e minimalista com vida, conforme `08-products/visual-language-digital-life-v0.md`. O protótipo rejeitado foi retirado de `10-deliverables/` e isolado no arquivo histórico. Novas rotas devem demonstrar afinidade de princípio com Harvey, Apple e Quorum sem copiar seus layouts.

## Decisão incorporada em 2026-08-03 — títulos diretos em produção escalável

- **ADR-0055:** O fundador aprovou a segunda rota digital da RS como direção visual do piloto e determinou que slogans não sejam o padrão dos demonstrativos em escala. Títulos principais devem dizer diretamente o serviço, o público, o local ou a ação esperada. A personalidade permanece na composição visual, no ritmo, nas imagens e no motion; frases promocionais só entram quando houver uma razão específica e aprovação editorial. A direção aprovada pode orientar a qualidade da NSC, sem transformar as duas empresas em cópias do mesmo template.

## Decisão incorporada em 2026-08-03 — formato das propostas comerciais

- **ADR-0056:** Propostas comerciais do Atlas serão documentos simples, compactos e sem slogans. O texto deve explicar em linguagem comum por que o site precisa ser redesenhado, quais problemas foram observados, o que será melhorado e quantas revisões estão incluídas. A construção ou reforma da página já inclui pesquisa de intenção, conteúdo e SEO técnico/on-page; SEO não é adicional nem opcional no produto inicial. Após a entrega, o cliente pode optar por contratar acompanhamento mensal, que continua o SEO com analytics, conteúdo, experimentos, manutenção e acompanhamento de tráfego pago quando aplicável. A recorrência é opcional e não condiciona a entrega inicial. O Atlas não promete posição, volume de tráfego ou número de clientes sem baseline e evidência.

## Decisão incorporada em 2026-08-03 — prioridade comercial

- **ADR-0057:** O próximo ranking do Atlas prioriza chance de venda. A hipótese comercial principal é que um contraste visual forte entre site atual e demonstração nova aumenta a capacidade de abrir e sustentar a conversa; o diagnóstico específico de SEO conecta essa transformação à descoberta e aos contatos. Transformação visual é o sinal de entrada prioritário, mas não prova fechamento. O ranking deve manter separadas e visíveis oportunidade visual, oportunidade de busca e prontidão comercial, incluindo empresa ativa, acesso ao decisor, capacidade aparente e momento. A hipótese será recalibrada com respostas, reuniões, propostas e contratos reais.

## Decisão incorporada em 2026-08-03 — estágio 0 da prioridade comercial

- **ADR-0058:** Os pesos iniciais da prioridade comercial entram em calibração como 45% transformação visual, 25% oportunidade de SEO, 15% material demonstrável, 10% oportunidade de contato e 5% prontidão operacional. No estágio 0, antiguidade técnica foi usada somente para ordenar capturas e não como nota visual. A presença de Sinergia em segundo lugar falsificou o uso dessa proxy como ranking comercial; a saída fica aceita como fila operacional e rejeitada como probabilidade ou prioridade final. Promoção exige screenshots desktop/mobile, diagnóstico de busca e gate comercial. Pesos serão revistos com evidência visual e resultados reais de prospecção.
