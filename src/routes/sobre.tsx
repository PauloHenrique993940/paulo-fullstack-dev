import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Junior.dev" },
      {
        name: "description",
        content: "História, valores e stack do desenvolvedor por trás deste portfólio.",
      },
      { property: "og:title", content: "Sobre — Junior.dev" },
      {
        property: "og:description",
        content: "História, valores e stack do desenvolvedor por trás deste portfólio.",
      },
    ],
  }),
  component: SobrePage,
});

const skills = {
  Frontend: ["React", "TypeScript", "TanStack", "Tailwind", "Framer Motion", "Vite"],
  Backend: ["Node.js", "Hono", "PostgreSQL", "Prisma", "REST", "tRPC"],
  Ferramentas: ["Git", "Figma", "Vitest", "Docker", "Bun", "VSCode"],
  Aprendendo: ["Rust", "AWS", "WebSockets", "GraphQL"],
};

const timeline = [
  {
    year: "2025",
    title: "Estudando Fullstack TypeScript",
    desc: "Mergulho profundo em React, Node, TanStack Start e arquitetura de aplicações modernas.",
  },
  {
    year: "2024",
    title: "Primeiros projetos pessoais",
    desc: "Construí clones, ferramentas internas e contribuí para repositórios open-source.",
  },
  {
    year: "2023",
    title: "Decisão da virada",
    desc: "Larguei a área anterior. Comecei do zero — HTML, CSS, lógica e muita persistência.",
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Header */}
      <section className="border-b-[3px] border-ink py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <p className="font-mono text-xs uppercase">Capítulo 02 / Sobre</p>
          <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[9rem]">
            Quem é
            <br />
            <span className="bg-highlight px-3">você</span>
            <span className="text-destructive">,</span>
            <br />
            afinal?
          </h1>
        </div>
      </section>

      {/* Bio */}
      <section className="border-b-[3px] border-ink py-20">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="brutal-border brutal-shadow-lg overflow-hidden">
              <img
                src={portrait}
                alt="Retrato editorial"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <SectionLabel index="01">A história curta</SectionLabel>
            <p className="text-2xl leading-snug md:text-3xl">
              Antes de programar, eu fazia outra coisa. Uma série de outras coisas, na verdade.
              Até que, em 2023, decidi virar a chave.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hoje, programar não é só meu trabalho — é o lugar onde eu junto curiosidade,
              estética e lógica. Construo interfaces que respeitam quem usa, escrevo back-ends
              que respeitam quem mantém, e leio código alheio com a mesma atenção que leio
              literatura.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Fora do código: cinema dos anos 70, café preto, tipografia, caminhadas longas
              sem destino. Acho que tudo isso volta de algum jeito para o que eu construo.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { n: "12+", l: "Projetos" },
                { n: "365", l: "Dias commitando" },
                { n: "∞", l: "Cafés" },
              ].map((s) => (
                <div key={s.l} className="brutal-border bg-paper p-4">
                  <p className="font-display text-4xl">{s.n}</p>
                  <p className="font-mono text-xs uppercase opacity-60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b-[3px] border-ink bg-ink py-20 text-paper">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase">
            <span className="bg-paper px-2 py-1 text-ink">02</span>
            <span className="h-[2px] flex-1 bg-paper" />
            <span>Linha do tempo</span>
          </div>
          <div className="space-y-6">
            {timeline.map((t) => (
              <div
                key={t.year}
                className="grid items-start gap-4 border-b border-paper/30 pb-6 md:grid-cols-12"
              >
                <p className="font-display text-5xl text-highlight md:col-span-2">{t.year}</p>
                <h3 className="font-display text-3xl uppercase md:col-span-4">{t.title}</h3>
                <p className="text-base text-paper/80 md:col-span-6">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel index="03">Stack & Skills</SectionLabel>
          <h2 className="mb-12 font-display text-5xl uppercase md:text-7xl">
            O que eu uso<span className="text-destructive">.</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([cat, items]) => (
              <div
                key={cat}
                className="brutal-border brutal-shadow brutal-hover bg-paper p-6"
              >
                <p className="font-mono text-xs uppercase opacity-60">/{cat.toLowerCase()}</p>
                <h3 className="mt-2 font-display text-2xl">{cat}</h3>
                <ul className="mt-4 space-y-2">
                  {items.map((s) => (
                    <li key={s} className="flex items-center gap-2 font-mono text-sm">
                      <span className="text-destructive">▸</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
