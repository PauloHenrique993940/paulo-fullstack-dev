import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Globe2, Plus } from "lucide-react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSwagger,
  SiJsonwebtokens,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiGithub,
  SiDocker,
  SiGithubactions,
  SiVercel,
  SiRailway,
  SiRender,
} from "react-icons/si";
import { Braces, FlaskConical } from "lucide-react";
import type { IconType } from "react-icons";
import portrait from "@/assets/minhaFotoClara.jpg";
import { projects } from "@/data/projects";
const fullstack = (tags: string[]) =>
  tags.some((tag) => /fullstack|node|express|php|postgresql/i.test(tag));
const technologyIcons: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "HTML & CSS": SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Swagger: SiSwagger,
  JWT: SiJsonwebtokens,
  PostgreSQL: SiPostgresql,
  "Prisma ORM": SiPrisma,
  MySQL: SiMysql,
  "Git & GitHub": SiGithub,
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  Vercel: SiVercel,
  Railway: SiRailway,
  Render: SiRender,
};
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.6 },
};
export default function Home() {
  const [filter, setFilter] = useState("Destaques");
  const selected = projects.filter((p) =>
    filter === "Destaques"
      ? ["Almoxarif", "Clarity Finanças", "Syntax Wear"].includes(p.title)
      : filter === "Fullstack"
        ? fullstack(p.tags)
        : filter === "Front-end"
          ? !fullstack(p.tags)
          : true,
  );
  return (
    <>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-photo">
          <img src={portrait} alt="Paulo Henrique, desenvolvedor fullstack" fetchPriority="high" />
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-location">
          <span>
            Localizado em
            <br />
            Salvador,
            <br />
            Bahia, Brasil
          </span>
          <Globe2 size={32} strokeWidth={1} />
        </div>
        <div className="hero-role">
          <ArrowDownRight size={40} strokeWidth={1} />
          <h1 id="hero-title">
            Desenvolvedor
            <br />
            web full stack
          </h1>
          <p>
            Da ideia ? interface.
            <br />
            Da l?gica ? solu??o.
          </p>
        </div>
        <div className="name-marquee" aria-hidden="true">
          <div className="name-track">
            <span>Paulo Henrique ? Paulo Henrique ?&nbsp;</span>
            <span>Paulo Henrique ? Paulo Henrique ?&nbsp;</span>
          </div>
        </div>
        <div className="hero-bottom">
          <span className="availability">
            <i /> Dispon?vel para est?gio fullstack
          </span>
          <a href="#sobre">
            Explore o portf?lio <ArrowDownRight size={20} />
          </a>
        </div>
      </section>
      <section className="about-section section wrap" id="sobre">
        <motion.div className="about-intro" {...reveal}>
          <div>
            <p className="eyebrow">01 / SOBRE MIM</p>
            <h2>
              Transformando aprendizado em soluções digitais. Com curiosidade, propósito e atenção a
              cada detalhe.
            </h2>
          </div>
          <div className="about-aside">
            <p>
              Sou Paulo Henrique, desenvolvedor em formação, de Salvador. Construo aplicações que
              conectam interfaces claras, lógica bem estruturada e dados.
            </p>
            <a className="circle-button" href="#historia">
              Minha história <ArrowUpRight size={19} />
            </a>
          </div>
        </motion.div>
        <motion.div className="dev-editor" {...reveal}>
          <div className="dev-editor-bar">
            <span className="dev-editor-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>developer.ts</span>
            <span className="dev-editor-language">TypeScript</span>
          </div>
          <pre aria-label="Perfil de Paulo Henrique em formato de código">
            <code>
              <span className="dev-comment">// Aprender. Construir. Evoluir.</span>
              {"\n"}
              <span className="dev-keyword">const</span>{" "}
              <span className="dev-variable">developer</span>
              {" = "}
              <span className="dev-bracket">{"{"}</span>
              {"\n  "}
              <span className="dev-property">name</span>
              {": "}
              <span className="dev-string">"Paulo Henrique"</span>
              {",\n"}
              {"  "}
              <span className="dev-property">role</span>
              {": "}
              <span className="dev-string">"Fullstack Developer"</span>
              {",\n"}
              {"  "}
              <span className="dev-property">stack</span>
              {": "}
              <span className="dev-bracket">[</span>
              <span className="dev-string">"React"</span>
              {", "}
              <span className="dev-string">"Next.js"</span>
              {", "}
              <span className="dev-string">"Node.js"</span>
              <span className="dev-bracket">]</span>
              {",\n  "}
              <span className="dev-property">mindset</span>
              {": "}
              <span className="dev-string">"Um projeto de cada vez"</span>
              {"\n"}
              <span className="dev-bracket">{"}"}</span>
              {";"}
            </code>
          </pre>
          <div className="dev-editor-status">
            <span>
              <Braces size={14} aria-hidden="true" /> Código com propósito
            </span>
            <span>UTF-8</span>
          </div>
        </motion.div>
        <div className="about-history" id="historia">
          <div>
            <p className="eyebrow">UM POUCO DA MINHA TRAJETÓRIA</p>
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas e curso uma pós-graduação em
              Desenvolvimento Front-end na Anhanguera. Exploro aplicações completas com React,
              Node.js e bancos de dados relacionais.
            </p>
            <p>
              Minha experiência na Secretaria da Segurança Pública da Bahia trouxe responsabilidade,
              organização e uma visão prática de processos. Busco um estágio fullstack para aprender
              com uma equipe e contribuir em projetos reais.
            </p>
          </div>
          <div className="journey">
            {[
              {
                year: "2026 · EM ANDAMENTO",
                title: "Pós em Desenvolvimento Front-end",
                text: "Anhanguera",
              },
              {
                year: "2024 · CONCLUÍDO",
                title: "Análise e Desenvolvimento de Sistemas",
                text: "Formação tecnológica",
              },
              {
                year: "2020 — ATUAL",
                title: "Secretaria da Segurança Pública da Bahia",
                text: "Organização, processos e operação",
              },
            ].map((item) => (
              <article key={item.year}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="projects-section section wrap" id="projetos">
        <div className="section-top">
          <h2 className="eyebrow">02 / TRABALHOS SELECIONADOS</h2>
          <span aria-live="polite">{String(selected.length).padStart(2, "0")} projetos</span>
        </div>
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
                  <span className="project-hover-image" aria-hidden="true">
                    <img src={p.img} alt="" loading="lazy" />
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
      <div className="project-gallery" aria-label="Galeria de projetos">
        {projects.slice(0, 8).map((p, index) => (
          <a
            href="#projetos"
            className={`gallery-item gallery-tone-${index % 4}`}
            key={p.title}
            aria-label={`Explorar projetos como ${p.title}`}
          >
            <img src={p.img} alt={p.title} loading="lazy" />
          </a>
        ))}
      </div>
      <section className="stack-section section wrap" id="stack">
        <motion.div {...reveal}>
          <p className="eyebrow">03 / TECNOLOGIAS</p>
          <div className="stack-heading">
            <h2>
              As ferramentas.
              <br />
              As possibilidades.
            </h2>
            <p>
              Tecnologias que estudo e aplico nos meus projetos, com espaço para continuar
              aprendendo.
            </p>
          </div>
          <div className="skill-grid">
            {[
              {
                title: "Front-end",
                tags: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "HTML & CSS",
                  "Tailwind CSS",
                ],
              },
              {
                title: "Back-end",
                tags: ["Node.js", "Express", "APIs REST", "JWT", "Swagger", "Testes"],
              },
              {
                title: "Dados & ferramentas",
                tags: ["PostgreSQL", "Prisma ORM", "MySQL", "Git & GitHub", "Docker"],
              },
              { title: "Deploy & CI/CD", tags: ["GitHub Actions", "Vercel", "Railway", "Render"] },
            ].map((skill, index) => (
              <article key={skill.title}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{skill.title}</h3>
                <ul className="technology-stack" aria-label={`Stack de ${skill.title}`}>
                  {skill.tags.map((tag) => {
                    const Icon = technologyIcons[tag] ?? (tag === "Testes" ? FlaskConical : Braces);
                    return (
                      <li key={tag}>
                        <Icon size={18} aria-hidden="true" />
                        <span>{tag}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="contact-section" id="contato">
        <motion.div className="wrap contact-inner" {...reveal}>
          <p className="availability">
            <i /> Aberto a oportunidades
          </p>
          <h2>
            Vamos construir
            <br />
            algo juntos.
          </h2>
          <p className="contact-description">
            Uma oportunidade para aprender, colaborar e transformar ideias em aplicações.
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
