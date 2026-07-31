# EXP-0005 — Gate independente pré-captura D3.5 v0.4.2

- Data: 2026-07-31
- Executor: Auditor independente / Codex
- Escopo: protocolo, drafts de split, descobertas, substituições, confirmação
  Trust, validador e prontidão pré-captura
- Gate avaliado: captura dirigida de páginas públicas, não scoring

## Parecer

**ACCEPT_FOR_DIRECTED_CAPTURE_ONLY.**

Está autorizada somente a captura dirigida dos corpos e metadados das 40 URLs
propostas. Não estão autorizados cálculo de features, similaridade, rotulagem,
calibração, abertura do holdout ou scoring D3.5.

## Histórico e preservação dos drafts

- `d35-v0.4-org-split` permanece preservado como inválido. O validador reproduz
  três falhas: sobreposição de `CAND-LEGAL-REC-17`, holdout com cinco
  organizações e composição 2 contábeis × 3 jurídicas.
- `d35-v0.4.1-org-split` corrige a estrutura e passa o validador, mas HMA, RS e
  JHN não atingem o mínimo pré-coleta de quatro páginas first-party
  equivalentes. O draft foi corretamente preservado e substituído, não
  reescrito.
- `d35-v0.4.2-org-split` passa o validador sem erros.

## Split autorizado para captura

### Development

- `CAND-ACCOUNT-REC-14` — Marjuhh — 8 páginas de especialidade;
- `CAND-ACCOUNT-NAT-01` — Contabilizei — 6 guias editoriais;
- `CAND-LEGAL-NAT-01` — Mattos Filho — 4 áreas de atuação;
- `CAND-LEGAL-REC-17` — Serur — 4 páginas setoriais.

### Holdout

- `CAND-ACCOUNT-INT-01` — Pilot — 5 guias editoriais;
- `CAND-ACCOUNT-REC-18` — Trust — 5 páginas editoriais;
- `CAND-LEGAL-NAT-05` — Demarest — 4 práticas jurídicas;
- `CAND-LEGAL-INT-03` — Clifford Chance — 4 páginas setoriais.

Controles reproduzidos:

- quatro organizações em cada partição;
- nenhuma organização compartilhada;
- dois candidatos contábeis e dois jurídicos em cada partição;
- 40 URLs e 40 URLs únicas;
- todas as URLs pertencem ao domínio first-party declarado;
- nenhuma organização do split está sem inventário e nenhuma URL pertence a
  organização fora do split.

## Substituições

As substituições preservam o segmento e a partição:

- HMA → Contabilizei em development contábil;
- JHN → Mattos Filho em development jurídico;
- RS → Pilot em holdout contábil.

O motivo é verificável: as três organizações removidas não apresentaram quatro
páginas públicas first-party da mesma família. Contabilizei, Pilot e Mattos
Filho já pertencem ao roster original de 66. A seleção ocorreu por profundidade
pública esperada antes de qualquer rótulo D3.5.

Essa escolha é dirigida, não aleatória. O benchmark futuro deverá declarar o
viés de cobertura e não generalizar os resultados para organizações com sites
rasos ou sem famílias multipágina.

## Famílias e acesso

Os corpora internos são coerentes para o gate de captura: especialidades,
editoriais, práticas ou setores não são misturados dentro de uma organização.
As três URLs Trust anteriormente pendentes foram confirmadas por `HEAD`, com
HTTP 200, `text/html`, URL final igual à solicitada e nenhum redirecionamento.
Esse controle confirma disponibilidade, não conteúdo; por isso a captura do
corpo e do hash continua obrigatória.

Os inventários contêm zero rótulo e zero score. A presença first-party não é
tratada como prova de autoria ou originalidade externa.

## Riscos e controles obrigatórios da captura

1. capturar somente as 40 URLs já propostas; nenhuma descoberta ou substituição
   silenciosa é permitida;
2. falha de acesso deve ser registrada como falha, sem trocar a página após
   observar conteúdo ou partição;
3. persistir candidato, partição, família, URL solicitada e final, HTTP,
   timestamp, método, versão, corpo extraído, hash do corpo e limitações;
4. deduplicar por URL final e hash, preservando referência a evidência já
   existente quando aplicável;
5. validar zero interseção de organização, URL e hash entre as partições;
6. usar o mesmo método e política de extração nos dois conjuntos;
7. não calcular nem expor features ou rótulos do holdout durante calibração;
8. qualquer alteração da lista exige nova versão do manifesto e novo gate.

O validador atual cobre tamanho, unicidade de IDs, disjunção e equilíbrio por
segmento. O snapshot posterior deverá acrescentar validação de URLs, hashes,
famílias, cobertura e interseções; esses elementos ainda não existem antes da
captura.

## Autorização resultante

A autorização termina na criação de um snapshot imutável das 40 páginas e seus
hashes. Rotulagem, benchmark, regra 0–3 e persistência em
`atomic_variable_values` permanecem bloqueados e exigem novos gates.

Nenhum artefato produtor ou score foi alterado por esta auditoria.
