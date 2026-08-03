# EXP-0005 — Protocolo de benchmark D3.5 v0.3

- **Estado:** preparação de rotulagem cega; scoring proibido
- **Escopo:** repetição literal interna entre páginas equivalentes
- **Fora do escopo:** autoria, paráfrase e originalidade externa

## Objetivo

Separar desenvolvimento e validação mantida fora da calibração, evitando usar os
mesmos extremos para escolher regra, limiar e medir desempenho.

## Seleção determinística

- fonte: snapshot D3.5 v0.1, com oito candidatos e 39 páginas;
- página substantiva: pelo menos 150 palavras normalizadas;
- par elegível: duas páginas da mesma organização e do mesmo tipo determinístico;
- partição: por organização, ordenar `pair_id`; quando houver ao menos dois pares,
  reservar os primeiros `max(1, floor(30%))` como holdout;
- nenhuma similaridade do algoritmo aparece no pacote de revisão.

## Rotulagem

Dois revisores trabalham separadamente. Para cada par registram:

1. validade do tipo de página: `yes`, `no` ou `uncertain`;
2. rótulo: `repeated_template`, `distinct_content` ou `uncertain`;
3. confiança entre 0 e 1;
4. justificativa obrigatória.

Discordâncias são adjudicadas somente depois das duas entregas. O holdout não é
usado para escolher limiar. Identidade da organização e features do algoritmo não
integram o pacote; URLs são mantidas por proveniência.

## Gates

Antes de qualquer escala 0–3, publicar:

- acordo bruto e Cohen's kappa entre revisores;
- cobertura por organização e tipo de página;
- matriz de confusão no desenvolvimento e depois no holdout selado;
- falsos positivos, falsos negativos e `uncertain`;
- política para organizações sem pares comparáveis;
- experimento separado para paráfrase/autoria/originalidade externa;
- novo parecer independente do Auditor.

## Limitação material

O snapshot atual gera poucos pares e deixa organizações sem comparação. O pacote
v0.3 valida o processo de benchmark, não a generalização do método. Coleta
adicional, pequena e dirigida, deverá ser proposta em artefato separado antes de
ampliar a cobertura.

## Execução

```powershell
node 09-engineering/labs/d35_benchmark_packet_v0_3.mjs 07-experiments/exp-0005-d35-input-snapshot-v0-1.json 07-experiments/exp-0005-d35-review-packet-v0-3.json 07-experiments/exp-0005-d35-review-manifest-v0-3.json 07-experiments/exp-0005-d35-reviewer-a-v0-3.json 07-experiments/exp-0005-d35-reviewer-b-v0-3.json
```
