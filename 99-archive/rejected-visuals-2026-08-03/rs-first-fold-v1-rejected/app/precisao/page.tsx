import Link from "next/link";

export const metadata = { title: "RS Consultoria — Precisão tranquila" };

export default function Precisao() {
  return (
    <main className="route-a">
      <nav className="site-nav">
        <Link className="wordmark" href="/">RS<span>CONSULTORIA</span></Link>
        <div className="nav-links"><a href="#servicos">Serviços</a><a href="#empresa">Empresa</a><a href="#conteudo">Conteúdo</a></div>
        <a className="nav-contact" href="mailto:rs@rsconsultoria-pe.com.br">Falar com a RS</a>
      </nav>
      <section className="hero-a">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> Contabilidade empresarial em Boa Viagem</p>
          <h1>Contabilidade para manter a empresa em ordem e decidir com clareza.</h1>
          <p className="lead">A RS reúne serviços contábeis, fiscais, tributários e trabalhistas para apoiar a rotina administrativa e financeira da sua empresa.</p>
          <div className="hero-actions">
            <a className="button-a" href="mailto:rs@rsconsultoria-pe.com.br">Conversar sobre minha empresa</a>
            <a className="text-link" href="#servicos">Conhecer os serviços <span>↓</span></a>
          </div>
        </div>
        <div className="precision-object" aria-label="Representação visual de documentos e prazos organizados">
          <div className="paper paper-back"><span>FISCAL</span><b>Agenda de obrigações</b><i>Atualização mensal</i></div>
          <div className="paper paper-mid"><span>TRIBUTÁRIO</span><b>Informações para decidir</b><i>Empresa · Recife</i></div>
          <div className="paper paper-front">
            <div className="paper-top"><span>RS / 08.26</span><span className="paper-dot"></span></div>
            <h2>Rotina organizada</h2>
            <div className="paper-line"><span>Contábil</span><b>Em acompanhamento</b></div>
            <div className="paper-line"><span>Fiscal</span><b>Em acompanhamento</b></div>
            <div className="paper-line"><span>Trabalhista</span><b>Em acompanhamento</b></div>
          </div>
          <span className="object-note">Documentos · prazos · decisões</span>
        </div>
      </section>
      <footer className="hero-footer">
        <span>Rua Ribeiro de Brito, 1111 · Sala 06 · Boa Viagem</span>
        <span>(81) 3327-3688</span>
        <Link href="/decisao">Ver direção 02 →</Link>
      </footer>
    </main>
  );
}
