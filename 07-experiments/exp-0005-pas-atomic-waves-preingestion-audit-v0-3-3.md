# Auditoria independente pré-ingestão — ondas PAS v0.3.3

- **Base aceita:** `pas-atomic-v0.3.3`
- **Data:** 2026-07-30
- **Auditor:** Auditor independente / Codex
- **Ingestão jurídica:** não autorizada
- **Ingestão contábil:** não autorizada

## Decisões

| Onda | Gate |
|---|---|
| Jurídica | `REJECT` |
| Contábil | `REJECT` |

Os artefatos foram auditados antes de qualquer escrita no SQLite. Nenhum dado
das ondas foi alterado ou persistido por esta auditoria.

## Onda jurídica — REJECT

### Controles aprovados

- quatro candidatos avaliados;
- 80 linhas parseáveis e 80 `atomic_evidence_id` únicos;
- 20 itens por candidato;
- 56 valores conhecidos e 24 `unknown`;
- `D4.1–D4.5` e `D3.5` permanecem `unknown` em cada candidato;
- valores conhecidos estão na faixa inteira 0–3;
- confiança numérica individual;
- 80 rationales distintos;
- médias e coberturas publicadas foram reproduzidas;
- sete candidatos adiados estão separados do lote avaliado;
- nenhum score único foi calculado.

### Bloqueio de proveniência

O documento declara `source_evidence_id=null` e exige resolução contra
`pas_page_evidence` existente durante a persistência. Essa resolução não é
possível para 15 valores conhecidos:

- Serur: dez valores apontam para
  `https://serur.com.br/segmentos/segmento-servicos-financeiros`, URL ainda
  ausente em `pas_page_evidence`;
- JHN: cinco valores apontam para `/adm-bens` ou `/areas`, URLs ainda ausentes
  em `pas_page_evidence`.

A ingestão não pode criar identificadores ou evidências durante a resolução.
Primeiro é necessário persistir/validar as páginas de origem em execução
separada e versionada; depois preencher IDs reais no artefato de ingestão.

### Itens que exigem revisão após resolver a origem

- `CAND-LEGAL-REC-03 / D2.1`: o próprio rationale diz que a aderência exata da
  rota precisa de auditoria; não deve entrar como 2 antes dessa verificação;
- `CAND-LEGAL-REC-03 / D3.3`: depende da mesma rota `/adm-bens`;
- notas máximas de Serur que dependem da página setorial só podem ser aceitas
  depois que a evidência de origem estiver preservada e confrontável.

### Correção necessária

Produzir artefato estruturado de ingestão com:

- 80 valores e 80 evidências;
- `source_evidence_id` real para cada valor conhecido;
- vínculo explícito entre candidato, variável, URL e evidência;
- `unknown` sem evidência inventada;
- revisão dos dois itens JHN citados.

## Onda contábil — REJECT

### Controles aprovados

- JSON sintaticamente válido;
- quatro candidatos avaliados e cinco bloqueados, todos com IDs únicos;
- os quatro avaliados têm 20 variáveis D1–D4 cada;
- ranges 0–3 e `unknown` dos avaliados estão coerentes;
- 80 rationales distintos nos avaliados;
- URLs dos 58 valores conhecidos resolvem para `pas_page_evidence`;
- médias e coberturas mostradas no Markdown foram reproduzidas;
- D4 dos quatro avaliados permanece `unknown`;
- não existe score único;
- bloqueados estão separados e não receberam notas positivas.

### P0 — contagens e conteúdo do JSON contradizem o documento

O Markdown declara:

- nove candidatos;
- 180 valores;
- 60 aplicáveis nos quatro avaliados;
- 120 `unknown`, incluindo 100 dos bloqueados.

O JSON contém:

- apenas 80 objetos de valor;
- 58 conhecidos;
- 22 `unknown`;
- zero objetos de valor para os cinco candidatos bloqueados.

Os bloqueados aparecem apenas como metadados (`candidate_id`, gate e motivo).
Logo, “preservados integralmente como 100 unknown” não está materializado no
artefato e não pode ser ingerido como declarado.

### P0 — JSON não contém o contrato necessário para as tabelas

Nos 80 valores avaliados faltam:

- `atomic_evidence_id`;
- `source_evidence_id` explicitamente nulo ou resolvido;
- `element_or_action`;
- `evidence_class`;
- executor e timestamp por evidência;
- objeto separado correspondente a `atomic_evidence_items`.

Além disso, `confidence` usa strings `high`, `medium` e `low`, enquanto
`atomic_variable_values.confidence` exige valor numérico real. Não há mapa
versionado dessas categorias para números. A ingestão teria de inventar IDs,
evidências e conversões.

### D3.5

- HMA e RS mantêm `D3.5=unknown`;
- Marjuhh usa `D3.5=1` com confronto declarado de duas verticais;
- Trust usa `D3.5=2` com comparação declarada entre páginas.

Os dois últimos podem permanecer candidatos, mas o artefato corrigido deve
preservar o método/pares comparados como evidência estruturada. O JSON atual
contém apenas resumo textual, insuficiente para criar `atomic_evidence_items`
sem transformação interpretativa.

### Correção necessária

Escolher e documentar uma das políticas:

1. **Ingerir somente os quatro avaliados:** corrigir o documento para 80
   valores, 58 conhecidos e 22 `unknown`; bloqueados permanecem apenas na fila,
   fora de `atomic_variable_values`.
2. **Ingerir os nove candidatos:** materializar 100 registros `unknown` para
   os cinco bloqueados, chegando a 180 valores.

Em ambos os casos, gerar artefato estruturado com IDs atômicos, evidências,
confiança numérica, origem, ação, executor, método, timestamp e limitações.

## Gate final

- **LEGAL:** `REJECT`; ingestão não autorizada.
- **ACCOUNT:** `REJECT`; ingestão não autorizada.

Uma nova auditoria deve ocorrer sobre artefatos corrigidos antes de qualquer
persistência. `ACCEPT WITH CONDITIONS` não é suficiente porque somente
`ACCEPT` autoriza ingestão e as falhas atuais exigiriam criação interpretativa
durante a escrita.
