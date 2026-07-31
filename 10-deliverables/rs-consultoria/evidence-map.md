# Caminho B — mapa de evidências

## Controle e proveniência

- organização: `CAND-ACCOUNT-REC-05` — RS Consultoria Empresarial Contábil
- versão/data: `v0.1` — `2026-07-31`
- executor: agente Codex — briefing RS
- fonte: `tmp/miss0005-audit/atlas-miss0005-v0.sqlite`
- métodos: `pas-atomic-wave-account-v0.3.3.2`; `pas-d4-browser-wave-v0.3.3.1`
- decisão/auditoria: `ADR-0041`; `07-experiments/exp-0005-demo-target-shortlist-audit-v0.md`
- uso: planejamento e demonstração privada

## Portões, cobertura e valores

Collection gate `pass`; proposition gate `pass`; cobertura `19/19`;
desconhecidos usados como zero: `0`; sinais `<=1`: `9`.

| Dimensão | Valores | Confiança média |
|---|---|---:|
| D1 | D1.1=2; D1.2=2; D1.3=1; D1.4=1; D1.5=2 | 0,690 |
| D2 | D2.1=2; D2.2=2; D2.3=1; D2.4=1; D2.5=2 | 0,730 |
| D3 | D3.1=2; D3.2=2; D3.3=1; D3.4=1 | 0,575 |
| D4 | D4.1=1; D4.2=2; D4.3=2; D4.4=1; D4.5=1 | 0,804 |

Os nove sinais são critério experimental de seleção, não score oficial,
diagnóstico isolado ou prova de qualidade visual.

## Limites

- Este mapa não contém trechos primários das páginas e não atribui significado além das definições oficiais.
- Confiança é média dimensional, não confiança de claim individual; D3 (`0,575`) exige cautela adicional.
- Serviço focal, público, problema, credenciais, processo, CTA e baseline visual permanecem pendentes.
- Aparência, tecnologia e performance real não foram validadas aqui.
- A auditoria visual deve testar a hipótese do índice sem alterar retroativamente a seleção.

## Evidência necessária para congelar

| Decisão | Evidência mínima | Estado |
|---|---|---|
| serviço focal | home: “Empresa de terceirizacao de servicos de contabilidade” | resolvido para protótipo interno |
| público e problema | texto explícito ou conjunto consistente | pendente |
| credenciais/processo | fonte institucional datada | pendente |
| CTA | canal público funcional e compatível | pendente |
| baseline visual | URL, data, viewport e captura desktop/mobile | pendente |

Cada claim futuro deve registrar texto, classe (`fato`, `inferência`, `hipótese`),
origem, trecho/campo, data, executor, método e aprovação. Sem isso, não entra na landing.

As referências atômicas completas foram materializadas em
[`../demo-evidence-snapshot-v0.json`](../demo-evidence-snapshot-v0.json). O
recorte focal não autoriza prometer crescimento, economia, conformidade ou
resultado financeiro.
