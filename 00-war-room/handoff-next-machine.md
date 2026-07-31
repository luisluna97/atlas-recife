# Handoff — retomada em outra máquina

- **Atualizado em:** 2026-07-31
- **Fonte oficial:** `https://github.com/luisluna97/atlas-recife`
- **Vault Obsidian:** a própria pasta clonada
- **Entrada executiva:** [[../HOME]]
- **Estado:** [[status]]
- **Missão ativa:** [[missions/MISS-0006]]

## Onde paramos

O Atlas concluiu a fundação documental, o piloto experimental com 66 organizações
e os dois primeiros caminhos demonstrativos privados:

1. **Leonardo Coêlho Advocacia:** dossiê estratégico, oportunidade de crescimento
   e PDF executivo de 12 páginas.
2. **RS Consultoria:** landing privada Rota 3 — Mesa de Trabalho Recife, imagem
   gerada/auditada, oportunidade de crescimento e PDF executivo de 11 páginas.

A tese comercial aprovada em `ADR-0045` vende o site como porta de entrada de um
sistema mensurável: descoberta, confiança, contato, CRM e aprendizado. Não há
garantia de clientes, ranking ou receita.

## Decisões e limites ativos

- ler `ATLAS.md` e os documentos canônicos antes de agir;
- GitHub é fonte oficial; Obsidian lê os mesmos arquivos;
- D3.5 permanece excluído e `unknown`;
- nenhum score único oficial foi aprovado;
- contato, prospecção, publicação e aquisição real não estão autorizados;
- materiais são privados e demonstrativos;
- experiência humana ponta a ponta: `ADR-0043`;
- Rota 3 da RS: `ADR-0044`;
- tese do site como sistema de crescimento: `ADR-0045`;
- próximo bloco: revisão do fundador, ajustes, Maestro + Econômico-Financeiro,
  preço, metas, orçamento e proposta final.

## Arquivos essenciais

- [[../HOME|Painel executivo]]
- [[status|Estado atual]]
- [[../DECISIONS|Decisões]]
- [[missions/MISS-0006|Missão ativa]]
- [[../10-deliverables/leonardo-coelho/Atlas-Leonardo-Demonstrativo-v0.pdf|PDF Leonardo]]
- [[../10-deliverables/rs-consultoria/Atlas-RS-Demonstrativo-v0.pdf|PDF RS]]
- [[../10-deliverables/rs-consultoria/site/preview.html|Prévia local da landing RS]]
- [[../06-research/website-as-growth-system-v0|Pesquisa da oferta]]
- [[../01-company/human-experience-standard-v0|Padrão de experiência humana]]

## Preparar a nova máquina

1. Instalar Git, GitHub CLI, Obsidian e Codex.
2. No terminal:

```powershell
cd "$HOME\Documents"
git clone https://github.com/luisluna97/atlas-recife.git
cd atlas-recife
git pull
```

3. No Obsidian: **Open folder as vault** e escolher a pasta `atlas-recife`.
4. Abrir `HOME.md`.
5. No Codex, abrir a mesma pasta como workspace.
6. Enviar o prompt de retomada abaixo.

## Prompt de retomada no novo computador

```text
Estou retomando o projeto Atlas Recife em uma nova máquina.

Leia integralmente, nesta ordem:
1. AGENTS.md
2. ATLAS.md e todos os documentos canônicos que ele referencia
3. 00-war-room/handoff-next-machine.md
4. DECISIONS.md
5. HOME.md
6. 00-war-room/status.md
7. 00-war-room/missions/MISS-0006.md

GitHub é a fonte oficial e o Obsidian é apenas a interface sobre os mesmos
arquivos. Não reconstrua a visão com uma arquitetura genérica de agentes.

Confirme o commit/branch atual e verifique se o repositório está sincronizado.
Não contate clientes, não publique materiais e não inicie scraping em escala.

Depois, resuma em até 12 linhas:
- onde o projeto parou;
- decisões e limitações ativas;
- entregáveis prontos de Leonardo e RS;
- pendências da MISS-0006;
- próximo gate recomendado.

Em seguida, continue pela revisão do fundador dos dois PDFs. Depois dessa revisão,
prepare com Maestro e Econômico-Financeiro a precificação, metas, orçamento e
proposta final. Não assuma preço ou autorização comercial silenciosamente.
```

## Rotina entre máquinas

Antes de começar:

```powershell
git pull
git status
```

Ao terminar um bloco aprovado:

```powershell
git add <arquivos-do-bloco>
git commit -m "descrição curta"
git push
```

Não versionar `.env`, chaves, `node_modules`, caches, temporários ou estado local
das janelas do Obsidian. Conversas importantes devem virar resumo em
`00-war-room/conversations/`; decisões formais entram em `DECISIONS.md`.
