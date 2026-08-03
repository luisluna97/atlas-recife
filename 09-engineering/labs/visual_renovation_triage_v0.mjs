import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', '..');
const inputPath = path.join(root, '04-intelligence', 'transformation-priority-v0.json');
const outputPath = path.join(root, '04-intelligence', 'visual-renovation-technical-triage-v0.json');
const reportPath = path.join(root, '04-intelligence', 'visual-renovation-technical-triage-v0.md');
const source = JSON.parse(await fs.readFile(inputPath, 'utf8'));
const prospects = source.rows.filter((row) => row.prospect_scope);

const timeoutMs = 12000;
const maxBytes = 1_500_000;

function occurrences(text, pattern) {
  return (text.match(pattern) || []).length;
}

function inspectHtml(html, finalUrl) {
  const lower = html.toLowerCase();
  const copyrightYears = [...html.matchAll(/(?:copyright|©|&copy;)[^\d]{0,20}(20\d{2})/gi)]
    .map((match) => Number(match[1]))
    .filter((year) => year >= 2000 && year <= 2026);
  const oldestCopyright = copyrightYears.length ? Math.min(...copyrightYears) : null;
  const linkCount = occurrences(lower, /<a\b/g);
  const wordCount = lower.replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

  const signals = {
    missing_viewport: !/<meta[^>]+name=["']viewport["']/i.test(html),
    deprecated_elements: occurrences(lower, /<(?:font|center|marquee|frameset|frame)\b/g),
    layout_tables: occurrences(lower, /<table\b/g),
    fixed_width_styles: occurrences(lower, /(?:width\s*:\s*\d{3,4}px|width=["']?\d{3,4})/g),
    old_copyright_year: oldestCopyright && oldestCopyright <= 2020 ? oldestCopyright : null,
    external_portal_dependency: /sitecontabil\.com\.br|dominioatendimento\.com/i.test(html),
    missing_title: !/<title[^>]*>\s*[^<]+/i.test(html),
    missing_description: !/<meta[^>]+name=["']description["'][^>]+content=["'][^"']+/i.test(html),
    missing_h1: !/<h1\b/i.test(html),
    high_link_density: wordCount > 0 && linkCount / wordCount > 0.08,
    iframe_count: occurrences(lower, /<iframe\b/g),
    final_url: finalUrl,
  };

  let score = 0;
  if (signals.missing_viewport) score += 18;
  score += Math.min(16, signals.deprecated_elements * 4);
  score += Math.min(10, signals.layout_tables * 2);
  score += Math.min(10, signals.fixed_width_styles * 2);
  if (signals.old_copyright_year) score += Math.min(14, 2026 - signals.old_copyright_year);
  if (signals.external_portal_dependency) score += 12;
  if (signals.missing_title) score += 5;
  if (signals.missing_description) score += 4;
  if (signals.missing_h1) score += 5;
  if (signals.high_link_density) score += 4;
  score += Math.min(2, signals.iframe_count);
  return { technical_age_signal: Math.min(100, score), signals };
}

async function inspect(row) {
  const ownedWebsite = !/linkedin\.com|instagram\.com|facebook\.com/i.test(row.official_url);
  if (!ownedWebsite) return { ...row, track: 'no_owned_site', technical_age_signal: null };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(row.official_url, {
      redirect: 'follow', signal: controller.signal,
      headers: { 'user-agent': 'AtlasRecife-Lab/0.1 (internal research; limited pilot)' },
    });
    const buffer = Buffer.from(await response.arrayBuffer());
    const html = buffer.subarray(0, maxBytes).toString('utf8');
    return {
      ...row, track: 'website_renovation', http_status: response.status,
      bytes_inspected: Math.min(buffer.length, maxBytes),
      ...inspectHtml(html, response.url), visual_decay_score: null,
      limitation: 'Technical pre-triage only; visual score requires rendered desktop and mobile evidence.',
    };
  } catch (error) {
    return { ...row, track: 'access_review', technical_age_signal: null,
      error: error.name === 'AbortError' ? 'timeout' : String(error.message || error),
      visual_decay_score: null };
  } finally { clearTimeout(timer); }
}

const results = [];
for (let index = 0; index < prospects.length; index += 4) {
  results.push(...await Promise.all(prospects.slice(index, index + 4).map(inspect)));
}
const ranked = results.filter((row) => Number.isFinite(row.technical_age_signal))
  .sort((a, b) => b.technical_age_signal - a.technical_age_signal);
ranked.forEach((row, index) => { row.technical_triage_rank = index + 1; });

const output = {
  method_version: 'visual-renovation-technical-triage-v0.1',
  generated_at: new Date().toISOString(), input: path.relative(root, inputPath),
  denominator: prospects.length, results,
  warning: 'This is not the visual renovation ranking. It only orders deterministic technical-age signals. Visual decay remains null until screenshot review.',
};
await fs.writeFile(outputPath, JSON.stringify(output, null, 2) + '\n');

const top = ranked.slice(0, 15);
const lines = [
  '# Triagem técnica para reforma visual — v0', '',
  `Gerado em: ${output.generated_at}`, '',
  '> Não é ranking visual final. A nota indica sinais técnicos de antiguidade; beleza e degradação visual exigem screenshots.', '',
  '| Posição técnica | Empresa | Segmento | Sinal técnico | Status |',
  '|---:|---|---|---:|---|',
  ...top.map((row) => `| ${row.technical_triage_rank} | ${row.observed_name} | ${row.segment === 'accounting_b2b' ? 'Contábil' : 'Jurídico'} | ${row.technical_age_signal} | ${row.http_status ?? 'n/a'} |`),
  '', '## Filas separadas', '',
  `- Sem domínio próprio: ${results.filter((row) => row.track === 'no_owned_site').length}`,
  `- Revisão de acesso: ${results.filter((row) => row.track === 'access_review').length}`,
  `- Aguardando avaliação visual: ${ranked.length}`,
  '', 'Método: `04-intelligence/visual-renovation-ranking-method-v0.md`.',
];
await fs.writeFile(reportPath, lines.join('\n') + '\n');
console.log(JSON.stringify({ inspected: results.length, ranked: ranked.length, top: top.map(({observed_name, technical_age_signal}) => ({observed_name, technical_age_signal})) }, null, 2));
