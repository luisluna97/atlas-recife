# Avaliação das 66 — prioridade de transformação v0.1

Status: pré-ranking experimental; próximo gate visual e de busca  
Data: 2026-08-03  
Universo: 66 organizações; 50 prospects locais + 16 benchmarks

## Resultado operacional

- 66/66 organizações constam na saída JSON e CSV;
- 60 possuem home observada e seguem para revisão visual e de busca;
- 6 seguem para diagnóstico de acesso, sem receber zero;
- 50 organizações locais são elegíveis ao universo comercial;
- 16 referências permanecem fora do ranking de prospects;
- qualidade visual e demanda de busca continuam `null` para todas.

Arquivos completos: `transformation-priority-v0.csv` e
`transformation-priority-v0.json`.

## Primeira fila local para revisão

| Fila | Organização | Segmento | Prioridade de evidência | Cobertura |
|---:|---|---|---:|---:|
| 1 | Sinergia Consultoria Empresarial | Contábil | 88,0 | 85% |
| 2 | EA Advocacia & Compliance | Jurídico | 84,4 | 85% |
| 3 | Magalhães Advogados | Jurídico | 79,5 | 85% |
| 4 | S.R. Contabilidade | Contábil | 76,7 | 85% |
| 5 | NSC Soluções Empresariais | Contábil | 76,0 | 85% |
| 6 | Calado Assessoria Contábil | Contábil | 73,8 | 85% |
| 7 | Rabelo & Amorim Advogados | Jurídico | 73,8 | 85% |
| 8 | Martorelli Advogados | Jurídico | 72,6 | 85% |
| 9 | Antonio Faria Advogados | Jurídico | 70,3 | 85% |
| 10 | RS Consultoria Empresarial Contábil | Contábil | 70,0 | 100% |
| 11 | HMA Contabilidade | Contábil | 69,3 | 100% |
| 12 | Queiroz Cavalcanti Advocacia | Jurídico | 68,9 | 85% |
| 13 | Saires Contabilidade | Contábil | 68,1 | 85% |
| 14 | Da Fonte Advogados | Jurídico | 66,6 | 85% |
| 15 | Sá Leitão Auditores e Consultores | Contábil | 65,8 | 85% |
| 16 | Leonardo Coêlho Advocacia | Jurídico | 65,2 | 100% |
| 17 | Serur Advogados | Jurídico | 64,1 | 100% |
| 18 | Sistcon Contabilidade | Contábil | 62,4 | 85% |
| 19 | Coutinho Contabilidade | Contábil | 62,2 | 85% |
| 20 | JHN Advogados Associados | Jurídico | 62,0 | 100% |

Essa ordem não declara quais sites são feios nem quais empresas comprarão. Ela
prioriza onde a evidência existente indica combinação de lacunas e material
aproveitável. O gate visual pode alterar profundamente a ordem.

## Diagnóstico de acesso

Prospects locais: RCA Contábil, Barral Contabilidade, Buril, Tavares & Holanda e
Costa Pinto & Fernandes. Benchmarks: Mattos Filho e Pinheiro Neto. Conteúdo não
observado permanece `unknown`.

## Leitura inicial

O método novo corrige o erro que colocou Leonardo como primeiro alvo. Leonardo
continua relevante, mas aparece em 16º na fila de evidência. RS e HMA permanecem
prioritárias, e surgem candidatos antes ignorados. A próxima avaliação precisa
verificar se o contraste visual é real e se há serviços com intenção de busca.

## Próximo lote

Auditoria visual e mapa de demanda dos 15 primeiros, com inclusão obrigatória de
Leonardo e JHN como controles de contraste. O lote não autoriza contato.

## Proveniência

Entradas: roster 66, `home_structure_checks`, `pas_expansion_readiness`, PAS D1-D4
aceito; método `transformation-priority-v0.1`; executor
`09-engineering/labs/transformation_priority_v0.mjs`. Limites e fórmula:
`transformation-priority-method-v0.md`.
