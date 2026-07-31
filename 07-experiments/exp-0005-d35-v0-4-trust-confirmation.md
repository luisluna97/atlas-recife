# EXP-0005 — Confirmação das páginas Trust D3.5 v0.4

- **Data:** 2026-07-31
- **Candidato:** `CAND-ACCOUNT-REC-18`
- **Organização:** Trust Contabilidade
- **Escopo:** somente três editoriais pendentes
- **Método:** requisição HTTP `HEAD`, seguindo redirecionamentos
- **Scoring/rotulagem:** não executados

## Resultado

As três páginas responderam `HTTP 200`, com `content-type: text/html`, no domínio
oficial. Não houve redirecionamento; a URL final é igual à URL solicitada.

| Página | HTTP | URL final | Decisão |
|---|---:|---|---|
| IPI: planos do governo para o tributo | 200 | igual à solicitada | incluir |
| Falência e reestruturação da empresa | 200 | igual à solicitada | incluir |
| Estratégias de marketing e vendas | 200 | igual à solicitada | incluir |

Somadas aos dois editoriais cujo conteúdo já havia sido aberto diretamente —
processo seletivo/vínculo empregatício e sociedade limitada —, a Trust possui
agora **cinco editoriais first-party verificados**. O mínimo de quatro foi
atingido e nenhuma descoberta adicional foi realizada.

## Proveniência e limitação

As URLs foram descobertas nos links editoriais internos da Trust. A confirmação
direta foi executada com o formato:

`curl.exe -L -I --max-time 20 <url>`

O extrator de navegador retornou `cache miss` para as três páginas. Por isso,
esta confirmação demonstra disponibilidade HTTP e URL final, mas não substitui
a captura imutável do corpo. O job de snapshot ainda precisa persistir texto,
timestamp, metadados e SHA-256.

Hospedagem first-party também não prova autoria nem originalidade externa.
Nenhum score ou rótulo de similaridade foi criado.

## Decisão proposta

As cinco páginas editoriais da Trust podem seguir para o manifesto de captura
v0.4, mantendo a organização inteira em um único split. Promoção depende do
snapshot reproduzível e do gate do Auditor.

O registro estruturado está em
`exp-0005-d35-v0-4-trust-confirmation.json`.
