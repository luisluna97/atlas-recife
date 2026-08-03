# Correção PAS atômico v0.3.1

- **Estado:** aguardando segunda auditoria independente
- **Lote:** seis organizações, 120 itens D1–D4
- **Método:** `pas-atomic-v0.3.1`
- **Produtor:** Codex
- **Gate anterior:** `REJECT`

## Correções executadas

- os 120 valores rejeitados em `pas-atomic-v0.3` permanecem preservados;
- a correção foi gravada como nova versão, sem sobrescrever o histórico;
- cada item possui `atomic_evidence_id` próprio;
- cada evidência registra URL, trecho ou elemento, ação, executor, timestamp, classe e evidência de origem quando disponível;
- cada item possui justificativa e confiança próprias;
- detecção de DOM, inspeção assistida e teste de navegador foram separados;
- destinos de contato das seis organizações foram abertos em navegador;
- formulários e campos foram observados, mas nenhum formulário foi submetido e nenhuma mensagem foi enviada;
- `unknown` foi mantido onde a prova não sustentava nota;
- `D3.5` permanece `unknown` nas seis organizações porque originalidade externa e repetição substantiva ainda não foram testadas suficientemente;
- as imagens JPG indevidamente tratadas como páginas da CONASC continuam inválidas; a nova avaliação usa o DOM renderizado;
- notas máximas foram reduzidas quando a evidência não demonstrava força excepcional.

## Controles

| Controle | Resultado |
|---|---:|
| valores v0.3.1 | 120 |
| evidências atômicas | 120 |
| referências atômicas únicas | 120 |
| justificativas únicas | 120 |
| valores `unknown` | 8 |
| notas 3 | 26 |
| integridade SQLite | `ok` |

## Limitações preservadas

- nenhum formulário foi submetido;
- nenhum WhatsApp, e-mail ou telefone foi acionado;
- presença e destino observável não provam conversão ou eficácia;
- `D3.5` não recebe nota antes de teste reproduzível de originalidade/repetição;
- o lote não pode ser expandido antes do parecer do Auditor.

## Próximo gate

O Auditor deve revisar `pas-atomic-v0.3.1` diretamente em `tmp/miss0005-audit/atlas-miss0005-v0.sqlite` e emitir `ACCEPT`, `ACCEPT WITH CONDITIONS` ou `REJECT`. Somente `ACCEPT` autoriza a próxima onda.
