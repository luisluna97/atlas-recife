import Link from "next/link";

export const metadata = {
  title: "RS Consultoria — estudo de direção",
  description: "Duas direções visuais privadas para a primeira dobra da RS Consultoria.",
};

export default function Home() {
  return (
    <main className="choice-page">
      <header className="choice-head">
        <span>Atlas Recife · estudo privado</span>
        <span>RS Consultoria</span>
      </header>
      <section className="choice-intro">
        <p>Primeira dobra</p>
        <h1>Duas formas de apresentar a mesma empresa.</h1>
        <span>Sem trocar apenas cor e fonte. Cada direção parte de uma ideia diferente.</span>
      </section>
      <section className="choice-grid">
        <Link className="route-card route-card-light" href="/precisao">
          <span className="route-index">01</span>
          <div>
            <p>Precisão tranquila</p>
            <h2>Clareza, rotina e confiança.</h2>
          </div>
          <span className="route-open">Abrir direção <b>↗</b></span>
        </Link>
        <Link className="route-card route-card-dark" href="/decisao">
          <span className="route-index">02</span>
          <div>
            <p>Escritório de decisão</p>
            <h2>Obrigações organizadas. Decisões melhores.</h2>
          </div>
          <span className="route-open">Abrir direção <b>↗</b></span>
        </Link>
      </section>
    </main>
  );
}
