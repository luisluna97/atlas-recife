# EXP-0007 — Gate Atlas de Qualidade de Imagem v0

- **Estado:** iniciado com um ativo interno; bake-off externo não iniciado
- **Dono:** Diretor de Arte
- **Apoio:** Cientista, Auditor e Implementador
- **Objeto inicial:** imagens conceituais da Rota 3 da RS

## Hipótese

Um pipeline híbrido reduz artefatos, imagens genéricas e risco de representação
enganosa melhor que preferência humana rápida ou score automático isolado.

## Antes da geração

- brief factual e shot list;
- referências, origem, licença e anti-referências;
- lista explícita do que não pode ser representado;
- modelo/versão, executor, prompt, custo e uso pretendido;
- proibição de inventar funcionário, cliente, sede ou documento real.

## Camada determinística

- MIME, dimensões, aspect ratio, tamanho, perfil de cor e EXIF;
- SHA-256 e hash perceptual para duplicatas/proximidade;
- OCR e revisão de qualquer texto detectado;
- detecção candidata de face, mãos, pose, landmarks, recortes e perspectiva;
- contraste e composição quando inserida no layout;
- moderação e registro de proveniência.

## Camada de crítica visual

Duas passagens independentes de modelo visual:

1. sem o prompt, para detectar anomalias e sinais de IA;
2. com o brief, para aderência e riscos de representação.

A saída registra região, evidência, severidade e confiança. Discordância material
ou baixa confiança vai ao humano.

## Hard fail

- texto ou logotipo indevido;
- anatomia ou objeto impossível;
- sombra, reflexo ou perspectiva fisicamente incoerentes de forma evidente;
- marca, pessoa ou identidade não autorizada;
- documento que pareça real e contenha informação inventada;
- pessoa gerada apresentada como funcionário/cliente;
- ambiente fictício apresentado como sede;
- viés, sexualização, violência ou contexto cultural ofensivo;
- arquivo fora das especificações técnicas.

## Soft fail

- estética genérica ou reconhecivelmente “de IA”;
- excesso de perfeição, plástico ou desfoque;
- clichê de setor ou de Recife;
- composição fraca no mobile/desktop;
- distância da direção de arte;
- baixa novidade frente ao acervo.

## Revisão humana

Obrigatória em 100% dos finalistas, com zoom de 100–200% e dentro dos layouts
desktop/mobile. Só humano autoriza uso externo. Scores priorizam revisão; não
aprovam publicação.

## Registro do primeiro ativo

- arquivo: `../10-deliverables/rs-consultoria/site/public/images/mesa-trabalho-recife-concept-v1.png`
- gerador: ferramenta integrada ImageGen; modo built-in
- executor: Codex
- uso: conceito privado, não publicação
- SHA-256: `D681877B0116EF93928418AD129A4833F4EE619B26A1CCEED18FC78366DCE4AE`
- prompt: preservado no log da missão; cena editorial sem pessoas, marca, sede ou texto intencional
- custo informado: não disponível no ambiente
- auditoria: pendente neste registro

### Resultado v1

`REVISE`: microtexto sintético no documento, caneta ambígua e risco de a cena
parecer sede/documento real. Atmosfera e composição foram preservadas.

### Correção e resultado v2

- arquivo: `../10-deliverables/rs-consultoria/site/public/images/mesa-trabalho-recife-concept-v2.png`
- método: edição localizada do ativo v1 pela ferramenta integrada ImageGen
- SHA-256: `8F53F57AEAD276A39476C899731AC2B2053CCD65B8AD631D8DC420A9DFFBFA37`
- correções: microtexto substituído por pauta abstrata; caneta substituída por um lápis reconhecível
- auditoria independente: `ACCEPT` para protótipo privado, condicionado à legenda editorial explícita
- risco residual: pequeno eco triangular junto à ponta; cena fotorrealista não pode ser apresentada como sede/documento da RS

## Critério de promoção

O protocolo só vira padrão após testar diferentes modelos e tipos de falha,
medir falsos positivos/negativos e receber parecer do Auditor.

## Proveniência

Pesquisa: [[../06-research/image-generation-and-audit-v0]]. Decisão: `ADR-0044`.
