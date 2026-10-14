import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
];
export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="/#inicio" className="brand" aria-label="Paulo Henrique, início">
          <span className="brand-mark">©</span> Paulo Henrique
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((l) => (
            <a key={l.href} href={`/${l.href}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          Menu {open ? <X size={20} /> : <Menu size={20} />}
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
          {links.map((l) => (
            <a key={l.href} href={`/${l.href}`} onClick={() => setOpen(false)}>
              {l.label}
              <ArrowUpRight size={20} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
