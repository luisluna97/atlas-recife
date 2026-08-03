const situations = [
  "Contratação e pejotização",
  "Prevenção de riscos trabalhistas",
  "Negociações e relações de trabalho",
  "Processos estratégicos e de volume",
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#inicio" aria-label="Leonardo Coêlho Advocacia, início">
          <span className="monogram">LC</span>
          <span>Leonardo Coêlho<br />Advocacia</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#atuacao">Atuação</a>
          <a href="#conteudo">Conteúdo</a>
          <a className="navContact" href="#contato">Entrar em contato</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="eyebrow"><span>01</span> Direito trabalhista para empresas</div>
        <h1>Questões trabalhistas pedem contexto antes de pedir resposta.</h1>
        <div className="heroBottom">
          <p>
            Atuação consultiva e contenciosa para empresas que precisam compreender riscos,
            tomar decisões e conduzir relações de trabalho com segurança jurídica.
          </p>
          <a className="primary" href="#atuacao">Conheça a atuação <span>↘</span></a>
        </div>
        <div className="territory" aria-hidden="true">RECIFE<br />NORDESTE<br />BRASIL</div>
      </section>

      <section className="situations" id="atuacao">
        <div className="sectionIntro">
          <span className="index">02</span>
          <div>
            <p className="kicker">Por onde começar</p>
            <h2>Encontre a situação mais próxima da sua empresa.</h2>
          </div>
        </div>
        <div className="situationGrid">
          {situations.map((item, index) => (
            <a href="#contato" className="situation" key={item}>
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="method">
        <div className="methodStatement">
          <span className="index">03</span>
          <p>O ponto de partida é entender a decisão, os documentos e o contexto da empresa.</p>
        </div>
        <div className="methodSteps">
          <article><span>Entender</span><p>Qual é a situação e o que precisa ser decidido.</p></article>
          <article><span>Orientar</span><p>Quais caminhos jurídicos devem ser avaliados.</p></article>
          <article><span>Conduzir</span><p>Como acompanhar a medida consultiva ou contenciosa.</p></article>
        </div>
      </section>

      <section className="insight" id="conteudo">
        <div>
          <span className="index">04</span>
          <p className="kicker">Tema em acompanhamento</p>
          <h2>Pejotização: o que muda para as empresas com a retomada dos processos?</h2>
          <p className="insightText">Uma leitura inicial sobre o tema e os pontos que merecem atenção na tomada de decisão empresarial.</p>
          <a href="#contato">Ler análise <span>→</span></a>
        </div>
        <div className="quote">
          <p>Informação útil aproxima a dúvida da conversa certa.</p>
          <small>Conteúdo ligado à atuação trabalhista</small>
        </div>
      </section>

      <section className="contact" id="contato">
        <span className="index">05</span>
        <div>
          <p className="kicker">Contato contextual</p>
          <h2>Qual situação sua empresa precisa avaliar?</h2>
          <p>Ao iniciar o contato por esta página, o escritório já recebe o assunto de origem da conversa.</p>
        </div>
        <form>
          <label>Nome<input name="nome" autoComplete="name" /></label>
          <label>Empresa<input name="empresa" autoComplete="organization" /></label>
          <label>Como prefere o retorno?
            <select name="canal" defaultValue="telefone"><option value="telefone">Telefone</option><option value="email">E-mail</option></select>
          </label>
          <button type="button">Iniciar contato <span>↗</span></button>
          <small>Demonstração privada. O formulário não envia dados.</small>
        </form>
      </section>

      <footer>
        <div className="brand"><span className="monogram">LC</span><span>Leonardo Coêlho<br />Advocacia</span></div>
        <p>Rua dos Arcos, 160, Poço da Panela, Recife/PE</p>
        <p>Conceito privado produzido com informações públicas.</p>
      </footer>
    </main>
  );
}
