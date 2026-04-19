export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-paper">
      <div className="overflow-hidden border-b border-paper/20 py-6">
        <div className="marquee-track flex whitespace-nowrap font-display text-5xl uppercase md:text-7xl">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="mx-8 flex items-center gap-8">
              Disponível para projetos
              <span className="text-highlight">★</span>
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-12 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-mono text-xs uppercase opacity-60">Localização</p>
          <p className="mt-2 font-display text-2xl">São Paulo, BR</p>
          <p className="font-mono text-sm opacity-70">UTC −03:00</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase opacity-60">Email</p>
          <a
            href="mailto:ola@junior.dev"
            className="mt-2 inline-block font-display text-2xl underline decoration-highlight decoration-4 underline-offset-4 hover:text-highlight"
          >
            ola@junior.dev
          </a>
        </div>
        <div>
          <p className="font-mono text-xs uppercase opacity-60">Sociais</p>
          <div className="mt-2 flex flex-wrap gap-3 font-mono text-sm">
            {["GitHub", "LinkedIn", "Twitter", "Read.cv"].map((s) => (
              <a key={s} href="#" className="border border-paper/40 px-3 py-1 hover:bg-highlight hover:text-ink">
                {s} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-paper/20 px-6 py-4 text-center font-mono text-xs uppercase opacity-60 md:px-10">
        © {year} — Construído com obsessão. Sem templates.
      </div>
    </footer>
  );
}
