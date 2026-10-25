import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight, Pause, Play, Plus, Target, Layers3, Lightbulb } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGithub,
  SiVercel,
  SiHtml5,
  SiSwagger,
  SiJsonwebtokens,
  SiMysql,
  SiGithubactions,
  SiRailway,
  SiRender,
} from "react-icons/si";
import portrait from "@/assets/minhaFotoClara.jpg";
import { projects } from "@/data/projects";
const fullstack = (tags: string[]) =>
  tags.some((tag) => /fullstack|node|express|php|postgresql/i.test(tag));
const featuredTitles = ["playPipoca", "Almoxarif", "Sistema de Informações APS/AFM", "Rastreio de Encomendas", "Efood"];
const featuredProjects = projects.filter((project) => featuredTitles.includes(project.title));
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6 },
};
const technologies = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Docker", Icon: SiDocker },
  { name: "GitHub", Icon: SiGithub },
  { name: "Vercel", Icon: SiVercel },
  { name: "HTML & CSS", Icon: SiHtml5 },
  { name: "Swagger", Icon: SiSwagger },
  { name: "JWT", Icon: SiJsonwebtokens },
  { name: "MySQL", Icon: SiMysql },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "Railway", Icon: SiRailway },
  { name: "Render", Icon: SiRender },
];
export default function Home() {
  const [filter, setFilter] = useState("Destaques");
  const [activeProject, setActiveProject] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reducedMotion = useReducedMotion();
  const featured = featuredProjects[activeProject];
  const rotating = !paused && !hovered && !focused && !reducedMotion;
  useEffect(() => {
    if (!rotating || featuredProjects.length < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActiveProject((current) => (current + 1) % featuredProjects.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [rotating, activeProject]);
  const changeProject = (index: number) => setActiveProject((index + featuredProjects.length) % featuredProjects.length);
  const selected = projects.filter((p) =>
    filter === "Destaques"
      ? ["playPipoca", "Almoxarif", "Sistema de Informações APS/AFM", "Rastreio de Encomendas", "Efood"].includes(
          p.title,
        )
      : filter === "Fullstack"
        ? fullstack(p.tags)
        : filter === "Front-end"
          ? !fullstack(p.tags)
          : true,
  );
  return (
    <>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-layout wrap">
        <div className="hero-copy">
          <span className="hero-kicker">DESENVOLVEDOR FULLSTACK</span>
          <h1 id="hero-title">Produtos<br />digitais que<br /><em>resolvem.</em></h1>
        </div>
        <div className="hero-introduction">
          <p>Do planejamento ao deploy, desenvolvo aplicações web com foco em problemas reais e soluções completas.</p>
          <span>Paulo Henrique · Salvador, Bahia</span>
          <a className="secondary-action" href="#projetos">Explore meu trabalho <ArrowUpRight size={19} /></a>
        </div>
        </div>
      </section>
      {featured && (
        <section className="featured-case wrap" aria-label="Principais projetos" aria-roledescription="carrossel"
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
          <div className="carousel-toolbar">
            <span className="carousel-label">PROJETOS EM DESTAQUE</span>
            <div className="carousel-controls">
              <span className="carousel-count">{String(activeProject + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}</span>
              {!reducedMotion && <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Reproduzir carrossel" : "Pausar carrossel"}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>}
              <button type="button" onClick={() => changeProject(activeProject - 1)} aria-label="Projeto anterior"><ArrowLeft size={18} /></button>
              <button type="button" onClick={() => changeProject(activeProject + 1)} aria-label="Próximo projeto"><ArrowRight size={18} /></button>
            </div>
          </div>
          <div aria-live={rotating ? "off" : "polite"} aria-atomic="true">
          <motion.div key={featured.title} initial={{ opacity: reducedMotion ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
            role="group" aria-roledescription="slide" aria-label={`${activeProject + 1} de ${featuredProjects.length}: ${featured.title}`}>
          <div className="featured-presentation">
            <div className="featured-copy">
              <p className="eyebrow">PROJETO EM DESTAQUE</p>
              <h2 id="featured-title">{featured.title === "playPipoca" ? "PlayPipoca" : featured.title}</h2>
              <p>{featured.sub}</p>
              <span className="case-type">{featured.tags.slice(0, 3).join(" · ")} · {featured.year}</span>
              <a className="case-visit" href={featured.deploy} target="_blank" rel="noopener noreferrer" aria-label={`Acessar o projeto ${featured.title}`}><ArrowUpRight size={27} /></a>
            </div>
            <a className="featured-image" href={featured.deploy} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${featured.title} em funcionamento`}>
              <img src={featured.img} alt={`Interface de ${featured.title}`} fetchPriority="high" />
              <span>Explorar projeto <ArrowUpRight size={17} /></span>
            </a>
          </div>
          <div className="case-insights">
            <article><Target size={27} strokeWidth={1.4} /><div><h3>Desafio</h3><p>{featured.problem}</p></div></article>
            <article><Layers3 size={27} strokeWidth={1.4} /><div><h3>Solução</h3><p>{featured.solution}</p></div></article>
            <article><Lightbulb size={27} strokeWidth={1.4} /><div><h3>Resultado</h3><p>{featured.result}</p></div></article>
          </div>
          </motion.div>
          </div>
          <div className="carousel-indicators" role="group" aria-label="Escolher projeto em destaque">
            {featuredProjects.map((project, index) => <button key={project.title} type="button" className={index === activeProject ? "active" : ""} aria-label={`Mostrar ${project.title}`} aria-pressed={index === activeProject} onClick={() => changeProject(index)}><span /></button>)}
          </div>
        </section>
      )}
      <section className="projects-section section wrap" id="projetos">
        <div className="section-top">
          <p className="eyebrow">01 / TRABALHOS SELECIONADOS</p>
          <span aria-live="polite">{String(selected.length).padStart(2, "0")} projetos</span>
        </div>
        <h2 className="work-heading">Ideias na prática.<br /><em>Detalhes que fazem diferença.</em></h2>
        <p className="work-description">
          Sites, interfaces e aplicações. Explore cada projeto para conhecer a ideia e a solução.
        </p>
        <div className="filters" role="group" aria-label="Filtrar projetos">
          {["Destaques", "Todos", "Fullstack", "Front-end"].map((item) => (
            <button
              type="button"
              key={item}
              className={filter === item ? "selected" : ""}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="project-list">
          {selected.map((p) => (
            <article className="project" key={p.title}>
              <details>
                <summary>
                  <img
                    className="project-mobile-image"
                    src={p.img}
                    alt={`Interface de ${p.title}`}
                    loading="lazy"
                  />
                  <span className="project-row">
                    <span className="project-title">{p.title}</span>
                    <span className="project-category">
                      {fullstack(p.tags) ? "Sistema fullstack" : "Interface & desenvolvimento"}
                      <small>
                        {p.year}
                        {p.upcoming ? " · Em desenvolvimento" : ""}
                      </small>
                    </span>
                    <span className="project-open">
                      <Plus size={25} strokeWidth={1} />
                    </span>
                  </span>
                </summary>
                <div className="project-detail">
                  <img src={p.img} alt={`Apresentação de ${p.title}`} loading="lazy" />
                  <div>
                    <h3>{p.sub}</h3>
                    <div className="tags">
                      {p.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <dl>
                      <dt>Desafio</dt>
                      <dd>{p.problem}</dd>
                      <dt>Solução</dt>
                      <dd>{p.solution}</dd>
                      <dt>Resultado</dt>
                      <dd>{p.result}</dd>
                    </dl>
                    <div className="project-links">
                      {p.github && p.github !== "#" && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer">
                          Código-fonte <ArrowUpRight size={17} />
                        </a>
                      )}
                      {p.deploy && p.deploy !== "#" && (
                        <a href={p.deploy} target="_blank" rel="noopener noreferrer">
                          Ver projeto <ArrowUpRight size={17} />
                        </a>
                      )}
                      {p.upcoming && <span>Em desenvolvimento</span>}
                    </div>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>
        {filter === "Destaques" && (
          <div className="more-projects">
            <button type="button" className="circle-button" onClick={() => setFilter("Todos")}>
              Mais trabalhos <ArrowUpRight size={19} />
            </button>
          </div>
        )}
      </section>
      <section className="about-section section wrap" id="sobre" aria-labelledby="about-title">
        <motion.div className="about-intro" {...reveal}>
          <div>
            <p className="eyebrow">02 / POR TRÁS DOS PROJETOS</p>
            <h2 id="about-title">Boas ideias merecem uma experiência à altura.</h2>
            <img className="about-portrait" src={portrait} alt="Paulo Henrique, desenvolvedor fullstack" loading="lazy" />
          </div>
          <div className="about-aside">
            <p>
              Sou Paulo Henrique, desenvolvedor em Salvador. Crio sites e aplicações que combinam
              interfaces cuidadosas com soluções para o dia a dia.
            </p>
            <p>
              Este espaço reúne o que gosto de construir: produtos úteis, experiências simples e
              atenção aos detalhes.
            </p>
            <a className="about-link" href="#contato">
              Vamos conversar <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>
      <section
        className="portfolio-technologies section wrap"
        id="stack"
        aria-labelledby="technologies-title"
      >
        <p className="eyebrow">03 / TECNOLOGIAS</p>
        <h2 id="technologies-title">Ferramentas que dão vida aos projetos.</h2>
        <ul className="portfolio-technology-list">
          {technologies.map(({ name, Icon }) => (
            <li key={name}>
              <Icon size={26} aria-hidden="true" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="contact-section" id="contato">
        <motion.div className="wrap contact-inner" {...reveal}>
          <p className="availability">
            <i /> Tem um projeto em mente?
          </p>
          <h2>
            Vamos construir
            <br />
            algo juntos.
          </h2>
          <p className="contact-description">
            Uma ideia, um novo site ou uma aplicação. Vamos conversar sobre o que você quer criar.
          </p>
          <a
            className="contact-button"
            href="https://wa.me/557193411990"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conversar no WhatsApp{" "}
            <span>
              <ArrowUpRight size={23} />
            </span>
          </a>
          <a
            className="email-link"
            href="https://wa.me/557193411990"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: (71) 9341-1990
          </a>
          <a className="email-link" href="mailto:paulohenriqueferreirafranca2@gmail.com">
            paulohenriqueferreirafranca2@gmail.com
          </a>
        </motion.div>
      </section>
    </>
  );
}

