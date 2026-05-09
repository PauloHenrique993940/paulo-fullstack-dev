import { SectionLabel } from "@/components/SectionLabel";
import portrait from "@/assets/portrait.jpg";

const skills = {
    "Front-end": ["React.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "React Hook Form", "TanStack Router", "Zod"],
    "Back-end": ["Node.js", "Express.js", "APIs RESTful", "Autenticação"],
    "Dados & Cloud": ["PostgreSQL", "Prisma ORM", "Supabase"],
    "Ferramentas": ["Git", "GitHub", "Vercel", "Mobile First", "Responsividade", "UX/UI"],
};

const timeline = [
    {
        year: "2026",
        title: "Pós em Desenvolvimento Front-end",
        desc: "Especialização em andamento na Anhanguera, aprofundando arquitetura de interfaces, experiência do usuário e práticas modernas de front-end.",
    },
    {
        year: "2024",
        title: "ADS concluído e consolidação prática",
        desc: "Conclusão do tecnólogo em Análise e Desenvolvimento de Sistemas e construção de projetos completos com React, Node.js, PostgreSQL e Prisma.",
    },
    {
        year: "2020 - atual",
        title: "Experiência profissional em operação",
        desc: "Atuação na Secretaria da Segurança Pública da Bahia, fortalecendo organização de processos, análise de dados, rastreabilidade e visão operacional aplicada à tecnologia.",
    },
];

const workStyle = [
    "Desenvolvo interfaces responsivas com foco em clareza, usabilidade e experiência mobile first.",
    "Estruturo APIs e camada de dados pensando em escalabilidade, manutenção e integração limpa entre front-end e back-end.",
    "Uso Git, GitHub e organização de código para sustentar evolução contínua e colaboração.",
    "Prefiro projetos com contexto operacional real, conectando tecnologia, processo e necessidade de negócio.",
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
                            Desenvolvedor Full Stack com formação em ADS, pós-graduação em andamento e atuação prática na construção de aplicações web modernas, escaláveis e orientadas à experiência do usuário.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Tenho domínio prático do ecossistema JavaScript e TypeScript, com interfaces em React.js, APIs RESTful em Node.js e Express, modelagem com PostgreSQL e Prisma, além de integração com Supabase e deploy em produção.
                        </p>
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                { n: "3", l: "Formações acadêmicas" },
                                { n: "2024", l: "ADS concluído" },
                                { n: "2", l: "Cases aderentes ao currículo" },
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
                        Competências<span className="text-destructive">.</span>
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
