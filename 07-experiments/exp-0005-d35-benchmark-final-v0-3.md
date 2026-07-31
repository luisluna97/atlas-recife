# EXP-0005 — Fechamento do benchmark D3.5 v0.3

- **Estado:** avaliação de holdout concluída; gate do Auditor pendente
- **Scoring:** proibido
- **Método:** repetição literal interna por Jaccard limpo de 5-gramas

## Cadeia de validação

- 13 pares produzidos deterministicamente;
- revisão A e B completas;
- acordo 12/13 (92,3%); Cohen's kappa 0,8523;
- duas divergências adjudicadas por terceiro julgador;
- ambos os conflitos preservados como repetição, mas excluídos por tipo inválido;
- gold set congelado antes da calibração;
- regra congelada somente no development;
- holdout aberto uma única vez.

## Resultado

| Etapa | N elegível | Resultado |
|---|---:|---|
| Development | 5 | 5/5; balanced accuracy 1,00 |
| Holdout | 1 | 1/1; apenas classe `distinct_content` |

Limiar congelado: `0.29834093525208116`.

O acerto do holdout não valida o método: há somente um caso e nenhuma ocorrência positiva, portanto sensibilidade não é mensurável. Dos 13 pares iniciais, apenas seis sobreviveram ao gate de tipo de página. O resultado demonstra o funcionamento disciplinado do protocolo, não capacidade de generalização.

## Decisão proposta ao Auditor

- aceitar o pipeline v0.3 como processo de Laboratório reproduzível;
- rejeitar promoção de D3.5 para scoring;
- manter todos os D3.5 `unknown`;
- exigir nova coleta dirigida com mais páginas equivalentes, holdout com ambas as classes e organizações não cobertas.

## Artefatos

- `07-experiments/exp-0005-d35-gold-v0-3.json`
- `07-experiments/exp-0005-d35-rule-frozen-v0-3.json`
- `07-experiments/exp-0005-d35-holdout-evaluation-v0-3.json`
- `09-engineering/labs/d35_gold_calibrate_v0_3.mjs`