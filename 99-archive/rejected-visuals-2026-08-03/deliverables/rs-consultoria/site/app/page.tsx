import Image from "next/image";

const serviceLines = [
  ["01", "Contábil"],
  ["02", "Tributária"],
  ["03", "Fiscal"],
  ["04", "Trabalhista"],
];

export default function Home() {
  return (
    <>
      <div className="demo-note" role="note">
        Demonstração privada — conceito não oficial
      </div>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="RS Consultoria — início">
          <span className="brand-mark" aria-hidden="true">RS</span>
          <span><strong>RS Consultoria</strong><small>Empresarial Contábil</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#conversa">A conversa</a>
          <a href="#frentes">Frentes</a>
          <a href="#contato">Próximo passo</a>
        </nav>
        <a className="header-link" href="#contato">Sentar à mesa <span aria-hidden="true">↘</span></a>
      </header>

      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Terceirização contábil para empresas · Recife</p>
            <h1 id="hero-title">Toda empresa tem uma conversa contábil para começar.</h1>
            <p className="hero-lead">
              A RS apresenta serviços nas frentes contábil, tributária, fiscal e
              trabalhista. O ponto de partida desta demonstração é simples:
              colocar o contexto da empresa sobre a mesa.
            </p>
            <a className="primary-action" href="#contato">Iniciar uma conversa <span aria-hidden="true">→</span></a>
          </div>

          <figure className="hero-visual">
            <div className="image-frame">
              <Image
                src="/images/mesa-trabalho-recife-concept-v2.png"
                alt="Ilustração editorial de uma mesa de trabalho com papéis, caderno e objetos de escritório, sem pessoas"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 58vw"
              />
              <span className="visual-note" aria-hidden="true">Recife / uma mesa aberta</span>
            </div>
            <figcaption>
              Ilustração editorial gerada para demonstração — não representa a sede ou documentos da RS.
            </figcaption>
          </figure>
        </section>

        <section className="conversation" id="conversa" aria-labelledby="conversation-title">
          <p className="running-label">empresa / contexto</p>
          <div className="conversation-copy">
            <p className="section-kicker">Antes de definir o escopo</p>
            <h2 id="conversation-title">O que precisa entrar nesta conversa?</h2>
            <p>
              Porte, segmento, necessidades e forma de acompanhamento não foram
              presumidos nesta proposta. São informações a compreender antes de
              qualquer definição de serviço.
            </p>
          </div>
          <aside className="margin-question" aria-label="Pergunta para a conversa">
            <span>01</span>
            <p>Qual é o contexto da sua empresa hoje?</p>
          </aside>
        </section>

        <section className="worklines" id="frentes" aria-labelledby="worklines-title">
          <div className="worklines-heading">
            <p className="running-label">frentes / a conversar</p>
            <h2 id="worklines-title">Quatro frentes apresentadas pela RS.</h2>
            <p>O escopo entre elas depende da conversa com cada empresa.</p>
          </div>
          <ol className="line-list">
            {serviceLines.map(([number, title]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <span className="line-mark" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </section>

        <section className="next-step" aria-labelledby="next-step-title">
          <p className="running-label">próximo passo / a definir</p>
          <div>
            <p className="section-kicker">Uma pauta, não um processo inventado</p>
            <h2 id="next-step-title">Contexto primeiro. Escopo depois.</h2>
          </div>
          <p className="next-step-note">
            Esta ordem é uma proposta editorial para a demonstração. Não descreve
            um método de atendimento confirmado da RS.
          </p>
        </section>

        <section className="contact" id="contato" aria-labelledby="contact-title">
          <div className="contact-intro">
            <p className="running-label light">empresa / frentes / próximo passo</p>
            <h2 id="contact-title">O que você gostaria de colocar sobre a mesa?</h2>
            <p>
              Uma simulação de contato para visualizar a experiência. Nenhuma
              informação preenchida aqui será enviada.
            </p>
          </div>
          <form aria-describedby="form-note">
            <label>
              Seu nome
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label>
              Empresa
              <input type="text" name="company" autoComplete="organization" />
            </label>
            <label>
              O que precisa entrar na conversa?
              <textarea name="context" rows={4} />
            </label>
            <button type="button" disabled>Continuar a conversa</button>
            <p id="form-note">Formulário demonstrativo — envio desativado.</p>
          </form>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand">
          <span className="brand-mark" aria-hidden="true">RS</span>
          <span><strong>RS Consultoria</strong><small>Empresarial Contábil</small></span>
        </div>
        <p>Recife — Pernambuco</p>
        <p>Conceito independente criado para demonstração privada.<br />Não representa site aprovado ou contratado pela RS Consultoria.</p>
      </footer>
    </>
  );
}
