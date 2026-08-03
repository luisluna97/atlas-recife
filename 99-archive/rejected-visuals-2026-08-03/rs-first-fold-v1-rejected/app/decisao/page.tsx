import Link from "next/link";

export const metadata = { title: "RS Consultoria — Escritório de decisão" };

export default function Decisao() {
  return (
    <main className="route-b">
      <nav className="site-nav site-nav-dark">
        <Link className="wordmark wordmark-dark" href="/">RS<span>CONSULTORIA</span></Link>
        <div className="nav-links"><a href="#empresa">A empresa</a><a href="#atuacao">Atuação</a><a href="#clientes">Área do cliente</a></div>
        <a className="nav-contact nav-contact-dark" href="mailto:rs@rsconsultoria-pe.com.br">Entrar em contato</a>
      </nav>
      <section className="hero-b">
        <div className="decision-copy">
          <p className="eyebrow eyebrow-dark"><span></span> Consultoria empresarial contábil</p>
          <h1>Obrigações em dia.<br/>Informação para decidir.</h1>
          <p>A RS acompanha as frentes contábil, tributária, fiscal e trabalhista da empresa, com atendimento em Boa Viagem, Recife.</p>
          <div className="decision-actions">
            <a className="button-b" href="mailto:rs@rsconsultoria-pe.com.br">Falar com a equipe</a>
            <a href="tel:+558133273688">(81) 3327-3688</a>
          </div>
        </div>
        <div className="decision-panel" aria-label="Painel conceitual de acompanhamento contábil">
          <div className="panel-head"><span>VISÃO DA EMPRESA</span><span>RECIFE · PE</span></div>
          <div className="panel-focus">
            <span className="focus-number">04</span>
            <div><p>frentes acompanhadas</p><b>Contábil · Tributária<br/>Fiscal · Trabalhista</b></div>
          </div>
          <div className="panel-flow">
            <div><span>01</span><b>Organizar</b></div><i></i><div><span>02</span><b>Cumprir</b></div><i></i><div><span>03</span><b>Decidir</b></div>
          </div>
          <div className="panel-bottom"><span>Área de clientes preservada</span><span className="live"><i></i> acesso</span></div>
        </div>
      </section>
      <footer className="hero-footer hero-footer-dark">
        <span>Rua Ribeiro de Brito, 1111 · Sala 06 · Boa Viagem</span>
        <span>rs@rsconsultoria-pe.com.br</span>
        <Link href="/precisao">← Ver direção 01</Link>
      </footer>
    </main>
  );
}
