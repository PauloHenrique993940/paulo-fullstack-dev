import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#stack", label: "Tecnologias" },
];
export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="/#inicio" className="brand" aria-label="Paulo Henrique, início">
          ph<span>.</span>
          <small>
            PAULO HENRIQUE
            <br />
            <span>DESENVOLVEDOR FULLSTACK</span>
          </small>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((l) => (
            <a key={l.href} href={`/${l.href}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="/#contato">
          Vamos conversar <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          className="mobile-nav"
          id="mobile-menu"
          aria-label="Navegação móvel"
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
        >
          {[...links, { href: "#contato", label: "Contato" }].map((l) => (
            <a key={l.href} href={`/${l.href}`} onClick={() => setOpen(false)}>
              {l.label}
              <ArrowUpRight size={17} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
