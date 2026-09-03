import Botao from './Botao.jsx';

export default function Tecnologias({
  titulo,
  itens,
  categorias,
  categoriaSelecionada,
  aoSelecionarCategoria,
}) {
  return (
    <section id="tecnologias">
      <h2>{titulo}</h2>
      <div className="grupo-botoes">
        {categorias.map((categoria) => (
          <Botao
            key={categoria}
            texto={categoria}
            ativo={categoria === categoriaSelecionada}
            onClick={() => aoSelecionarCategoria(categoria)}
          />
        ))}
      </div>
      <ul className="lista-tecnologias">
        {itens.map((item) => (
          <li key={item.nome}>{item.nome}</li>
        ))}
      </ul>
    </section>
  );
}
