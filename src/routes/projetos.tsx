import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Junior.dev" },
      {
        name: "description",
        content: "Seleção de projetos, experimentos e estudos de caso fullstack.",
      },
      { property: "og:title", content: "Projetos — Junior.dev" },
      {
        property: "og:description",
        content: "Seleção de projetos, experimentos e estudos de caso fullstack.",
      },
    ],
  }),
  component: ProjetosPage,
});

const projects = [
  {
    n: "01",
    title: "Task Hector",
    sub: "Gerenciador de tarefas em equipe",
    desc: "App fullstack com auth, real-time e drag-and-drop. Backend em Node + Postgres.",
    tags: ["React", "Node", "Postgres", "WebSocket"],
    year: "2025",
    img: project1,
    accent: "highlight",
  },
  {
    n: "02",
    title: "People Magazine",
    sub: "Clone editorial com CMS",
    desc: "Recriação fiel do layout editorial. SSR, otimização de imagens e tipografia detalhada.",
    tags: ["TanStack", "TS", "CMS"],
    year: "2024",
    img: project2,
    accent: "destructive",
  },
  {
    n: "03",
    title: "Vinyl FM",
    sub: "Player de música minimalista",
    desc: "Streaming de música com biblioteca pessoal e queue colaborativa via WebSocket.",
    tags: ["React", "WebAudio", "Socket"],
    year: "2024",
    img: project3,
    accent: "highlight",
  },
  {
    n: "04",
    title: "Météo Brutal",
    sub: "App de clima editorial",
    desc: "Clima como manchete de jornal. Tipografia massiva e dados de OpenWeather.",
    tags: ["React", "API", "Geolocation"],
    year: "2024",
    img: project4,
    accent: "destructive",
  },
];

export default function ProjetosPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b-[3px] border-ink py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="font-mono text-xs uppercase">Capítulo 03 / Projetos</p>
          <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[9rem]">
            <span className="bg-highlight px-3">Coisas</span>
            <br />
            que <span className="italic">eu</span>
            <br />
            construí<span className="text-destructive">.</span>
          </h1>
          <p className="mt-6 max-w-2xl font-mono text-sm uppercase">
            04 selecionados · 2024 — 2025 · Em ordem cronológica reversa
          </p>
        </div>
      </section>

      {/* Project list */}
      <section className="border-b-[3px] border-ink">
        {projects.map((p, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <article
              key={p.n}
              className={`border-b-[3px] border-ink ${
                idx % 2 === 0 ? "bg-paper" : "bg-secondary"
              }`}
            >
              <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-12 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="lg:col-span-7">
                    <div className="brutal-border brutal-shadow-lg overflow-hidden bg-paper">
                      <img
                        src={p.img}
                        alt={p.title}
                        width={1024}
                        height={768}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-5 lg:col-span-5">
                    <div className="flex items-center gap-3 font-mono text-xs uppercase">
                      <span className="bg-ink px-2 py-1 text-paper">{p.n}</span>
                      <span>{p.year}</span>
                    </div>
                    <h2 className="font-display text-5xl leading-none md:text-7xl">
                      {p.title}
                      <span
                        className={
                          p.accent === "highlight" ? "text-destructive" : "text-foreground"
                        }
                      >
                        .
                      </span>
                    </h2>
                    <p className="font-display text-xl uppercase text-muted-foreground">
                      {p.sub}
                    </p>
                    <p className="text-lg leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="brutal-border bg-paper px-3 py-1 font-mono text-xs uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href="#"
                        className="brutal-border brutal-shadow-sm brutal-hover bg-ink px-5 py-3 font-mono text-sm uppercase text-paper"
                      >
                        Ver demo →
                      </a>
                      <a
                        href="#"
                        className="brutal-border brutal-shadow-sm brutal-hover bg-paper px-5 py-3 font-mono text-sm uppercase"
                      >
                        Código ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* More coming */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel index="∞">Em andamento</SectionLabel>
          <p className="font-display text-4xl uppercase md:text-6xl">
            Mais projetos a caminho.{" "}
            <span className="text-muted-foreground">Acompanhe meu GitHub.</span>
          </p>
        </div>
      </section>
    </>
  );
}
