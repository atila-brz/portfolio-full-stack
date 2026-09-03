export default function Header({ apresentacao, nome, cargo, links }) {
  return (
    <header className="cabecalho">
      <p className="apresentacao">{apresentacao}</p>
      <h1>{nome}</h1>
      <p className="cargo">{cargo}</p>

      <nav aria-label="Navegação principal">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.texto}
          </a>
        ))}
      </nav>
    </header>
  );
}
