# EXP-0005 — Primeiros resultados estruturais

- **Coleta:** 2026-07-30
- **Método:** uma página pública por domínio, HTTP com redirects, concorrência 4, timeout 20 s
- **Cobertura:** 66 tentativas; 60 respostas HTTP 200; 6 casos para revisão
- **Versão:** `home-structure-v0.1`

## Resultado inicial em Recife

Percentuais abaixo usam como denominador apenas as 23 páginas acessíveis de cada segmento. Os dois casos inacessíveis de cada grupo são `unknown`, não ausência.

| Sinal detectado na página inicial | Contábeis | Jurídicos |
|---|---:|---:|
| Title | 23/23 (100%) | 23/23 (100%) |
| Meta description | 13/23 (56,5%) | 15/23 (65,2%) |
| Pelo menos um H1 | 13/23 (56,5%) | 13/23 (56,5%) |
| JSON-LD | 14/23 (60,9%) | 10/23 (43,5%) |
| Sinal compatível com GA4/Google tag | 22/23 (95,7%) | 20/23 (87,0%) |
| Sinal de GTM | 6/23 (26,1%) | 4/23 (17,4%) |
| WhatsApp | 12/23 (52,2%) | 10/23 (43,5%) |
| Formulário | 15/23 (65,2%) | 16/23 (69,6%) |

## Leitura provisória

- A maior lacuna estrutural comum é a ausência detectável de H1 em 20 das 46 homes acessíveis de Recife. Isso merece confirmação em browser porque conteúdo pode ser renderizado por JavaScript.
- Meta description não foi detectada em 18 das 46 homes acessíveis.
- JSON-LD aparece mais na amostra contábil local do que na jurídica, mas presença não informa validade ou alinhamento.
- Sinais compatíveis com Google tag são frequentes. Isso mede instalação aparente, não configuração, eventos, qualidade dos dados ou retorno.
- Formulário e WhatsApp mostram caminhos de contato distintos; nenhum deles demonstra conversão ou qualidade do atendimento.

## Casos de revisão

| Escritório | Camada | Ocorrência |
|---|---|---|
| RCA Contábil | Recife/contábil | DNS não resolvido no executor |
| Barral Contabilidade | Recife/contábil | DNS não resolvido no executor |
| Buril, Tavares & Holanda | Recife/jurídico | cadeia de certificado não verificável |
| Costa Pinto & Fernandes | Recife/jurídico | certificado expirado |
| Mattos Filho | referência nacional/jurídico | HTTP 403 para o coletor |
| Pinheiro Neto Advogados | referência nacional/jurídico | cadeia de certificado não verificável |

Os casos precisam de browser e revisão de identidade. Não entram como zero em nenhuma dimensão.

## Próxima passagem — alinhamento de proposta

Para responder “o site entrega a especialidade que o escritório promete?”, a próxima etapa precisa identificar:

1. proposição principal e público declarado;
2. macrogrupo e especialidade;
3. evidência em title, H1, menu, páginas de serviço, conteúdo e CTA;
4. profundidade e consistência entre propriedades;
5. confiança, limitações e revisão humana.

A home fornece apenas o primeiro sinal. A avaliação PAS exige páginas de serviço e especialidade dentro do limite definido no experimento.


## Diagnóstico de acesso concluído

Os seis casos foram classificados por DNS, TLS, HTTP e navegador. A métrica com denominador completo está em [exp-0005-access-diagnostics-and-full-denominator.md](exp-0005-access-diagnostics-and-full-denominator.md).
