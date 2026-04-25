import { Link } from "react-router-dom";
import { SectionLabel } from "@/components/SectionLabel";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project8 from "@/assets/project-8.jpg";
import project5 from "@/assets/project-5.jpg";
import project9 from "@/assets/project-9.png";

import { Terminal } from "lucide-react";

const projects = [
    {
        n: "01",
        title: "Sistema de Gestão Almoxarifado",
        sub: "Sistema de Gestão de estoque",
        desc: "App fullstack com auth, real-time e drag-and-drop. Backend em Node + Postgres.",
        tags: ["React", "Node", "Postgres", "Prisma", "TanStack", "WebSocket", "API REST"],
        year: "2025",
        img: project1,
        deploy: "https://gestao-almoxarifado-frontend.vercel.app/login",
        github: "https://github.com/PauloHenrique993940/GestaoAlmoxarifadoFrontend.git"
    },
    {
        n: "02",
        title: "Sistema de Rastreamento",
        sub: "Plataforma de rastreamento de encomendas",
        desc: "Recriação fiel de uma plataforma de rastreamento de rastreio via socket. Chat, utilização de google maps para monitoramento em tempo real.",
        tags: ["React", "TypeScript", "WebSocket", "Google Maps API"],
        year: "2024",
        img: project2,
        deploy: "#", // Adicione o link real aqui
        github: "#" // Adicione o link real aqui
    },
    {
        n: "03",
        title: "Ink Art Studio",
        sub: "Site Instucional para empresa de tatuagem",
        desc: "Site institucional para estúdio de tatuagem, com portfólio dinâmico, agendamento online e blog integrado. Design moderno e responsivo.",
        tags: ["React", "TypeScript", "Tailwind", "Animation CSS"],
        year: "2024",
        img: project3,
        deploy: "https://tattoo-tapestry-explore.lovable.app", // 
        github: "https://github.com/PauloHenrique993940/tattoo-tapestry-explore.git" // Adicione o link real aqui
    },
    {
        n: "04",
        title: "Plataforma de estudo para curso de Hacker",
        sub: "App para ensino de hacking ético",
        desc: "Plataforma de estudo para curso de Hacker Ético, com quizzes interativos, desafios práticos e monitoramento de progresso.",
        tags: ["React", "API", "TypeScript", "Tailwind", "Framer Motion", "Terminal"],
        year: "2024",
        img: project4,
        deploy: "https://hacker-platform.vercel.app", // Adicione o link real aqui
        github: "https://github.com/PauloHenrique993940/hacker-platform" // Adicione o link real aqui
    },
    {
        n: "05",
        title: "Site para Barbearia",
        sub: "Site institucional para barbearia",
        desc: "Site institucional para barbearia, com portfólio dinâmico, agendamento online e blog integrado. Design moderno e responsivo.",
        tags: ["React", "API", "TypeScript", "Tailwind", "Framer Motion", "Terminal"],
        year: "2025",
        img: project8,
        deploy: "https://shave-ease-system.lovable.app", // Adicione o link real aqui
        github: "https://github.com/PauloHenrique993940/barbershop-hub.git" // Adicione o link real aqui
    },
    {
        n: "06",
        title: "Syntax Wear",
        sub: "E-commerce de moda masculina",
        desc: "E-commerce de moda masculina, com catálogo de produtos, carrinho de compras e integração com carrinho de compras. Design moderno e responsivo.",
        tags: ["React", "API", "TypeScript", "Tailwind", "Framer Motion", "Terminal", "TanStack"],
        year: "2026",
        img: project5,
        deploy: "https://syntax-wear-app.vercel.app/", // Adicione o link real aqui
        github: "https://github.com/PauloHenrique993940/syntax-wear-app.git" // Adicione o link real aqui
    },
    {
        n: "07",
        title: "Restaurante Luxury",
        sub: "Site institucional para restaurante",
        desc: "Landing page responsiva para um restaurante de sushi premium, desenvolvida com React, TypeScript e Vite. O projeto foi construído com foco em apresentação visual, tipografia elegante, atmosfera escura com detalhes dourados e adaptação para desktop e mobile.",
        tags: ["React", "API", "TypeScript", "Tailwind", "Framer Motion", "Terminal", "TanStack", "Vencel"],
        year: "2026",
        img: project9,
        deploy: "https://restaurante-luxury.netflify.app/", // Adicione o link real aqui
        github: "https://github.com/PauloHenrique993940/restaurante-luxury.git" // Adicione o link real aqui
    },
    
];

export default function Projetos() {
    return (
        <>
            {/* Header */}
            <section className="border-b-[3px] border-ink py-16 md:py-24">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <p className="font-mono text-xs uppercase">Capítulo 03 / Projetos</p>
                    <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[9rem]">
                        <span className="bg-highlight px-3">Coisas</span>
                        <br />
                        que <span className="italic">eu</span>
                        <br />
                        construí.
                    </h1>
                    <p className="mt-6 max-w-2xl font-mono text-sm uppercase">
                        {projects.length} selecionados · 2024 — 2025 · Cronológica reversa
                    </p>
                </div>
            </section>

            {/* Projects */}
            <section className="border-b-[3px] border-ink">
                {projects.map((p, idx) => (
                    <article
                        key={p.n}
                        className={`${idx % 2 === 0 ? "bg-paper" : "bg-secondary"} border-b-[3px] border-ink`}
                    >
                        <div className="mx-auto max-w-350 px-6 py-16 md:px-10 md:py-24">
                            <div className="grid items-center gap-10 lg:grid-cols-12">
                                <div className="lg:col-span-7">
                                    <div className="brutal-border brutal-shadow-lg overflow-hidden bg-paper">
                                        <img
                                            src={p.img}
                                            alt={p.title}
                                            width={1024}
                                            height={768}
                                            className="aspect-4/3 w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-5 lg:col-span-5">
                                    <div className="flex items-center gap-3 font-mono text-xs uppercase">
                                        <span className="bg-ink px-2 py-1 text-paper">{p.n}</span>
                                        <span>{p.year}</span>
                                    </div>
                                    <h2 className="font-display text-5xl leading-none md:text-7xl">{p.title}.</h2>
                                    <p className="font-display text-xl uppercase text-muted-foreground">{p.sub}</p>
                                    <p className="text-lg leading-relaxed">{p.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {p.tags.map((t) => (
                                            <span key={t} className="brutal-border bg-paper px-3 py-1 font-mono text-xs uppercase">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <a
                                            href={p.deploy}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="brutal-border brutal-shadow-sm brutal-hover bg-ink px-5 py-3 font-mono text-sm uppercase text-paper"
                                        >
                                            Ver demo →
                                        </a>
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="brutal-border brutal-shadow-sm brutal-hover bg-paper px-5 py-3 font-mono text-sm uppercase"
                                        >
                                            Código ↗
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            {/* More */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <SectionLabel index="∞">Em andamento</SectionLabel>
                    <p className="font-display text-4xl uppercase md:text-6xl">
                        Mais projetos a caminho.
                    </p>
                </div>
            </section>
        </>
    );
}