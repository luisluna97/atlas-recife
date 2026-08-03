# QA estrutural — landing RS v0.2

Data: 2026-07-31  
Executor: agente Landing Builder  
Escopo: inspeção estrutural local; sem navegador, publicação ou contato externo.

## Resultado

- `lang="pt-BR"`, landmarks (`header`, `nav`, `main`, `section`, `footer`) e hierarquia única de H1 presentes.
- links internos usam destinos existentes e nomes compreensíveis;
- foco visível em campos e navegação utilizável sem dependência de hover;
- layout possui quebras para 980 px e 620 px, sem larguras fixas superiores ao viewport;
- formulário é apenas visual: botão `type="button"`, `disabled`, sem `action`, handler ou integração;
- campos têm labels e aviso associado por `aria-describedby`;
- metadados `noindex`, `nofollow` e `no-referrer` definidos;
- aviso “Demonstração privada — conceito não oficial” aparece antes da navegação e a ausência de endosso é reiterada no rodapé;
- starter, marcador `codex-preview` e dependência `react-loading-skeleton` removidos;
- nenhuma métrica, depoimento, prêmio, cliente, garantia ou promessa de resultado adicionada.
- Rota 3 — Mesa de Trabalho Recife implementada como composição editorial
  assimétrica, sem cards SaaS, pessoas, sede fictícia ou clichês locais;
- pauta contínua `empresa / frentes a conversar / próximo passo` materializada
  como sistema de navegação e leitura, sem ser apresentada como processo real da RS;
- imagem aprovada `public/images/mesa-trabalho-recife-concept-v2.png` usada no
  hero com recortes específicos para desktop e mobile, overlay para contraste e
  legenda visível que declara sua natureza gerada e não documental;
- responsividade revisada nos breakpoints de 980 px e 620 px; a imagem preserva
  `object-fit: cover` com posições distintas para desktop e mobile;
- `prefers-reduced-motion` continua desativando a única transição de navegação,
  o scroll suave.

## Proveniência editorial

Fatos utilizados: terceirização de serviços contábeis para empresas; frentes
contábil, tributária, fiscal e trabalhista; localização institucional em Recife.
Fonte: `../evidence-map.md` e `../../demo-evidence-snapshot-v0.json`.

Na v0.2, a sequência conceitual anterior “entender, organizar, acompanhar” foi
removida. A página agora declara explicitamente que
porte, segmento, necessidades e forma de acompanhamento não foram presumidos.
A ordem editorial “contexto primeiro, escopo depois” também é rotulada como
proposta da demonstração, não como método de atendimento confirmado.

Após auditoria independente, foram removidos endereço exato e detalhes editoriais
que não possuíam trecho atômico correspondente no snapshot materializado.

## Validação técnica

- `git diff --check`: aprovado.
- `npm install`: concluído; `vinext`, `next`, React e demais dependências estão
  presentes no projeto local.
- `npm run build`: executado, mas o Vite foi interrompido pelo ambiente Windows
  restrito ao tentar criar subprocessos (`spawn EPERM`) durante a leitura da
  configuração e resolução de módulos. Não foi uma reprovação do código da página.
- `tsc --noEmit`: alcançou o projeto, mas não fecha isoladamente porque o starter
  depende de tipos/artefatos de infraestrutura do Cloudflare (`cloudflare:workers`,
  `Fetcher` e `D1Database`) que são fornecidos no ambiente de build correspondente.
- inspeção direta de `app/page.tsx`, `app/layout.tsx` e `app/globals.css`: aprovada
  para o escopo estrutural descrito acima.
- `npm run lint -- --no-warn-ignored app/page.tsx app/layout.tsx`: aprovado sem
  erros ou avisos.

## Gate da Rota 3

- imagem: `public/images/mesa-trabalho-recife-concept-v2.png`, aprovada no gate
  anterior e tratada exclusivamente como ilustração editorial;
- texto obrigatório visível: “Ilustração editorial gerada para demonstração —
  não representa a sede ou documentos da RS.”;
- `alt`: descreve a cena como ilustração e registra ausência de pessoas;
- claims: limitados ao serviço focal, quatro frentes e Recife, todos presentes
  no mapa de evidências; perguntas e pautas não são apresentadas como dores;
- publicação: não executada nem autorizada;
- QA visual em navegador e build completo: continuam pendentes pelas limitações
  de execução já registradas acima.

O artefato não deve ser publicado até haver build bem-sucedido em ambiente apto
a executar o Vite e QA visual posterior autorizado.
