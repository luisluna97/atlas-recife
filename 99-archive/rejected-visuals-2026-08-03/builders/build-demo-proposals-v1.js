const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const root = path.resolve(__dirname, '..', '..');
const out = path.join(root, 'output', 'pdf');
fs.mkdirSync(out, { recursive: true });

const proposals = [
  {
    file: 'Atlas-Proposta-Leonardo-Coelho-v1.pdf', brand: 'LEONARDO COÊLHO ADVOCACIA',
    label: 'PROPOSTA DEMONSTRATIVA · ATLAS RECIFE', ink: '#151817', paper: '#F0EEE8', accent: '#294A40', soft: '#ADC6D8',
    title: 'A autoridade já existe.\nO site precisa torná-la evidente.',
    subtitle: 'Uma nova presença digital para transformar interesse em uma conversa mais bem contextualizada.',
    facts: ['Atuação empresarial desde 2001', 'Frentes consultiva e contenciosa', 'Equipe, conteúdo e presença local já publicados'],
    problem: 'Hoje, reputação, áreas, notícias, equipe e contato existem, mas aparecem como blocos separados. O visitante precisa organizar sozinho a relação entre sua situação, a atuação do escritório e o próximo passo.',
    opportunity: 'Preservar tudo o que constrói confiança e reorganizar a experiência por situações empresariais. O site deixa de ser apenas institucional e passa a orientar, informar e facilitar uma conversa responsável.',
    mechanism: ['Ser encontrado', 'Reconhecer a situação', 'Compreender a atuação', 'Conhecer equipe e conteúdo', 'Iniciar contato com contexto'],
    deliver: ['Arquitetura completa e conteúdo migrado', 'Design responsivo e identidade em movimento', 'Páginas de atuação, equipe, notícias e localização', 'SEO técnico e conteúdo conectado', 'Contato contextual e plano de analytics', 'QA de acessibilidade, desempenho e conformidade'],
    image: path.join(root, '10-deliverables', 'leonardo-coelho', 'routes-v2', 'route-b-editorial.png'),
    close: 'Não apagar o que existe.\nOrganizar, valorizar e medir.',
    note: 'Conceito privado baseado em informações públicas. Implementação, marca, textos e métricas dependem de validação do escritório. Sem promessa de ranking, clientes ou receita.', coverLine: 350, coverSub: 390
  },
  {
    file: 'Atlas-Proposta-RS-Consultoria-v1.pdf', brand: 'RS CONSULTORIA EMPRESARIAL CONTÁBIL',
    label: 'PROPOSTA DEMONSTRATIVA · ATLAS RECIFE', ink: '#22221F', paper: '#F4F0E6', accent: '#A94F35', soft: '#E0B65A',
    title: 'Uma presença digital para colocar\na conversa certa sobre a mesa.',
    subtitle: 'Uma nova porta de entrada para empresas que procuram apoio contábil, tributário, fiscal e trabalhista.',
    facts: ['Terceirização de serviços contábeis', 'Quatro frentes de atuação publicadas', 'Utilidades, notícias e canais já disponíveis'],
    problem: 'O site atual reúne serviços e muitos atalhos úteis, mas a mensagem principal disputa atenção com blocos genéricos e links externos. É difícil perceber rapidamente para quem a RS trabalha e qual conversa iniciar.',
    opportunity: 'Dar protagonismo à terceirização contábil sem perder serviços, utilidades, notícias, área restrita, condomínio e contato. Cada ativo passa a ocupar um lugar claro na jornada.',
    mechanism: ['Ser encontrada em Recife', 'Entender as quatro frentes', 'Relacionar serviço ao contexto', 'Usar recursos e conteúdo', 'Conversar com a RS'],
    deliver: ['Landing completa com patrimônio migrado', 'Direção visual Mesa de Trabalho Recife', 'Serviços e utilidades reorganizados', 'SEO para terceirização contábil', 'Contato simples com origem preservada', 'Medição futura de interesse e conversão'],
    image: path.join(root, '10-deliverables', 'rs-consultoria', 'site', 'public', 'images', 'mesa-trabalho-recife-concept-v2.png'),
    close: 'Menos ruído.\nMais contexto para começar.',
    note: 'Conceito privado baseado em informações públicas. A imagem é ilustração editorial e não representa a sede da RS. Sem promessa de crescimento, economia ou resultado financeiro.', coverLine: 405, coverSub: 445
  }
];

