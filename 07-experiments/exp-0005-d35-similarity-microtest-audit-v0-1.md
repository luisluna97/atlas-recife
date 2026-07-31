# EXP-0005 — Parecer do microteste de similaridade D3.5 v0.1

- Data: 2026-07-31
- Executor: Auditor independente / Codex
- Código: `09-engineering/labs/d35_similarity_v0_1.mjs`
- Snapshot: `07-experiments/exp-0005-d35-input-snapshot-v0-1.json`
- Saída: `07-experiments/exp-0005-d35-similarity-microtest-v0-1.json`
- Escopo: gate de Laboratório, não scoring

## Parecer

**ACCEPT_FOR_LAB. Scoring D3.5 não autorizado.**

## Verificações aprovadas

- oito `candidate_id` explicitamente congelados;
- 39 páginas e seus textos públicos preservados no snapshot;
- hashes individuais dos 39 textos conferem;
- SHA-256 do banco-fonte confere:
  `2cbe5e254efab704e7a4090f89063b6b3e64eee5c2ab74d63933c97fe02a27d6`;
- SHA-256 canônico do snapshot confere:
  `f74665ba87bb96c005eb8bcfaccaed22d40dcd032a4cd26b2b50a0860fd65891`;
- comando de execução registrado;
- o código regenera exatamente o JSON publicado;
- código e saída usam o mesmo schema;
- similaridade interna e entre candidatos estão implementadas;
- parâmetros permanecem determinísticos: mínimo de 150 palavras,
  normalização NFKD alfanumérica e shingles de cinco palavras;
- Marjuhh reproduz `0.7041984732824428`, entre as páginas de agências de
  marketing e de arquitetos/designers;
- Clifford Chance reproduz `0.9919678714859438`, entre as páginas de bancos e
  de bens de consumo/varejo.

## Limites do aceite

Os dois valores altos são sinais de revisão de template/boilerplate. Não são
scores, não provam falta de autoria e não medem originalidade externa. O método
ainda não remove boilerplate, não separa tipos de página e não detecta
paráfrase. A comparação cruzada limita-se aos oito candidatos congelados.

O hash do snapshot é o SHA-256 do JSON formatado com dois espaços, sem o campo
`snapshot_sha256`. Essa canonização foi reproduzida na auditoria; recomenda-se
formalizá-la e validá-la no próprio código em uma versão futura.

## Autorização resultante

O protocolo v0.1 está autorizado somente para experimentação no Laboratório e
triagem de revisão humana. Todos os valores D3.5 permanecem `unknown`.
Conversão para 0–3 exige benchmark separado, regra aprovada e novo gate do
Auditor.

Nenhum dado, score ou artefato auditado foi alterado.
