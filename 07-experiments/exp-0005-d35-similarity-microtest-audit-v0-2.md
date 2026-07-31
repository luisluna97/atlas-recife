# EXP-0005 — Parecer independente do microteste D3.5 v0.2

- Data: 2026-07-31
- Executor: Auditor independente / Codex
- Método: `d35-similarity-lab-v0.2`
- Escopo: código, testes, benchmark, proveniência, saída e relatório
- Amostra: snapshot congelado de 8 candidatos e 39 páginas

## Parecer

**APROVADO COM RESSALVAS PARA LABORATÓRIO. SCORING REJEITADO.**

A v0.2 pode ser usada como detector experimental de repetição literal e como
geradora de casos para revisão humana. Ela não sustenta conversão de D3.5 para
0–3. Todos os valores D3.5 permanecem `unknown`.

## Execução e proveniência

Foram reexecutados o comando de geração e o arquivo de testes. Ambos terminaram
com código zero, e a saída regenerada foi estruturalmente idêntica ao JSON
publicado.

- snapshot canônico:
  `f74665ba87bb96c005eb8bcfaccaed22d40dcd032a4cd26b2b50a0860fd65891`;
- banco-fonte:
  `2cbe5e254efab704e7a4090f89063b6b3e64eee5c2ab74d63933c97fe02a27d6`;
- benchmark:
  `14bd2a902587eb6493c24380f6c63a31b9e4a9170777d5b02b82b3e88caaa201`;
- os 39 hashes de texto conferem;
- a análise valida internamente o hash canônico do snapshot e os hashes dos
  textos;
- parâmetros, versão, IDs permitidos e limitações estão materializados.

## Achados aprovados

- a taxonomia determinística tem precedência explícita e a comparação principal
  ocorre somente entre páginas classificadas no mesmo tipo;
- a regra implementada remove shingles locais presentes em pelo menos 80% das
  páginas substantivas, com corpus mínimo de três páginas e frequência mínima
  efetiva de três;
- os quatro casos provisórios reproduzem os resultados publicados;
- Marjuhh: `0.5658263305322129` após limpeza, contra `0.7036328871892925`
  bruto;
- Clifford Chance: `0.9754098360655737` após limpeza, contra
  `0.9919678714859438` bruto;
- Trust: `0.056179775280898875` após limpeza;
- JHN: `0` após limpeza;
- as alegações se limitam a repetição literal interna e não afirmam plágio,
  autoria, qualidade profissional ou originalidade externa.

## Ressalvas e severidade

### Alta — benchmark não valida scoring

Os quatro rótulos foram escolhidos a partir de extremos já observados na v0.1,
e os limiares foram avaliados no mesmo conjunto. Não há amostra independente,
cega ou de validação. O resultado 4/4 demonstra coerência com os exemplos
selecionados, não desempenho generalizável.

### Alta — cobertura insuficiente

HMA, RS e Serur não possuem pares comparáveis após a taxonomia. Apenas cinco dos
oito candidatos têm algum par comparável. Ausência de par não pode ser
convertida em qualidade, repetição baixa ou qualquer nota D3.5.

### Alta — construto D3.5 parcialmente observado

Jaccard de 5-gramas mede sobreposição literal interna. Mesmo após limpeza, não
mede autoria, paráfrase ou originalidade externa, componentes explícitos de
“conteúdo próprio e não repetido”.

### Média — limpeza e taxonomia heurísticas

Shingles temáticos presentes em muitas páginas podem ser removidos como se
fossem boilerplate. A taxonomia baseada em URL e `page_role` não é ground truth
semântico. As regras precisam de erros rotulados por tipo de página.

### Baixa — alegação do teste

O teste imprime “12 assertions passed”, mas o arquivo contém 10 chamadas de
assertion. Isso não invalida os testes executados, porém a mensagem deve ser
corrigida ou derivada programaticamente.

## Ações obrigatórias antes de scoring

1. criar benchmark maior, estratificado por tipo de página, com rotulagem humana
   independente e acordo entre revisores;
2. separar desenvolvimento, calibração e validação mantida fora da escolha de
   regras e limiares;
3. publicar matriz de confusão, cobertura, incerteza e análise de erros;
4. validar taxonomia e remoção de boilerplate contra ground truth rotulado;
5. definir tratamento explícito para candidatos sem pares comparáveis;
6. adicionar protocolo separado para autoria, paráfrase e busca externa amostral;
7. somente então propor regra 0–3, confiança e política de `unknown`, seguida de
   novo gate independente.

Nenhum dado, score ou artefato auditado foi alterado. A saída temporária usada
na reexecução não integra o conjunto auditado.
