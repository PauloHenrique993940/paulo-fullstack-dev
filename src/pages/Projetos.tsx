import { SectionLabel } from "@/components/SectionLabel";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project9 from "@/assets/project-9.png";
import project10 from "@/assets/project-10.png";
import project11 from "@/assets/project-11.png";
import rastreio from "@/assets/rastreio.png";
import ativoControl from "@/assets/ativoControl.png";

const projects = [
    {
        n: "01",
        title: "Almoxarif",
        sub: "Plataforma full stack para gestão de almoxarifado",
        problem: "Centralizar estoque, inventário e rastreabilidade de materiais em um fluxo confiável para operação logística.",
        solution: "Desenvolvi uma aplicação com autenticação, painel administrativo, controle de itens e APIs RESTful integrando front-end, back-end e banco de dados.",
        result: "O projeto evidencia experiência prática com arquitetura full stack, modelagem relacional e contexto operacional real.",
        tags: ["React.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Supabase"],
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
        sub: "E-commerce responsivo com foco em UX e navegação",
        problem: "Construir um fluxo de compra moderno com catálogo, roteamento consistente, formulários robustos e integração com APIs REST.",
        solution: "Estruturei o front-end com React.js, TypeScript, Tailwind CSS, TanStack Router, React Hook Form e Zod para garantir navegação e validação mais sólidas.",
        result: "O case reforça minha capacidade de desenvolver interfaces de produto com usabilidade, organização de código e experiência responsiva.",
        tags: ["React.js", "TypeScript", "Tailwind CSS", "TanStack Router", "React Hook Form", "Zod"],
        year: "2025",
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
    {
        n: "07",
        title: "Rastreio de Encomendas",
        sub: "Aplicação para rastreamento de pacotes em tempo real",
        problem: "Fornecer informações precisas e atualizadas sobre o status de entregas.",
        solution: "Desenvolvi uma interface intuitiva com integração a APIs de rastreamento e notificações em tempo real.",
        result: "O case demonstra habilidade em criar soluções práticas e eficientes para problemas do dia a dia.",
        tags: ["React", "TypeScript", "Tailwind", "API Integration", "Real-time Updates", "Prisma ORM", "SUpabase"],
        year: "2026",
        img: rastreio,
        deploy: "https://sistemarastreio-front.vercel.app/",
        github: "https://github.com/PauloHenrique993940/sistemaRastriobackend.git",
        
        
    },
    {
        n: "08",
        title: "Ativo Control",
        sub: "Plataforma em produção para controle de ativos",
        problem: "Centralizar a gestão de ativos em um fluxo único, com visibilidade operacional e acompanhamento mais confiável.",
        solution: "A estrutura do projeto está sendo produzida para reunir interface, regras de negócio e organização de dados em uma aplicação full stack.",
        result: "Este case será publicado em breve como parte do portfólio, assim que a primeira versão de produção estiver pronta para apresentação.",
        tags: ["React", "TypeScript", "Tailwind", "Em produção"],
        year: "2026",
        img: ativoControl,
        deploy: "#",
        github: "#",
        upcoming: true,
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
                        em aderência.
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-relaxed">
                        Os projetos abaixo foram selecionados e estruturados para refletir com maior precisão minha experiência e alinhamento com o currículo, destacando o problema de negócio identificado, a solução desenvolvida, a stack utilizada e as competências práticas aplicadas em cada entrega — evidenciando minha capacidade de construir soluções reais do zero, com foco em resultado e qualidade técnica.
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
                                        <div className="relative">
                                            <img
                                                src={p.img}
                                                alt={p.title}
                                                width={1024}
                                                height={768}
                                                className="aspect-4/3 w-full object-cover"
                                            />
                                            {p.upcoming && (
                                                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-y-[3px] border-ink bg-highlight px-4 py-4 text-center font-mono text-sm font-bold uppercase tracking-[0.25em] text-ink md:text-base">
                                                    Em breve • projeto em fase de produção
                                                </div>
                                            )}
                                        </div>
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
                                        {p.upcoming ? (
                                            <span className="brutal-border bg-paper px-5 py-3 font-mono text-sm uppercase text-muted-foreground">
                                                Lançamento em breve
                                            </span>
                                        ) : (
                                            <>
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
                                            </>
                                        )}
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
                        Menos vitrine, mais resultado. Cada projeto foi cuidadosamente selecionado para evidenciar minha capacidade de transformar problemas reais em soluções funcionais, unindo contexto de negócio, arquitetura bem definida, stack consistente e aplicação prática — oferecendo uma visão clara do meu potencial técnico e da minha forma de pensar como desenvolvedor.
                    </p>
                </div>
            </section>
        </>
    );
}