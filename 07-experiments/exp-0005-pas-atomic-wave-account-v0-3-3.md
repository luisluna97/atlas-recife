# Onda experimental PAS atômica — contábil v0.3.3

- **Método-base:** `pas-atomic-v0.3.3`
- **Versão da onda:** `pas-atomic-wave-account-v0.3.3`
- **Data:** 2026-07-30
- **Escopo:** expansão experimental contábil da `SAMPLE-PAS-V02`
- **Estado:** aguardando Auditor
- **Uso comercial:** proibido
- **Prospecção/contato:** nenhum

## Regras aplicadas

- o quarto gate independente de `pas-atomic-v0.3.3` foi `ACCEPT`;
- a aceitação autoriza apenas expansão experimental em ondas limitadas;
- valores são atômicos, com justificativa, confiança e evidência por variável;
- `unknown` não vira zero;
- coleta parcial, bloqueada ou identidade insuficiente não recebe nota;
- D4 requer log de navegador reproduzível; presença textual de CTA não prova
  destino, funcionamento ou fricção;
- D5 permanece fora desta onda;
- nenhuma nota representa competência, qualidade profissional, conversão ou
  oportunidade comercial.

## Cobertura

| Estado | Candidatos | Valores |
|---|---:|---:|
| Avaliados em D1–D3 | 4 | 60 aplicáveis |
| D4 aguardando logs | 4 | 20 `unknown` |
| Coleta/identidade bloqueada | 5 | 100 `unknown` |
| Total da onda | 9 | 180 |

Os 60 valores aplicáveis possuem evidência e rationale individuais no artefato
estruturado da onda. Os 120 `unknown` preservam a insuficiência de evidência.

## Candidatos avaliados

### CAND-ACCOUNT-REC-04 — HMA

**Proposição observada:** contabilidade em Boa Viagem para empresas e segmentos
profissionais, com serviços contábeis/tributários, tecnologia e oferta de
escritório virtual.

| Dimensão | Média dos itens observados | Cobertura |
|---|---:|---:|
| D1 Clareza | 2,0 | 5/5 |
| D2 Estrutura | 1,8 | 5/5 |
| D3 Profundidade | 1,75 | 4/5 |
| D4 Jornada | `unknown` | 0/5 |

Limitações: identidade ainda `provisional_single_source`; experiência,
tecnologia e benefícios são declarações públicas, não eficácia comprovada.
D3.5 permanece `unknown` sem teste reproduzível de originalidade.

### CAND-ACCOUNT-REC-05 — RS Consultoria

**Proposição observada:** terceirização contábil, tributária, fiscal e
trabalhista para apoiar conformidade e fortalecimento
administrativo-financeiro de empresas.

| Dimensão | Média dos itens observados | Cobertura |
|---|---:|---:|
| D1 Clareza | 1,6 | 5/5 |
| D2 Estrutura | 1,6 | 5/5 |
| D3 Profundidade | 1,5 | 4/5 |
| D4 Jornada | `unknown` | 0/5 |

Limitações: identidade `provisional_single_source`; notícias são feed externo
de `sitecontabil.com.br` e não foram usadas como conteúdo próprio; D3.5 fica
`unknown`.

### CAND-ACCOUNT-REC-14 — Marjuhh

**Proposição observada:** hub de inteligência contábil que combina assessoria
360º, contabilidade consultiva, tecnologia/IA e planos por estágio para apoiar
conformidade e crescimento.

| Dimensão | Média dos itens observados | Cobertura |
|---|---:|---:|
| D1 Clareza | 2,4 | 5/5 |
| D2 Estrutura | 2,8 | 5/5 |
| D3 Profundidade | 2,0 | 5/5 |
| D4 Jornada | `unknown` | 0/5 |

Limitações: identidade `provisional_single_source`; páginas de marketing e
arquitetos apresentam estrutura fortemente repetida e texto residual
“assessoria contábil para escolas”, reduzindo D1.5 e D3.5. Alegações de IA,
segurança, experiência e resultados permanecem declarações.

### CAND-ACCOUNT-REC-18 — Trust

**Proposição observada:** contabilidade facilitada e humanizada para
empreendedores, com terceirização, consultoria, societário, treinamento e BPO,
especializada em profissionais de saúde.

| Dimensão | Média dos itens observados | Cobertura |
|---|---:|---:|
| D1 Clareza | 2,8 | 5/5 |
| D2 Estrutura | 2,8 | 5/5 |
| D3 Profundidade | 2,6 | 5/5 |
| D4 Jornada | `unknown` | 0/5 |

Limitações: identidade `provisional_single_source`; formação e experiência dos
sócios são credenciais declaradas pelo próprio site, ainda sem validação
externa; páginas de saúde têm estrutura parcialmente templada.

## IDs bloqueados ou preservados como unknown

| Candidate ID | Gate | Motivo |
|---|---|---|
| `CAND-ACCOUNT-INT-01` | collection `partial` | apenas duas páginas; não ampliar inferência |
| `CAND-ACCOUNT-NAT-05` | collection `partial` | cobertura incompleta da propriedade |
| `CAND-ACCOUNT-REC-06` | collection `fail` | nenhuma página válida no lote |
| `CAND-ACCOUNT-REC-19` | collection `fail` | nenhuma página atual válida |
| `CAND-ACCOUNT-REC-24` | collection `partial` + identity risk | apenas LinkedIn institucional; jobs invalidados |

Os cinco candidatos mantêm D1.1–D4.5 integralmente `unknown`.

## Controles e ressalvas

- nenhuma média global ou score único foi calculado;
- médias dimensionais excluem `unknown` e sempre mostram cobertura;
- não houve acionamento de WhatsApp, telefone, e-mail ou formulário;
- D4 dos quatro candidatos avaliados aguarda logs com URL final, hash, método,
  executor, timestamp e limitação;
- o conteúdo das páginas é evidência de proposição pública declarada, não prova
  de entrega;
- o artefato
  `tmp/miss0005-audit/pas-atomic-wave-account-v0-3-3.json` contém os valores
  atômicos preparados para persistência;
- esta onda não está promovida. O Auditor deve emitir `ACCEPT`,
  `ACCEPT WITH CONDITIONS` ou `REJECT`.

## Pedido de auditoria

Revisar:

1. aderência das 60 notas aplicáveis às evidências válidas;
2. individualização de rationales e confiança;
3. manutenção correta dos 120 `unknown`;
4. redução de Marjuhh D1.5/D3.5 diante da repetição;
5. ausência de D4 sem log;
6. ausência de score único;
7. preservação do histórico e dos gates de identidade/coleta.
