# Experimento — PixelRAG como evidência visual

- **Estado:** candidato no Laboratório; não incorporado
- **Fonte:** [StarTrail-org/PixelRAG](https://github.com/StarTrail-org/PixelRAG)
- **Licença declarada pelo projeto:** Apache-2.0

## Hipótese

Screenshots em tiles podem recuperar layout, hierarquia, tabelas, elementos visuais e conteúdo renderizado que o parser HTML não captura corretamente.

## Limite

PixelRAG depende de uma página que consiga ser renderizada por navegador. Não resolve:

- NXDOMAIN;
- servidor fora do ar;
- certificado que bloqueia navegação segura;
- autenticação/challenge não superado legitimamente.

## Teste mínimo

Comparar DOM/parser, navegador renderizado e PixelRAG em:

1. Paulo Alencar — falso negativo do HTML estático;
2. Mattos Filho ou Pinheiro Neto — bloqueio do coletor, browser acessível;
3. RHENTALL ou Brito — controle com HTML já rico;
4. uma página com forte layout visual.

## Métricas do Laboratório

- recall de headings, especialidades e CTAs;
- preservação de hierarquia visual;
- falsos positivos;
- tempo por página;
- CPU/GPU e armazenamento;
- tokens/custo do modelo visual;
- estabilidade entre execuções;
- proveniência dos tiles;
- risco de prompt injection visual;
- ganho sobre screenshot simples + visão.

## Gate

Só entra se superar o pipeline atual em evidência útil e custo total, sem reduzir auditabilidade. Inicialmente testar apenas `pixelshot`; indexação/embeddings/FAISS ficam fora até haver necessidade real de retrieval em escala.
