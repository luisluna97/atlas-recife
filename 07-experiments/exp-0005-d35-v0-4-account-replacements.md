# EXP-0005 — Substitutas contábeis D3.5 v0.4

- **Data:** 2026-07-31
- **Executor:** Cientista / descoberta dirigida de substitutas
- **Estado:** descoberta e validação de acesso concluídas; snapshot e auditoria pendentes
- **Escopo:** `CAND-ACCOUNT-NAT-01` e `CAND-ACCOUNT-INT-01`
- **Família única:** editorial first-party
- **Scoring:** proibido

## Resultado

As duas organizações possuem conjuntos públicos, substantivos e equivalentes
no domínio oficial:

| Candidato | Organização | Família | Páginas verificadas | Proposta |
|---|---|---:|---:|---|
| `CAND-ACCOUNT-NAT-01` | Contabilizei | guias editoriais | 6 | development |
| `CAND-ACCOUNT-INT-01` | Pilot | guias editoriais | 5 | holdout |

A proposta elimina a falha estrutural do v0.3: não há organização nem página
compartilhada entre development e holdout. Ela ainda não está promovida; deve
ser congelada em manifesto e aprovada antes de qualquer feature ou rótulo.

## Contabilizei

Foram verificadas seis páginas first-party sob `/contabilidade-online/`:

1. contabilidade para micro e pequenas empresas;
2. escrituração contábil;
3. objetivo da contabilidade;
4. assessoria contábil;
5. serviços prestados por escritório contábil;
6. contabilidade empresarial.

Todas funcionam como guias editoriais e exibem conteúdo substantivo e autoria
editorial. Compartilham template e componentes de conversão; isso exige remoção
determinística de boilerplate. Autoria declarada e hospedagem própria não provam
originalidade externa.

## Pilot

Foram verificadas cinco páginas first-party sob `/blog/`:

1. bookkeeping versus accounting;
2. escolha de software contábil;
3. o que faz um bookkeeper;
4. como funciona o bookkeeping da Pilot;
5. uso de IA em bookkeeping.

São guias editoriais públicos e substantivos. Como abrangem anos diferentes,
o snapshot deve preservar data e autoria, além do texto e hash. CTAs e descrições
de produto repetidas também devem passar pela regra de boilerplate.

## Gate recomendado

1. Capturar as onze páginas em nova execução limitada, com URL final,
   timestamp, status, título, autoria, data editorial, texto e SHA-256.
2. Congelar Contabilizei em development e Pilot em holdout antes da rotulagem.
3. Verificar automaticamente zero interseção de organização, URL e hash textual.
4. Exigir ao menos um caso positivo e um negativo no holdout; se a Pilot não os
   fornecer após rotulagem cega, ampliar com outra organização, sem mover páginas
   da Contabilizei para o holdout.
5. Submeter snapshot, manifesto e validador ao Auditor. Nenhum score deve ser
   calculado nesta etapa.

URLs e estados de acesso estão no inventário estruturado
`exp-0005-d35-v0-4-account-replacements.json`.
