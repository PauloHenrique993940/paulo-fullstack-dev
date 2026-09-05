import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import financeProImage from "@/assets/financePro.png";
import rastreioImage from "@/assets/rastreio.png";
import efoodImage from "@/assets/efood.png";
import sistemaInformacaoImage from "@/assets/sistemaInformacao.png";

const featuredProjects = [
  { title: "Almoxarif", summary: "Gestão de estoque com autenticação, operações e rastreabilidade.", stack: "React · Node · PostgreSQL", image: project1, href: "https://gestao-almoxarifado-frontend.vercel.app/login", github: "https://github.com/PauloHenrique993940/GestaoAlmoxarifadoFrontend.git" },
  { title: "FinancePro", summary: "SaaS financeiro com dashboard, permissões, relatórios e CRUDs.", stack: "PHP · MVC · PostgreSQL", image: financeProImage, href: "#", github: "https://github.com/PauloHenrique993940/Sistema-Saas--de-Controle-Financeiro-para-Pequenos-Negocios.git" },
  { title: "Rastreio de Encomendas", summary: "Consulta de entregas com integração a dados externos e atualização de status.", stack: "React · API · Prisma", image: rastreioImage, href: "https://sistemarastreio-front.vercel.app/", github: "https://github.com/PauloHenrique993940/sistemaRastriobackend.git" },
  { title: "Efood", summary: "Marketplace com catálogo, carrinho global e checkout em etapas.", stack: "React · TypeScript · Redux", image: efoodImage, href: "https://efood-3xco7v3fr-paulohenrique537s-projects.vercel.app/", github: "https://github.com/PauloHenrique993940/efood.git" },
  { title: "Sistema de Informações APS/AFM", summary: "Dashboard operacional para acompanhar processos, materiais e recebimentos.", stack: "React · TypeScript · Dashboard", image: sistemaInformacaoImage, href: "https://sistema-informacao-nmp.vercel.app/", github: "" },
];

export default function Home() {
  return (
    <>
      <section className="minimal-hero minimau-hero">
        <div className="minimau-hero__shape minimau-hero__shape--one" aria-hidden="true" />
        <div className="minimau-hero__shape minimau-hero__shape--two" aria-hidden="true" />
        <div className="mx-auto grid max-w-350 gap-12 px-6 py-20 md:px-10 md:py-28 lg:min-h-[calc(100vh-77px)] lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-4 lg:py-0">
          <div>
            <p className="minimau-greeting">Olá, eu sou</p>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="minimal-title minimau-title mt-2">Paulo Henrique</motion.h1>
            <p className="minimau-role mt-3">Desenvolvedor Full Stack</p>
            <p className="minimal-lead minimau-lead mt-8">Crio aplicações web modernas, claras e úteis para problemas reais.</p>
            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium">
              <Link to="/projetos" className="minimal-text-link">Ver projetos <span>↗</span></Link>
            </div>
          </div>
          <div className="hero-portrait-wrap minimau-portrait-wrap">
            <img src={portrait} alt="Retrato de Paulo Henrique" width={1024} height={1024} className="hero-portrait minimau-portrait" />
          </div>
        </div>
      </section>
      <section className="minimal-projects mx-auto max-w-350 px-6 py-20 md:px-10 md:py-28"><div className="mb-12 flex items-end justify-between gap-6"><div><p className="eyebrow">01 — Projetos selecionados</p><h2 className="mt-4 text-4xl md:text-6xl">Trabalho recente</h2></div><Link to="/projetos" className="minimal-text-link hidden sm:inline-flex">Ver todos <span>↗</span></Link></div><div className="project-gallery">{featuredProjects.map((project, index) => <motion.article key={project.title} className="project-gallery__item" initial={{ opacity: 1 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.04 }}><a href={project.href !== "#" ? project.href : undefined} target={project.href !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className="project-gallery__link"><img src={project.image} alt={project.title} /><span className="project-gallery__overlay"><strong>{project.title}</strong></span></a><div className="project-gallery__caption"><span className="project-gallery__number">0{index + 1}</span><div><h3>{project.title}</h3><p>{project.stack}</p></div><div className="project-gallery__actions">{project.href !== "#" && <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Abrir demonstração de ${project.title}`}>Demo ↗</a>}{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Abrir GitHub de ${project.title}`}>GitHub ↗</a>}</div></div><p className="sr-only">{project.summary}</p></motion.article>)}</div></section>
      <section className="minimal-contact border-t border-ink/15"><div className="mx-auto flex max-w-350 flex-col items-start px-6 py-20 md:px-10 md:py-28"><p className="eyebrow">02 — Contato</p><h2 className="mt-5 max-w-4xl text-5xl md:text-8xl">Vamos construir algo útil<span className="text-destructive">.</span></h2><Link to="/contato" className="minimal-button mt-8">Falar comigo <span>↗</span></Link></div></section>
    </>
  );
}
