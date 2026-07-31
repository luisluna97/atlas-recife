# EXP-0005 — Onda limitada D4 por navegador

- **Método:** `pas-d4-browser-wave-v0.3.3`
- **Estado:** aguardando auditoria independente
- **Escopo:** oito organizações já avaliadas em D1–D3
- **Contato externo:** nenhum

## Resultado preliminar

| Organização | D4.1 | D4.2 | D4.3 | D4.4 | D4.5 | média D4 |
|---|---:|---:|---:|---:|---:|---:|
| HMA Contabilidade | 1 | 2 | 2 | 2 | 2 | 1.80 |
| RS Consultoria Empresarial Contábil | 1 | 2 | 2 | 1 | 1 | 1.40 |
| Marjuhh | 3 | 2 | 2 | 1 | 2 | 2.00 |
| Trust Contabilidade | 2 | 2 | 2 | 2 | 1 | 1.80 |
| Clifford Chance | 1 | 2 | 1 | 1 | 1 | 1.20 |
| Demarest | 1 | 2 | 1 | 2 | 1 | 1.40 |
| JHN Advogados Associados | 1 | 2 | 2 | 1 | 1 | 1.40 |
| Serur Advogados | 1 | 2 | 1 | 2 | 1 | 1.40 |

## Controles

- 40 valores e 40 evidências atômicas;
- 8 logs de navegador com URL final, hash, método, timestamp e limitação;
- destinos de contato carregados nos oito casos;
- nenhum formulário submetido;
- nenhum WhatsApp, e-mail ou telefone acionado;
- uma única nota máxima: CTA contextual da Marjuhh;
- presença de canal não foi tratada como prova de funcionamento;
- integridade SQLite: `ok`.

O lote não complementa as ondas aceitas até decisão `ACCEPT` do Auditor.

## Estado do gate

- Gate permanece fechado por impossibilidade ambiental de leitura independente do SQLite/JSON pelos dois Auditores auxiliares.
- O primeiro REJECT foi exclusivamente por não verificação, não por violação de conteúdo.
- JSON autocontido gerado com 40 valores, 40 evidências, 8 logs, 40 refs resolvidas e 40 fontes resolvidas.
- Nenhum valor D4 foi promovido; `review_status=pending_independent_audit`.
