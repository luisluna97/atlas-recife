import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..','..');
const inputPath=path.join(root,'04-intelligence','visual-renovation-technical-triage-v0.json');
const input=JSON.parse(fs.readFileSync(inputPath,'utf8'));
const cap=(value,max)=>Number.isFinite(value)?Math.min(100,Math.max(0,value/max*100)):null;
const weights={visual_transformation_proxy:0.45,seo_opportunity:0.25,demonstrable_material:0.15,contact_opportunity:0.10,operational_readiness_proxy:0.05};
const rows=input.results.map(row=>{
  const components={
    visual_transformation_proxy:cap(row.technical_age_signal,40),
    seo_opportunity:cap(row.seo_material,20),
    demonstrable_material:cap(row.asset_strength,20),
    contact_opportunity:cap(row.contact_gap,15),
    operational_readiness_proxy:cap(row.feasibility,10)
  };
  const known=Object.entries(components).filter(([,v])=>v!==null);
  const coverage=known.reduce((sum,[key])=>sum+weights[key],0);
  const score=coverage>=.7?known.reduce((sum,[key,value])=>sum+value*weights[key],0)/coverage:null;
  return {...row,stage0_components:components,stage0_coverage_percent:Math.round(coverage*100),sales_investigation_priority:score===null?null:Number(score.toFixed(1)),visual_gap_status:'pending_screenshot_review',commercial_probability:null};
});
const ranked=rows.filter(r=>r.sales_investigation_priority!==null).sort((a,b)=>b.sales_investigation_priority-a.sales_investigation_priority||a.observed_name.localeCompare(b.observed_name,'pt-BR'));
ranked.forEach((row,index)=>row.sales_investigation_rank=index+1);
const output={method_version:'sales-priority-stage0-v0.1',generated_at:new Date().toISOString(),denominator:50,weights,warning:'Operational queue only. Technical age is a proxy, not visual judgment. commercial_probability remains null until visual, search and commercial gates.',results:rows};
fs.writeFileSync(path.join(root,'04-intelligence','sales-priority-stage0-v0.json'),JSON.stringify(output,null,2)+'\n');
const csv=['rank,candidate_id,name,segment,url,stage0_priority,coverage,technical_age,seo_material,asset_strength,contact_gap,feasibility,commercial_probability',...ranked.map(r=>[r.sales_investigation_rank,r.candidate_id,JSON.stringify(r.observed_name),r.segment,r.official_url,r.sales_investigation_priority,r.stage0_coverage_percent,r.technical_age_signal,r.seo_material,r.asset_strength,r.contact_gap,r.feasibility,''].join(','))].join('\n')+'\n';
fs.writeFileSync(path.join(root,'04-intelligence','sales-priority-stage0-v0.csv'),csv);
const top=ranked.slice(0,15);
const md=[
  '# Fila provisória de investigação comercial — estágio 0','',
  `Gerado em: ${output.generated_at}`,'',
  '> Esta não é uma probabilidade de compra. A fila usa antiguidade técnica como proxy temporário de transformação visual. O ranking comercial exige screenshots, demanda de busca e prontidão comercial.','',
  '## Pesos provisórios','',
  '- 45% proxy de transformação visual;','- 25% oportunidade de SEO;','- 15% material demonstrável;','- 10% lacuna de contato;','- 5% proxy de prontidão operacional.','',
  '## Primeiros 15 para auditoria visual e de busca','',
  '| Fila | Organização | Segmento | Prioridade | Cobertura | Próximo gate |','|---:|---|---|---:|---:|---|',
  ...top.map(r=>`| ${r.sales_investigation_rank} | ${r.observed_name} | ${r.segment==='accounting_b2b'?'Contábil':'Jurídico'} | ${r.sales_investigation_priority} | ${r.stage0_coverage_percent}% | screenshot desktop/mobile + SEO |`),'',
  '## Promoção para ranking de chance de venda','',
  'Um candidato só recebe prioridade comercial após: evidência visual comparável; diagnóstico de SEO por serviço e intenção; empresa ativa; contato verificável; material suficiente para demonstração; e ausência de impedimento material. A probabilidade numérica permanece `null` até existirem dados de abordagem e fechamento.','',
  '## Proveniência','',
  '`visual-renovation-technical-triage-v0.1`; `transformation-priority-v0.1`; executor `sales_priority_stage0_v0.mjs`; pesos definidos como hipótese operacional a partir da ADR-0057.'
].join('\n');
fs.writeFileSync(path.join(root,'04-intelligence','sales-priority-stage0-v0.md'),md+'\n');
console.log(JSON.stringify({ranked:ranked.length,top:top.map(r=>({rank:r.sales_investigation_rank,name:r.observed_name,score:r.sales_investigation_priority}))},null,2));
