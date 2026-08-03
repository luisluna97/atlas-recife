# Auditoria independente final — onda D4 por navegador v0.3.3.1

- **Onda:** `pas-d4-browser-wave-v0.3.3.1`
- **Base preservada:** `pas-d4-browser-wave-v0.3.3`
- **Fonte auditada:** `exp-0005-pas-d4-browser-wave-v0-3-3-1.json`
- **Decisão:** `ACCEPT`
- **Promoção:** autorizada para uso experimental interno
- **Contato externo:** nenhum

## Reconciliação

- 40 valores, 40 chaves únicas e 40 evidências com IDs únicos;
- oito candidatos, cada um com `D4.1` a `D4.5`;
- oito logs-fonte preservados da coleta v0.3.3;
- 40 referências valor → evidência resolvidas 1:1;
- 40 referências evidência → log resolvidas, com candidato e URL compatíveis;
- valores e evidências usam `pas-d4-browser-wave-v0.3.3.1`;
- logs preservam corretamente o método de coleta `pas-d4-browser-wave-v0.3.3`;
- oito URLs HTTPS e oito hashes SHA-256 válidos;
- oito logs `verified`, com limitação explícita de nenhuma submissão e nenhuma
  comunicação externa;
- rationales e confianças presentes nos 40 valores;
- zero notas 3, coerente com os controles publicados.

## Correção verificada

`CAND-ACCOUNT-REC-14 / D4.1` foi alterado de 3 para 2 e de confiança 0,90
para 0,84. A evidência `AED4331-CAND-ACCOUNT-REC-14-D4-1` agora cita
literalmente “Fale Conosco” e “Entre em contato com a Marjuhh e solicite um
orçamento”, ambos presentes no log-fonte
`PASD4BROWSER-CAND-ACCOUNT-REC-14`.

Não foi encontrada regressão estrutural, de proveniência ou de conteúdo na
versão corrigida. A aceitação não autoriza prospecção, publicação comercial ou
contato com as organizações.

