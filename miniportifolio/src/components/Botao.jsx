export default function Botao({ texto, href, onClick, ativo = false }) {
  const className = ativo ? 'botao botao-ativo' : 'botao';

  if (href) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {texto}
      </a>
    );
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {texto}
    </button>
  );
}
