# Auditoria pre-calibracao D3.5 v0.4.2

- Data: 2026-07-31
- Papel executor: Auditor
- Gate: pre-calibracao
- Veredito: **APROVADO COM RESSALVAS, SOMENTE PARA FEATURES E CONGELAMENTO DA REGRA EM DEVELOPMENT**
- Scoring D3.5: **PROIBIDO**
- Avaliacao, abertura para calibracao ou calculo de features do holdout: **PROIBIDOS**

## Escopo auditado

Foram auditados os quatro pacotes rotulados (reviewers A e B nas particoes development e holdout), suas notas e hashes, o acordo calculado, a unica adjudicacao e os gold sets separados. A auditoria verificou estrutura, contagens, identidade dos pares, rotulos, resolucao, proveniencia e ausencia de features algoritmicas nos artefatos gold.

## Resultado do gate

O gate autoriza exclusivamente:

1. calcular features deterministicas para os textos e pares de `development`;
2. unir essas features ao gold de `development`;
3. calibrar e congelar a regra usando apenas gold e textos de `development`;
4. registrar codigo, parametros, entradas, hashes, executor e versao da regra congelada.

Esta autorizacao nao se estende ao holdout nem ao scoring D3.5. Antes de qualquer operacao futura no holdout, a regra deve estar congelada e passar por novo gate de auditoria.

## Evidencias e reconciliacao

### Pacotes e independencia operacional

- Development A: 49 pares.
- Development B: 49 pares.
- Holdout A: 29 pares.
- Holdout B: 29 pares.
- Em cada particao, A e B receberam os mesmos pares-base, com `review` separado e `reviewer_id` distinto.
- Todos os itens declaram `algorithm_features_hidden: true`.
- As notas dos revisores declaram revisao independente, limitada a URLs, hashes e excertos, sem acesso ao outro revisor, features, scores ou codigo.
- Nao foi encontrada evidencia artefatual de contaminacao cruzada.

Limite: a independencia confirmada e operacional e documental; nao equivale a diversidade estatistica de avaliadores, pois os dois revisores pertencem ao mesmo tipo de ambiente/modelo. O kappa nao deve ser apresentado como evidencia de concordancia entre humanos ou entre familias de modelos independentes.

### Hashes confirmados

- Snapshot-fonte comum: `c8ad1be82caa6fcc9c5875986057b9f8e8a5b5f62477fa0ad7aa4104d8630ee3`
- Development reviewer A final: `4c30f3cf7c1046d27df37700b848ddf452b314b3d6ca4145697a824462360100`
- Development reviewer B final: `fd102aaf3ce76b71e88baf4f56221960214e0d4f91ee6cfa642176ae3595e254`
- Holdout reviewer A final: `c0d4a736975ab05fcffac48146c20a8bc243584544e7cd9c508af0b873c5d50e`
- Holdout reviewer B final: `db6848516379092b1f1708b0bfebd7ffbe40a0ba5bed554f533dc26b0442f9f1`
- Development reviewer A input reconstruido: `1e85db26630442dd892e58f95cd9224f765510978d8af920b33f32145e5e09cc`
- Holdout reviewer A input reconstruido: `4b66145795ed3f4e6a683d2f948913d4521217dcc664aaca387c1852a34e584c`
- Development gold: `0f9aaa265a943b7a464624dd98b9f4709d1bed8d81a901f69dd0f23362bd5955`
- Holdout gold: `819d1b1c0a3f3c7e467fcff474e6e5abb9a1246d0a6949186cd1d47df3ab97ab`
- Adjudicacao: `2e6ece9eb8b3d62e6dad4e6aab9111ab427df68044afc787de1be63a863df752`

### Acordo recalculado

| Particao | n | Reviewer A | Reviewer B | Acordos | Acordo bruto | Cohen kappa | Familia |
|---|---:|---|---|---:|---:|---:|---:|
| Development | 49 | 29 repeated / 20 distinct | 28 repeated / 21 distinct | 48 | 0.9795918367 | 0.9580838323 | 49/49 |
| Holdout | 29 | 3 repeated / 26 distinct | 3 repeated / 26 distinct | 29 | 1.0 | 1.0 | 29/29 |

