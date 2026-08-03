# EXP-0005 — Proposta de recuperação D1–D3 do Serur v0.3.4

- **Candidato:** `CAND-LEGAL-REC-17` — Serur Advogados
- **Estado:** `pending_independent_audit`
- **Executor:** `serur-recovery-codex`
- **Observado em:** `2026-07-31T14:20:00-03:00`
- **Método:** abertura web limitada à página pública no domínio oficial
- **Persistência:** nenhuma alteração no SQLite ou nos scores

## Resultado proposto

A rota oficial dedicada a serviços financeiros está atualmente disponível. Ela sustenta a recuperação de dez valores antes `unknown`. `D3.5` permanece `unknown`, pois não houve teste reproduzível de autoria e repetição.

| variável | proposta | confiança | fundamento resumido |
|---|---:|---:|---|
| D1.1 | 3 | 0,92 | proposta jurídica setorial explícita |
| D1.2 | 3 | 0,92 | perfil de clientes e contexto-problema explícitos |
| D1.3 | 3 | 0,91 | especialidade possui rota e H1 próprios |
| D1.4 | 2 | 0,84 | diferenciais concretamente nomeados, porém autodeclarados |
| D2.1 | 3 | 0,96 | página dedicada atual comprovada |
| D2.3 | 3 | 0,94 | title, H1 e headings alinhados |
| D3.1 | 3 | 0,91 | problemas regulatórios, judiciais e de passivos descritos |
| D3.2 | 3 | 0,91 | escopo e entregas descritos |
| D3.3 | 3 | 0,89 | cenários e aplicações concretos |
| D3.4 | 2 | 0,84 | experiência e lideranças declaradas, sem validação externa |
| D3.5 | `unknown` | 0,40 | originalidade/repetição não testadas |

## Proveniência

- URL solicitada e final: `https://serur.com.br/segmentos/segmento-servicos-financeiros`
- Título observado: `Serviços Financeiros | Serur`
- Elementos usados: H1, abertura, Diferenciais, Perfil de clientes, práticas relacionadas e lideranças.
- Trechos mínimos e a vinculação variável–evidência estão no JSON irmão.

## Limitações

- O navegador local não estava disponível; a página foi lida por abertura web de HTML público.
- A superfície web não expôs os bytes brutos da resposta, e a tentativa de fetch direto falhou. Portanto, nenhum hash do corpo da página é alegado.
- O hash do próprio pacote local deve ser registrado após a criação.
- Não houve inspeção visual, clique, submissão, contato ou uso comercial.
- Reconhecimentos apresentados como imagens não foram usados para elevar D3.4.
- As propostas não substituem o parecer independente do Auditor.

## Gate

O Auditor deve conferir a aderência dos dez valores conhecidos, a manutenção de `D3.5` como `unknown`, os trechos mínimos e a limitação de hash. Somente um novo `ACCEPT` pode autorizar persistência.

Artefato parseável: `07-experiments/exp-0005-serur-d1-d3-recovery-proposal-v0-3-4.json`.
