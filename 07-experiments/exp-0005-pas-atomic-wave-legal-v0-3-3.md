# EXP-0005 — Onda jurídica PAS atômico v0.3.3

- **Estado:** lote preparado; aguardando persistência e auditoria independente
- **Método-base aceito:** `pas-atomic-v0.3.3`
- **Versão desta onda:** `pas-atomic-wave-legal-v0.3.3`
- **Data:** 2026-07-30
- **Executor:** Cientista jurídico / Codex
- **Uso:** exclusivamente experimental

## Escopo e controles

Foram avaliados somente quatro candidatos com `collection_gate=pass` e
evidência pública suficiente para D1–D3:

- `CAND-LEGAL-REC-17` — Serur Advogados;
- `CAND-LEGAL-INT-03` — Clifford Chance;
- `CAND-LEGAL-REC-03` — JHN Advogados Associados;
- `CAND-LEGAL-NAT-05` — Demarest.

Não houve prospecção, contato, submissão de formulário ou uso comercial.
Nenhum score único foi calculado. D4 permaneceu `unknown` porque a nova onda
não possui logs de navegador reproduzíveis que confirmem destino, canais,
fricção e continuidade da jornada. D3.5 também permaneceu `unknown`, pois não
houve teste reproduzível de originalidade ou repetição.

## Resultado por dimensão

Escala atômica de 0 a 3. A média usa apenas itens conhecidos e deve sempre ser
lida junto à cobertura.

| candidate_id | D1 | cobertura D1 | D2 | cobertura D2 | D3 | cobertura D3 | D4 | cobertura D4 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| CAND-LEGAL-REC-17 | 2,60 | 100% | 3,00 | 100% | 3,00 | 80% | unknown | 0% |
| CAND-LEGAL-INT-03 | 2,80 | 100% | 3,00 | 100% | 3,00 | 80% | unknown | 0% |
| CAND-LEGAL-REC-03 | 2,00 | 100% | 2,00 | 100% | 2,00 | 80% | unknown | 0% |
| CAND-LEGAL-NAT-05 | 2,00 | 100% | 2,40 | 100% | 2,25 | 80% | unknown | 0% |

## Forma de persistência

Cada linha das tabelas seguintes representa simultaneamente:

1. um registro em `atomic_variable_values`; e
2. um registro em `atomic_evidence_items`.

Campos comuns a todas as linhas:

- `method_version`: `pas-atomic-wave-legal-v0.3.3`;
- `review_status`: `pending_independent_audit`;
- `executor`: `cientista-juridico-codex`;
- `observed_at`: `2026-07-30T00:00:00-03:00`;
- `source_evidence_id`: `null`, a resolver contra `pas_page_evidence` durante
  a persistência sem inventar identificador;
- `evidence_refs`: JSON com o `atomic_evidence_id` indicado;
- `evidence_class`: `public_declared_page`;
- `applicability`: `applicable` quando há nota e `unknown` quando o valor é
  nulo.

### CAND-LEGAL-REC-17 — Serur Advogados

Proposição congelada: atuação jurídica para serviços financeiros regulados,
integrando consultoria, contencioso e suporte a decisões estratégicas.

