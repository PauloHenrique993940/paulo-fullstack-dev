import { useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Braces,
  Database,
  Terminal,
  Mail,
  MapPin,
  Cloud,
  Gamepad2,
  Zap,
} from "lucide-react";
import { SiGithub as Github } from "react-icons/si";
import { FaLinkedinIn as Linkedin } from "react-icons/fa";
import portrait from "@/assets/minhaFotoClara.jpg";
import { projects } from "@/data/projects";
const fullstack = (tags: string[]) => tags.some((tag) => /node|express|php|postgresql/i.test(tag));
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
      <section className="hero wrap" id="inicio">
        <div className="speed-trails" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="game-clouds" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="game-loop" aria-hidden="true">
          <i />
        </div>
        <div className="speed-runner-track" aria-hidden="true">
          <div className="speed-runner">
            <span className="runner-spikes" />
            <span className="runner-face" />
            <span className="runner-shoe runner-shoe-one" />
            <span className="runner-shoe runner-shoe-two" />
          </div>
          <i className="runner-trail trail-one" />
          <i className="runner-trail trail-two" />
          <i className="runner-trail trail-three" />
        </div>
        <div className="floating-rings" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <div className="hero-copy">
          <span className="availability">
            <i /> Disponível para estágio fullstack
          </span>
          <div className="press-start">
            <span>●</span> PRESS START — PORTFÓLIO 2026
          </div>
          <p className="eyebrow intro">OLÁ, EU SOU PAULO HENRIQUE</p>
          <h1>
            Código em alta
            <br />
            <em>velocidade.</em>
          </h1>
          <p className="hero-description">
            Desenvolvimento fullstack com propósito. Da interface ao banco de dados, transformo o
            que aprendo em aplicações para resolver problemas reais.
          </p>
          <div className="actions">
            <a className="button primary" href="#projetos">
              Start / Ver projetos <ArrowUpRight size={18} />
            </a>
            <a className="button secondary" href="#contato">
              Vamos conversar <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="social">
            <a
              href="https://github.com/PauloHenrique993940"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={17} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/paulohenriquefranca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} /> LinkedIn
            </a>
            <span>
              <MapPin size={15} /> Salvador, BA
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="game-hud" aria-label="Status profissional">
            <span>
              <small>FASE</small> FULLSTACK
            </span>
            <span>
              <small>XP</small> 2026
            </span>
            <span>
              <small>STATUS</small> READY!
            </span>
            <span className="ring-score">
              <small>RINGS</small> 099
            </span>
          </div>
          <div className="sonix-panel" aria-hidden="true">
            <div className="sonix-panel-top">
              <span>SPEED MODE</span>
              <i />
            </div>
            <div className="sonix-wave">
              {Array.from({ length: 18 }, (_, index) => (
                <i key={index} />
              ))}
            </div>
            <div className="sonix-panel-bottom">
              <span>FULLSTACK QUEST</span>
              <strong>01:42</strong>
            </div>
          </div>
          <div className="portrait">
            <img
              src={portrait}
              alt="Paulo Henrique, desenvolvedor fullstack"
              fetchPriority="high"
            />
            <div className="portrait-label">
              PAULO HENRIQUE<span>DESENVOLVEDOR EM FORMAÇÃO</span>
            </div>
          </div>
          <div className="code-note">
            <Braces size={27} />
            <div>
              <strong>Aprender. Construir. Evoluir.</strong>
              <span>Um projeto de cada vez.</span>
            </div>
          </div>
          <p className="visual-caption">CURIOSIDADE COMO PONTO DE PARTIDA.</p>
          <div className="level-badge" aria-hidden="true">
            <Gamepad2 size={17} /> PLAYER 01
          </div>
        </div>
        <div className="hero-bottom">
          <span>PLAYER 01 · INTERFACES CLARAS · LÓGICA BEM CONSTRUÍDA</span>
          <a href="#projetos">
            Conheça meu trabalho <ArrowDown size={15} />
          </a>
        </div>
      </section>
      <div className="tech-strip">
        <div className="wrap">
          <span>MINHA STACK PRINCIPAL</span>
          {["React", "TypeScript", "Node.js", "Prisma ORM", "CI/CD", "Vercel"].map((t) => (
            <strong key={t}>{t}</strong>
          ))}
        </div>
      </div>
      <section className="section wrap" id="projetos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <Zap size={13} /> 01 / SELEÇÃO DE FASES
            </p>
            <h2>
              Escolha uma fase.
              <br />
              Veja a <em>evolução.</em>
            </h2>
          </div>
          <p>
            Cada projeto é uma oportunidade de conectar interface, lógica e dados. Conheça algumas
            das soluções que construí.
          </p>
        </div>
        <div className="toolbar">
          <div className="filters" role="group" aria-label="Filtrar projetos">
            {["Destaques", "Todos", "Fullstack", "Front-end"].map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={filter === t}
                className={filter === t ? "selected" : ""}
                onClick={() => setFilter(t)}
              >
                {t}
              </button>
            ))}
          </div>
          <span className="ring-counter" aria-live="polite">
            <i aria-hidden="true" /> × {selected.length.toString().padStart(2, "0")} FASES
          </span>
        </div>
        <div className="project-grid">
          {selected.map((p, index) => (
            <article className="project" key={p.title}>
              <div className="project-image">
                <img src={p.img} alt={`Interface de ${p.title}`} loading="lazy" />
                <span>
                  {p.upcoming
                    ? "EM DESENVOLVIMENTO"
                    : fullstack(p.tags)
                      ? "FULLSTACK"
                      : "FRONT-END"}
                </span>
              </div>
              <div className="project-content">
                <div className="project-title">
                  <h3>{p.title}</h3>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p>{p.sub}</p>
                <div className="tags">
                  {p.tags.slice(0, 4).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <details>
                  <summary>
                    Sobre o desenvolvimento <span>+</span>
                  </summary>
                  <dl>
                    <dt>Desafio</dt>
                    <dd>{p.problem}</dd>
                    <dt>Solução</dt>
                    <dd>{p.solution}</dd>
                    <dt>Resultado</dt>
                    <dd>{p.result}</dd>
                  </dl>
                </details>
                <div className="project-links">
                  {p.github && p.github !== "#" && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Código de ${p.title}`}
                    >
                      <Github size={15} /> Código-fonte
                    </a>
                  )}
                  {p.deploy && p.deploy !== "#" && (
                    <a
                      href={p.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Demonstração de ${p.title}`}
                    >
                      Ver projeto <ArrowUpRight size={16} />
                    </a>
                  )}
                  {p.upcoming && <span>Em breve</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
        {filter === "Destaques" && (
          <button className="button secondary all-projects" onClick={() => setFilter("Todos")}>
            Ver todos os projetos <ArrowUpRight size={17} />
          </button>
        )}
      </section>
      <section className="about-section" id="sobre">
        <div className="wrap about-grid" id="historia">
          <div>
            <p className="eyebrow">
              <Zap size={13} /> 02 / HISTÓRIA DO PLAYER
            </p>
            <h2>
              Além do código,
              <br />
              <em>quem eu sou.</em>
            </h2>
            <p className="about-lead">
              Sou Paulo Henrique, de Salvador. Minha trajetória une tecnologia, organização e a
              vontade de construir algo útil.
            </p>
            <p>
              Sou formado em Análise e Desenvolvimento de Sistemas e curso uma pós-graduação em
              Desenvolvimento Front-end na Anhanguera. Nos meus projetos, exploro aplicações
              completas com React, Node.js e bancos de dados relacionais.
            </p>
            <p>
              Minha experiência na Secretaria da Segurança Pública da Bahia trouxe responsabilidade,
              atenção aos detalhes e uma visão prática de processos. Busco um estágio fullstack para
              aprender com uma equipe, colaborar e evoluir em projetos reais.
            </p>
            <a className="text-link" href="#contato">
              Vamos construir o próximo passo <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="journey">
            <p className="eyebrow">UMA TRAJETÓRIA EM CONSTRUÇÃO</p>
            {[
              {
                year: "2026 · EM ANDAMENTO",
                title: "Pós em Desenvolvimento Front-end",
                text: "Anhanguera · Interfaces, arquitetura e experiência do usuário.",
              },
              {
                year: "2024 · CONCLUÍDO",
                title: "Análise e Desenvolvimento de Sistemas",
                text: "Formação tecnológica e prática na construção de aplicações web.",
              },
              {
                year: "2020 — ATUAL",
                title: "Experiência em operação",
                text: "Secretaria da Segurança Pública da Bahia · Organização, processos e resolução de problemas.",
              },
            ].map((t) => (
              <article key={t.year}>
                <span>{t.year}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </article>
            ))}
            <div className="learning-note">
              ↗{" "}
              <span>
                O próximo capítulo?
                <br />
                <strong>Aprender e contribuir com a sua equipe.</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section wrap" id="stack">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <Zap size={13} /> 03 / POWER-UPS & HABILIDADES
            </p>
            <h2>
              Uma base para
              <br />
              <em>ir mais longe.</em>
            </h2>
          </div>
          <p>
            Tecnologias que estudo e aplico nos meus projetos. Sempre com espaço para aprender algo
            novo.
          </p>
        </div>
        <div className="skill-grid">
          {[
            {
              icon: Braces,
              title: "Front-end",
              text: "Da ideia à experiência na tela.",
              tags: ["React", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS"],
            },
            {
              icon: Terminal,
              title: "Back-end",
              text: "A lógica por trás de cada interação.",
              tags: ["Node.js", "Express", "PHP", "APIs REST", "JWT"],
            },
            {
              icon: Database,
              title: "Dados & ferramentas",
              text: "Uma base organizada para evoluir.",
              tags: ["PostgreSQL", "Neon", "Prisma ORM", "MySQL", "Git & GitHub", "Docker"],
            },
            {
              icon: Cloud,
              title: "Deploy & CI/CD",
              text: "Do código à aplicação publicada.",
              tags: ["CI/CD", "GitHub Actions", "Vercel", "Railway", "Render"],
            },
          ].map(({ icon: Icon, title, text, tags }) => (
            <article className="skill-card" key={title}>
              <Icon size={26} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="tags">
                {tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-section" id="contato">
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow">
              <Zap size={13} /> 04 / PRÓXIMO CHECKPOINT
            </p>
            <h2>
              Uma oportunidade.
              <br />
              <em>Muitas possibilidades.</em>
            </h2>
            <p>
              Busco um estágio em desenvolvimento fullstack para transformar dedicação em
              experiência. Vamos conversar sobre como posso contribuir com a sua equipe?
            </p>
            <a
              className="button contact-button"
              href="mailto:paulohenriqueferreirafranca2@gmail.com"
            >
              Entre em contato <Mail size={18} />
            </a>
          </div>
          <div className="contact-card">
            <span className="availability">
              <i /> Aberto a oportunidades
            </span>
            <h3>
              O próximo passo começa
              <br />
              com uma conversa.
            </h3>
            <span className="contact-label">MEU E-MAIL</span>
            <a className="email-link" href="mailto:paulohenriqueferreirafranca2@gmail.com">
              paulohenriqueferreirafranca2@gmail.com
            </a>
            <div className="contact-social">
              <a
                href="https://www.linkedin.com/in/paulohenriquefranca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowUpRight size={17} />
              </a>
              <a
                href="https://github.com/PauloHenrique993940"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
