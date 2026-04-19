import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Junior.dev — Desenvolvedor Fullstack em Transição" },
      {
        name: "description",
        content:
          "Construindo a web com React, TypeScript e Node. Portfólio editorial de projetos, experimentos e estudos.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b-[3px] border-ink">
        <div className="pointer-events-none absolute inset-0 grid-noise" />

        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-6 lg:py-32">
          {/* meta strip */}
          <div className="lg:col-span-12">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase">
              <span className="bg-ink px-2 py-1 text-paper">Edição 01</span>
              <span>—</span>
              <span>Portfólio / 2025</span>
              <span className="ml-auto flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" />
                Aberto a oportunidades
              </span>
            </div>
          </div>

          {/* huge title */}
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-[16vw] leading-[0.85] md:text-[11rem] lg:text-[13rem]"
            >
              Cons<span className="text-destructive">-</span>
              <br />
              truin<span className="bg-highlight px-2">do</span>
              <br />
              a web<span className="blink">.</span>
            </motion.h1>
          </div>

          {/* portrait + intro */}
          <div className="space-y-6 lg:col-span-4">
            <div className="brutal-border brutal-shadow-lg overflow-hidden bg-secondary">
              <img
                src={portrait}
                alt="Retrato editorial do desenvolvedor"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase opacity-60">Quem fala</p>
              <p className="text-lg leading-snug">
                Olá, sou um <strong className="bg-highlight px-1">desenvolvedor júnior</strong>{" "}
                em transição de carreira. Aprendendo em público, errando rápido, enviando código
                todos os dias.
              </p>
              <Link
                to="/projetos"
                className="brutal-border brutal-shadow brutal-hover inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-sm uppercase text-paper"
              >
                Ver projetos →
              </Link>
            </div>
          </div>
        </div>

        {/* bottom info bar */}
        <div className="border-t-[3px] border-ink bg-ink text-paper">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-paper/30 md:grid-cols-4">
            {[
              { k: "Foco", v: "Fullstack" },
              { k: "Stack", v: "TS · React · Node" },
              { k: "Local", v: "São Paulo, BR" },
              { k: "Status", v: "Disponível" },
            ].map((i) => (
              <div key={i.k} className="px-6 py-5 md:px-10">
                <p className="font-mono text-[10px] uppercase opacity-60">{i.k}</p>
                <p className="mt-1 font-display text-xl">{i.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-b-[3px] border-ink py-20 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionLabel index="01">Manifesto</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-12">
            <p className="font-display text-4xl uppercase leading-[0.95] md:text-6xl lg:col-span-9 lg:text-7xl">
              Eu não venho da computação.{" "}
              <span className="text-muted-foreground">Venho da curiosidade.</span> Acredito que
              software é <span className="bg-highlight px-2">artesania</span> — feito com
              intenção, ritmo e crítica.
            </p>
            <div className="space-y-4 font-mono text-sm lg:col-span-3">
              <p className="border-l-2 border-ink pl-4">
                "Faça pequeno. Faça feio. Faça acontecer."
              </p>
              <p className="border-l-2 border-destructive pl-4">
                "Se não estou com vergonha do meu código de 6 meses atrás, não cresci."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK PREVIEW */}
      <section className="border-b-[3px] border-ink bg-ink py-20 text-paper md:py-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase opacity-60">02 / Trabalhos selecionados</p>
              <h2 className="mt-2 font-display text-5xl md:text-7xl">Em destaque</h2>
            </div>
            <Link
              to="/projetos"
              className="brutal-hover inline-block border-2 border-paper bg-highlight px-5 py-3 font-mono text-sm uppercase text-ink"
            >
              Tudo que fiz →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { img: project1, title: "Task Hector", tag: "App SaaS", year: "2025" },
              { img: project2, title: "People Magazine Clone", tag: "Frontend", year: "2024" },
            ].map((p) => (
              <Link
                key={p.title}
                to="/projetos"
                className="group block overflow-hidden border-2 border-paper bg-paper text-ink"
              >
                <div className="aspect-[4/3] overflow-hidden border-b-2 border-ink bg-secondary">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-mono text-xs uppercase opacity-60">
                      {p.tag} / {p.year}
                    </p>
                    <h3 className="mt-1 font-display text-3xl">{p.title}</h3>
                  </div>
                  <span className="font-display text-2xl">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40">
        <div className="mx-auto max-w-[1400px] px-6 text-center md:px-10">
          <SectionLabel index="03">Próximo passo</SectionLabel>
          <h2 className="font-display text-[14vw] leading-[0.85] md:text-[9rem]">
            Vamos
            <br />
            <span className="bg-ink px-3 text-paper">construir</span>
            <br />
            algo<span className="text-destructive">.</span>
          </h2>
          <Link
            to="/contato"
            className="brutal-border brutal-shadow-lg brutal-hover mt-12 inline-block bg-highlight px-8 py-5 font-display text-2xl uppercase"
          >
            Me chame →
          </Link>
        </div>
      </section>
    </>
  );
}
