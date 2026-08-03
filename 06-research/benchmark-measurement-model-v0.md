# Modelo de benchmark e medição v0 — Serviços profissionais

- **Missão:** `MISS-0005`
- **Data:** 2026-07-30
- **Estado:** experimental, pronto para consulta controlada
- **Escopo:** 25 escritórios jurídicos e 25 contábeis em Recife; 5 referências nacionais e 3 internacionais por segmento

## Decisão central

O Atlas não produzirá agora um único “Digital Maturity Score”. Consultorias globais medem maturidade com dados internos, questionários, validação e resultados; um site público mostra apenas uma parte. O modelo terá três camadas independentes:

1. **Evidência digital pública:** detectada ou revisada por rubrica.
2. **Maturidade operacional verificada:** estratégia, dados, processos, pessoas, CRM e automação, somente com acesso autorizado.
3. **Resultado de negócio verificado:** leads, conversão, CPL, CAC, receita e retenção, somente com dados reais.

Na amostra pública dos 66, as camadas 2 e 3 permanecem `unknown`, nunca zero.

## O que o Cientista incorporou

- McKinsey, BCG e Deloitte: maturidade é multidimensional; o Atlas usa essa lição para separar capacidades, não para copiar scores proprietários.
- Bain: proposta B2B pode entregar diferentes formas de valor; isso entra como hipótese para o Laboratório e para o alinhamento entre especialidade e site.
- Google Search Essentials e dados estruturados: medir fundação técnica, conteúdo e coerência, sem prometer indexação ou ranking.
- WCAG 2.2: combinar achados automáticos com revisão humana; zero falhas automáticas não significa conformidade.
- Core Web Vitals: separar campo e laboratório; repetir Lighthouse e preservar dispersão.
- ANPD: observar transparência e comportamento de consentimento sem emitir parecer jurídico.

## Dimensões externas v0

| ID | Dimensão | Regra de interpretação |
|---|---|---|
| EXT-01 | Proposta e alinhamento de especialidade | O site sustenta o que o escritório afirma ser? |
| EXT-02 | Descoberta e fundação de busca | Fundamentos observáveis; não tráfego ou ranking. |
| EXT-03 | Jornada e prontidão de conversão | Caminho e atrito; não taxa de conversão. |
| EXT-04 | Confiança, autoridade e compliance comunicacional | Sinais públicos, não validação automática de alegações. |
| EXT-05 | Acessibilidade observável | Achados automáticos + amostra humana. |
| EXT-06 | Experiência técnica | Campo quando disponível; laboratório repetido. |
| EXT-07 | Mensuração observável | Tags, requests e eventos; não configuração ou eficácia. |
| EXT-08 | Privacidade e consentimento observáveis | Sinais técnicos; não parecer jurídico. |
| EXT-09 | Consistência entre propriedades | Coerência de mensagem, identidade e contatos. |

## Classes epistemológicas

- `detected`: elemento ou comportamento tecnicamente observado.
- `quality_reviewed`: qualidade avaliada por rubrica explícita e auditável.
- `effective`: resultado demonstrado por dado operacional.

Tag detectada não prova analytics; WhatsApp não prova lead; schema válido não prova rich result; artigo não prova autoridade; Lighthouse alto não prova experiência real; formulário não prova conversão.

## Gate para variáveis e benchmarks

Toda incorporação passa por: proveniência/direitos, relevância, observabilidade externa, validade, compliance, comparabilidade internacional, redundância e risco de Goodhart. O fluxo é:

`fonte → claim → hipótese Atlas → variável observável → Laboratório → onda profunda → catálogo → score experimental → validação`

## Estrutura do dado

Cada valor deve carregar: organização, propriedade e página; timestamp; valor bruto e normalizado; classe de detecção; método; ferramenta e versão; executor; hash do artefato; fonte; confiança; variabilidade; aplicabilidade; limitação; revisão manual.

## Política de score

Manter famílias separadas: PAS/alinhamento, SEO, conversão observável, confiança, acessibilidade, performance, mensuração, privacidade, consistência e confiança da evidência. Agregado único fica bloqueado até análise de cobertura, correlação, estabilidade e missingness.

## Fontes primárias

- [McKinsey — Digital Quotient](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/raising-your-digital-quotient)
- [BCG — Digital Acceleration Index](https://www.bcg.com/publications/2021/digital-acceleration-index)
- [Deloitte — Digital pivots](https://www.deloitte.com/us/en/insights/topics/digital-transformation/digital-maturity-pivot-model.html)
- [Bain — B2B Elements of Value](https://media.bain.com/b2b-eov/)
- [Google — Search Essentials](https://developers.google.com/search/docs/essentials)
- [Google — Structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [web.dev — Web Vitals](https://web.dev/articles/vitals)
- [ANPD — Guia de cookies](https://www.gov.br/anpd/pt-br/assuntos/noticias-periodo-eleitoral/anpd-lanca-guia-orientativo-201ccookies-e-protecao-de-dados-pessoais201d)