Os valores recalculados coincidem com `exp-0005-d35-v0-4-review-agreement.json`.

### Adjudicacao e merge do gold

- Houve exatamente uma divergencia: `D35V04-6d4e31d9301f`, em development.
- Reviewer A: `repeated_template`, confianca 0.82.
- Reviewer B: `distinct_content`, confianca 0.96.
- Adjudicacao independente: `distinct_content`, confianca 0.90.
- O gold registra a resolucao como `third_party_adjudication` e preserva os hashes das paginas.
- Development gold final: 49 pares, sendo 28 `repeated_template`, 21 `distinct_content` e zero `uncertain`.
- Holdout gold final: 29 pares, sendo 3 `repeated_template`, 26 `distinct_content` e zero `uncertain`.
- Os demais pares de development e todos os pares de holdout foram resolvidos por consenso.

### Estado do holdout

Nao foram encontrados campos de feature, similaridade, Jaccard, predicao, limiar ou score nos gold sets. O holdout permanece sem features calculadas e com `scoring_authorized: false`.

## Achados e riscos

### Alto — isolamento do holdout e processual, nao tecnico

O gold de holdout esta em texto aberto no mesmo repositorio e workspace usados pela calibracao. Nao ha evidencia de que tenha sido usado para calibrar, mas sua acessibilidade cria risco de vazamento acidental ou deliberado.

Acao obrigatoria para esta autorizacao limitada:

- o executor de calibracao deve receber allowlist explicita apenas dos arquivos de development;
- deve registrar todas as entradas abertas e seus hashes;
- deve afirmar em log que nenhum texto, rotulo, pacote ou gold de holdout foi aberto ou usado;
- o hash atual do holdout gold (`819d1b1c0a3f3c7e467fcff474e6e5abb9a1246d0a6949186cd1d47df3ab97ab`) deve permanecer imutavel;
- recomenda-se selar o holdout por controle de acesso separado antes de operacoes posteriores.

Qualquer acesso ao holdout durante a calibracao invalida o gate e exige reinicio do protocolo com novo holdout.

### Medio — independencia limitada dos revisores

A/B possuem separacao de pacotes, IDs, notas e execucao declarada, mas nao representam familias independentes de avaliadores. Manter esta limitacao explicita em qualquer relatorio de validade.

## Contrato de execucao autorizado

Entradas permitidas:

- `07-experiments/exp-0005-d35-v0-4-development-gold.json`, hash acima;
- snapshot de captura `c8ad1be82caa6fcc9c5875986057b9f8e8a5b5f62477fa0ad7aa4104d8630ee3`, filtrado estritamente para `partition = development` e paginas capturadas/substantivas previstas no protocolo;
- codigo deterministico versionado para extracao de features, merge, calibracao e validacao.

Entradas proibidas durante calibracao:

- `exp-0005-d35-v0-4-holdout-gold.json`;
- pacotes, notas, rotulos ou textos de holdout;
- qualquer metrica ou resultado calculado sobre holdout;
- qualquer score D3.5 da amostra de empresas.

Saidas obrigatorias antes de novo gate:

- tabela de features somente development, com proveniencia por par/pagina;
- validacao deterministica do merge 49/49, sem duplicidade ou perda;
- relatorio de calibracao somente development;
- especificacao imutavel da regra congelada, incluindo features, formula, normalizacao, limiares, tratamento de faltantes e versao;
- hashes de entradas, codigo e saidas;
- log negativo de acesso ao holdout.

## Decisao final

**AUTORIZADO COM RESSALVAS:** calculo de features, merge, calibracao e congelamento da regra exclusivamente com gold e textos de development.

**CONTINUA PROIBIDO:** calcular features do holdout, abrir o holdout para calibracao, avaliar no holdout, ajustar a regra apos observar holdout ou executar scoring D3.5. Essas etapas dependem de novo gate do Auditor.
