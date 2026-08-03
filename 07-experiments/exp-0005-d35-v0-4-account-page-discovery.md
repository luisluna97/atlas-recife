# EXP-0005 — Descoberta dirigida de páginas contábeis D3.5 v0.4

- **Data:** 2026-07-31
- **Executor:** Cientista / descoberta contábil dirigida
- **Estado:** descoberta concluída; coleta, rotulagem e scoring não executados
- **Método:** navegação manual limitada e busca por domínio oficial

## Objetivo e limites

Localizar páginas públicas equivalentes para um benchmark D3.5 com divisão por
organização e sem sobreposição de páginas. Esta atividade não é crawling em
escala: foram inspecionados somente quatro candidatos e seus menus/resultados
oficiais. Nenhum formulário foi submetido, nenhum contato foi realizado e
nenhum score ou rótulo de similaridade foi criado.

## Resultado

| Candidato | Organização | Corpus encontrado | Decisão proposta |
|---|---|---|---|
| `CAND-ACCOUNT-REC-04` | HMA Contabilidade | páginas agregadas; links informativos majoritariamente externos | não incluir |
| `CAND-ACCOUNT-REC-05` | RS Consultoria | serviços agregados; notícias em domínio terceiro | não incluir |
| `CAND-ACCOUNT-REC-14` | Marjuhh | 8 páginas oficiais de especialidade verificadas | incluir, inteira em um único split |
| `CAND-ACCOUNT-REC-18` | Trust | 5 editoriais oficiais; 2 acessos verificados e 3 pendentes de confirmação | incluir após confirmação, inteira em um único split |

### HMA — cobertura insuficiente

Foram confirmadas `servicos`, `escritorio-virtual` e `informativos`. Elas não
formam quatro páginas do mesmo tipo. A página Informativos encaminha para
`sitecontabil.com.br` e serviços públicos; esses destinos não são conteúdo
próprio da HMA e não entram no corpus.

### RS Consultoria — cobertura insuficiente

A home e `servicos.php` são páginas próprias, mas agregadas. As notícias e
utilitários exibidos na home direcionam para `sitecontabil.com.br`. Não foi
encontrado um conjunto de quatro páginas first-party equivalentes.

### Marjuhh — corpus de especialidades elegível

O menu oficial expõe quinze verticais. Para manter a coleta pequena, foram
propostas oito: agência de marketing, arquitetura, construção civil,
e-commerce, hotéis e pousadas, profissionais da saúde, supermercados e
Youtubers/infoprodutores. Todas foram verificadas em páginas do domínio oficial.

O corpus deve ser congelado em nova captura imutável. A organização inteira
deve ficar em `development` **ou** `holdout`, jamais nos dois. Menus, rodapé e
formulário repetidos precisam de remoção determinística de boilerplate.

### Trust — corpus editorial condicionado

Foram propostos cinco artigos editoriais do domínio oficial. Dois foram abertos
e três foram descobertos por links internos oficiais, mas ainda precisam de
confirmação direta no navegador antes da captura.

Ao menos dois artigos abertos declaram fonte externa (`Contábeis`). Portanto,
esse conjunto pode apoiar o teste estreito de repetição literal interna, mas
não demonstra autoria da Trust nem originalidade externa.

## Gate para a próxima execução

1. Confirmar no navegador os três editoriais pendentes da Trust.
2. Capturar texto e metadados das páginas aceitas com hash e timestamp.
3. Congelar o split por organização antes de qualquer rótulo ou feature.
4. Manter HMA e RS como limitações explícitas; não completar a amostra com
   páginas externas.
5. Submeter snapshot e manifesto ao Auditor antes de rotulagem.

O inventário estruturado, URLs e estados de acesso estão em
`exp-0005-d35-v0-4-account-page-discovery.json`.
