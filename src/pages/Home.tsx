import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accessibility, Braces, Database, Gauge, GitBranch, Keyboard, Palette, Rocket, Server, ShieldCheck, Terminal, Webhook } from "lucide-react";
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
import Sobre from "@/pages/Sobre";
import Projetos from "@/pages/Projetos";
import Contato from "@/pages/Contato";

const interests = [
  { icon: Palette, title: "Projetar", text: "Organizo ideias em interfaces claras, acessíveis e agradáveis de usar." },
  { icon: Braces, title: "Desenvolver", text: "Transformo decisões de produto em aplicações robustas e responsivas." },
  { icon: Rocket, title: "Evoluir", text: "Refino cada entrega para ganhar performance, clareza e impacto." },
];

const productPrinciples = [
  { icon: Braces, title: "Documento antes do pixel", text: "Começo pelo problema, pelos fluxos e pelos critérios de sucesso. A interface nasce de uma decisão de produto, não de uma tela isolada." },
  { icon: Palette, title: "Sistema antes da exceção", text: "Uso tokens CSS, Tailwind e composição no padrão shadcn/ui para manter tema escuro, estados e componentes consistentes." },
  { icon: Accessibility, title: "Acessibilidade na prática", text: "Trato contraste AA, foco visível, teclado, semântica e prefers-reduced-motion como parte da definição de pronto." },
  { icon: Keyboard, title: "Autonomia até a entrega", text: "Conduzo descoberta, UI/UX, engenharia, validação e deploy com foco em entregar valor sem depender de um designer intermediário." },
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
  { category: "Design System", items: ["shadcn/ui", "Radix UI", "CSS Tokens", "Dark Mode", "WCAG AA"] },
  { category: "Backend", items: ["Node.js", "Express", "REST API"] },
  { category: "Testes", items: ["Jest", "Cypress"] },
  { category: "Banco de dados", items: ["PostgreSQL", "Prisma", "MongoDB", "Supabase"] },
  { category: "DevOps", items: ["Git", "GitHub", "Docker", "CI/CD", "Vercel", "Netlify"] },
  { category: "Complementar", items: ["PHP", "Python"] },
  { category: "Design", items: ["Figma"] },
];