function pageBase(doc, p, n) {
  doc.rect(0, 0, 595.28, 841.89).fill(p.paper);
  doc.fillColor(p.accent).font('Helvetica-Bold').fontSize(7).text(p.label, 42, 34, { characterSpacing: 1.2 });
  doc.fillColor(p.ink).font('Helvetica').fontSize(7).text(String(n).padStart(2, '0'), 525, 34, { align: 'right', width: 28 });
  doc.strokeColor(p.accent).lineWidth(.5).moveTo(42, 55).lineTo(553, 55).stroke();
}
function heading(doc, p, kicker, title, y = 100) {
  doc.fillColor(p.accent).font('Helvetica-Bold').fontSize(8).text(kicker.toUpperCase(), 42, y, { characterSpacing: 1.3 });
  doc.fillColor(p.ink).font('Times-Roman').fontSize(39).text(title, 42, y + 35, { width: 500, lineGap: -2 });
}
function build(p) {
  const doc = new PDFDocument({ size: 'A4', margin: 0, info: { Title: p.file, Author: 'Atlas Recife', Subject: 'Proposta demonstrativa privada' } });
  doc.pipe(fs.createWriteStream(path.join(out, p.file)));

  pageBase(doc, p, 1);
  doc.fillColor(p.ink).font('Times-Roman').fontSize(48).text(p.title, 42, 170, { width: 500, lineGap: -3 });
  doc.fillColor(p.accent).rect(42, p.coverLine, 110, 4).fill();
  doc.fillColor(p.ink).font('Helvetica').fontSize(14).text(p.subtitle, 42, p.coverSub, { width: 420, lineGap: 5 });
  doc.fillColor(p.accent).font('Helvetica-Bold').fontSize(9).text(p.brand, 42, 720, { characterSpacing: .8 });
  doc.fillColor(p.ink).font('Helvetica').fontSize(8).text('Demonstração privada · 03 agosto 2026', 42, 744);

  doc.addPage(); pageBase(doc, p, 2); heading(doc, p, 'O ponto de partida', 'Chegamos para somar ao que já existe.');
  let y = 270; p.facts.forEach((f, i) => { doc.fillColor(p.soft).font('Times-Roman').fontSize(34).text(`0${i+1}`, 42, y); doc.fillColor(p.ink).font('Helvetica').fontSize(13).text(f, 105, y + 9, { width: 410 }); doc.strokeColor(p.soft).moveTo(105, y+42).lineTo(553,y+42).stroke(); y += 105; });
  doc.fillColor(p.ink).font('Helvetica').fontSize(9).text('Esses ativos são preservados. A proposta muda a forma como se conectam.', 42, 700, { width: 430 });

  doc.addPage(); pageBase(doc, p, 3); heading(doc, p, 'Problema e oportunidade', 'O valor está na conexão.');
  doc.fillColor(p.accent).font('Helvetica-Bold').fontSize(9).text('HOJE',42,270,{characterSpacing:1.2}); doc.fillColor(p.ink).font('Helvetica').fontSize(14).text(p.problem,42,300,{width:225,lineGap:6});
  doc.fillColor(p.soft).rect(292,260,1,350).fill();
  doc.fillColor(p.accent).font('Helvetica-Bold').fontSize(9).text('NOVA DIREÇÃO',325,270,{characterSpacing:1.2}); doc.fillColor(p.ink).font('Helvetica').fontSize(14).text(p.opportunity,325,300,{width:228,lineGap:6});

  doc.addPage(); pageBase(doc, p, 4); heading(doc, p, 'Direção visual', 'Uma experiência com personalidade própria.', 82);
  if (fs.existsSync(p.image)) doc.image(p.image, 42, 240, { fit: [511, 330], align: 'center', valign: 'center' });
  doc.fillColor(p.ink).font('Helvetica').fontSize(10).text('A direção conecta site, proposta e movimento. Não é um template genérico nem uma simples troca de cores.', 42, 610, { width: 490, lineGap: 4 });
  doc.fillColor(p.accent).font('Helvetica-Bold').fontSize(8).text('ESTUDO DE DIREÇÃO · NÃO É A VERSÃO PUBLICADA', 42, 700, { characterSpacing: 1 });

  doc.addPage(); pageBase(doc, p, 5); heading(doc, p, 'Como o site trabalha', 'Da descoberta à conversa.');
  y = 270; p.mechanism.forEach((m,i)=>{doc.fillColor(i===p.mechanism.length-1?p.accent:p.ink).circle(54,y+7,5).fill(); if(i<p.mechanism.length-1){doc.strokeColor(p.soft).moveTo(54,y+15).lineTo(54,y+68).stroke();} doc.fillColor(p.ink).font('Helvetica').fontSize(15).text(m,80,y,{width:400}); y+=78;});
  doc.fillColor(p.accent).font('Times-Italic').fontSize(18).text('Analytics mostra onde a jornada ajuda e onde ainda há fricção.', 305, 665, { width: 235, align: 'right' });

  doc.addPage(); pageBase(doc, p, 6); heading(doc, p, 'O que entregamos', p.close, 82);
  y=285; p.deliver.forEach((d,i)=>{doc.fillColor(p.accent).font('Helvetica-Bold').fontSize(8).text(`0${i+1}`,42,y);doc.fillColor(p.ink).font('Helvetica').fontSize(11).text(d,80,y-2,{width:455});doc.strokeColor(p.soft).moveTo(80,y+25).lineTo(553,y+25).stroke();y+=55;});
  doc.fillColor(p.accent).rect(42,640,511,2).fill(); doc.fillColor(p.ink).font('Helvetica').fontSize(8).text(p.note,42,670,{width:500,lineGap:3});
  doc.fillColor(p.accent).font('Helvetica-Bold').fontSize(9).text('PRÓXIMO PASSO · VALIDAR ESCOPO E CONTEÚDO',42,760,{characterSpacing:.8});
  doc.end();
}

proposals.forEach(build);
