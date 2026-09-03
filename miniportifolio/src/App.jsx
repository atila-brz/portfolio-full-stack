import { useState } from 'react';
import Header from './components/Header.jsx';
import Sobre from './components/Sobre.jsx';
import Tecnologias from './components/Tecnologias.jsx';
import Contato from './components/Contato.jsx';
import Footer from './components/Footer.jsx';

const perfil = {
  apresentacao: 'Olá, eu sou',
  nome: 'Átila Bezerra',
  cargo: 'Desenvolvedor Back-end em formação',
  linkedin: 'https://www.linkedin.com/in/atila-bezerra',
};

const linksNavegacao = [
  { href: '#sobre', texto: 'Sobre mim' },
  { href: '#tecnologias', texto: 'Tecnologias' },
  { href: '#contato', texto: 'Contato' },
];

const paragrafosSobre = [
  'Sou profissional de back-end C# e .NET em formação, com experiência em pesquisa e desenvolvimento de microsserviços e aplicações em Python. Também já atuei com infraestrutura, manutenção de servidores, sistemas distribuídos e ambientes com Docker e Kubernetes.',
  'Gosto de aprender coisas novas e de trabalhar de forma dedicada e flexível, de acordo com as necessidades de cada projeto.',
];

const tecnologias = [
  { nome: 'C#', categoria: 'Back-end' },
  { nome: '.NET', categoria: 'Back-end' },
  { nome: 'Python', categoria: 'Back-end' },
  { nome: 'JavaScript', categoria: 'Front-end' },
  { nome: 'HTML', categoria: 'Front-end' },
  { nome: 'CSS', categoria: 'Front-end' },
  { nome: 'Docker', categoria: 'DevOps' },
  { nome: 'Kubernetes', categoria: 'DevOps' },
];

const categoriasTecnologias = [
  'Todas',
  'Back-end',
  'Front-end',
  'DevOps',
];

export default function App() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');
  const [cliquesContato, setCliquesContato] = useState(0);

  const tecnologiasFiltradas =
    categoriaSelecionada === 'Todas'
      ? tecnologias
      : tecnologias.filter(
          (tecnologia) => tecnologia.categoria === categoriaSelecionada
        );

  function selecionarCategoria(categoria) {
    setCategoriaSelecionada(categoria);
  }

  function registrarCliqueContato() {
    setCliquesContato(cliquesContato + 1);
  }

  return (
    <main className="pagina">
      <Header
        apresentacao={perfil.apresentacao}
        nome={perfil.nome}
        cargo={perfil.cargo}
        links={linksNavegacao}
      />
      <Sobre titulo="Sobre mim" paragrafos={paragrafosSobre} />
      <Tecnologias
        titulo="Tecnologias"
        itens={tecnologiasFiltradas}
        categorias={categoriasTecnologias}
        categoriaSelecionada={categoriaSelecionada}
        aoSelecionarCategoria={selecionarCategoria}
      />
      <Contato
        titulo="Contato"
        texto="Para saber mais sobre minha trajetória profissional, acesse meu perfil:"
        link={perfil.linkedin}
        textoBotao="Ver perfil no LinkedIn"
        cliques={cliquesContato}
        aoClicar={registrarCliqueContato}
      />
      <Footer autor={perfil.nome} />
    </main>
  );
}
