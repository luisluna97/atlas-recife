# EXP-0005 — substituição jurídica dirigida D3.5 v0.4

- **Estado:** substituição proposta; captura e scoring não autorizados
- **Data:** 2026-07-31
- **Executor:** `d35_v04_legal_pages`
- **Candidato:** `CAND-LEGAL-NAT-01` — Mattos Filho
- **Família:** páginas de áreas de atuação

## Motivo

O JHN (`CAND-LEGAL-REC-03`) não oferece quatro páginas públicas first-party
equivalentes na descoberta dirigida anterior. O Mattos Filho foi avaliado como
substituto nacional porque seu site oficial materializa diversas áreas de
atuação em páginas individuais e homogêneas.

A atividade foi limitada a busca e abertura pontual no domínio oficial. Não
houve crawl, formulário, contato, captura de corpus, rotulagem ou score.

## Páginas propostas

Todas pertencem ao índice oficial de [Áreas de atuação do Mattos Filho](https://www.mattosfilho.com.br/area-atuacao/).

| Página | Papel | Acesso | Inclusão proposta |
|---|---|---|---|
| [Contencioso e Arbitragem](https://www.mattosfilho.com.br/area-atuacao/contencioso-e-arbitragem/) | especialidade jurídica | acessível | sim |
| [Direito ambiental e Mudanças climáticas](https://www.mattosfilho.com.br/area-atuacao/ambiental/) | especialidade jurídica | acessível | sim |
| [Direito público](https://www.mattosfilho.com.br/area-atuacao/direito-publico/) | especialidade jurídica | acessível | sim |
| [Tributário](https://www.mattosfilho.com.br/area-atuacao/tributario/) | especialidade jurídica | acessível | sim |

## Validação da equivalência

As quatro URLs:

- estão no domínio oficial `mattosfilho.com.br`;
- descendem da mesma rota `/area-atuacao/`;
- descrevem uma prática jurídica individual;
- apresentam estrutura editorial semelhante, incluindo introdução, serviços,
  profissionais e publicações relacionadas;
- estavam publicamente acessíveis pela camada de consulta usada em 2026-07-31.

O conjunto satisfaz a exigência de quatro páginas first-party da mesma família
para uma proposta de corpus. A decisão de colocá-lo em development ou holdout
continua pertencendo ao desenho experimental e ao Auditor.

## Limitações

As páginas contêm blocos recorrentes de navegação, profissionais, publicações,
prêmios e cadastro. Uma captura futura deve isolar deterministicamente o corpo
da prática e registrar URL, timestamp, método, versão e hash. A disponibilidade
observada agora não garante disponibilidade futura.

Este registro não prova autoria, originalidade, ausência de paráfrase ou aptidão
para score. Nenhum valor D3.5 deve sair de `unknown` com base nesta descoberta.

## Próximo gate

1. Auditor confirma domínio, equivalência e ausência de duplicação.
2. Arquiteto do experimento inclui Mattos Filho no split por organização, sem
   sobreposição de páginas entre development e holdout.
3. Captura limitada ocorre somente após o gate.

Dados estruturados: [exp-0005-d35-v0-4-legal-replacement.json](exp-0005-d35-v0-4-legal-replacement.json).
