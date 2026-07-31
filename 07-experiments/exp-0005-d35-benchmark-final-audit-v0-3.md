# EXP-0005 — Auditoria final independente do benchmark D3.5 v0.3

- Data: 2026-07-31
- Executor: Auditor independente / Codex
- Escopo: protocolo, pacote de revisão, revisores A/B, acordo, adjudicação,
  gold, regra congelada, holdout, relatório e código
- Variável: D3.5 — conteúdo próprio e não repetido

## Decisões

1. **Pipeline de Laboratório: ACCEPT_WITH_RESERVATIONS.**
2. **Scoring D3.5: REJECT.** Todos os D3.5 permanecem `unknown`.

O aceite do pipeline reconhece uma cadeia reproduzível para desenvolver e
auditar experimentos. Não valida o limiar, não autoriza score 0–3 e não permite
inferir autoria ou originalidade.

## Reexecução independente

Foram regenerados, em arquivos temporários e sem alterar os artefatos
produtores:

- pacote de revisão e manifesto;
- gold a partir dos revisores A/B e da adjudicação;
- regra calibrada somente nos itens marcados `development`;
- avaliação dos itens marcados `holdout`.

Todos os cinco resultados regenerados foram estruturalmente idênticos aos
artefatos publicados.

## Proveniência e ordem

- pacote: `e42a56c53a39092415f37c242d58bdadaac951178c00641c6731d82797a05981`;
- gold: `a9e03741cc5693b82ddd35ecf898fbf0fffe7d807e163e80763b47ff3cbe2ee5`;
- regra: `c600f54129f0d635d730711c7444834764fc6c2266486166edbafd782c1b6ffa`;
- o gold referencia os hashes canônicos corretos dos revisores e da
  adjudicação;
- a regra referencia o hash correto do gold;
- a avaliação referencia os hashes corretos da regra e do gold;
- timestamps do filesystem e encadeamento confirmam a ordem material
  gold → regra → avaliação.

O relatório de acordo usa hashes dos arquivos brutos dos revisores, enquanto o
gold usa hashes do JSON parseado e reformatado com dois espaços. Ambos foram
reproduzidos, mas a convenção deve ser nomeada explicitamente para evitar
ambiguidade futura.

## Revisão humana e gold

- 13 pares revisados integralmente por A e B;
- acordo de rótulo: 12/13, ou `0.9230769230769231`;
- Cohen's kappa: `0.8522727272727274`;
- acordo de validade do tipo: 11/13;
- dois conflitos encaminhados e resolvidos por adjudicação;
- 13 itens no gold, mas somente 6 elegíveis após validade de tipo;
- 5 elegíveis no desenvolvimento e 1 no holdout.

As métricas publicadas reproduzem:

- development: TP 2, TN 3, FP 0, FN 0, balanced accuracy 1,00;
- holdout: TP 0, TN 1, FP 0, FN 0, balanced accuracy 0,50 e accuracy 1,00;
- limiar: `0.29834093525208116`.

## Bloqueios de scoring

### Crítico — holdout não independente

O único caso elegível de holdout é Trust, dentistas × veterinários. As mesmas
duas páginas aparecem no desenvolvimento por meio dos pares dentistas × médicos
e médicos × veterinários. Há sobreposição de páginas e organização entre
calibração e avaliação. Particionar pares, em vez de páginas ou organizações,
produziu dependência material e invalida o holdout como teste de generalização.

### Crítico — holdout com uma única classe

O holdout elegível contém apenas um exemplo `distinct_content`. Ele mede um
único verdadeiro negativo; sensibilidade, falsos negativos e desempenho sobre
`repeated_template` não são observáveis. Accuracy 1,00 não representa validação
do método, e balanced accuracy 0,50 explicita a classe ausente.

### Alto — selamento procedimental incompleto

O código de calibração filtra corretamente `development`, portanto não foi
detectado uso computacional direto do rótulo holdout. Entretanto, o gold em
texto aberto, criado antes da regra, contém também o rótulo do holdout. Assim, o
produtor da calibração podia conhecê-lo antes do congelamento. O próximo ciclo
deve manter labels e features de holdout em artefato separado e inacessível até
o hash da regra estar registrado.

### Alto — amostra e cobertura

Somente 6 dos 13 pares sobreviveram ao gate de tipo, originados de poucas
organizações do mesmo snapshot. O conjunto não cobre a diversidade necessária
de tipos, setores, línguas, estruturas e graus de repetição.

### Alto — validade do construto

O método avalia repetição literal interna após limpeza heurística. D3.5 também
envolve conteúdo próprio. Autoria, paráfrase e originalidade externa continuam
fora do método; logo nem um benchmark maior deste sinal isolado justificaria,
sozinho, a variável inteira.

## Ações obrigatórias para novo gate

1. particionar antes da formação de pares, preferencialmente por organização;
2. impedir qualquer página ou organização de aparecer em development e holdout;
3. selar labels e features do holdout em artefato separado antes da calibração;
4. obter holdout com ambas as classes e tamanho suficiente para sensibilidade,
   especificidade e intervalos de incerteza;
5. ampliar organizações e tipos de página, incluindo casos limítrofes;
6. publicar erros, cobertura e estabilidade do limiar;
7. validar separadamente autoria, paráfrase e originalidade externa;
8. só então propor uma regra explícita de composição 0–3 e submetê-la a novo
   gate independente.

## Autorização resultante

O pipeline v0.3 pode permanecer no Laboratório para aperfeiçoamento do desenho,
geração de pares, revisão humana e testes determinísticos. A regra congelada e
o limiar não podem preencher `atomic_variable_values`, promover D3.5, compor
agregados ou sustentar comunicação comercial.

Nenhum artefato produtor ou dado persistido foi alterado por esta auditoria.
