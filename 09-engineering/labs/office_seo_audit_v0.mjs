import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', '..');
const targets = [
  { id: 'rs-consultoria', name: 'RS Consultoria Empresarial Contábil', url: 'https://rsconsultoria-pe.com.br/' },
  { id: 'nsc-solucoes', name: 'NSC Soluções Empresariais', url: 'https://nscsolucoesempresariais.com.br/' },
];
const agent = 'AtlasRecife-Lab/0.1 (internal SEO audit; limited two-site pilot)';

function strip(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ').replace(/&nbsp;/gi, ' ').replace(/\s+/g, ' ').trim();
}
function match(html, regex) { return html.match(regex)?.[1]?.trim() || null; }
function count(html, regex) { return (html.match(regex) || []).length; }
function links(html, base) {
  const found = [...html.matchAll(/<a\b[^>]*href=["']([^"'#]+)["']/gi)].map((m) => {
    try { return new URL(m[1], base).href; } catch { return null; }
  }).filter(Boolean);
  return [...new Set(found)];
}
async function fetchText(url) {
  const start = Date.now();
  const response = await fetch(url, { redirect: 'follow', headers: { 'user-agent': agent }, signal: AbortSignal.timeout(15000) });
  return { status: response.status, final_url: response.url, elapsed_ms: Date.now() - start,
    content_type: response.headers.get('content-type'), text: await response.text() };
}
function inspectPage(page, requestedUrl) {
  const html = page.text; const visible = strip(html); const allLinks = links(html, page.final_url);
  const host = new URL(page.final_url).hostname.replace(/^www\./, '');
  return {
    requested_url: requestedUrl, final_url: page.final_url, http_status: page.status,
    response_ms_observed: page.elapsed_ms, title: match(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    meta_description: match(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i)
      || match(html, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i),
    canonical: match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i),
    robots_meta: match(html, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)/i),
    lang: match(html, /<html[^>]+lang=["']([^"']+)/i), viewport: /<meta[^>]+name=["']viewport["']/i.test(html),
    h1_count: count(html, /<h1\b/gi), h2_count: count(html, /<h2\b/gi),
    image_count: count(html, /<img\b/gi), image_missing_alt_count: count(html, /<img\b(?![^>]*\balt=)[^>]*>/gi),
    json_ld_count: count(html, /<script[^>]+type=["']application\/ld\+json["']/gi),
    open_graph: /<meta[^>]+property=["']og:/i.test(html),
    internal_link_count: allLinks.filter((url) => new URL(url).hostname.replace(/^www\./, '') === host).length,
    external_link_count: allLinks.filter((url) => new URL(url).hostname.replace(/^www\./, '') !== host).length,
    word_count_approx: visible.split(/\s+/).filter(Boolean).length,
    whatsapp_present: /wa\.me|api\.whatsapp\.com|web\.whatsapp\.com/i.test(html),
    phone_link_present: /href=["']tel:/i.test(html), form_present: /<form\b/i.test(html),
    analytics_detected: /googletagmanager\.com|gtag\(|google-analytics\.com/i.test(html),
    facebook_pixel_detected: /connect\.facebook\.net|fbq\(/i.test(html),
    same_domain_links: allLinks.filter((url) => new URL(url).hostname.replace(/^www\./, '') === host).slice(0, 40),
  };
}

const audits = [];
for (const target of targets) {
  const origin = new URL(target.url).origin;
  const audit = { ...target, observed_at: new Date().toISOString(), executor: 'code:office_seo_audit_v0.mjs', method_version: 'v0.1' };
  try { const page = await fetchText(target.url); audit.home = inspectPage(page, target.url); }
  catch (error) { audit.home_error = String(error.message || error); }
  for (const asset of ['robots.txt', 'sitemap.xml']) {
    try { const response = await fetchText(`${origin}/${asset}`); audit[asset.replace('.', '_')] = { status: response.status, final_url: response.final_url, excerpt: response.text.slice(0, 1200) }; }
    catch (error) { audit[asset.replace('.', '_')] = { error: String(error.message || error) }; }
  }
  audits.push(audit);
}

const out = { audit_version: 'office-seo-audit-v0.1', generated_at: new Date().toISOString(), audits,
  limitations: ['Public surface only; no Search Console, analytics, CRM, ranking, backlink or conversion data.', 'Response time is a single observation, not a performance benchmark.', 'Detected tags do not prove correct configuration or business impact.'] };
await fs.writeFile(path.join(root, '04-intelligence', 'office-seo-audit-v0.json'), JSON.stringify(out, null, 2) + '\n');
console.log(JSON.stringify(out, null, 2));
