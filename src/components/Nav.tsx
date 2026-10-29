import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const sections = [
  { id: "inicio", label: "Início" },
  { id: "projetos", label: "Projetos" },
  { id: "stack", label: "Tecnologias" },
  { id: "sobre", label: "Sobre" },
];

export function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export function Nav() {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    [...sections.map((s) => s.id), "contato"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  const click = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    goTo(id);
  };

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#inicio" className="nav-brand" onClick={click("inicio")}>
        <span>P</span>aulo <em>Henrique</em>
      </a>
      <nav aria-label="Navegação principal" className="nav-links">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={click(s.id)} className={active === s.id ? "is-active" : ""} aria-current={active === s.id ? "true" : undefined}>
            {s.label}
          </a>
        ))}
      </nav>
      <a href="#contato" className="nav-cta" onClick={click("contato")}>
        Contato <ArrowUpRight size={15} />
      </a>
    </header>
  );
}