| variable_id | value | confidence | atomic_evidence_id | source_url | exact_excerpt | element_or_action | rationale |
|---|---:|---:|---|---|---|---|---|
| D1.1 | 3 | 0,94 | WLEGAL-SERUR-D1-1 | https://serur.com.br/segmentos/segmento-servicos-financeiros | Atuação jurídica no setor financeiro regulado | H1/proposição | A proposição setorial é explícita. |
| D1.2 | 3 | 0,94 | WLEGAL-SERUR-D1-2 | https://serur.com.br/segmentos/segmento-servicos-financeiros | Atendemos bancos, fintechs, instituições de pagamento e demais agentes do setor financeiro | perfil de clientes | Público e contexto regulado são explícitos. |
| D1.3 | 3 | 0,93 | WLEGAL-SERUR-D1-3 | https://serur.com.br/segmentos/segmento-servicos-financeiros | Bancário e Financeiro; Contencioso Cível de Larga Escala | práticas relacionadas | A especialidade prioritária é nomeada. |
| D1.4 | 2 | 0,87 | WLEGAL-SERUR-D1-4 | https://serur.com.br/segmentos/segmento-servicos-financeiros | contencioso estratégico, larga escala e consultoria jurídica | diferenciais/escopo | A integração é concreta, mas declarada pelo escritório. |
| D1.5 | 2 | 0,84 | WLEGAL-SERUR-D1-5 | https://serur.com.br/sobre-nos | O jurídico que acelera negócios | mensagem institucional | Home, sobre e página setorial são compatíveis; não prova ausência total de conflito. |
| D2.1 | 3 | 0,94 | WLEGAL-SERUR-D2-1 | https://serur.com.br/segmentos/segmento-servicos-financeiros | Atuação jurídica no setor financeiro regulado | página dedicada | Há página própria para a proposição. |
| D2.2 | 3 | 0,91 | WLEGAL-SERUR-D2-2 | https://serur.com.br/segmentos | Segmentos; Práticas Jurídicas | navegação | A navegação separa segmentos e práticas. |
| D2.3 | 3 | 0,93 | WLEGAL-SERUR-D2-3 | https://serur.com.br/segmentos/segmento-servicos-financeiros | Perfil de clientes; Diferenciais | headings | Headings sustentam proposição, público e escopo. |
| D2.4 | 3 | 0,88 | WLEGAL-SERUR-D2-4 | https://serur.com.br/ | Segmentos | link interno | A home conduz à arquitetura setorial observada. |
| D2.5 | 3 | 0,91 | WLEGAL-SERUR-D2-5 | https://serur.com.br/segmentos | Bancos; Fintechs; Meios de Pagamento; Serviços Financeiros | arquitetura | Serviços e públicos são diferenciados. |
| D3.1 | 3 | 0,94 | WLEGAL-SERUR-D3-1 | https://serur.com.br/segmentos/segmento-servicos-financeiros | ambiente altamente regulado e judicializado | problema atendido | O problema e o contexto são descritos. |
| D3.2 | 3 | 0,93 | WLEGAL-SERUR-D3-2 | https://serur.com.br/segmentos/segmento-servicos-financeiros | controvérsias regulatórias, processos administrativos sancionadores e gestão de passivos | escopo | Entregas e frentes de atuação são detalhadas. |
| D3.3 | 3 | 0,91 | WLEGAL-SERUR-D3-3 | https://serur.com.br/segmentos/segmento-servicos-financeiros | bancos, fintechs, instituições de pagamento | cenários | Há aplicações por tipo de organização e problema. |
| D3.4 | 3 | 0,88 | WLEGAL-SERUR-D3-4 | https://serur.com.br/segmentos/segmento-servicos-financeiros | Liderança para decidir e apoiar decisores | profissionais da prática | A página liga profissionais e áreas à proposição; credenciais são declaradas. |
| D3.5 | null | 0,40 | WLEGAL-SERUR-D3-5 | https://serur.com.br/segmentos/segmento-servicos-financeiros | null | teste não executado | Originalidade e repetição não foram testadas. |
| D4.1 | null | 0,35 | WLEGAL-SERUR-D4-1 | https://serur.com.br/segmentos/segmento-servicos-financeiros | null | browser log ausente | CTA contextual não foi validado em navegador nesta onda. |
| D4.2 | null | 0,35 | WLEGAL-SERUR-D4-2 | https://serur.com.br/segmentos/segmento-servicos-financeiros | null | browser log ausente | Destino não foi acionado nem validado. |
| D4.3 | null | 0,35 | WLEGAL-SERUR-D4-3 | https://serur.com.br/segmentos/segmento-servicos-financeiros | null | browser log ausente | Presença textual não prova canal adequado ou funcional. |
| D4.4 | null | 0,30 | WLEGAL-SERUR-D4-4 | https://serur.com.br/segmentos/segmento-servicos-financeiros | null | browser log ausente | Fricção não foi observada de modo reproduzível. |
| D4.5 | null | 0,30 | WLEGAL-SERUR-D4-5 | https://serur.com.br/segmentos/segmento-servicos-financeiros | null | browser log ausente | Continuidade até contato permanece desconhecida. |

