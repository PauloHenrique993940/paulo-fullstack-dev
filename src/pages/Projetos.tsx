import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const projectSections: Array<{ title: string; description: string; projectTitles: string[] }> = [
  {
    title: "Sistemas",
    description: "Plataformas, produtos digitais e ferramentas para operações reais.",
    projectTitles: ["Almoxarif", "Clarity Finanças", "Hacker Platform", "Syntax Wear", "Ativo Control", "Sistema de Informações APS/AFM", "Gerenciador de Tarefas Kanban", "Biblioteca Digital", "Efood", "Eplay", "Indústrias Wayne"],
  },
  {
    title: "Sites",
    description: "Sites institucionais e experiências orientadas à marca e conversão.",
    projectTitles: ["Ink Art Studio", "Barbearia Premium", "Canarinho Chronicles", "Rest Dim Sushi", "Sabor Aroma", "Essência do Gosto", "Aura Studio", "Clone Disney+"],
  },
  {
    title: "Consumo de APIs",
    description: "Aplicações que transformam dados externos em experiências úteis e claras.",
    projectTitles: ["Rastreio de Encomendas", "Dashboard Climático Angular", "Anime API", "Studio Ghibli API"],
  },
] as const;

const revealCard = {
  hidden: { opacity: 0, y: 64, scale: 0.94, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 115, damping: 18, mass: 0.9 },
  },
};

const getArchitectureSummary = (project: (typeof projects)[number]) => {
  const stack = project.tags.map((tag) => tag.toLowerCase());

  if (stack.some((tag) => tag.includes("node") || tag.includes("express") || tag.includes("php") || tag.includes("postgre"))) {
    return "Arquitetura pensada em camadas, com interface responsiva, APIs organizadas e persistência de dados voltada para manutenção e evolução.";
  }

  return "Arquitetura de interface modular, com componentes reutilizáveis, navegação clara e estrutura preparada para crescer com o produto.";
};

const getChallengeSummary = (project: (typeof projects)[number]) => {
  if (project.title === "Almoxarif") {
    return "Integrar fluxo operacional, controle de estoque e rastreabilidade em uma aplicação que fosse simples para o usuário e confiável para a operação.";
  }

  if (project.title === "Clarity Finanças") {
    return "Conciliar segurança, autenticação, relatórios e rotina financeira em uma solução que suportasse uso real do negócio.";
  }

  if (project.title === "Rastreio de Encomendas") {
    return "Unir dados externos, interface intuitiva e atualização contínua de status para tornar a experiência útil no dia a dia.";
  }

  return "Balancear usabilidade, organização visual e boa estrutura técnica para entregar algo claro, útil e com valor percebido.";
};

export default function Projetos() {
  return (
    <>
      <section className="projects-intro page-intro border-b border-ink/15">
        <div className="mx-auto max-w-350 px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">01 — Portfólio</p>
          <div className="projects-intro__heading">
            <div>
              <h1 className="mt-5 max-w-4xl text-6xl md:text-9xl">Projetos que resolvem problemas.</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Uma seleção de aplicações web, dashboards e produtos digitais construídos com foco em clareza e resultado.</p>
            </div>
            <div className="projects-intro__profile" aria-label="Áreas de atuação">
              <span>Atuação</span>
              <strong>Full Stack</strong>
              <strong>UX e UI</strong>
              <small>Da descoberta à interface final.</small>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-index mx-auto max-w-350 px-6 py-16 md:px-10 md:py-24">
        <div className="projects-index__toolbar">
          <div>
            <p className="eyebrow">02 — Projetos</p>
            <p className="projects-index__count" aria-live="polite">
              <strong>{projects.length}</strong> projetos organizados por tipo de entrega
            </p>
          </div>
        </div>
        {projectSections.map((section, sectionIndex) => {
          const sectionProjects = projects.filter((project) => section.projectTitles.includes(project.title));

          return (
            <section key={section.title} className="projects-index__section" aria-labelledby={`project-section-${sectionIndex}`}>
              <div className="projects-index__section-heading">
                <div>
                  <p className="eyebrow">0{sectionIndex + 3} — Categoria</p>
                  <h2 id={`project-section-${sectionIndex}`}>{section.title}</h2>
                </div>
                <p>{section.description}</p>
              </div>
              <div className="projects-index__grid" aria-label={`Projetos de ${section.title}`}>
                {sectionProjects.map((project) => (
                  <motion.article key={project.n} className="projects-index__item" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.42, ease: "easeOut" }}>
                    <a href={project.deploy && project.deploy !== "#" ? project.deploy : undefined} target={project.deploy && project.deploy !== "#" ? "_blank" : undefined} rel="noopener noreferrer" className={`projects-index__image ${!project.deploy || project.deploy === "#" ? "is-disabled" : ""}`} aria-label={project.deploy && project.deploy !== "#" ? `Abrir demonstração de ${project.title}` : `${project.title}, projeto em desenvolvimento`} aria-disabled={!project.deploy || project.deploy === "#"} onClick={(event) => { if (!project.deploy || project.deploy === "#") event.preventDefault(); }}>
                      <img src={project.img} alt={project.title} loading="lazy" decoding="async" />
                      <span className="projects-index__image-action">{project.deploy && project.deploy !== "#" ? "Abrir projeto" : "Em desenvolvimento"}{project.deploy && project.deploy !== "#" && <span aria-hidden="true">↗</span>}</span>
                      {project.upcoming && <span className="projects-index__status">Em breve</span>}
                    </a>
                    <div className="projects-index__caption">
                      <span className="projects-index__number">{project.n}</span>
                      <div><div className="projects-index__meta"><span>{section.title}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.sub}</p></div>
                      <div className="projects-index__actions">
                        {project.deploy && project.deploy !== "#" && <a href={project.deploy} target="_blank" rel="noopener noreferrer" aria-label={`Abrir demonstração de ${project.title}`}>Demo ↗</a>}
                        {project.github && project.github !== "#" && <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Abrir GitHub de ${project.title}`}>GitHub ↗</a>}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
}
