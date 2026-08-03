# Auditoria da shortlist do alvo demonstrativo v0

- Data: 2026-07-31
- Papel executor: Auditor
- Fonte: `tmp/miss0005-audit/atlas-miss0005-v0.sqlite`
- Codigo: `09-engineering/labs/demo_shortlist_v0.mjs`
- SHA-256 do codigo: `67fdd4477e31238ae1e0a5729744ec0b5e108ae90420ff74a68be98c62885c4d`
- Veredito: **APROVADO COM RESSALVAS PARA DEMONSTRATIVO PRIVADO**
- Contato ou publicacao: **NAO AUTORIZADOS**

## Escopo e metodo auditado

O metodo auditado consulta o banco SQLite em modo somente leitura e considera:

- somente candidatos da camada geografica `recife`;
- somente o registro mais recente com `review_status = accepted_by_auditor` por candidato e variavel;
- D1.1-D1.5, D2.1-D2.5, D3.1-D3.4 e D4.1-D4.5, totalizando 19 variaveis;
- exclusao expressa de D3.5 e de D5;
- valor conhecido apenas quando `applicability = applicable` e `value IS NOT NULL`;
- `unknown` separado, sem conversao para zero;
- elegibilidade posterior exigindo `collection_gate = pass`, `proposition_gate = pass`, cobertura 19/19 e pelo menos um sinal com valor menor ou igual a 1 em cada uma de D1-D4.

O script nao altera o banco e abre a conexao com `readOnly: true`.

## Reproducao

A execucao foi repetida sobre o banco indicado. Aplicado o gate documentado ao JSON produzido, tres candidatos foram elegiveis:

| Candidato | Segmento | Cobertura | Unknown | Sinais baixos | D1 | D2 | D3 | D4 |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| Leonardo Coelho Advocacia (`CAND-LEGAL-REC-21`) | legal_b2b | 19/19 | 0 | 14 | 4 | 2 | 3 | 5 |
| RS Consultoria Empresarial Contabil (`CAND-ACCOUNT-REC-05`) | accounting_b2b | 19/19 | 0 | 9 | 2 | 2 | 2 | 3 |
| HMA Contabilidade (`CAND-ACCOUNT-REC-04`) | accounting_b2b | 19/19 | 0 | 4 | 1 | 1 | 1 | 1 |

As contagens observadas conferem com o resultado proposto.

### Confianca media por dimensao

| Candidato | D1 | D2 | D3 | D4 |
|---|---:|---:|---:|---:|
| Leonardo Coelho Advocacia | 0,720 | 0,720 | 0,720 | 0,720 |
| RS Consultoria Empresarial Contabil | 0,690 | 0,730 | 0,575 | 0,804 |
| HMA Contabilidade | 0,730 | 0,730 | 0,700 | 0,828 |

## Achados

### Aprovado — latest accepted e tratamento de desconhecidos

A janela SQL particiona por `candidate_id, variable_id`, filtra previamente `accepted_by_auditor` e escolhe o registro mais recente por `datetime(observed_at) DESC, rowid DESC`. Valores ausentes ou nao aplicaveis entram na lista `unknown`; nao sao transformados em zero nem contados como sinais baixos.

Ressalva tecnica: `rowid` e um desempate deterministico dentro deste arquivo SQLite, mas nao e um identificador estavel entre exportacoes ou reconstrucao do banco. Uma versao posterior deve usar um ID persistente de observacao como desempate.

### Aprovado — D3.5 e D5 excluidos

A allowlist contem exatamente 19 IDs de D1-D4 e nao inclui D3.5 nem qualquer variavel D5. Nao ha uso da regra D3.5 rejeitada.

### Ressalva — gate e escolha nao estao implementados no script

`demo_shortlist_v0.mjs` extrai candidatos e calcula cobertura, sinais baixos e confianca, mas nao filtra internamente os quatro requisitos de elegibilidade nem emite uma selecao. A shortlist de tres nomes foi obtida por uma etapa posterior, reproduzida nesta auditoria.

Acao recomendada: uma proxima versao deve emitir separadamente `eligible: true/false` e os motivos de exclusao, sem escolher ou ranquear candidatos. Isso reduz divergencia entre o metodo declarado e a execucao.

### Ressalva — ausencia de score unico e uso da contagem

O script nao calcula media ponderada, nota composta ou score normalizado. As 19 variaveis continuam disponiveis separadamente, com confianca, metodo, data e rationale.

Contudo, `low_signal_count` e um unico numero agregado. Ele e aceitavel apenas como contagem descritiva de amplitude para escolher um caso de demonstracao. Nao pode ser chamado de score, usado como medida de qualidade, maturidade, valor comercial ou probabilidade de conversao, nem publicado como ranking.

### Risco — latest accepted nao significa evidencia atual perfeita

`accepted_by_auditor` confirma o gate de auditoria do registro, mas nao elimina envelhecimento de evidencias, dependencia entre variaveis ou diferencas de confianca. O demonstrativo deve exibir fonte, data, versao do metodo e confianca por variavel, e permitir a leitura de `unknown` caso apareca em execucoes futuras.

### Risco — vies de selecao e interpretacao negativa

Escolher o maior numero de sinais baixos favorece um caso visualmente rico, mas pode produzir narrativa excessivamente negativa. O demonstrativo deve apresentar cada sinal como observacao limitada e verificavel, nunca como diagnostico definitivo da empresa, incompetencia, risco juridico ou juizo reputacional.

## Leonardo Coelho Advocacia

A escolha de Leonardo Coelho Advocacia e **defensavel para um demonstrativo estritamente privado**, porque:

- passou nos gates de coleta e proposicao;
- possui cobertura completa 19/19 e zero unknown nesta execucao;
- possui ao menos um sinal baixo em todas as quatro dimensoes;
- apresenta a maior amplitude descritiva entre os tres elegiveis: 14 sinais baixos, distribuidos em D1=4, D2=2, D3=3 e D4=5;
- as medias de confianca sao uniformes em 0,72 nas quatro dimensoes.

Essa escolha nao significa que Leonardo seja a pior empresa, o melhor lead ou o alvo comercial prioritario. O metodo de elegibilidade, sozinho, deixa tres candidatos; Leonardo e selecionado por utilidade demonstrativa e riqueza de exemplos, nao por um score validado.

## Condicoes da autorizacao

O demonstrativo privado pode prosseguir desde que:

1. use somente as 19 variaveis PAS aceitas e suas evidencias;
2. exclua integralmente D3.5, D5 e qualquer score geral;
3. mostre cobertura, confianca, fonte, data, metodo e limitacoes;
4. apresente `low_signal_count` apenas como contagem de sinais observados, sem ranking comercial;
5. nao inferira causalidade, desempenho financeiro, intencao de compra ou qualidade profissional;
6. nao publique nomes, dados ou conclusoes;
7. nao envie mensagens, propostas ou qualquer contato ao escritorio;
8. submeta o artefato final a nova auditoria antes de qualquer circulacao externa.

## Decisao final

**AUTORIZADO COM RESSALVAS:** usar Leonardo Coelho Advocacia como caso de um demonstrativo privado e interno, sem D3.5, sem D5 e sem score unico.

**NAO AUTORIZADO:** contato, outreach, publicacao, exposicao reputacional, ranking comercial ou apresentacao da escolha como recomendacao de venda.
