import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import financeProImage from "@/assets/financePro.png";
import rastreioImage from "@/assets/rastreio.png";
import efoodImage from "@/assets/efood.png";
import sistemaInformacaoImage from "@/assets/sistemaInformacao.png";
import { SectionLabel } from "@/components/SectionLabel";

const featuredProjects = [
  { title: "Almoxarif", summary: "Gestão de estoque com autenticação, operações e rastreabilidade.", stack: "React · Node · PostgreSQL", image: project1, href: "https://gestao-almoxarifado-frontend.vercel.app/login" },
  { title: "FinancePro", summary: "SaaS financeiro com dashboard, permissões, relatórios e CRUDs.", stack: "PHP · MVC · PostgreSQL", image: financeProImage, href: "https://github.com/PauloHenrique993940/Sistema-Saas--de-Controle-Financeiro-para-Pequenos-Negocios.git" },
  { title: "Rastreio de Encomendas", summary: "Consulta de entregas com integração a dados externos e atualização de status.", stack: "React · API · Prisma", image: rastreioImage, href: "https://sistemarastreio-front.vercel.app/" },
  { title: "Efood", summary: "Marketplace com catálogo, carrinho global e checkout em etapas.", stack: "React · TypeScript · Redux", image: efoodImage, href: "https://efood-3xco7v3fr-paulohenrique537s-projects.vercel.app/" },
  { title: "Sistema de Informações APS/AFM", summary: "Dashboard operacional para acompanhar processos, materiais e recebimentos.", stack: "React · TypeScript · Dashboard", image: sistemaInformacaoImage, href: "/projetos" },
];

