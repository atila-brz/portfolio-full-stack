import Botao from './Botao.jsx';

export default function Contato({
  titulo,
  texto,
  link,
  textoBotao,
  cliques,
  aoClicar,
}) {
  return (
    <section id="contato">
      <h2>{titulo}</h2>
      <p>{texto}</p>
      <Botao texto={textoBotao} href={link} onClick={aoClicar} />
      <p className="contador-cliques">Cliques no contato: {cliques}</p>
    </section>
  );
}
