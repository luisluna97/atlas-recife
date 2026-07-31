# EXP-0005 — Progresso da revisão humana

- **Amostra aprovada:** 24 organizações únicas
- **Linhas de pertencimento:** 26, pois RCA e BTH pertencem simultaneamente à base estratificada e às exceções obrigatórias
- **Estado:** revisão em andamento

## Correções processuais aplicadas

1. Evidência bruta não é apagada: páginas inválidas recebem `validity_status=invalid` e motivo.
2. Readiness foi separada em gates de coleta, identidade, território, B2B, proposição, score e publicação.
3. Motivos de amostragem agora preservam valor de entrada, versão da regra e timestamp.
4. Contagens oficiais usam `COUNT(DISTINCT candidate_id)`, não linhas de pertencimento.

## Primeiro lote de achados

- Advice Consultores: score bloqueado; página global de empregos do LinkedIn invalidada.
- ABVM: score bloqueado até provar relação com o domínio Abraz.
- HMA: agregado bloqueado; rubrica precisa de itens atômicos e separação B2B/pessoa física.
- Trust: revisar similaridade de landing pages antes de pontuar profundidade.
- RCA e Barral: inconclusivos; repetir DNS e confirmar domínio.
- Pinheiro Neto: navegador confirmou disponibilidade; bloqueio do coletor não é downtime.
- Bipo: evidência de contabilidade digital existe, mas o critério de referência nacional ainda não foi provado.

## Encaminhamento ao fundador

Nenhuma decisão estratégica é solicitada ainda. Primeiro corrigiremos identidade, validade de páginas e gates. Luis receberá apenas os casos que permanecerem ambíguos depois das verificações objetivas.
