export default function Sobre({ titulo, paragrafos }) {
  return (
    <section id="sobre">
      <h2>{titulo}</h2>
      {paragrafos.map((paragrafo) => (
        <p key={paragrafo}>{paragrafo}</p>
      ))}
    </section>
  );
}