### CAND-LEGAL-INT-03 — Clifford Chance

Proposição congelada: assessoria jurídica global e multidisciplinar para bancos
em transações, regulação, produtos e disputas complexas.

| variable_id | value | confidence | atomic_evidence_id | source_url | exact_excerpt | element_or_action | rationale |
|---|---:|---:|---|---|---|---|---|
| D1.1 | 3 | 0,95 | WLEGAL-CC-D1-1 | https://www.cliffordchance.com/expertise/sectors/banks.html | We have a truly global Banks sector group | proposição | A proposta setorial é explícita. |
| D1.2 | 3 | 0,95 | WLEGAL-CC-D1-2 | https://www.cliffordchance.com/expertise/sectors/banks.html | commercial advice to banks on some of their most complex transactions | público/problema | Público e problemas são explícitos. |
| D1.3 | 3 | 0,95 | WLEGAL-CC-D1-3 | https://www.cliffordchance.com/expertise/sectors/banks.html | Banks | H1/setor | A especialidade é inequívoca. |
| D1.4 | 3 | 0,91 | WLEGAL-CC-D1-4 | https://www.cliffordchance.com/expertise/sectors/banks.html | multi-disciplinary team ... working with Banks globally | diferenciação | Integração global e multidisciplinar são concretas na mensagem. |
| D1.5 | 2 | 0,87 | WLEGAL-CC-D1-5 | https://www.cliffordchance.com/about_us.html | one multi-disciplinary team | mensagem institucional | About e setor são coerentes; não prova ausência de conflito em todo o domínio. |
| D2.1 | 3 | 0,95 | WLEGAL-CC-D2-1 | https://www.cliffordchance.com/expertise/sectors/banks.html | Banks | página dedicada | Existe página dedicada ao setor. |
| D2.2 | 3 | 0,94 | WLEGAL-CC-D2-2 | https://www.cliffordchance.com/expertise/sectors.html | Clients & Sectors | navegação | Setores constituem uma camada própria. |
| D2.3 | 3 | 0,95 | WLEGAL-CC-D2-3 | https://www.cliffordchance.com/expertise/sectors/banks.html | Bank regulation; M&A in the banking industry; Banking products | headings | Headings sustentam a especialidade. |
| D2.4 | 3 | 0,91 | WLEGAL-CC-D2-4 | https://www.cliffordchance.com/expertise/sectors.html | Banks | link setorial | A arquitetura geral conduz à página dedicada. |
| D2.5 | 3 | 0,94 | WLEGAL-CC-D2-5 | https://www.cliffordchance.com/expertise/sectors.html | Banks; Consumer Goods & Retail; Financial Services | arquitetura | Setores e públicos são diferenciados. |
| D3.1 | 3 | 0,95 | WLEGAL-CC-D3-1 | https://www.cliffordchance.com/expertise/sectors/banks.html | changing regulatory landscape | problema | Problemas regulatórios e comerciais são descritos. |
| D3.2 | 3 | 0,95 | WLEGAL-CC-D3-2 | https://www.cliffordchance.com/expertise/sectors/banks.html | syndicated lending ... project finance ... structured finance | escopo | O escopo contém entregas e produtos concretos. |
| D3.3 | 3 | 0,94 | WLEGAL-CC-D3-3 | https://www.cliffordchance.com/expertise/sectors/banks.html | M&A ... Banking products ... Litigation & Dispute Resolution | cenários | Diversos cenários são detalhados. |
| D3.4 | 3 | 0,90 | WLEGAL-CC-D3-4 | https://www.cliffordchance.com/expertise/sectors/banks.html | Client experience | casos declarados | Há experiência e responsáveis declarados; não prova eficácia. |
| D3.5 | null | 0,40 | WLEGAL-CC-D3-5 | https://www.cliffordchance.com/expertise/sectors/banks.html | null | teste não executado | Originalidade e repetição não foram testadas. |
| D4.1 | null | 0,35 | WLEGAL-CC-D4-1 | https://www.cliffordchance.com/expertise/sectors/banks.html | null | browser log ausente | CTA contextual não validado nesta onda. |
| D4.2 | null | 0,35 | WLEGAL-CC-D4-2 | https://www.cliffordchance.com/expertise/sectors/banks.html | null | browser log ausente | Destino não validado. |
| D4.3 | null | 0,35 | WLEGAL-CC-D4-3 | https://www.cliffordchance.com/expertise/sectors/banks.html | null | browser log ausente | Perfis e e-mails textuais não provam canal adequado. |
| D4.4 | null | 0,30 | WLEGAL-CC-D4-4 | https://www.cliffordchance.com/expertise/sectors/banks.html | null | browser log ausente | Fricção desconhecida. |
| D4.5 | null | 0,30 | WLEGAL-CC-D4-5 | https://www.cliffordchance.com/expertise/sectors/banks.html | null | browser log ausente | Continuidade desconhecida. |

