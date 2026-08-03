# Ranking de oportunidade de reforma visual — método v0

Estado: experimental  
Universo: 50 prospects locais já cadastrados  
Objetivo: encontrar sites cuja reconstrução produza contraste comercial forte

## O que este ranking responde

Quais empresas possuem uma presença própria visivelmente antiga, degradada ou
mal organizada e, ao mesmo tempo, material factual suficiente para uma
reconstrução convincente?

Ele não mede qualidade da empresa, faturamento, reputação ou probabilidade de
compra.

## Etapa 1 — triagem técnica determinística

Código observa sinais reproduzíveis no HTML:

- ausência de viewport móvel;
- estruturas obsoletas (`table`, `font`, `center`, `marquee`, `frameset`);
- largura fixa e estilos legados;
- ano antigo explícito no copyright;
- dependência de portal externo ou conteúdo terceirizado;
- ausência de título, descrição ou heading principal;
- excesso de links em relação ao conteúdo;
- falha de acesso e redirecionamento para rede social.

Essa etapa produz `technical_age_signal`, não uma nota de beleza.

## Etapa 2 — auditoria visual renderizada

Desktop e celular recebem avaliação documentada de:

- primeira impressão e aparência datada;
- hierarquia, tipografia, espaçamento e densidade;
- qualidade e coerência das imagens;
- legibilidade e adaptação móvel;
- clareza de serviço e próximo passo;
- integridade visual, elementos quebrados e confiança percebida.

Cada julgamento deve apontar para screenshots versionados. Sem screenshot,
`visual_decay_score` permanece `null`.

## Etapa 3 — potencial de transformação

Avaliação separada considera:

- serviços e especialidade verificáveis;
- contato e localização;
- equipe, história, fotos e conteúdo reaproveitáveis;
- possibilidade de criar páginas por intenção sem inventar demanda;
- restrições de compliance.

## Saída comercial

Somente candidatos com evidência visual e potencial de transformação recebem
`renovation_priority`. O ranking deve publicar também cobertura, confiança,
fonte, data, método e limitações. Sites sem domínio próprio entram em uma fila
separada de criação, não no ranking de reforma.

