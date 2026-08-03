# EXP-0005 — Parecer independente da recuperação Serur v0.3.4

- Data: 2026-07-31
- Executor: Auditor independente / Codex
- Proposta auditada: `exp-0005-serur-d1-d3-recovery-proposal-v0-3-4.json`
- Método: `pas-serur-recovery-v0.3.4`
- Candidato: `CAND-LEGAL-REC-17`
- Escopo: auditoria somente leitura

## Parecer

**ACCEPT. A ingestão das 11 propostas desta versão está autorizada.**

## Verificações

- a URL solicitada e final é a rota oficial
  `https://serur.com.br/segmentos/segmento-servicos-financeiros`;
- a página está disponível e sua identidade confere com o título
  `Serviços Financeiros | Serur` e o H1 setorial;
- as 11 propostas possuem IDs únicos, trechos, ação observada, rationale,
  confiança numérica e proveniência para a mesma fonte oficial;
- o método está corretamente limitado a abertura web de HTML público;
- `page_body_sha256` permanece nulo e a ausência dos bytes brutos está
  declarada de forma explícita, sem alegação de hash inexistente;
- não houve persistência, clique, submissão, contato ou evidência externa;
- reconhecimentos apresentados apenas em imagens não foram usados para elevar
  `D3.4`;
- `D3.5` permanece `unknown`, pois autoria e repetição não foram testadas.

## Julgamento por ID

| ID | variável | valor | decisão |
|---|---|---:|---|
| `SERUR-R034-D1-1` | D1.1 | 3 | ACCEPT |
| `SERUR-R034-D1-2` | D1.2 | 3 | ACCEPT |
| `SERUR-R034-D1-3` | D1.3 | 3 | ACCEPT |
| `SERUR-R034-D1-4` | D1.4 | 2 | ACCEPT |
| `SERUR-R034-D2-1` | D2.1 | 3 | ACCEPT |
| `SERUR-R034-D2-3` | D2.3 | 3 | ACCEPT |
| `SERUR-R034-D3-1` | D3.1 | 3 | ACCEPT |
| `SERUR-R034-D3-2` | D3.2 | 3 | ACCEPT |
| `SERUR-R034-D3-3` | D3.3 | 3 | ACCEPT |
| `SERUR-R034-D3-4` | D3.4 | 2 | ACCEPT |
| `SERUR-R034-D3-5` | D3.5 | `unknown` | ACCEPT |

As notas máximas são sustentadas pela página dedicada, público e problemas
explícitos, hierarquia temática, escopo e aplicações concretas. As notas 2 de
`D1.4` e `D3.4` preservam a distinção entre declarações públicas e validação
independente de superioridade ou resultado.

## Autorização resultante

A ingestão está autorizada somente para estes IDs e para o conteúdo imutável
de `pas-serur-recovery-v0.3.4`. Deve ser preservada a limitação de hash e
`D3.5` não pode ser promovida a valor conhecido sem novo teste reproduzível.

Nenhum dado auditado foi alterado.