const stackGroups = [
  { label: "Frontend", items: "React · Next.js · TypeScript · Tailwind" },
  { label: "Backend", items: "Node.js · Express · REST API · Prisma" },
  { label: "Dados", items: "PostgreSQL · Supabase · SQL" },
  { label: "Boas práticas", items: "Zod · Git · Responsividade · Acessibilidade" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b-[3px] border-ink">
        <div className="pointer-events-none absolute inset-0 grid-noise" />
        <div className="relative mx-auto grid max-w-350 gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-6 lg:py-32">
          <div className="lg:col-span-12">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase">
              <span className="comic-caption">Portfólio / 2026</span><span>—</span><span>Paulo Henrique</span>
              <span className="ml-auto flex items-center gap-2 font-bold"><span className="h-2 w-2 animate-pulse rounded-full bg-destructive" />Aberto a oportunidades</span>
            </div>
          </div>
          <div className="lg:col-span-8">
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="font-display comic-title text-[16vw] leading-[0.85] md:text-[10rem] lg:text-[11rem]">
              Paulo<br />Henrique<span className="text-destructive">.</span>
            </motion.h1>
            <div className="mt-8 max-w-4xl space-y-5">
              <p className="font-display text-3xl uppercase leading-tight md:text-5xl">Desenvolvedor Full Stack</p>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">Construo aplicações web modernas, responsivas e orientadas a problemas reais, conectando interface, API, regra de negócio e banco de dados.</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link to="/projetos" className="brutal-border brutal-shadow brutal-hover inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-sm uppercase text-paper">Ver projetos</Link>
                <a href="https://github.com/PauloHenrique993940" target="_blank" rel="noopener noreferrer" className="brutal-border brutal-shadow-sm brutal-hover inline-flex items-center gap-2 bg-paper px-5 py-3 font-mono text-sm uppercase">GitHub ↗</a>
                <a href="https://www.linkedin.com/in/paulohenriquefranca/" target="_blank" rel="noopener noreferrer" className="brutal-border brutal-shadow-sm brutal-hover inline-flex items-center gap-2 bg-highlight px-5 py-3 font-mono text-sm uppercase">LinkedIn ↗</a>
              </div>
            </div>
          </div>
          <div className="space-y-6 lg:col-span-4">
            <div className="brutal-border brutal-shadow-lg overflow-hidden bg-secondary"><img src={portrait} alt="Retrato de Paulo Henrique" width={1024} height={1024} className="h-full w-full object-cover" /></div>
            <div className="space-y-4"><p className="font-mono text-xs uppercase opacity-60">Sobre o trabalho</p><p className="text-lg leading-snug">Transformo problemas em software utilizável, com atenção a arquitetura, UX e manutenção.</p><div className="brutal-border bg-paper p-4"><p className="font-mono text-xs uppercase opacity-60">Em foco</p><p className="mt-2 text-base leading-relaxed">React, Next.js, TypeScript, Node.js e PostgreSQL em projetos completos.</p></div></div>
          </div>
        </div>
        <div className="border-t-[3px] border-ink bg-ink text-paper"><div className="mx-auto grid max-w-350 grid-cols-2 divide-x divide-paper/30 md:grid-cols-4">
          {[{ k: "Frontend", v: "React · Next · TypeScript" }, { k: "Backend", v: "Node · Express · APIs" }, { k: "Dados", v: "PostgreSQL · Prisma" }, { k: "Entrega", v: "UX · Deploy · Git" }].map((item) => <div key={item.k} className="px-6 py-5 md:px-10"><p className="font-mono text-[10px] uppercase opacity-60">{item.k}</p><p className="mt-1 font-display text-xl">{item.v}</p></div>)}
        </div></div>
      </section>

      <section className="border-b-[3px] border-ink py-16 md:py-20"><div className="mx-auto max-w-350 px-6 md:px-10"><SectionLabel index="01">Stack principal</SectionLabel><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{stackGroups.map((group) => <article key={group.label} className="brutal-border bg-paper p-5"><p className="font-mono text-xs uppercase opacity-60">{group.label}</p><p className="mt-3 text-lg leading-relaxed">{group.items}</p></article>)}</div></div></section>

      <section className="border-b-[3px] border-ink bg-secondary py-16 md:py-20"><div className="mx-auto max-w-350 px-6 md:px-10"><SectionLabel index="02">Projetos em destaque</SectionLabel><div className="grid gap-6 md:grid-cols-2">{featuredProjects.map((project, index) => <motion.article key={project.title} className="brutal-border brutal-shadow flex flex-col overflow-hidden bg-paper" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.06 }}><img src={project.image} alt={project.title} className="aspect-16/10 w-full object-cover" /><div className="flex flex-1 flex-col p-5"><p className="font-mono text-xs uppercase opacity-60">Case 0{index + 1}</p><h2 className="mt-2 text-4xl">{project.title}</h2><p className="mt-2 text-base leading-relaxed text-muted-foreground">{project.summary}</p><p className="mt-4 font-mono text-xs uppercase">{project.stack}</p><a href={project.href} target="_blank" rel="noopener noreferrer" className="brutal-border brutal-shadow-sm brutal-hover mt-5 inline-flex w-fit bg-ink px-4 py-2 font-mono text-xs uppercase text-paper">Ver projeto ↗</a></div></motion.article>)}</div><Link to="/projetos" className="brutal-border brutal-shadow-sm brutal-hover mt-8 inline-flex bg-highlight px-5 py-3 font-mono text-sm uppercase">Ver todos os cases →</Link></div></section>

      <section className="border-b-[3px] border-ink py-16 md:py-20"><div className="mx-auto grid max-w-350 gap-10 px-6 md:px-10 lg:grid-cols-2"><div><SectionLabel index="03">Como penso a aplicação</SectionLabel><h2 className="max-w-xl text-5xl md:text-7xl">Do problema ao deploy.</h2><p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">Cada case é apresentado com contexto, solução, arquitetura e decisões técnicas para mostrar o caminho completo de uma aplicação Full Stack.</p></div><div className="brutal-border brutal-shadow bg-ink p-6 text-paper md:p-8"><p className="font-mono text-xs uppercase text-highlight">Arquitetura recorrente</p><div className="mt-5 space-y-3 font-mono text-sm uppercase">{["Frontend / React ou Next.js", "API / Node.js e Express", "Dados / Prisma e PostgreSQL", "Deploy / Vercel ou Railway"].map((layer, index) => <div key={layer} className="border-b border-paper/30 pb-3 last:border-0"><span className="mr-3 text-highlight">0{index + 1}</span>{layer}</div>)}</div></div></div></section>

      <section className="py-16 md:py-20"><div className="mx-auto flex max-w-350 flex-col items-start gap-6 px-6 md:px-10"><SectionLabel index="04">Próximo passo</SectionLabel><h2 className="max-w-3xl text-5xl md:text-7xl">Vamos construir algo útil.</h2><p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">Estou aberto a oportunidades como Desenvolvedor Full Stack Júnior, em times que valorizem aprendizado, colaboração e entregas bem estruturadas.</p><Link to="/contato" className="brutal-border brutal-shadow brutal-hover bg-ink px-6 py-3 font-mono text-sm uppercase text-paper">Entrar em contato →</Link></div></section>
    </>
  );
}
