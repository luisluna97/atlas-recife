# EXP-0005 â€” Protocolo de benchmark D3.5 v0.3

- **Estado:** preparaÃ§Ã£o de rotulagem cega; scoring proibido
- **Escopo:** repetiÃ§Ã£o literal interna entre pÃ¡ginas equivalentes
- **Fora do escopo:** autoria, parÃ¡frase e originalidade externa

## Objetivo

Separar desenvolvimento e validaÃ§Ã£o mantida fora da calibraÃ§Ã£o, evitando usar os
mesmos extremos para escolher regra, limiar e medir desempenho.

## SeleÃ§Ã£o determinÃ­stica

- fonte: snapshot D3.5 v0.1, com oito candidatos e 39 pÃ¡ginas;
- pÃ¡gina substantiva: pelo menos 150 palavras normalizadas;
- par elegÃ­vel: duas pÃ¡ginas da mesma organizaÃ§Ã£o e do mesmo tipo determinÃ­stico;
- partiÃ§Ã£o: por organizaÃ§Ã£o, ordenar `pair_id`; quando houver ao menos dois pares,
  reservar os primeiros `max(1, floor(30%))` como holdout;
- nenhuma similaridade do algoritmo aparece no pacote de revisÃ£o.

## Rotulagem

Dois revisores trabalham separadamente. Para cada par registram:

1. validade do tipo de pÃ¡gina: `yes`, `no` ou `uncertain`;
2. rÃ³tulo: `repeated_template`, `distinct_content` ou `uncertain`;
3. confianÃ§a entre 0 e 1;
4. justificativa obrigatÃ³ria.

DiscordÃ¢ncias sÃ£o adjudicadas somente depois das duas entregas. O holdout nÃ£o Ã©
usado para escolher limiar. Identidade da organizaÃ§Ã£o e features do algoritmo nÃ£o
integram o pacote; URLs sÃ£o mantidas por proveniÃªncia.

## Gates

Antes de qualquer escala 0â€“3, publicar:

- acordo bruto e Cohen's kappa entre revisores;
- cobertura por organizaÃ§Ã£o e tipo de pÃ¡gina;
- matriz de confusÃ£o no desenvolvimento e depois no holdout selado;
- falsos positivos, falsos negativos e `uncertain`;
- polÃ­tica para organizaÃ§Ãµes sem pares comparÃ¡veis;
- experimento separado para parÃ¡frase/autoria/originalidade externa;
- novo parecer independente do Auditor.

## LimitaÃ§Ã£o material

O snapshot atual gera poucos pares e deixa organizaÃ§Ãµes sem comparaÃ§Ã£o. O pacote
v0.3 valida o processo de benchmark, nÃ£o a generalizaÃ§Ã£o do mÃ©todo. Coleta
adicional, pequena e dirigida, deverÃ¡ ser proposta em artefato separado antes de
ampliar a cobertura.

## ExecuÃ§Ã£o

```powershell
node 09-engineering/labs/d35_benchmark_packet_v0_3.mjs 07-experiments/exp-0005-d35-input-snapshot-v0-1.json 07-experiments/exp-0005-d35-review-packet-v0-3.json 07-experiments/exp-0005-d35-review-manifest-v0-3.json 07-experiments/exp-0005-d35-reviewer-a-v0-3.json 07-experiments/exp-0005-d35-reviewer-b-v0-3.json
```
