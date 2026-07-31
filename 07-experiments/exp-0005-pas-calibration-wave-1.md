# EXP-0005 — Calibração PAS, onda 1

- **Data:** 2026-07-30
- **Escopo:** seis escritórios, até cinco páginas públicas por domínio
- **Evidências coletadas:** 23 páginas
- **Estado:** julgamento experimental; revisão humana pendente

## Resultado preliminar

A pontuação abaixo é calculada apenas sobre dimensões conhecidas. Ela não é ranking comercial, não mede eficácia e não deve ser comparada sem observar cobertura e confiança.

| Escritório | PAS conhecido ponderado | Cobertura ponderada | Confiança |
|---|---:|---:|---:|
| RHENTALL Contabilidade | 85,3 | 85% | 0,89 |
| Brito Advocacia Empresarial | 85,0 | 85% | 0,88 |
| CONASC Contadores Associados | 64,9 | 85% | 0,76 |
| Conexão Contabilidade | 62,1 | 70% | 0,71 |
| Leonardo Coêlho Advocacia | 46,9 | 85% | 0,69 |
| Paulo Alencar Advocacia | unknown | 0% | — |

## Leitura

### RHENTALL

A proposta de contabilidade consultiva, planejamento tributário e gestão empresarial aparece de forma coerente na home, soluções e institucional. A arquitetura sustenta as especialidades e conduz para WhatsApp/formulário. Falta avaliar consistência com outras propriedades.

### Brito

A proposta de advocacia empresarial com recuperação de créditos é sustentada pela home, áreas de atuação e conteúdo. Recuperação, setores e famílias jurídicas possuem arquitetura e caminhos de contato. Alegações de diferenciais permanecem como declarações do site.

### CONASC

Há amplitude de serviços e caminhos de contato, mas pouca priorização de uma especialidade central. A coleta identificou links de imagens como falso positivo, reduzindo confiança e gerando correção para o próximo coletor.

### Conexão

A proposta contábil/consultiva e as famílias aparecem claramente, porém o HTML estático revelou poucas páginas internas e pouca profundidade textual. Jornada e consistência ficaram incompletas.

### Leonardo Coêlho

Existem sinais de atuação empresarial, trabalhista, tributária e contenciosa, sobretudo nas notícias. A home e a página de atuação diferenciam pouco as especialidades, e não foram encontrados CTAs claros nas cinco páginas.

### Paulo Alencar

O HTML estático retornou somente três palavras. Todas as dimensões permanecem unknown até execução com navegador; isso não é nota baixa.

## Aprendizados do Laboratório

1. excluir URLs de imagem, PDF e outros assets da descoberta de páginas;
2. usar navegador para sites renderizados por JavaScript;
3. exigir ao menos três itens por dimensão;
4. manter consistência entre propriedades fora do agregado até coletar redes/listagens;
5. mostrar sempre score, cobertura e confiança juntos;
6. submeter rubricas a revisão humana antes de escalar aos 66.

## Próximo gate

Corrigir descoberta de links, executar browser nos casos incompletos e auditar manualmente os seis. Somente então congelar PAS v0.2 para a onda de 66.
