# Auditoria independente final — onda D4 por navegador v0.3.3

- **Onda:** `pas-d4-browser-wave-v0.3.3`
- **Fontes:** JSON autocontido e relatório Markdown correspondentes
- **Decisão:** `REJECT`
- **Promoção:** bloqueada

## Controles aprovados

- 40 valores e 40 chaves únicas;
- 40 evidências e 40 IDs únicos;
- oito candidatos, cada um com `D4.1` a `D4.5`;
- oito logs-fonte únicos;
- 40 referências valor → evidência e 40 evidência → log resolvidas;
- candidato, variável e método compatíveis em todos os vínculos;
- URLs HTTPS, hashes SHA-256 e limitações presentes nos oito logs;
- nenhuma submissão ou comunicação externa declarada;
- rationales e confianças presentes nos 40 valores;
- uma única nota 3.

## Achado bloqueante

`CAND-ACCOUNT-REC-14 / D4.1`, evidência
`AED4-CAND-ACCOUNT-REC-14-D4-1`, tem valor 3 e confiança 0,90. O rationale e
o campo `exact_excerpt` afirmam que “Fale com Contador” aparece repetidamente
e contextualizado à oferta consultiva.

O log-fonte `PASD4BROWSER-CAND-ACCOUNT-REC-14` não contém “Fale com Contador”.
Ele registra “Fale Conosco”, “Entre em contato com a Marjuhh e solicite um
orçamento”, formulário, e-mail e WhatsApp; também registra
`specialty_terms: null`.

A única nota máxima do lote, portanto, não é sustentada pelo log persistido ao
qual a evidência aponta. Isso viola a compatibilidade entre conclusão e
evidência e aciona bloqueio obrigatório do contrato do Auditor.

## Ação requerida

Corrigir somente esse item por uma das vias: anexar uma fonte persistida que
contenha o CTA contextual alegado, com novo hash, ou reavaliar a nota com base
no log atual, preservando o histórico. Depois, reconciliar o total de notas 3 e
submeter nova versão ao gate independente.

