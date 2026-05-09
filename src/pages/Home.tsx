import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project11 from "@/assets/project-5.jpg";
import { SectionLabel } from "@/components/SectionLabel";

const proofPoints = [
    {
        title: "Quem eu sou",
        text: "Paulo Henrique Ferreira França, desenvolvedor full stack júnior com base prática em React.js, Node.js, TypeScript e PostgreSQL.",
    },
    {
        title: "O que eu faço",
        text: "Construo interfaces responsivas em React e APIs RESTful com Node.js e Express, conectando front-end, regra de negócio e banco de dados.",
    },
    {
        title: "Valor que eu entrego",
        text: "Entrego aplicações com foco em usabilidade, organização de código, escalabilidade e contexto real de operação.",
    },
];

const marketSignals = [
    "React.js, TypeScript e Tailwind para interfaces mobile first",
    "Node.js, Express e APIs REST integrando front-end e back-end",
    "PostgreSQL, Prisma e Supabase na camada de dados",
    "Deploy em produção com foco em UX, performance e manutenção",
];

export default function Home() {
    return (
        <>
            <section className="relative overflow-hidden border-b-[3px] border-ink">
                <div className="pointer-events-none absolute inset-0 grid-noise" />

                <div className="relative mx-auto grid max-w-350 gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-6 lg:py-32">
                    <div className="lg:col-span-12">
                        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase">
                            <span className="bg-ink px-2 py-1 text-paper">Edição 01</span>
                            <span>—</span>
                            <span>Portfólio profissional / 2026</span>
                            <span className="ml-auto flex items-center gap-2">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" />
                                Aberto a oportunidades
                            </span>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="font-display text-[16vw] leading-[0.85] md:text-[10rem] lg:text-[11rem]"
                        >
                            Full<span className="text-destructive">-</span>
                            <br />
                            stack
                            <br />
                            <span className="bg-highlight px-2">júnior</span>
                            <span className="blink">.</span>
                        </motion.h1>
                        <div className="mt-8 max-w-4xl space-y-5">
                            <p className="text-2xl leading-tight md:text-4xl">
                                Desenvolvedor Full Stack Júnior focado em aplicações web modernas, escaláveis e orientadas à experiência do usuário.
                            </p>
                            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                                Atuo com React.js, TypeScript, Node.js, Express, PostgreSQL, Prisma e Supabase para criar soluções com interface responsiva, APIs RESTful e estrutura pronta para evolução.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-2">
                                <Link
                                    to="/projetos"
                                    className="brutal-border brutal-shadow brutal-hover inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-sm uppercase text-paper"
                                >
                                    Ver projetos em destaque →
                                </Link>
                                <a
                                    href="https://github.com/PauloHenrique993940"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="brutal-border brutal-shadow-sm brutal-hover inline-flex items-center gap-2 bg-paper px-5 py-3 font-mono text-sm uppercase"
                                >
                                    GitHub ↗
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/paulohenriquefranca/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="brutal-border brutal-shadow-sm brutal-hover inline-flex items-center gap-2 bg-highlight px-5 py-3 font-mono text-sm uppercase"
                                >
                                    LinkedIn ↗
                                </a>
                            </div>
                        </div>
                    </div>

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
                            <p className="font-mono text-xs uppercase opacity-60">Posicionamento</p>
                            <p className="text-lg leading-snug">
                                Minha proposta é clara: transformar aprendizado técnico em software utilizável, com autenticação,
                                integração entre camadas, experiência responsiva e organização de código alinhada a boas práticas.
                            </p>
                            <div className="brutal-border bg-paper p-4">
                                <p className="font-mono text-xs uppercase opacity-60">Objetivo profissional</p>
                                <p className="mt-2 text-base leading-relaxed">
                                    Atuar como Desenvolvedor Full Stack Júnior com foco em React.js, Node.js, TypeScript e PostgreSQL,
                                    contribuindo com soluções eficientes, escaláveis e bem estruturadas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t-[3px] border-ink bg-ink text-paper">
                    <div className="mx-auto grid max-w-350 grid-cols-2 divide-x divide-paper/30 md:grid-cols-4">
                        {[
                            { k: "Foco", v: "React.js · Node.js · TypeScript" },
                            { k: "Dados", v: "PostgreSQL · Prisma · Supabase" },
                            { k: "Entrega", v: "APIs REST · UX responsiva · Deploy" },
                            { k: "Status", v: "Remoto, híbrido ou presencial" },
                        ].map((i) => (
                            <div key={i.k} className="px-6 py-5 md:px-10">
                                <p className="font-mono text-[10px] uppercase opacity-60">{i.k}</p>
                                <p className="mt-1 font-display text-xl">{i.v}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b-[3px] border-ink py-20 md:py-24">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <SectionLabel index="01">Leitura rápida</SectionLabel>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {proofPoints.map((item) => (
                            <article key={item.title} className="brutal-border brutal-shadow bg-paper p-6">
                                <p className="font-mono text-xs uppercase opacity-60">{item.title}</p>
                                <p className="mt-4 text-lg leading-relaxed">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-b-[3px] border-ink bg-secondary py-20 md:py-24">
                <div className="mx-auto grid max-w-350 gap-10 px-6 md:px-10 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <SectionLabel index="02">Projeto principal</SectionLabel>
                        <h2 className="font-display text-5xl uppercase md:text-7xl">
                            Almoxarif<span className="text-destructive">.</span>
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed">
                            Plataforma de gestão de almoxarifado criada para um cenário real de logística e suprimentos,
                            com autenticação, controle de materiais, rastreabilidade e integração completa entre front-end e back-end.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="https://gestao-almoxarifado-frontend.vercel.app/login"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="brutal-border brutal-shadow-sm brutal-hover bg-ink px-5 py-3 font-mono text-sm uppercase text-paper"
                            >
                                Ver deploy ↗
                            </a>
                            <a
                                href="https://github.com/PauloHenrique993940/GestaoAlmoxarifadoFrontend.git"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="brutal-border brutal-shadow-sm brutal-hover bg-paper px-5 py-3 font-mono text-sm uppercase"
                            >
                                Ver código ↗
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="brutal-border brutal-shadow-lg overflow-hidden bg-paper">
                            <img src={project1} alt="Projeto Almoxarif" className="aspect-4/3 w-full object-cover" />
                        </div>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {[
                                {
                                    label: "Problema",
                                    text: "Centralizar estoque, inventário e movimentações para reduzir retrabalho e melhorar a visibilidade operacional.",
                                },
                                {
                                    label: "Solução",
                                    text: "Aplicação full stack com interface responsiva, APIs RESTful, autenticação e fluxo centralizado de consulta e atualização.",
                                },
                                {
                                    label: "Tecnologias",
                                    text: "React.js, TypeScript, Node.js, Express, PostgreSQL, Prisma e Supabase.",
                                },
                                {
                                    label: "Resultado",
                                    text: "Case aderente ao meu currículo, mostrando arquitetura full stack, modelagem relacional e foco em produtividade operacional.",
                                },
                            ].map((item) => (
                                <div key={item.label} className="brutal-border bg-paper p-5">
                                    <p className="font-mono text-xs uppercase opacity-60">{item.label}</p>
                                    <p className="mt-3 text-base leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-b-[3px] border-ink py-20 md:py-24">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <SectionLabel index="03">Sinais de maturidade</SectionLabel>
                    <div className="grid gap-4 md:grid-cols-2">
                        {marketSignals.map((item, index) => (
                            <div key={item} className="brutal-border brutal-hover bg-paper p-5">
                                <p className="font-mono text-xs uppercase opacity-60">0{index + 1}</p>
                                <p className="mt-3 text-lg leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24">
                <div className="mx-auto grid max-w-350 gap-10 px-6 md:px-10 lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <SectionLabel index="04">Outro case forte</SectionLabel>
                        <h2 className="font-display text-5xl uppercase md:text-7xl">
                            Syntax Wear.
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed">
                            Um e-commerce front-end construído para demonstrar navegação fluida, formulários estruturados,
                            integração com APIs REST e atenção real a UX responsiva.
                        </p>
                        <p className="mt-4 max-w-3xl font-mono text-sm uppercase">
                            React.js · TypeScript · Tailwind CSS · React Hook Form · TanStack Router · Zod
                        </p>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="brutal-border brutal-shadow-lg overflow-hidden bg-paper">
                            <img src={project11} alt="Projeto Syntax Wear" className="aspect-4/3 w-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
