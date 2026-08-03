from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfbase.pdfmetrics import stringWidth

ROOT=Path(__file__).resolve().parents[2]; OUT=ROOT/'output'/'pdf'; OUT.mkdir(parents=True,exist_ok=True)
DATA=[
 ('Proposta-RS-Atlas-v2.pdf','RS CONSULTORIA','#05070B','#1557FF','#D8FF4F',
  'O site atual informa. A nova página organiza o caminho até o contato.',
  ['visual e estrutura com referências antigas','serviços misturados com links externos','sem descrição, H1, sitemap ou dados locais detectados','telefone sem clique e nenhuma mensuração detectada'],
  ['nova landing com o conteúdo atual preservado','páginas para Contábil, Tributária, Fiscal e Trabalhista','SEO técnico e local preparado','telefone, e-mail e contato ligados ao serviço','Analytics para acompanhar visitas e contatos'],
  'Quando alguém procurar um serviço contábil em Recife, a página certa poderá explicar o atendimento e facilitar a conversa.'),
 ('Proposta-NSC-Atlas-v2.pdf','NSC SOLUÇÕES EMPRESARIAIS','#071126','#1458FF','#76E5FF',
  'A NSC já tem páginas por segmento. A nova estrutura torna esse patrimônio mais claro.',
  ['visual datado e conteúdo de 2018/2019 ainda visível','título longo e nenhuma descrição detectada','muitos segmentos competindo ao mesmo tempo','telefone publicado sem link detectado'],
  ['nova landing com segmentos e acessos preservados','páginas próprias para negócios prioritários','atualização do conteúdo antigo com redirecionamentos','SEO, Search Console e Analytics preparados','medição dos contatos por segmento'],
  'Quem procurar contabilidade para restaurante, pousada, varejo ou advocacia poderá chegar a uma página relacionada ao próprio negócio.')]

W,H=A4
def wrap(c,text,font,size,width):
 words=text.split(); lines=[]; line=''
 for word in words:
  test=(line+' '+word).strip()
  if stringWidth(test,font,size)<=width: line=test
  else: lines.append(line); line=word
 if line: lines.append(line)
 return lines
def txt(c,text,x,y,font,size,color,width,leading=None):
 c.setFont(font,size); c.setFillColor(HexColor(color)); leading=leading or size*1.2
 for line in wrap(c,text,font,size,width): c.drawString(x,y,line); y-=leading
 return y
def base(c,name,dark,accent,page):
 c.setFillColor(HexColor(dark)); c.rect(0,0,W,H,fill=1,stroke=0)
 c.setStrokeColor(HexColor('#FFFFFF')); c.setLineWidth(.25); c.setFillColor(HexColor('#FFFFFF'))
 c.setFont('Helvetica-Bold',7); c.drawString(38,H-38,'ATLAS RECIFE / PROPOSTA PRIVADA')
 c.setFont('Helvetica',7); c.drawRightString(W-38,H-38,f'{name}   0{page}')
 c.line(38,H-55,W-38,H-55)
def build(item):
 file,name,dark,accent,signal,title,problems,deliver,mechanism=item
 c=canvas.Canvas(str(OUT/file),pagesize=A4)
 base(c,name,dark,accent,1); txt(c,'UMA NOVA PÁGINA PARA O ESCRITÓRIO',38,H-105,'Helvetica-Bold',8,signal,500)
 txt(c,title,38,H-175,'Helvetica-Bold',34,'#FFFFFF',510,39)
 c.setFillColor(HexColor(accent)); c.roundRect(38,120,W-76,170,18,fill=1,stroke=0)
 txt(c,mechanism,60,245,'Helvetica-Bold',18,dark,W-120,23)
 txt(c,'A meta real será definida depois de medir o ponto de partida. Não prometemos posição, tráfego ou clientes sem dados.',60,154,'Helvetica',9,dark,W-120,13)
 c.showPage()
 base(c,name,dark,accent,2); txt(c,'O QUE OBSERVAMOS',38,H-105,'Helvetica-Bold',8,signal,500)
 txt(c,'Há informação útil, mas o caminho até ela pode melhorar.',38,H-160,'Helvetica-Bold',29,'#FFFFFF',500,34)
 y=H-285
 for i,p in enumerate(problems,1):
  c.setFillColor(HexColor(accent)); c.circle(46,y+4,3,fill=1,stroke=0); y=txt(c,p,62,y,'Helvetica',13,'#FFFFFF',470,18)-26
 c.showPage()
 base(c,name,dark,accent,3); txt(c,'O QUE ENTREGAMOS',38,H-105,'Helvetica-Bold',8,signal,500)
 txt(c,'Uma página nova e um caminho que pode ser medido.',38,H-160,'Helvetica-Bold',29,'#FFFFFF',500,34)
 y=H-270
 for i,p in enumerate(deliver,1):
  c.setFillColor(HexColor(signal)); c.setFont('Helvetica-Bold',8); c.drawString(38,y,f'0{i}')
  y=txt(c,p,75,y,'Helvetica',12,'#FFFFFF',455,16)-21
 c.setFillColor(HexColor(accent)); c.roundRect(38,80,W-76,72,16,fill=1,stroke=0)
 txt(c,'PROXIMO PASSO: VALIDAR SERVICOS, CONTEUDO E MEDICAO.',58,120,'Helvetica-Bold',9,dark,W-116,13)
 c.save()
for item in DATA: build(item)
print('\n'.join(str(OUT/x[0]) for x in DATA))
