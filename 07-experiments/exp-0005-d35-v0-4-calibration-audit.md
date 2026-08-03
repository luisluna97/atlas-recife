# Auditoria da calibracao development D3.5 v0.4.2

- Data: 2026-07-31
- Papel executor: Auditor
- Codigo auditado: `09-engineering/labs/d35_calibrate_development_v0_4.mjs`
- Saida auditada: `07-experiments/exp-0005-d35-v0-4-rule-frozen-candidate.json`
- Veredito da regra: **REJEITADA**
- Holdout: **FECHADO; avaliacao e features proibidas**
- Scoring D3.5: **PROIBIDO**

## Decisao executiva

O pipeline e reprodutivel, mas a feature proposta nao discrimina as classes em development. A melhor solucao encontrada e um classificador degenerado que chama todos os 49 pares de `repeated_template`. Nao existe fundamento para congelar, promover ou testar essa regra no holdout.

Ha ainda uma violacao do contrato de isolamento: o programa declara `holdout_accessed: false`, mas abre e parseia o snapshot combinado, que contem textos de development e holdout, antes de filtrar a particao. Os rotulos do holdout nao foram lidos e nao foram calculadas features do holdout, mas os textos foram tecnicamente acessados. Logo, a declaracao e falsa e o gate anterior nao foi cumprido.

## Proveniencia

- SHA-256 do calibrador: `c296be8b170089181871699f916ea6963e67893596e322bd5c8d9c8380e229a6`
- SHA-256 do candidato de regra: `cb9ac3e6142f06a46a982c8b2a4091fbc7c7c28ddc4741633fd706dc4a5cbefc`
- Snapshot declarado: `c8ad1be82caa6fcc9c5875986057b9f8e8a5b5f62477fa0ad7aa4104d8630ee3`
- Gold development declarado: `0f9aaa265a943b7a464624dd98b9f4709d1bed8d81a901f69dd0f23362bd5955`
- Helper de similaridade declarado: `dc59da4fff5db237bef235d567bd4cccab87efc1085cc395714ef953a60043d7`

O output nao registra o hash do proprio calibrador, apenas o helper de similaridade. Portanto, a cadeia de proveniencia da regra esta incompleta mesmo antes de considerar seu desempenho.

## Reexecucao independente

O calibrador foi reexecutado sobre as entradas declaradas. A reexecucao reproduziu:

- `development_n`: 49;
- classes: 28 `repeated_template` e 21 `distinct_content`;
- threshold selecionado: 0;
- TP: 28;
- TN: 0;
- FP: 21;
- FN: 0;
- sensibilidade: 1;
- especificidade: 0;
- precisao: 0,5714285714;
- balanced accuracy: 0,5;
- accuracy: 0,5714285714.

A diferenca de hash entre a reexecucao temporaria e a saida original decorre ao menos do campo dinamico `created_at`; as metricas, classes e casos foram reproduzidos. O arquivo temporario foi removido apos a verificacao.

## Achados

### Critico — feature sem poder discriminativo

O melhor balanced accuracy e 0,5, equivalente ao nivel de uma decisao sem informacao entre as duas classes. Com threshold 0, todo par e previsto como `repeated_template`, produzindo especificidade zero e 21 falsos positivos.

As alternativas listadas tambem nao superam 0,5. Portanto, nao ha limiar util para a feature `candidate-local boilerplate-cleaned exact 5-word Jaccard` nesta amostra development.

Acao: rejeitar a regra e nao abrir o holdout. D3.5 deve permanecer indisponivel para score, ranking, demonstrativo ou contato ate existir uma nova hipotese de feature, novo protocolo development e novo gate.

### Alto — `holdout_accessed: false` incorreto

O codigo executa `read(snapshotPath)` sobre o snapshot combinado e somente depois aplica:

`snapshot.pages.filter(p => p.partition === 'development' ...)`

Assim, o processo abriu e parseou textos de holdout. O filtro impede seu uso na tabela de features, mas nao torna verdadeira a afirmacao de que o holdout nao foi acessado.

Acao:

1. manter proibido qualquer novo acesso, feature ou avaliacao do holdout;
2. nao usar este holdout para alegar avaliacao cega da regra v0.4.2;
3. antes de futura calibracao, produzir fisicamente um snapshot development-only, com hash proprio e validacao de ausencia de IDs/URLs/textos de holdout;
4. executar o calibrador em ambiente cuja allowlist seja verificavel, nao apenas declarada;
5. caso uma futura regra precise de avaliacao cega valida, constituir novo holdout selado ou obter decisao explicita sobre a contaminacao deste conjunto.

### Alto — allowlist declarativa, nao aplicada

`input_allowlist` e escrita apenas na saida. O programa usa caminhos hardcoded e testa argumentos proibidos, mas esse teste nao controla os arquivos efetivamente lidos. Em particular, procurar `holdout` em `process.argv` nao detecta holdout embutido no snapshot combinado.

Acao: instrumentar a funcao de leitura para recusar qualquer caminho fora da allowlist e usar artefatos fisicamente separados por particao.

### Medio — proveniencia incompleta

O output nao inclui o hash de `d35_calibrate_development_v0_4.mjs`. Uma regra congelada deve incluir hashes de todo codigo executor, entradas, configuracao e saidas.

### Medio — estrutura amostral dependente

Os 49 pares derivam de somente tres organizacoes e os pares dentro de cada organizacao nao sao independentes. Mesmo um resultado melhor exigiria validacao com separacao por organizacao, nunca split aleatorio por par.

## Estado dos artefatos

`exp-0005-d35-v0-4-rule-frozen-candidate.json` deve ser preservado apenas como evidencia negativa do experimento. Seu status efetivo apos esta auditoria e **rejected**, independentemente do texto interno `frozen_candidate_pending_audit`.

Nao alterar o arquivo para simular aprovacao retroativa. A rejeicao e estabelecida por este parecer auditavel.

## Demonstrativo sem D3.5

**AUTORIZADO COM CONDICOES:** a selecao de um demonstrativo pode prosseguir excluindo integralmente D3.5 e usando somente:

- variaveis PAS ja aceitas em gates anteriores;
- cobertura observada de cada variavel;
- confianca e proveniencia registradas por evidencia.

Condicoes obrigatorias:

- nao produzir score unico, ranking comercial ou nota agregada disfarçada;
- nao imputar D3.5, nem tratar ausencia como zero;
- mostrar as variaveis separadamente, com cobertura, confianca, data e fonte;
- registrar um criterio de selecao simples, explicito e reproduzivel antes de ver o resultado final;
- identificar a selecao como demonstrativo metodologico, nao como recomendacao de venda ou desempenho de mercado;
- nao iniciar contato, outreach ou qualquer acao externa;
- preservar a possibilidade de comparacao e auditoria sem inferir causalidade.

Se houver mais de um candidato elegivel pelos criterios aceitos, o desempate deve ser deterministico e neutro, por exemplo ordem de `candidate_id` ou sorteio com seed registrada, e nao julgamento subjetivo orientado ao resultado.

## Veredito final

1. **REJEITAR** a regra D3.5 v0.4.2.
2. **NAO CONGELAR NEM PROMOVER** threshold 0.
3. **MANTER HOLDOUT FECHADO** e sem novas features ou avaliacao; registrar que seus textos foram acessados pelo calibrador, embora seus rotulos nao tenham sido lidos.
4. **MANTER D3.5 FORA** de score, ranking, demonstrativo e contato.
5. **PERMITIR O DEMONSTRATIVO SEM D3.5**, somente com variaveis PAS aceitas, cobertura e confianca, sem score unico e sem contato.
