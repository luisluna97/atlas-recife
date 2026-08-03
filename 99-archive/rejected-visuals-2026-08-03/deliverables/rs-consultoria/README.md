# Caminho B — briefing técnico da landing demonstrativa

## Controle

- organização: `CAND-ACCOUNT-REC-05` — RS Consultoria Empresarial Contábil
- versão/data: `v0.2` — `2026-07-31`
- natureza: demonstrativo privado, não contratado e não publicado
- estado: conceito local implementado; apresentação externa e publicação bloqueadas
- seleção: índice experimental do `ADR-0041`; não é score oficial de maturidade

## Objetivo e limites

Entregas atuais: [site demonstrativo](site/preview.html) e
[proposta curta v1](../../output/pdf/Atlas-Proposta-RS-Consultoria-v1.pdf).

Manter uma única landing conceitual que demonstre mensagem clara,
estrutura moderna, SEO on-page, jornada de contato e qualidade técnica. Este
briefing não autoriza contato, publicação, indexação, mídia, instalação em
domínio de terceiro, coleta em escala ou precificação.

## Por que a RS entrou no Caminho B

A regra experimental encontrou cobertura `19/19`, portões de coleta e proposta
`pass` e nove sinais `<=1`, distribuídos em D1–D4, sem converter desconhecidos
em zero. Isso testa se o índice encontra casos demonstráveis em escala. Não
prova que seja “o pior site”, não mede qualidade profissional e não substitui
validação visual humana.

## Fatos, inferências e pendências

Fatos aceitos: identidade e ID acima, cobertura completa, portões aprovados e
nove sinais baixos. Valores e proveniência: [evidence-map.md](./evidence-map.md).

Inferências de trabalho: há material para testar transformação; uma página
focal é mais compatível com o produto de entrada que redesenhar o site inteiro.
Inferências não podem virar claims.

O recorte interno v0 adota **terceirização de serviços de contabilidade para
empresas** como serviço focal, porque essa formulação aparece explicitamente na
home. “Crescimento e fortalecimento administrativo-financeiro” permanece apenas
como contexto declarado, não promessa de resultado. Público detalhado, intenção
de busca, CTA final, ativos, baseline visual e autorização de uso externo ainda
precisam de validação.

## Processo de desenvolvimento e validação

1. Preservar o antes com URL, data, viewport, desktop/mobile e hash quando possível.
2. Confirmar serviços em fonte própria da organização.
3. Mapear intenção de busca sem prometer volume ou resultado.
4. Separar fatos, inferências e hipóteses editoriais.
5. Escolher serviço focal por evidência, utilidade demonstrável e compatibilidade ética.
6. Congelar o recorte e submeter ao Auditor.
7. Produzir wireframe, conteúdo e implementação privada.
8. Antes de apresentação externa, concluir build, QA visual e autorização de uso.

## Estrutura proposta

1. Hero: serviço, público, resultado descritivo verificável e CTA contextual.
2. Situações atendidas, sem alarmismo.
3. Como funciona, somente após confirmação.
4. Escopo e limites do serviço.
5. Credenciais públicas verificadas.
6. Conteúdo de apoio à intenção de busca.
7. FAQ sem aconselhamento indevido.
8. Contato contextual com coleta mínima.
9. Rodapé institucional e avisos necessários.

## SEO, conversão e técnica

- uma intenção principal; `title`, description, H1 e headings específicos;
- conteúdo original; links e schema somente quando verdadeiros;
- imagens dimensionadas, comprimidas e com alt adequado;
- URL curta hipotética, sempre `noindex, nofollow` e fora do sitemap;
- CTA descreve a próxima ação e preserva página/serviço/origem;
- formulário mínimo, sem envio real na demo; sem pixels ou integrações de produção;
- mobile-first, sem rolagem horizontal, dependência de hover ou alvos inadequados;
- HTML semântico, teclado, foco visível, contraste WCAG 2.2 AA, labels e erros associados;
- orçamento de JavaScript/terceiros; fontes limitadas; Core Web Vitals medidos no artefato;
- a demo não pode parecer site oficial nem sugerir endosso da RS.

## Eventos futuros (não instalados)

| Evento | Uso | Campos mínimos |
|---|---|---|
| `landing_view` | visualização válida | página, serviço, origem |
| `cta_click` | clique no CTA | posição, rótulo, serviço |
| `form_start` | primeira interação | formulário, serviço |
| `form_submit` | envio validado | formulário, serviço, resultado |
| `contact_channel_click` | clique em canal | canal, posição, serviço |
| `faq_open` | abertura de item | item, serviço |

Consentimento, retenção, minimização, ambiente e responsável devem ser definidos
antes de qualquer coleta.

## Antes/depois e QA

O pacote deve usar capturas comparáveis em desktop/mobile, ligar mudanças a
evidências ou hipóteses e declarar que não houve tráfego real nem prova de resultado.

- [ ] serviço, público, problema e CTA sustentados ou marcados como hipótese;
- [ ] nenhum claim, depoimento, urgência ou métrica inventado;
- [ ] `noindex` e ausência do sitemap confirmados;
- [ ] formulário não transmite dados;
- [ ] responsividade, teclado, foco, headings, labels e contraste verificados;
- [ ] links, erros, SEO técnico e performance testados;
- [ ] antes/depois com data e viewport comparáveis;
- [ ] Auditor aprovou proveniência, claims e isolamento.

## Proveniência

Entradas: `ATLAS.md`; `DECISIONS.md`/`ADR-0041`;
`03-data/evaluation-variables-v0-3.md`;
`06-research/demo-service-best-practices-v0.md`; auditoria da shortlist; e
`tmp/miss0005-audit/atlas-miss0005-v0.sqlite`. A pesquisa do Cientista consolida
Baymard, Nielsen Norman Group, Google Search, web.dev, GA4 e WCAG; nenhuma
metodologia proprietária é reproduzida aqui.

Snapshot materializado das 19 evidências:
[`../demo-evidence-snapshot-v0.json`](../demo-evidence-snapshot-v0.json).
