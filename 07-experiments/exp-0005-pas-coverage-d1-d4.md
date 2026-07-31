# EXP-0005 — Cobertura conjunta D1–D4

- **Estado:** cálculo determinístico atualizado após recuperação Serur v0.3.4
- **Organizações analisadas:** 8
- **Score único:** não calculado

## Cobertura e médias dimensionais

Cada célula mostra média dos itens conhecidos e cobertura da dimensão.

| Organização | D1 | D2 | D3 | D4 | cobertura total |
|---|---:|---:|---:|---:|---:|
| Marjuhh | 2.40 (100%) | 2.80 (100%) | 2.00 (100%) | 1.80 (100%) | 100% |
| Trust Contabilidade | 2.80 (100%) | 2.80 (100%) | 2.60 (100%) | 1.80 (100%) | 100% |
| Clifford Chance | 2.80 (100%) | 3.00 (100%) | 3.00 (80%) | 1.20 (100%) | 95% |
| Demarest | 2.00 (100%) | 2.40 (100%) | 2.25 (80%) | 1.40 (100%) | 95% |
| HMA Contabilidade | 2.00 (100%) | 1.80 (100%) | 1.75 (80%) | 1.80 (100%) | 95% |
| RS Consultoria Empresarial Contábil | 1.60 (100%) | 1.60 (100%) | 1.50 (80%) | 1.40 (100%) | 95% |
| Serur Advogados | 2.60 (100%) | 3.00 (100%) | 2.75 (80%) | 1.40 (100%) | 95% |
| JHN Advogados Associados | 2.00 (100%) | 2.00 (80%) | 2.00 (60%) | 1.40 (100%) | 85% |

## Leitura operacional

- Trust e Marjuhh possuem 100% de cobertura D1–D4.
- Clifford Chance, Demarest, HMA, RS e Serur possuem 95%; a lacuna comum é D3.5.
- JHN possui 85%, com lacunas adicionais em D2 e D3.
- D4 alcançou 100% nas oito organizações.
- D3.5 permanece a principal lacuna transversal; o microteste v0 é candidato de Laboratório, não método de scoring.

A linha descritiva de 80% serve apenas para visualizar comparabilidade; não é novo gate nem decisão de promoção.

## Próxima onda recomendada

1. auditar e evoluir o protocolo D3.5 no Laboratório;
2. resolver as lacunas específicas do JHN;
3. decidir se os cinco contábeis bloqueados serão recuperados ou mantidos fora da próxima comparação;
4. somente depois selecionar nova onda limitada entre as 66 organizações.
