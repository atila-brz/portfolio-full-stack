const tecnologias = [
  'C#',
  '.NET',
  'Python',
  'JavaScript',
  'HTML',
  'CSS',
  'Docker',
  'Kubernetes',
];

function Header() {
  return (
    <header className="cabecalho">
      <p className="apresentacao">Olá, eu sou</p>
      <h1>Átila Bezerra</h1>
      <p className="cargo">Desenvolvedor Back-end em formação</p>

      <nav aria-label="Navegação principal">
        <a href="#sobre">Sobre mim</a>
        <a href="#tecnologias">Tecnologias</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

function Sobre() {
  return (
    <section id="sobre">
      <h2>Sobre mim</h2>
      <p>
        Sou profissional de back-end C# e .NET em formação, com experiência em
        pesquisa e desenvolvimento de microsserviços e aplicações em Python.
        Também já atuei com infraestrutura, manutenção de servidores, sistemas
        distribuídos e ambientes com Docker e Kubernetes.
      </p>
      <p>
        Gosto de aprender coisas novas e de trabalhar de forma dedicada e
        flexível, de acordo com as necessidades de cada projeto.
      </p>
    </section>
  );
}

function Tecnologias() {
  return (
    <section id="tecnologias">
      <h2>Tecnologias</h2>
      <ul className="lista-tecnologias">
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato">
      <h2>Contato</h2>
      <p>Para saber mais sobre minha trajetória profissional, acesse meu perfil:</p>
      <a
        className="botao-linkedin"
        href="https://www.linkedin.com/in/atila-bezerra"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver perfil no LinkedIn
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>Feito por Átila Bezerra</p>
    </footer>
  );
}

export default function App() {
  return (
    <main className="pagina">
      <Header />
      <Sobre />
      <Tecnologias />
      <Contato />
      <Footer />
    </main>
  );
}
