# EXP-0005 — Diagnóstico de acesso e métrica com denominador completo

- **Data:** 2026-07-30
- **Amostra:** 66 organizações
- **Regra:** falha de acesso não equivale à ausência de feature

## Diagnóstico dos seis casos

| Organização | Diagnóstico | Tratamento métrico |
|---|---|---|
| RCA Contábil | domínio não resolveu no DNS no momento da observação; snapshot indexado recente confirma que o site existia | disponibilidade atual falhou; conteúdo atual = unknown; snapshot fica em camada histórica |
| Barral Contabilidade | domínio não resolveu no DNS; snapshot indexado recente disponível | disponibilidade atual falhou; conteúdo atual = unknown; snapshot fica em camada histórica |
| Mattos Filho | Cloudflare devolveu 403 ao coletor, mas a página abriu por fetch de navegador | site disponível; bloqueio de automação não é downtime |
| Pinheiro Neto | domínio resolve; certificado está dentro da validade, mas a cadeia não foi verificada; servidor devolveu 403 | disponibilidade parcial; conteúdo depende de browser/manual |
| Buril, Tavares & Holanda | domínio resolve; certificado dentro da validade, porém cadeia incompleta no executor; responde 200 com validação desativada | defeito TLS detectado; conteúdo diagnóstico não equivale a acesso normal |
| Costa Pinto & Fernandes | domínio resolve; certificado expirou em 25/04/2026; responde 200 apenas ignorando TLS | certificado expirado é falha técnica confirmada |

## Recife — denominador completo

Todos os percentuais abaixo usam 25 organizações por segmento. Nos quatro sites locais sem coleta HTTP normal, features de conteúdo permanecem unknown; portanto estes percentuais são **limites inferiores observados**, não prevalência definitiva.

| Sinal observado | Contábeis (n=25) | Jurídicos (n=25) |
|---|---:|---:|
| Cobertura HTTP normal | 23 (92%) | 23 (92%) |
| Meta description | 13 (52%) | 15 (60%) |
| H1 | 13 (52%) | 13 (52%) |
| JSON-LD | 14 (56%) | 10 (40%) |
| Sinal compatível com GA4/Google tag | 22 (88%) | 20 (80%) |
| WhatsApp | 12 (48%) | 10 (40%) |
| Formulário | 15 (60%) | 16 (64%) |

## Como publicar cada métrica

Toda tabela do Atlas deve mostrar simultaneamente:

- `sample_n`: universo planejado;
- `observed_n`: casos com medição válida;
- `unknown_n`: casos sem observação comparável;
- taxa entre observados;
- limite inferior sobre a amostra completa;
- método, versão, data e limitações.

Isso impede que indisponibilidade seja interpretada como ausência e permite comparar os 66 sem esconder cobertura.

## Evidências externas complementares

Snapshots recentes do mecanismo de busca confirmam conteúdo de RCA e Barral, mas não substituem observação atual. Mattos Filho foi acessível por rota de navegador no mesmo dia. Essas evidências recebem método e temporalidade próprios e não são misturadas silenciosamente ao parser HTTP.
