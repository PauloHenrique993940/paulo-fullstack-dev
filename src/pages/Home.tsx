import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Braces, GitBranch, Palette, Rocket, ShieldCheck, Sparkles, Terminal, Webhook } from "lucide-react";
import {
  SiCypress,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import type { IconType } from "react-icons";
import portrait from "@/assets/portrait.jpg";
import Sobre from "@/pages/Sobre";
import Projetos from "@/pages/Projetos";
import Contato from "@/pages/Contato";

const interests = [
  { icon: Palette, title: "Projetar", text: "Organizo ideias em interfaces claras, acessíveis e agradáveis de usar." },
  { icon: Braces, title: "Desenvolver", text: "Transformo decisões de produto em aplicações robustas e responsivas." },
  { icon: Rocket, title: "Evoluir", text: "Refino cada entrega para ganhar performance, clareza e impacto." },
];

const techIcons: Record<string, IconType> = {
  React: SiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Vite: SiVite,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "REST API": Webhook,
  Jest: SiJest,
  Cypress: SiCypress,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  MongoDB: SiMongodb,
  Supabase: SiSupabase,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  "CI/CD": GitBranch,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  PHP: SiPhp,
  Python: SiPython,
  Figma: SiFigma,
};

const techStack = [
  { category: "Frontend", items: ["React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express", "REST API"] },
  { category: "Testes", items: ["Jest", "Cypress"] },
  { category: "Banco de dados", items: ["PostgreSQL", "Prisma", "MongoDB", "Supabase"] },
  { category: "DevOps", items: ["Git", "GitHub", "Docker", "CI/CD", "Vercel", "Netlify"] },
  { category: "Diferencial", items: ["PHP", "Python"] },
  { category: "Design", items: ["Figma"] },
];
const tools = [
  { icon: Terminal, name: "VS Code" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiVercel, name: "Vercel" },
];

const workflowSteps = [
  { n: "01", title: "Entendimento", text: "Levanto o problema, o público e as regras de negócio antes de qualquer linha de código." },
  { n: "02", title: "Planejamento", text: "Defino escopo, arquitetura e prioridades para organizar a entrega em etapas claras." },
  { n: "03", title: "UI/UX", text: "Desenho fluxos e telas com foco em clareza, acessibilidade e consistência visual." },
  { n: "04", title: "Desenvolvimento", text: "Construo front-end e back-end com componentização, tipagem e boas práticas." },
  { n: "05", title: "Testes", text: "Valido regras de negócio e fluxos críticos antes de considerar a entrega pronta." },
  { n: "06", title: "Code Review", text: "Reviso o próprio código em busca de clareza, performance e manutenibilidade." },
  { n: "07", title: "CI/CD", text: "Automatizo lint, testes e build para reduzir erros antes do deploy." },
  { n: "08", title: "Deploy", text: "Publico em ambientes como Vercel e Railway com configuração de variáveis e domínio." },
  { n: "09", title: "Monitoramento", text: "Acompanho logs e comportamento em produção para agir rápido se algo falhar." },
];

const pipelineSteps = ["Git", "Pull Request", "GitHub Actions", "Lint", "Tests", "Build", "Deploy", "Vercel"];
const devopsStack = ["Git", "GitHub", "GitHub Actions", "Docker", "Vercel", "Railway"];

export default function Home() {
  return (
    <>
      <section className="hero2">
        <div className="hero2__inner">
          <motion.div
            className="hero2__copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="hero2__greeting">Olá, eu sou Paulo Henrique</p>
            <h1 className="hero2__title">Full Stack<br />Developer</h1>
            <p className="hero2__lead">Desenvolvo aplicações web full stack — do front-end ao back-end, banco de dados e deploy — com React, Next.js, TypeScript, Node.js e PostgreSQL.</p>
            <div className="hero2__actions">
              <Link to="/#projetos" className="hero-cta-primary">Ver projetos <span>↗</span></Link>
              <Link to="/#contato" className="hero-cta-outline">Entrar em contato <span>↗</span></Link>
              <a href="https://github.com/PauloHenrique993940" target="_blank" rel="noopener noreferrer" className="hero-cta-outline">GitHub <span>↗</span></a>
            </div>
            <p className="hero2__stack">React · Next.js · TypeScript · Node.js · PostgreSQL</p>
          </motion.div>
          <motion.div
            className="hero2__visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="hero2__visual-frame">
              <img src={portrait} alt="Retrato de Paulo Henrique" />
              <div className="hero2__visual-tag">&lt;/&gt; código · arquitetura · UI</div>
            </div>
          </motion.div>
        </div>
        <a href="#sobre" className="hero2__scroll" aria-label="Rolar para a próxima seção">
          <span>Scroll</span> ↓
        </a>
      </section>
      <section className="home-interests">
        <div className="home-section__inner">
          <p className="home-kicker">01 — O que eu faço</p>
          <h2 className="script-heading">Ideia, interface<br />e produto.</h2>
          <div className="home-interests__grid">
            {interests.map(({ icon: Icon, title, text }) => (
              <article key={title} className="home-interest">
                <Icon size={25} strokeWidth={1.6} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="sobre" className="home-about-anchor">
        <Sobre />
      </section>
      <section id="formacao" className="home-education">
        <div className="home-section__inner home-education__layout">
          <div>
            <p className="home-kicker">03 — Formação contínua</p>
            <h2 className="script-heading">Aprender para<br />construir melhor.</h2>
            <p className="home-muted">Uma base acadêmica em evolução, combinada com prática constante e projetos que transformam estudo em produto.</p>
          </div>
          <div className="home-education__list">
            <article className="home-education__item">
              <span>2026 · em andamento</span>
              <h3>Pós-graduação em Front-end</h3>
              <p>Aprofundamento em arquitetura de interfaces, experiência do usuário e práticas modernas de desenvolvimento.</p>
            </article>
            <article className="home-education__item">
              <span>2024 · concluído</span>
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <p>Formação tecnológica que sustenta meu trabalho com aplicações web, dados e soluções para problemas reais.</p>
            </article>
            <article className="home-education__item">
              <span>sempre em prática</span>
              <h3>Projetos como laboratório</h3>
              <p>Estudo novas ferramentas construindo produtos completos com React, Node.js, PostgreSQL e APIs REST.</p>
            </article>
          </div>
        </div>
      </section>
      <section id="stack" className="home-skills">
        <div className="home-section__inner home-skills__grid">
          <div><p className="home-kicker">04 — Stack atual</p><h2 className="script-heading">O que eu<br />conheço.</h2><p className="home-muted">Tecnologias que uso para criar produtos completos, do primeiro componente ao deploy. Ferramentas a serviço do produto — não o contrário.</p></div>
          <div className="home-skills__content">
            <div className="home-tech-grid">
              {techStack.map(({ category, items }) => (
                <div key={category} className={`home-tech-group ${category === "Diferencial" ? "home-tech-group--highlight" : ""}`}>
                  <h4>{category === "Diferencial" && <Sparkles size={13} aria-hidden="true" />} {category}</h4>
                  <div className="home-chip-list">
                    {items.map((skill) => {
                      const Icon = techIcons[skill];
                      return (
                        <span key={skill}>
                          {Icon && <Icon size={13} aria-hidden="true" />} {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="home-tools">{tools.map(({ icon: Icon, name }) => <div key={name}><Icon size={20} aria-hidden="true" /><span>{name}</span></div>)}</div>
          </div>
        </div>
      </section>
      <section id="projetos" className="minimal-projects home-projects mx-auto max-w-350 px-6 py-20 md:px-10 md:py-28">
        <Projetos />
      </section>
      <section id="como-trabalho" className="home-workflow">
        <div className="home-section__inner">
          <p className="home-kicker">06 — Como eu trabalho</p>
          <h2 className="script-heading">Do problema<br />ao produto no ar.</h2>
          <p className="home-muted">Um processo repetível para transformar um pedido em uma aplicação estável, testada e publicada.</p>
          <ol className="home-workflow__list">
            {workflowSteps.map((step) => (
              <li key={step.n} className="home-workflow__item">
                <span className="home-workflow__number">{step.n}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section id="cicd" className="home-cicd">
        <div className="home-section__inner">
          <p className="home-kicker">07 — CI/CD e DevOps</p>
          <h2 className="script-heading">Deploy contínuo,<br />com confiança.</h2>
          <p className="home-muted">Utilizo práticas de CI/CD para automatizar validações, testes, builds e deploy das aplicações, reduzindo erros manuais e acelerando entregas.</p>
          <div className="home-cicd__pipeline" aria-label="Pipeline de CI/CD">
            {pipelineSteps.map((step, index) => (
              <span key={step} className="home-cicd__step">
                <ShieldCheck size={14} aria-hidden="true" />
                {step}
                {index < pipelineSteps.length - 1 && <span className="home-cicd__arrow" aria-hidden="true">→</span>}
              </span>
            ))}
          </div>
          <div className="home-chip-list home-cicd__chips">
            {devopsStack.map((item) => {
              const Icon = techIcons[item];
              return (
                <span key={item}>
                  {Icon && <Icon size={12} aria-hidden="true" />} {item}
                </span>
              );
            })}
          </div>
        </div>
      </section>
      <section id="github" className="home-github">
        <div className="home-section__inner">
          <p className="home-kicker">08 — GitHub</p>
          <div className="github-callout">
            <div>
              <h3>Cada repositório documentado de ponta a ponta</h3>
              <p>READMEs com contexto do problema, arquitetura, tecnologias e instruções de execução — para quem quiser rodar o projeto localmente ou entender as decisões técnicas.</p>
            </div>
            <a href="https://github.com/PauloHenrique993940" target="_blank" rel="noopener noreferrer" className="hero-cta-primary">Ver perfil no GitHub <span>↗</span></a>
          </div>
        </div>
      </section>
      <section id="contato" className="minimal-contact home-contact border-t border-ink/15">
        <Contato />
      </section>
    </>
  );
}

