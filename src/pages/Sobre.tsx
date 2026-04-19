import { Link } from "react-router-dom";
import { SectionLabel } from "@/components/SectionLabel";
import portrait from "@/assets/portrait.jpg";

const skills = {
    Frontend: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
    Backend: ["Node.js", "PostgreSQL", "Prisma", "REST APIs"],
    Ferramentas: ["Git", "Docker", "Bun", "VSCode"],
    Aprendendo: ["Deploy", "AWS", "IA Generativa", ],
};

const timeline = [
    {
        year: "2025",
        title: "Estudando Fullstack TypeScript",
        desc: "React, Node, TypeScript moderno, NextJs, PostgreSQL, Prisma, REST APIs, Docker, Ajax, Deploy, Supabase, Render, Vencel, Railway",
    },
    {
        year: "2023",
        title: "Primeiros projetos",
        desc: "Clones de Páginas estáticas, ferramentas Vscode, open-source(Git/Github).",
    },
    {
        year: "2022",
        title: "Virada de carreira",
        desc: "Comecei do zero com HTML/CSS/JS/Sass/Less/Tawilwind/Ferramentas de Build (Parcel, Grunt, Gulp), fiz cursos, li livros, pratiquei muito e mergulhei de cabeça no universo dev. Lógica de programação, estruturas de dados, algoritmos, padrões de projeto, boas práticas, arquitetura de software, metodologias ágeis, versionamento com Git, deploy e tudo mais que pudesse me tornar um desenvolvedor completo.",
    },
];

export default function Sobre() {
    return (
        <>
            {/* Header */}
            <section className="border-b-[3px] border-ink py-16 md:py-24">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <p className="font-mono text-xs uppercase">Capítulo 02 / Sobre</p>
                    <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[9rem]">
                        Quem eu<span className="text-destructive">/</span>
                        <br />
                        <span className="bg-highlight px-3">sou</span>
                        <span className="text-destructive">,</span>
                        afinal?
                    </h1>
                </div>
            </section>

            {/* Bio */}
            <section className="border-b-[3px] border-ink py-20">
                <div className="mx-auto grid max-w-350 gap-10 px-6 md:px-10 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <div className="brutal-border brutal-shadow-lg overflow-hidden">
                            <img
                                src={portrait}
                                alt="Retrato editorial"
                                width={1024}
                                height={1024}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="space-y-6 lg:col-span-7">
                        <SectionLabel index="01">A história curta</SectionLabel>
                        <p className="text-2xl leading-snug md:text-3xl">
                            Antes de entrar no mundo da programação, eu me encontrava explorando outros caminhos — passava horas navegando por sites, descobrindo páginas e me perdendo na curiosidade digital. Foi em 2021 que decidi virar a chave e transformar esse interesse em propósito.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Hoje junto curiosidade, estética e lógica. Interfaces que respeitam usuários, código que respeita quem mantém.
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
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase">
                        <span className="bg-paper px-2 py-1 text-ink">02</span>
                        <span className="h-0.5 flex-1 bg-paper" />
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
                <div className="mx-auto max-w-350 px-6 md:px-10">
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
