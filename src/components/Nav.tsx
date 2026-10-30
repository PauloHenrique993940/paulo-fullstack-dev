import { useEffect, useState } from "react";
import { ArrowUpRight, Heart, Bug } from "lucide-react";

export const sections = [
  { id: "inicio", label: "Início" },
  { id: "projetos", label: "Lutas" },
  { id: "stack", label: "Arsenal" },
  { id: "sobre", label: "História" },
];

export function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export function Nav() {
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [life, setLife] = useState(100);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setLife(max > 0 ? Math.round(Math.max(0, 100 - (window.scrollY / max) * 100)) : 100);
    };
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
      <div className="fight-hud" aria-hidden="true">
        <strong><Heart size={14} /> DEV</strong><div className="life-bar"><i /></div><b>1P</b>
        <div className="life-bar enemy"><i style={{ transform: `scaleX(${life / 100})` }} /></div><strong><Bug size={14} /> BUG</strong>
      </div>
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
