# Variáveis de avaliação v0.3

## Escala atômica

Cada item aplicável recebe:

- 0 — ausente ou falha confirmada;
- 1 — fraco/parcial;
- 2 — adequado;
- 3 — forte;
- unknown — não observado ou evidência insuficiente.

Unknown nunca vira zero. Cada dimensão mostra itens, cobertura, confiança e evidências.

## AVAIL — Disponibilidade técnica atual

Score separado do PAS.

- AVAIL-01 DNS resolve;
- AVAIL-02 TLS válido e cadeia verificável;
- AVAIL-03 HTTP/browser alcança conteúdo público;
- AVAIL-04 estabilidade em janelas/resolvedores distintos.

DNS inexistente, certificado expirado ou indisponibilidade persistente podem receber ponto negativo apenas aqui. Cloudflare/403 do coletor com acesso normal pelo navegador não penaliza o site.

## PAS-D1 — Clareza da proposição (25%)

- D1.1 proposta explícita;
- D1.2 público/problema claro;
- D1.3 especialidade prioritária;
- D1.4 diferenciação concreta;
- D1.5 coerência entre afirmações.

## PAS-D2 — Alinhamento estrutural (20%)

- D2.1 página dedicada à especialidade;
- D2.2 navegação/menu coerente;
- D2.3 title/H1/headings alinhados;
- D2.4 links internos sustentam o tema;
- D2.5 arquitetura diferencia serviços e públicos.

## PAS-D3 — Profundidade substantiva (25%)

- D3.1 problemas atendidos;
- D3.2 escopo e entregas;
- D3.3 cenários/aplicações;
- D3.4 evidência de experiência, autoria ou credenciais declaradas;
- D3.5 conteúdo próprio e não repetido.

## PAS-D4 — Jornada e ação (15%)

- D4.1 CTA contextual;
- D4.2 destino válido;
- D4.3 canais adequados;
- D4.4 fricção observável;
- D4.5 continuidade entre especialidade e contato.

## PAS-D5 — Consistência entre propriedades (15%)

- D5.1 marca/nome;
- D5.2 especialidades;
- D5.3 endereço e contatos;
- D5.4 proposta/público;
- D5.5 conflitos entre site, redes e listagens.

D5 permanece unknown até coletarmos propriedades comparáveis.

## Variáveis descritivas — não entram automaticamente no PAS

- title, meta description, H1, canonical, idioma;
- JSON-LD e Open Graph;
- GA4/Google tag, GTM e Meta Pixel detectáveis;
- WhatsApp, telefone, e-mail e formulário;
- número de páginas e palavras;
- DNS, TLS, status HTTP e redirects;
- hashes, método, versão, executor, timestamp e limitações.

Essas variáveis podem explicar uma avaliação, mas presença isolada não prova qualidade ou eficácia.

## Próximas famílias após PAS

- performance/Core Web Vitals;
- acessibilidade WCAG;
- SEO técnico multipágina;
- privacidade e consentimento;
- mensuração/eventos;
- qualidade visual;
- Google Business e redes sociais;
- resultados internos de negócio, somente com acesso autorizado.
