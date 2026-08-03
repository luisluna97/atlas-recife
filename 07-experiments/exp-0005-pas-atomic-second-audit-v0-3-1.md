# Segunda auditoria independente — PAS atômico v0.3.1

- **Lote auditado:** `pas-atomic-v0.3.1`
- **Banco:** `tmp/miss0005-audit/atlas-miss0005-v0.sqlite`
- **Escopo:** seis organizações; 120 valores D1–D4; 120 evidências atômicas
- **Executor:** Auditor independente / Codex
- **Data:** 2026-07-30
- **Decisão:** `REJECT`
- **Efeito:** expansão bloqueada; nenhum ranking, publicação ou promoção do PAS

## Base normativa lida

- `ATLAS.md`;
- `ATLAS_Recife_Handoff_Codex.md`;
- `ATLAS_Recife_Manual_Fundador_v0_1.docx`;
- `DECISIONS.md`;
- `03-data/evaluation-variables-v0-3.md`;
- `05-agents/auditor.md`;
- `07-experiments/exp-0005-pas-atomic-auditor-gate-reject.md`;
- `07-experiments/exp-0005-pas-atomic-correction-v0-3-1.md`.

## Controles que passaram

- 120 valores únicos e 120 evidências únicas;
- todos os valores vinculam a uma evidência por `atomic_evidence_id`;
- 120 justificativas e 120 referências individualizadas;
- campos obrigatórios de evidência não vazios;
- `unknown` sempre usa valor nulo;
- seis `D3.5` permanecem `unknown`;
- 90 evidências derivam de `pas_page_evidence` existente;
- 30 evidências D4 estão separadas como `browser_rendered`;
- nenhum JPG/PNG/JPEG alimenta o lote corrigido da CONASC;
- `PRAGMA integrity_check = ok` e nenhuma violação de chave estrangeira;
- lotes anteriores permanecem preservados: `pas-atomic-v0.3` não foi sobrescrito.

## Bloqueios

### P0 — evidência incompatível com a variável

1. `CAND-ACCOUNT-REC-07 / D2.1 = 3`
   - A variável exige página dedicada à especialidade.
   - A evidência aponta para `/sobre-nos/` e o trecho descreve menu e página
     institucional, não página dedicada a uma especialidade.
   - A nota máxima não é sustentada.

2. `CAND-ACCOUNT-REC-07 / D2.5 = 3`
   - A variável exige arquitetura que diferencie serviços e públicos.
   - O trecho é prosa institucional sobre sistema integrado, consultoria,
     inovação e soluções personalizadas.
   - Não demonstra arquitetura, separação de serviços ou públicos.

3. `CAND-LEGAL-REC-01 / D2.1 = 3`
   - A evidência aponta para a home e lista áreas de atuação.
   - Uma seção/lista na home não demonstra, por si, página dedicada à
     especialidade.
   - Existe `/servicos/` no conjunto de origem, mas não é a evidência ligada
     a este item e tampouco demonstra página dedicada a uma especialidade
     prioritária sem inspeção específica.

Pelo contrato do Auditor, evidência incompatível é bloqueio obrigatório.

### P0 — coerência máxima inferida de uma única passagem

Os itens abaixo receberam `3`, mas cada evidência mostra uma passagem isolada.
Isso pode confirmar uma afirmação, não a coerência entre afirmações:

- `CAND-ACCOUNT-REC-01 / D1.5`;
- `CAND-ACCOUNT-REC-07 / D1.5`;
- `CAND-LEGAL-REC-01 / D1.5`.

Para `D1.5`, a evidência precisa confrontar ao menos duas afirmações relevantes
ou registrar o conjunto de páginas/trechos revisado e a regra de ausência de
conflito. A estrutura atual aceita um único `source_evidence_id` por item e,
nesses três casos, não documenta esse confronto.

### P1 — evidência atômica de browser não preserva a origem da execução

As 30 evidências D4 possuem URL, resumo observacional, ação genérica, executor,
timestamp, classe e versão, mas:

- `source_evidence_id` é nulo em todas;
- não há vínculo a screenshot, log de navegação, seletor, status/final URL ou
  artefato de execução;
- `exact_excerpt` é uma síntese do produtor, não trecho bruto verificável;
- `element_or_action` repete a descrição genérica de inspeção.

Isso é melhor que o lote anterior e permite revisão conceitual, mas não torna
a ação de browser reproduzível de forma independente. Antes da expansão, cada
D4 precisa apontar para uma execução/artefato persistido ou para uma observação
estruturada com ação, origem, destino, resultado e método.

### P1 — notas máximas de canais medem quantidade, não adequação completa

Receberam `D4.3 = 3` porque vários canais estavam expostos:

- `CAND-ACCOUNT-REC-01`;
- `CAND-ACCOUNT-REC-12`;
- `CAND-LEGAL-REC-01`;
- `CAND-LEGAL-REC-14`.

Nenhum canal foi acionado, conforme limitação correta do lote. Exposição de
WhatsApp, telefone, e-mail e formulário sustenta presença/diversidade, mas não
prova funcionamento ou adequação máxima. É necessário:

- definir na rubrica se `D4.3` mede presença observável ou funcionamento;
- se medir apenas presença, renomear/explicitar o construto;
- se medir adequação, limitar a nota ou executar testes não comunicacionais
  permitidos e persistir seus resultados.

## Observações não bloqueantes

- Os oito `unknown` estão usados conservadoramente: seis em `D3.5` e dois em
  `D2.4`.
- A invalidação dos JPGs da CONASC foi aplicada corretamente no lote v0.3.1.
- As notas máximas caíram de forma material em relação ao lote rejeitado.
- O histórico foi preservado.
- `evidence_refs` é JSON textual e não possui integridade referencial nativa;
  o vínculo funcionou na auditoria, mas deve ganhar validação automática ou
  tabela de associação antes de volume maior.
- `atomic_evidence_items` registra `method_version` e `evidence_class`, mas não
  um campo de método de coleta detalhado; no browser, isso contribui para a
  limitação de reprodução.

## Ações obrigatórias

1. Corrigir ou reclassificar:
   - `CAND-ACCOUNT-REC-07 / D2.1`;
   - `CAND-ACCOUNT-REC-07 / D2.5`;
   - `CAND-LEGAL-REC-01 / D2.1`.
2. Reavaliar `D1.5` dos três candidatos citados com evidência de confronto
   multipágina ou reduzir a nota.
3. Persistir origem reproduzível para as 30 evidências D4.
4. Congelar uma regra operacional para `D4.3` que não confunda quantidade de
   canais com adequação/funcionamento.
5. Executar nova auditoria independente sobre uma nova versão, sem sobrescrever
   `pas-atomic-v0.3.1`.

## Gate

`REJECT`. Somente um futuro parecer `ACCEPT`, sobre nova versão corrigida e
preservando este histórico, poderá autorizar a expansão.