### CAND-LEGAL-REC-03 — JHN Advogados Associados

Proposição congelada: advocacia empresarial com prioridade em recuperação de
créditos e acompanhamento processual.

| variable_id | value | confidence | atomic_evidence_id | source_url | exact_excerpt | element_or_action | rationale |
|---|---:|---:|---|---|---|---|---|
| D1.1 | 2 | 0,84 | WLEGAL-JHN-D1-1 | https://jhn.jur.adv.br/ | estrutura voltada para advocacia empresarial | proposição | A proposta existe, mas é ampla. |
| D1.2 | 2 | 0,78 | WLEGAL-JHN-D1-2 | https://jhn.jur.adv.br/ | cobrança de créditos | problema | O problema é claro; o público é parcialmente inferido. |
| D1.3 | 3 | 0,87 | WLEGAL-JHN-D1-3 | https://jhn.jur.adv.br/ | maior recuperação destes, atrelada ao menor tempo possível | prioridade | Recuperação de crédito recebe destaque textual. |
| D1.4 | 2 | 0,79 | WLEGAL-JHN-D1-4 | https://jhn.jur.adv.br/ | espaço reservado ... visualizar o processo | diferenciação | Portal do cliente é diferencial declarado e concreto. |
| D1.5 | 1 | 0,67 | WLEGAL-JHN-D1-5 | https://jhn.jur.adv.br/ | empresarial, imobiliária, cível, trabalhista, penal | coerência | A amplitude dilui a prioridade e não há confronto multipágina suficiente. |
| D2.1 | 2 | 0,72 | WLEGAL-JHN-D2-1 | https://jhn.jur.adv.br/adm-bens | recuperação/administração de bens | página candidata | Há rota dedicada candidata, mas a aderência exata precisa de auditoria. |
| D2.2 | 2 | 0,77 | WLEGAL-JHN-D2-2 | https://jhn.jur.adv.br/areas | áreas | navegação | Existe organização por áreas, sem profundidade comprovada máxima. |
| D2.3 | 2 | 0,75 | WLEGAL-JHN-D2-3 | https://jhn.jur.adv.br/ | Quem somos | headings/texto | O tema é sustentado, mas a hierarquia é genérica. |
| D2.4 | 2 | 0,72 | WLEGAL-JHN-D2-4 | https://jhn.jur.adv.br/areas | áreas e serviços | links internos | Links de suporte foram coletados; força temática moderada. |
| D2.5 | 2 | 0,73 | WLEGAL-JHN-D2-5 | https://jhn.jur.adv.br/areas | empresarial, imobiliária, cível, trabalhista, penal | arquitetura | Áreas são diferenciadas, mas públicos não claramente. |
| D3.1 | 3 | 0,86 | WLEGAL-JHN-D3-1 | https://jhn.jur.adv.br/ | cobrança de créditos | problema | O problema prioritário é explícito. |
| D3.2 | 2 | 0,76 | WLEGAL-JHN-D3-2 | https://jhn.jur.adv.br/ | recuperação ... menor tempo possível | escopo | Há objetivo, mas poucas entregas detalhadas. |
| D3.3 | 2 | 0,73 | WLEGAL-JHN-D3-3 | https://jhn.jur.adv.br/adm-bens | administração de bens | cenário | Há cenário relacionado, ainda sujeito à aderência da rota. |
| D3.4 | 1 | 0,61 | WLEGAL-JHN-D3-4 | https://jhn.jur.adv.br/quem-somos | profissionais gabaritados | credencial genérica | Credencial é genérica e sem detalhamento suficiente. |
| D3.5 | null | 0,35 | WLEGAL-JHN-D3-5 | https://jhn.jur.adv.br/ | null | teste não executado | Originalidade e repetição não foram testadas. |
| D4.1 | null | 0,30 | WLEGAL-JHN-D4-1 | https://jhn.jur.adv.br/contato | null | browser log ausente | CTA contextual não validado. |
| D4.2 | null | 0,30 | WLEGAL-JHN-D4-2 | https://jhn.jur.adv.br/contato | null | browser log ausente | Destino não validado. |
| D4.3 | null | 0,30 | WLEGAL-JHN-D4-3 | https://jhn.jur.adv.br/contato | null | browser log ausente | Telefones/e-mail não foram acionados. |
| D4.4 | null | 0,25 | WLEGAL-JHN-D4-4 | https://jhn.jur.adv.br/contato | null | browser log ausente | Fricção desconhecida. |
| D4.5 | null | 0,25 | WLEGAL-JHN-D4-5 | https://jhn.jur.adv.br/contato | null | browser log ausente | Continuidade desconhecida. |

