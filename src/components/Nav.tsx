import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/projetos", label: "Projetos" },
  { to: "/contato", label: "Contato" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center bg-ink text-paper font-display text-lg">
            J*
          </div>
          <span className="font-display text-sm uppercase tracking-tight">
            Junior.dev<span className="text-destructive">/</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 font-mono text-sm uppercase transition-colors hover:bg-ink hover:text-paper"
              activeProps={{ className: "bg-ink text-paper" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contato"
          className="brutal-border brutal-shadow-sm brutal-hover bg-highlight px-4 py-2 font-mono text-xs uppercase md:text-sm"
        >
          Vamos conversar →
        </Link>
      </div>
    </header>
  );
}
