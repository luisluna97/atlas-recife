# EXP-0005 — Protocolo D3.5 v0.4

- **Estado:** pré-coleta dirigida
- **Escopo:** oito organizações já pertencentes ao Laboratório
- **Scoring:** proibido até novo gate

## Correção central

O split será feito por organização, nunca por par. Nenhuma organização, página ou
trecho poderá aparecer simultaneamente em development e holdout.

## Meta de coleta

- ao menos quatro páginas substantivas do mesmo tipo por organização;
- preferência por páginas de especialidade ou editoriais;
- mínimo de três pares elegíveis por organização após revisão de tipo;
- coleta pública, pequena, dirigida e limitada aos oito sites;
- sem formulário, contato, login ou scraping em escala.

## Split pré-registrado

Seed: `D35-V04-ORG-SPLIT-2026-07-31`.

Os candidatos são ordenados por SHA-256 de `seed|candidate_id`. Os quatro
primeiros pertencem ao development e os quatro últimos ao holdout. O arquivo de
split deve passar por validação de unicidade, disjunção e equilíbrio antes da
coleta. Qualquer falha invalida o draft, que deve ser corrigido em nova versão
preservando o artefato defeituoso.

## Gates mínimos

1. conjuntos de organizações disjuntos;
2. hashes de páginas e textos sem sobreposição entre conjuntos;
3. pelo menos 12 pares elegíveis em cada partição;
4. pelo menos três organizações elegíveis em cada partição;
5. classes `repeated_template` e `distinct_content` presentes no holdout;
6. dupla revisão independente e adjudicação;
7. regra congelada antes de abrir rótulos do holdout;
8. matriz de confusão, balanced accuracy e intervalos de incerteza;
9. novo parecer do Auditor.

Mesmo com todos os gates, este protocolo mede repetição literal interna. Autoria,
paráfrase e originalidade externa continuam exigindo experimentos separados.