### CAND-LEGAL-NAT-05 — Demarest

Proposição congelada: assessoria jurídica empresarial integrada e
multidisciplinar, adaptada às necessidades e projetos dos clientes.

| variable_id | value | confidence | atomic_evidence_id | source_url | exact_excerpt | element_or_action | rationale |
|---|---:|---:|---|---|---|---|---|
| D1.1 | 3 | 0,92 | WLEGAL-DEM-D1-1 | https://www.demarest.com.br/sobre-nos/ | abordagem integrada e equipes cuidadosamente adaptadas às necessidades e aos projetos | proposição | A proposta de serviço integrado é explícita. |
| D1.2 | 2 | 0,85 | WLEGAL-DEM-D1-2 | https://www.demarest.com.br/sobre-nos/ | sucesso comercial de nossos clientes | público/benefício | Público empresarial é claro, mas amplo. |
| D1.3 | 1 | 0,82 | WLEGAL-DEM-D1-3 | https://www.demarest.com.br/areas-de-atuacao/ | lista ampla de áreas | prioridade | Não há uma especialidade prioritária única na proposição congelada. |
| D1.4 | 2 | 0,84 | WLEGAL-DEM-D1-4 | https://www.demarest.com.br/sobre-nos/ | redes internacionais ... equipes adaptadas | diferenciação | Integração e redes são concretas, porém autodeclaradas. |
| D1.5 | 2 | 0,82 | WLEGAL-DEM-D1-5 | https://www.demarest.com.br/nossa-historia/ | atender grandes empresas com dedicação e qualidade | coerência | História, sobre e áreas são compatíveis, sem provar ausência total de conflito. |
| D2.1 | 1 | 0,84 | WLEGAL-DEM-D2-1 | https://www.demarest.com.br/areas-de-atuacao/ | Áreas de atuação | índice de áreas | O índice não é página dedicada a uma única especialidade. |
| D2.2 | 3 | 0,92 | WLEGAL-DEM-D2-2 | https://www.demarest.com.br/areas-de-atuacao/ | Áreas de atuação | navegação | A arquitetura de áreas é explícita e extensa. |
| D2.3 | 2 | 0,86 | WLEGAL-DEM-D2-3 | https://www.demarest.com.br/sobre-nos/ | Uma história dedicada a transcender possibilidades | headings | Headings institucionais sustentam marca, mas não especialidade única. |
| D2.4 | 3 | 0,89 | WLEGAL-DEM-D2-4 | https://www.demarest.com.br/areas-de-atuacao/ | links para áreas nomeadas | links internos | O índice sustenta navegação para áreas. |
| D2.5 | 3 | 0,91 | WLEGAL-DEM-D2-5 | https://www.demarest.com.br/areas-de-atuacao/ | Agronegócio ... Bancário ... M&A ... Tributário | arquitetura | A arquitetura diferencia práticas, setores e desks. |
| D3.1 | 2 | 0,83 | WLEGAL-DEM-D3-1 | https://www.demarest.com.br/sobre-nos/ | desafiadoras transações e litígios internacionais | problema | Problemas aparecem, porém em nível institucional amplo. |
| D3.2 | 2 | 0,84 | WLEGAL-DEM-D3-2 | https://www.demarest.com.br/areas-de-atuacao/ | lista de áreas jurídicas | escopo | Cobertura é ampla, sem entregas detalhadas na página índice. |
| D3.3 | 2 | 0,82 | WLEGAL-DEM-D3-3 | https://www.demarest.com.br/sobre-nos/ | DISRUPT; ESG; Inteligência Artificial | aplicações | Iniciativas mostram cenários, não execução ou resultado. |
| D3.4 | 3 | 0,88 | WLEGAL-DEM-D3-4 | https://www.demarest.com.br/sobre-nos/ | mais de 75 anos ... associações internacionais | credenciais declaradas | Credenciais e redes são explicitamente declaradas. |
| D3.5 | null | 0,40 | WLEGAL-DEM-D3-5 | https://www.demarest.com.br/sobre-nos/ | null | teste não executado | Originalidade e repetição não foram testadas. |
| D4.1 | null | 0,35 | WLEGAL-DEM-D4-1 | https://www.demarest.com.br/sobre-nos/ | null | browser log ausente | CTA contextual não validado. |
| D4.2 | null | 0,35 | WLEGAL-DEM-D4-2 | https://www.demarest.com.br/sobre-nos/ | null | browser log ausente | Destino não validado. |
| D4.3 | null | 0,35 | WLEGAL-DEM-D4-3 | https://www.demarest.com.br/sobre-nos/ | null | browser log ausente | Contatos textuais não provam funcionamento. |
| D4.4 | null | 0,30 | WLEGAL-DEM-D4-4 | https://www.demarest.com.br/sobre-nos/ | null | browser log ausente | Fricção desconhecida. |
| D4.5 | null | 0,30 | WLEGAL-DEM-D4-5 | https://www.demarest.com.br/sobre-nos/ | null | browser log ausente | Continuidade desconhecida. |

