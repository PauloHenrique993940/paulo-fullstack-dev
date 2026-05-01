import { SectionLabel } from "@/components/SectionLabel";
import portrait from "@/assets/portrait.jpg";

const skills = {
    Frontend: ["React", "TypeScript", "Tailwind", "Framer Motion", "Vite"],
    Backend: ["Node.js", "PostgreSQL", "Prisma", "REST APIs", "Autenticação"],
    Entrega: ["Responsividade", "Deploy", "Performance", "Arquitetura de interface"],
    Colaboração: ["Git", "Documentação", "Metodologias ágeis", "Organização de código"],
};

const timeline = [
    {
        year: "2026",
        title: "Portfólio orientado a produto",
        desc: "Passei a estruturar projetos como cases completos, com problema, solução, stack, deploy e resultado percebido.",
    },
    {
        year: "2025",
        title: "Consolidação fullstack",
        desc: "Aprofundei o uso de React, TypeScript, Node.js, PostgreSQL, Prisma, APIs REST, autenticação e fluxos com cara de mercado real.",
    },
    {
        year: "2022",
        title: "Virada de carreira",
        desc: "Saí de outras áreas para construir uma base sólida em desenvolvimento web, lógica, boas práticas, Git, deploy e evolução contínua.",
    },
];

const workStyle = [
    "Versionamento com Git para manter entregas organizadas e fáceis de evoluir.",
    "Estruturação de interfaces pensando em clareza, responsividade e navegação objetiva.",
    "Documentação e organização do código para facilitar manutenção e colaboração.",
    "Projetos com deploy e contexto de negócio, evitando portfólio baseado apenas em telas soltas.",
];

export default function Sobre() {
    return (
        <>
            <section className="border-b-[3px] border-ink py-16 md:py-24">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <p className="font-mono text-xs uppercase">Capítulo 02 / Sobre</p>
                    <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[9rem]">
                        Perfil
                        <span className="text-destructive">/</span>
                        <br />
                        <span className="bg-highlight px-3">profissional</span>
                        <span className="text-destructive">,</span>
                        direto.
                    </h1>
                </div>
            </section>

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
                        <SectionLabel index="01">Resumo executivo</SectionLabel>
                        <p className="text-2xl leading-snug md:text-3xl">
                            Desenvolvedor em evolução com foco em aplicações web modernas. Busco oportunidades para atuar com React, Node.js e TypeScript, contribuindo com soluções eficientes, bem estruturadas e escaláveis.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Meu diferencial está em conectar interface, lógica de negócio e organização do código para entregar produtos que não parecem exercício, mas sim software pronto para uso real.
                        </p>
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                { n: "6", l: "Cases principais" },
                                { n: "3", l: "Stacks centrais" },
                                { n: "100%", l: "Projetos com narrativa" },
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

            <section className="border-b-[3px] border-ink py-20 md:py-24">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <SectionLabel index="03">Como eu atuo</SectionLabel>
                    <div className="grid gap-4 md:grid-cols-2">
                        {workStyle.map((item, index) => (
                            <div key={item} className="brutal-border brutal-hover bg-paper p-5">
                                <p className="font-mono text-xs uppercase opacity-60">0{index + 1}</p>
                                <p className="mt-3 text-lg leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <SectionLabel index="04">Stack & Skills</SectionLabel>
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