const qualityPractices = [
  { icon: Terminal, title: "Código legível", text: "Prefiro componentes pequenos, nomes claros e decisões que outra pessoa consiga entender e revisar." },
  { icon: ShieldCheck, title: "Qualidade verificável", text: "Transformo critérios de produto em checks objetivos para reduzir regressões antes da entrega." },
  { icon: Gauge, title: "Performance percebida", text: "Cuido de hierarquia visual, carregamento, movimento e feedback para a interface parecer rápida e confiável." },
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
  { n: "03", title: "Documento antes do pixel", text: "Defino fluxos, estados e critérios de sucesso antes de transformar a decisão em interface." },
  { n: "04", title: "Design System", text: "Uso tokens CSS, Tailwind e componentes shadcn/ui/Radix para construir com consistência." },
  { n: "05", title: "Desenvolvimento", text: "Construo com React e TypeScript, mantendo componentes pequenos, tipados e reutilizáveis." },
  { n: "06", title: "PR pequeno", text: "Organizo mudanças revisáveis, com contexto, escopo claro e código pronto para colaboração." },
  { n: "07", title: "Verificação automática", text: "Valido lint, testes, build, contraste, teclado e estados de foco antes do deploy." },
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
            <p className="hero2__greeting">Full Stack Developer <span>/ Salvador, BA</span></p>
            <h1 className="hero2__title">Paulo<br />Henrique</h1>
            <p className="hero2__lead">Construo experiências digitais e sistemas escaláveis, conectando interface, engenharia de software e dados em produtos que resolvem problemas reais.</p>
            <div className="hero2__actions">
              <Button asChild className="hero-cta-primary"><Link to="/#projetos">Ver projetos <span>↗</span></Link></Button>
              <Button asChild variant="outline" className="hero-cta-outline"><Link to="/#contato">Entrar em contato <span>↗</span></Link></Button>
              <Button asChild variant="outline" className="hero-cta-outline"><a href="https://github.com/PauloHenrique993940" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a></Button>
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
              <div className="hero-dashboard" aria-label="Painel de código e métricas de uma aplicação full stack">
                <div className="hero-dashboard__bar"><span className="hero-dashboard__dots"><i /><i /><i /></span><span>paulo.dev / dashboard</span><span className="hero-dashboard__status">● online</span></div>
                <div className="hero-dashboard__body">
                  <aside className="hero-dashboard__sidebar"><span className="hero-dashboard__logo">PH</span><span className="is-active">⌁</span><span>□</span><span>⌘</span><span>◌</span></aside>
                  <div className="hero-dashboard__content">
                    <div className="hero-dashboard__heading"><span>workspace / overview</span><strong>Good morning, Paulo.</strong></div>
                    <div className="hero-dashboard__metrics"><span><small>Deploys</small><strong>24</strong><em>+18%</em></span><span><small>Uptime</small><strong>99.9%</strong><em>stable</em></span></div>
                    <div className="hero-dashboard__code"><span className="code-line"><b>01</b> <i>const</i> <strong>product</strong> = <em>await</em> build({"{"}</span><span className="code-line"><b>02</b> &nbsp; stack: [<mark>React</mark>, <mark>Node.js</mark>],</span><span className="code-line"><b>03</b> &nbsp; database: <mark>PostgreSQL</mark>,</span><span className="code-line"><b>04</b> &nbsp; status: <mark className="code-green">'shipping'</mark></span><span className="code-line"><b>05</b> {"}"}</span></div>
                    <div className="hero-dashboard__chart"><span className="chart-label">SYSTEM PERFORMANCE <b>+32.8%</b></span><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
                  </div>
                </div>
              </div>
              <div className="hero2__visual-tag">&lt;/&gt; código · arquitetura · UI</div>
              <div className="hero-float-card hero-float-card--code"><Terminal size={14} /><span><b>CODE</b><small>React / TypeScript</small></span></div>
              <div className="hero-float-card hero-float-card--database"><Database size={14} /><span><b>DATABASE</b><small>PostgreSQL / Prisma</small></span></div>
              <div className="hero-float-card hero-float-card--performance"><Gauge size={14} /><span><b>98%</b><small>Performance</small></span></div>
              <div className="hero-float-card hero-float-card--api"><Server size={14} /><span><b>API</b><small>Node.js / REST</small></span></div>
            </div>
          </motion.div>
        </div>
        <a href="#sobre" className="hero2__scroll" aria-label="Rolar para a próxima seção">
          <span>Scroll</span> ↓
        </a>
      </section>
      <section id="principios" className="home-principles">
        <div className="home-section__inner">
          <p className="home-kicker">01 — Como penso produto</p>
          <div className="home-principles__heading">
            <div>
              <h2 className="script-heading">Clareza antes<br />da interface.</h2>
              <p className="home-muted">Neste portfólio, React, TypeScript, Tailwind CSS, tokens CSS, Framer Motion e o ecossistema shadcn/ui trabalham juntos para transformar requisitos em experiências úteis, inclusivas e prontas para produção.</p>
            </div>
            <p className="home-principles__proof">produto = contexto + sistema + entrega</p>
          </div>
          <div className="home-principles__grid">
            {productPrinciples.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                className="home-principle"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              >
                <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <section className="home-interests">
        <div className="home-section__inner">
          <p className="home-kicker">01 — O que eu faço</p>
          <h2 className="script-heading">Ideia, interface<br />e produto.</h2>
          <div className="home-interests__grid">
            {interests.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                className="home-interest"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              >
                <Icon size={25} strokeWidth={1.6} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
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
            <p className="home-muted">Minha formação combina base acadêmica, prática constante e projetos que transformam estudo em produto.</p>
          </div>
          <div className="home-education__list">
            <article className="home-education__item">
              <span>2026 · em andamento</span>
              <h3>Pós-graduação em Front-end</h3>
              <p>Aprofundo arquitetura de interfaces, experiência do usuário e práticas modernas para criar produtos digitais mais claros e consistentes.</p>
            </article>
            <article className="home-education__item">
              <span>2024 · concluído</span>
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <p>É a base tecnológica que sustenta meu trabalho com aplicações web, dados e soluções para problemas reais.</p>
            </article>
            <article className="home-education__item">
              <span>sempre em prática</span>
              <h3>Projetos como laboratório</h3>
              <p>Aprendo construindo: experimento novas ferramentas em produtos completos com React, Node.js, PostgreSQL e APIs REST.</p>
            </article>
          </div>
        </div>
      </section>
      <section id="stack" className="home-skills">
        <div className="home-section__inner home-skills__grid">
          <div><p className="home-kicker">04 — Stack atual</p><h2 className="script-heading">O que eu<br />conheço.</h2><p className="home-muted">Tecnologias que uso para criar produtos completos, do primeiro componente ao deploy. Ferramentas a serviço do produto — não o contrário.</p></div>
          <div className="home-skills__content">
            <div className="home-tech-grid">
              {techStack.map(({ category, items }, index) => (
                <motion.div
                  key={category}
                  className="home-tech-group"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
                >
                  <h4>{category}</h4>
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
                </motion.div>
              ))}
            </div>
            <div className="home-tools">{tools.map(({ icon: Icon, name }) => <div key={name}><Icon size={20} aria-hidden="true" /><span>{name}</span></div>)}</div>
          </div>
        </div>
      </section>
      <section id="metodo" className="home-method">
        <div className="home-section__inner">
          <p className="home-kicker">05 — Método e qualidade</p>
          <h2 className="script-heading">Detalhe que<br />sustenta produto.</h2>
          <p className="home-muted">Uma boa interface não depende de efeito. Ela precisa ser compreensível, consistente e confiável em cada estado de uso.</p>
          <div className="home-method__grid">
            {qualityPractices.map(({ icon: Icon, title, text }) => (
              <article key={title} className="home-method__card">
                <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
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
          <p className="home-muted">Um processo repetível para transformar um pedido em uma aplicação estável, testada e publicada. O Design System orienta a implementação e cada PR deixa a decisão técnica fácil de revisar.</p>
          <ol className="home-workflow__list">
            {workflowSteps.map((step, index) => (
              <motion.li
                key={step.n}
                className="home-workflow__item"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
              >
                <span className="home-workflow__number">{step.n}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
      <section id="cicd" className="home-cicd">
        <div className="home-section__inner">
          <p className="home-kicker">07 — CI/CD e DevOps</p>
          <h2 className="script-heading">Deploy contínuo,<br />com confiança.</h2>
          <p className="home-muted">Utilizo práticas de CI/CD para automatizar validações, testes, builds e deploy das aplicações, reduzindo erros manuais e acelerando entregas.</p>
          <div className="home-cicd__intro">
            <div>
              <p className="home-cicd__note"><GitBranch size={15} aria-hidden="true" /> Código que passa por revisão, validação e entrega contínua.</p>
            </div>
            <div className="dev-terminal" aria-label="Terminal animado mostrando um deploy em andamento">
              <div className="dev-terminal__bar"><span><i /><i /><i /></span><b>deploy.sh</b><em>LIVE</em></div>
              <div className="dev-terminal__body">
                <p><strong>$</strong> git push origin main</p>
                <p className="is-muted">Preparing production build...</p>
                <p><span className="is-ok">OK</span> TypeScript check</p>
                <p><span className="is-ok">OK</span> Vite production build</p>
                <p><span className="is-ok">OK</span> Deploying to Vercel</p>
                <p className="is-current"><strong>$</strong> <span className="dev-terminal__cursor" /> shipping experience</p>
              </div>
              <div className="dev-terminal__footer"><span className="dev-gif-card__pulse" /> build / ship / improve</div>
            </div>
          </div>
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
              <p>READMEs com contexto do problema, arquitetura, tokens, tecnologias, critérios de acessibilidade e instruções de execução — para revisar o código ou rodar o produto localmente.</p>
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