## Contagens

| Controle | Resultado |
|---|---:|
| candidatos avaliados | 4 |
| candidatos bloqueados/adiados | 7 |
| valores atômicos preparados | 80 |
| valores conhecidos | 56 |
| valores `unknown` | 24 |
| evidências atômicas preparadas | 80 |
| scores únicos calculados | 0 |
| contatos ou formulários acionados | 0 |

Os 24 `unknown` são cinco itens D4 por candidato (20) e D3.5 por candidato
(4).

## IDs bloqueados ou adiados

| candidate_id | motivo |
|---|---|
| CAND-LEGAL-REC-05 | coleta parcial; endereço público divergente entre versões do site |
| CAND-LEGAL-REC-06 | coleta parcial; identidade, equipe e depoimentos exigem validação |
| CAND-LEGAL-REC-09 | falha de cadeia TLS; evidência de navegador ainda não persistida no método da onda |
| CAND-LEGAL-NAT-01 | parser bloqueado por 403; navegador renderiza, mas falta log persistido da onda |
| CAND-LEGAL-NAT-02 | parser/TLS bloqueado; navegador renderiza `/o-escritorio`, sem evidência persistida da onda |
| CAND-LEGAL-REC-24 | certificado expirado; não converter indisponibilidade em ausência de conteúdo |
| CAND-LEGAL-REC-18 | relação entre ABVM e o domínio `abraz.adv.br` ainda não resolvida |

## Limitações e gate

- identidades continuam `provisional_single_source`;
- valores medem força do alinhamento público declarado, não qualidade jurídica;
- nenhum canal foi testado;
- nenhum resultado, conversão ou satisfação foi inferido;
- traduções, páginas duplicadas e rankings não inflaram profundidade;
- `source_evidence_id` deve ser resolvido contra a evidência existente durante
  a persistência; não foi inventado;
- esta onda não promove PAS nem autoriza publicação comercial.

O lote deve ser persistido como nova versão e submetido ao Auditor
independente. Até o parecer, todos os registros permanecem
`pending_independent_audit`.
