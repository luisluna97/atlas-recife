# EXP-0005 — Gate independente pós-captura D3.5 v0.4.2

- Data: 2026-07-31
- Executor: Auditor independente / Codex
- Código: `09-engineering/labs/d35_capture_v0_4.mjs`
- Snapshot: `07-experiments/exp-0005-d35-capture-snapshot-v0-4-2.json`
- Escopo: integridade da captura e prontidão para rotulagem cega

## Parecer

**ACCEPT_FOR_BLIND_PACKETS_AND_DOUBLE_LABELING_ONLY.**

Está autorizada somente a geração determinística de pacotes cegos e a dupla
rotulagem humana independente. Permanecem proibidos cálculo ou exposição de
features de similaridade, calibração, avaliação, regra 0–3, persistência de
D3.5 e scoring.

## Manifesto e split

- 40 entradas no manifesto e 40 URLs únicas;
- as 40 combinações candidato–URL são exatamente as aprovadas no gate
  pré-captura, sem ausência, adição ou substituição;
- 22 páginas pertencem a development e 18 a holdout;
- o hash do split confere:
  `a48519531a76db13c36d28b1a6afdeaf6f147991ee5afc4588b92cf27cd9aa8c`;
- nenhuma URL final capturada está duplicada;
- não há hash de texto ou de corpo compartilhado entre as partições.

O código materializa uma única requisição GET dirigida por URL, timeout de 20
segundos, redirecionamento habilitado e política explícita de não substituição.

## Resultado da captura

- 35 páginas capturadas com sucesso;
- todas as 35 possuem ao menos 150 palavras visíveis;
- 5 falhas preservadas, sem substituição:
  - quatro páginas Mattos Filho retornaram HTTP 403 e somente o desafio de nove
    palavras “Just a moment...”;
  - a página Healthcare & Life Sciences da Clifford Chance terminou em timeout;
- timestamps, método, candidato, organização, partição, família, URL, status,
  URL final, tipo de conteúdo e limitações estão materializados;
- `labels_included`, `features_included` e `scoring_authorized` são `false`;
- nenhuma chave de score ou rótulo aparece nos registros de página.

## Hashes e proveniência

Os 35 hashes de `visible_text` foram recalculados e conferem integralmente. Os
hashes de corpo têm formato SHA-256 e foram produzidos no mesmo fluxo que leu os
bytes HTTP.

Ressalva: os bytes brutos das respostas não foram preservados no snapshot.
Consequentemente, `body_sha256` não pode ser recalculado posteriormente de modo
independente. Isso não bloqueia pacotes cegos baseados no `visible_text`
preservado e em seu hash verificável, mas o próximo capturador deve persistir o
corpo bruto ou um artefato content-addressed se o hash de resposta for usado
como prova auditável.

## Pares potenciais por organização e família

| Partição | Organização | Páginas substantivas | Pares potenciais |
|---|---|---:|---:|
| development | Marjuhh | 8 | 28 |
| development | Contabilizei | 6 | 15 |
| development | Serur | 4 | 6 |
| development | Mattos Filho | 0 | 0 |
| holdout | Pilot | 5 | 10 |
| holdout | Trust | 5 | 10 |
| holdout | Demarest | 4 | 6 |
| holdout | Clifford Chance | 3 | 3 |

Antes da revisão de equivalência humana, development possui 49 pares potenciais
em três organizações e holdout possui 29 pares potenciais em quatro
organizações. Assim, permanecem possíveis os gates mínimos de pelo menos 12
pares e três organizações por partição. Clifford tem exatamente três pares
potenciais; a meta original de quatro páginas não foi atingida, mas o mínimo de
três pares ainda é possível.

Essas contagens são possibilidades, não pares elegíveis definitivos. Revisores
podem invalidar tipos ou marcar casos incertos, reduzindo cobertura. O gate deve
ser recalculado depois da adjudicação.

## Condições para os pacotes cegos

1. usar somente as 35 páginas substantivas capturadas e seus hashes de texto;
2. formar pares apenas dentro da mesma organização e família declarada;
3. não incluir Mattos Filho nem a página Clifford com timeout;
4. ocultar features, similaridades, resultados anteriores e scores;
5. preservar `pair_id`, URLs e hashes para proveniência;
6. registrar dois revisores independentes, confiança e rationale obrigatórios;
7. guardar os rótulos de holdout em artefato separado e selado;
8. não disponibilizar rótulos ou features do holdout ao processo de calibração;
9. encaminhar divergências à adjudicação somente após ambas as entregas;
10. qualquer nova captura, URL ou substituição exige nova versão e gate.

## Autorização resultante

A autorização termina na produção dos pacotes cegos e das duas entregas humanas
independentes. Adjudicação, abertura de holdout, geração de features,
calibração e scoring dependem de novos gates explícitos.

Nenhum artefato produtor ou dado persistido foi alterado por esta auditoria.
