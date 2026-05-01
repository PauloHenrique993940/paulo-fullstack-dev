import { SectionLabel } from "@/components/SectionLabel";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project9 from "@/assets/project-9.png";
import project10 from "@/assets/project-10.png";
import project11 from "@/assets/project-11.png";

const projects = [
    {
        n: "01",
        title: "Almoxarif",
        sub: "Sistema fullstack de gestão de estoque",
        problem: "Centralizar movimentações de estoque e reduzir retrabalho operacional em um fluxo mais confiável.",
        solution: "Desenvolvi uma aplicação com autenticação, painel administrativo, controle de itens e integração entre frontend e backend.",
        result: "O projeto demonstra domínio de um fluxo de mercado completo, com rastreabilidade, organização de dados e base escalável.",
        tags: ["React", "Node", "Postgres", "Prisma", "TanStack", "WebSocket", "API REST"],
        year: "2026",
        img: project1,
        deploy: "https://gestao-almoxarifado-frontend.vercel.app/login",
        github: "https://github.com/PauloHenrique993940/GestaoAlmoxarifadoFrontend.git"
    },
    {
        n: "02",
        title: "Ink Art Studio",
        sub: "Site institucional para estúdio de tatuagem",
        problem: "O negócio precisava apresentar portfólio, fortalecer marca e abrir espaço para conversão online.",
        solution: "Criei um site institucional com visual forte, navegação responsiva e organização clara para serviços e agendamento.",
        result: "O projeto mostra cuidado com branding, experiência do usuário e adaptação para diferentes telas.",
        tags: ["React", "TypeScript", "Tailwind", "UI Responsiva", "Deploy"],
        year: "2024",
        img: project3,
        deploy: "https://tattoo-tapestry-explore.lovable.app",
        github: "https://github.com/PauloHenrique993940/tattoo-tapestry-explore.git"
    },
    {
        n: "03",
        title: "Hacker Platform",
        sub: "Plataforma educacional com interface temática",
        problem: "Criar uma experiência de aprendizado mais envolvente do que uma página estática de conteúdo.",
        solution: "Estruturei uma plataforma com quizzes, desafios práticos e identidade visual consistente com o tema do produto.",
        result: "O case reforça minha capacidade de unir UX, narrativa visual e componentes reutilizáveis em uma aplicação moderna.",
        tags: ["React", "TypeScript", "Tailwind", "Framer Motion", "UX/UI"],
        year: "2024",
        img: project4,
        deploy: "https://hacker-platform.vercel.app",
        github: "https://github.com/PauloHenrique993940/hacker-platform"
    },
    {
        n: "04",
        title: "Syntax Wear",
        sub: "E-commerce com foco em experiência de compra",
        problem: "Simular um fluxo de e-commerce com catálogo, navegação clara e interface preparada para conversão.",
        solution: "Desenvolvi a vitrine, estrutura de catálogo e interações com foco em usabilidade, organização visual e performance.",
        result: "O projeto evidencia domínio de front-end aplicado a produto digital, incluindo responsividade e composição de interface.",
        tags: ["React", "TypeScript", "Tailwind", "TanStack", "E-commerce"],
        year: "2026",
        img: project5,
        deploy: "https://syntax-wear-app.vercel.app/",
        github: "https://github.com/PauloHenrique993940/syntax-wear-app.git"
    },
    {
        n: "05",
        title: "Barbearia Premium",
        sub: "Website institucional orientado à conversão",
        problem: "Dar presença digital mais forte a um negócio local e facilitar o caminho até o agendamento.",
        solution: "Projetei uma landing page com hero de alto contraste, seções de serviços e CTA direto para reserva.",
        result: "O resultado é um site mais convincente para captar clientes, com branding mais sólido e navegação objetiva.",
        tags: ["React", "TypeScript", "Tailwind", "UX/UI", "Deploy"],
        year: "2026",
        img: project10,
        deploy: "https://barbearia-premium-styles.netlify.app/",
        github: "https://github.com/PauloHenrique993940/restaurante-luxury.git"
    },
    {
        n: "06",
        title: "Canarinho Chronicles",
        sub: "Aplicação front-end orientada a conteúdo e performance",
        problem: "Organizar dados históricos densos de forma interessante e fácil de explorar.",
        solution: "Criei uma aplicação com rotas bem definidas, animações, estrutura visual consistente e atenção à divisão de build.",
        result: "O case destaca capacidade de transformar conteúdo em produto navegável, performático e visualmente memorável.",
        tags: ["React", "TypeScript", "TanStack Router", "Tailwind", "Framer Motion", "Zod"],
        year: "2026",
        img: project11,
        deploy: "https://canarinho-chronicles-selecao.netlify.app/",
        github: "https://github.com/PauloHenrique993940/canarinho-chronicles.git"
    },
];

export default function Projetos() {
    return (
        <>
            <section className="border-b-[3px] border-ink py-16 md:py-24">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <p className="font-mono text-xs uppercase">Capítulo 03 / Projetos</p>
                    <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[9rem]">
                        <span className="bg-highlight px-3">Cases</span>
                        <br />
                        com foco
                        <br />
                        em resultado.
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-relaxed">
                        Em vez de listar tecnologia solta, organizei os projetos como estudos de caso: qual problema existia,
                        qual solução foi construída, quais tecnologias sustentaram a entrega e qual resultado o projeto gera.
                    </p>
                </div>
            </section>

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
                                        {p.n === "01" && <span className="bg-highlight px-2 py-1 text-ink">Projeto destaque</span>}
                                    </div>
                                    <h2 className="font-display text-5xl leading-none md:text-7xl">{p.title}.</h2>
                                    <p className="font-display text-xl uppercase text-muted-foreground">{p.sub}</p>
                                    <div className="space-y-3 text-base leading-relaxed">
                                        <p><span className="font-mono text-xs uppercase opacity-60">Problema</span><br />{p.problem}</p>
                                        <p><span className="font-mono text-xs uppercase opacity-60">Solução</span><br />{p.solution}</p>
                                        <p><span className="font-mono text-xs uppercase opacity-60">Resultado</span><br />{p.result}</p>
                                    </div>
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

            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <SectionLabel index="∞">Critério de curadoria</SectionLabel>
                    <p className="max-w-3xl font-display text-4xl uppercase md:text-6xl">
                        Menos volume. Mais clareza, contexto e percepção de mercado.
                    </p>
                </div>
            </section>
        </>
    );
}