# EXP-0005 — descoberta dirigida de páginas jurídicas D3.5 v0.4

- **Estado:** proposta de corpus; captura e scoring não autorizados
- **Data:** 2026-07-31
- **Executor:** `d35_v04_legal_pages`
- **Método:** busca e navegação manual, limitada aos sites oficiais
- **Escopo:** quatro organizações jurídicas previamente definidas

## Objetivo

Encontrar páginas públicas equivalentes por organização para corrigir o problema
de cobertura e independência observado no D3.5 v0.3. A preferência foi por quatro
ou mais páginas de especialidade do mesmo tipo. Não houve crawling, contato,
submissão de formulário, rotulagem de similaridade ou cálculo de score.

## Resultado executivo

| Candidato | Organização | Tipo preferido | Propostas elegíveis | Situação |
|---|---|---:|---:|---|
| `CAND-LEGAL-INT-03` | Clifford Chance | setor | 4 | corpus proposto completo |
| `CAND-LEGAL-NAT-05` | Demarest | prática | 4 | corpus proposto completo |
| `CAND-LEGAL-REC-03` | JHN Advogados | prática | 1 | insuficiente |
| `CAND-LEGAL-REC-17` | Serur Advogados | setor | 4 | corpus proposto completo |

Foram identificadas 14 URLs oficiais; 13 são propostas para inclusão. A página
agregadora de áreas do JHN foi preservada no registro, mas excluída da proposta
porque não é equivalente a uma página individual de especialidade.

## Clifford Chance — `CAND-LEGAL-INT-03`

Fonte oficial: índice de setores do próprio escritório.

- [Energy & Resources](https://www.cliffordchance.com/expertise/sectors/energy_and_resources.html) — especialidade setorial; acessível.
- [Financial Services](https://www.cliffordchance.com/expertise/sectors/financial-services.html) — especialidade setorial; acessível.
- [Healthcare & Life Sciences](https://www.cliffordchance.com/expertise/sectors/healthcare_life_sciences_and_chemicals.html) — especialidade setorial; acessível.
- [Insurance](https://www.cliffordchance.com/expertise/sectors/insurance.html) — especialidade setorial; acessível.

Limitações: referência internacional em inglês; não deve ser agrupada
silenciosamente com organizações do Recife. O snapshot anterior já contém duas
outras páginas setoriais, portanto a próxima etapa deve deduplicar URLs.

## Demarest — `CAND-LEGAL-NAT-05`

Fonte oficial: índice de áreas de atuação do próprio escritório.

- [Agronegócio](https://www.demarest.com.br/areas-de-atuacao/agronegocio/) — especialidade; acessível.
- [Ambiental](https://www.demarest.com.br/areas-de-atuacao/ambiental/) — especialidade; acessível.
- [Bancário e Financeiro](https://www.demarest.com.br/areas-de-atuacao/bancario-e-financeiro/) — especialidade; acessível.
- [Concorrencial](https://www.demarest.com.br/areas-de-atuacao/concorrencial/) — especialidade; acessível.

Limitação: as páginas carregam blocos recorrentes de navegação, profissionais,
contato e insights. Uma futura captura precisa separar deterministicamente o
corpo editorial desses blocos.

## JHN Advogados — `CAND-LEGAL-REC-03`

Fonte oficial: domínio institucional do escritório.

- [Adm de bens e serviços](https://jhn.jur.adv.br/adm-de-bens-e-servicos) — página específica de serviço; proposta para inclusão.
- [Áreas de atuação](https://jhn.jur.adv.br/areas-de-atuacao) — índice agregado; não proposto como página equivalente.

Limitações materiais: buscas dirigidas não revelaram quatro páginas individuais
de prática ou quatro editoriais públicas. A página de áreas contém texto com
aparência de instrução de template de website, não descrições preenchidas das
práticas. Não se devem inventar URLs nem relaxar a equivalência apenas para
completar a amostra. Este candidato precisa permanecer fora de qualquer corpus
que exija quatro páginas homogêneas, salvo nova evidência oficial.

## Serur Advogados — `CAND-LEGAL-REC-17`

Fonte oficial: índice de segmentos do próprio escritório.

- [Agências Reguladoras](https://serur.com.br/segmentos/agencias-reguladoras) — especialidade setorial; acessível.
- [Bancos](https://serur.com.br/segmentos/bancos) — especialidade setorial; acessível.
- [Construção Civil](https://serur.com.br/segmentos/construcao-civil) — especialidade setorial; acessível.
- [Serviços Financeiros](https://serur.com.br/segmentos/segmento-servicos-financeiros) — especialidade setorial; acessível.

Limitações: menu, profissionais, endereços e texto de cookies se repetem de
forma extensa. A página de Serviços Financeiros já pertence à recuperação
aceita do Serur e deve ser referenciada, não duplicada.

## Proposta de inclusão

1. Submeter as 13 páginas propostas ao Auditor para confirmar domínio oficial,
   equivalência de tipo e ausência de duplicatas.
2. Reusar evidências já existentes quando a URL for idêntica.
3. Somente após o gate, capturar texto com hash, timestamp, método e versão.
4. Manter JHN como corpus insuficiente; ausência de página não vira nota zero.
5. Separar referência internacional, nacional e local na análise.

## Limite do registro

Este documento prova apenas descoberta e acessibilidade observada. Não prova
autoria, originalidade, paráfrase, qualidade de conteúdo ou adequação para
scoring. D3.5 permanece `unknown` até novo gate formal.

Dados estruturados: [exp-0005-d35-v0-4-legal-page-discovery.json](exp-0005-d35-v0-4-legal-page-discovery.json).
