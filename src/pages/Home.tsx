import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, Braces, GitBranch, Layers3, MousePointer2, Terminal, X } from "lucide-react";
import { SiCss, SiDocker, SiExpress, SiFigma, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/minhaFotoClara.jpg";
import Sobre from "@/pages/Sobre";
import Projetos from "@/pages/Projetos";

const stackIcons = [
  { label: "React", icon: SiReact },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "PostgreSQL", icon: SiPostgresql },
];

const stackDetails = [
  { label: "React", icon: SiReact },
  { label: "TypeScript", icon: SiTypescript },
  { label: "JavaScript", icon: SiJavascript },
  { label: "Tailwind CSS", icon: SiTailwindcss },
  { label: "HTML", icon: SiHtml5 },
  { label: "CSS", icon: SiCss },
  { label: "Vite", icon: SiVite },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Express", icon: SiExpress },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "MySQL", icon: SiMysql },
  { label: "MongoDB", icon: SiMongodb },
  { label: "Prisma", icon: SiPrisma },
  { label: "Git", icon: SiGit },
  { label: "CI/CD", icon: GitBranch },
  { label: "Docker", icon: SiDocker },
  { label: "Figma", icon: SiFigma },
  { label: "Claude Code", icon: Terminal },
];

const objectives = [
  {
    icon: Layers3,
    title: "Produtos claros",
    text: "Interfaces objetivas para resolver problemas reais sem adicionar complexidade desnecessária.",
    details: "Organizo a informação por prioridade, reduzo decisões desnecessárias e crio caminhos visuais que ajudam a pessoa a chegar ao resultado com confiança.",
    signals: ["Hierarquia visual", "Fluxos objetivos", "Decisões simples"],
  },
  {
    icon: MousePointer2,
    title: "Experiência direta",
    text: "Fluxos responsivos, acessíveis e fáceis de entender desde o primeiro clique.",
    details: "Penso na experiência em diferentes telas, entradas e necessidades: navegação previsível, feedback claro, foco visível e componentes que funcionam para mais pessoas.",
    signals: ["Responsive first", "Acessibilidade", "Feedback claro"],
  },
  {
    icon: Braces,
    title: "Código sustentável",
    text: "Componentes tipados, arquitetura organizada e uma base pronta para continuar crescendo.",
    details: "Construo componentes tipados, responsabilidades bem separadas e padrões consistentes para que novas features possam nascer sem fragilizar o que já funciona.",
    signals: ["Componentes tipados", "Arquitetura modular", "Evolução segura"],
  },
];

export default function Home() {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [activeObjective, setActiveObjective] = useState<(typeof objectives)[number] | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);

  return (
    <>
      <section ref={heroRef} className="hero2 relative">
        <div className="hero2__inner">
          <div className="hero2__serial" aria-hidden="true">01</div>
          <motion.div
            className="hero2__copy"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="hero2__greeting hero2__reveal hero2__reveal--1">PAULO HENRIQUE · 2026</p>
            <h1 className="hero2__title hero2__reveal hero2__reveal--2">Criativo<br /><em>digital</em></h1>
            <p className="hero2__role hero2__reveal hero2__reveal--3">Desenvolvedor <span>/</span> Full Stack</p>
            <p className="hero2__lead hero2__reveal hero2__reveal--4">Interfaces sensíveis ao detalhe, código que sustenta ideias e produtos que fazem sentido.</p>
            <div className="hero2__actions hero2__reveal hero2__reveal--5">
              <Button asChild className="hero-cta-primary"><Link to="/#projetos">Ver projetos <span>↗</span></Link></Button>
              <Button asChild variant="outline" className="hero-cta-outline"><Link to="/#historia">Minha história <span>↘</span></Link></Button>
            </div>
            <div className="hero2__stack hero2__reveal hero2__reveal--6" aria-label="Principais tecnologias">
              {stackIcons.map(({ label, icon: Icon }) => (
                <motion.span key={label} title={label} aria-label={label} whileHover={{ y: -5, scale: 1.12 }} transition={{ type: "spring", stiffness: 350, damping: 18 }}><Icon aria-hidden="true" /></motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hero2__visual hero2__reveal hero2__reveal--3"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="hero2__visual-frame cursor-pointer"
              onClick={() => setIsPhotoOpen(true)}
              title="Clique para ver a foto em tela cheia"
            >
              <img src={heroBg} alt="Foto de Paulo Henrique" />
              <div className="hero2__visual-tag">
                Salvador, BA · Brasil
              </div>
            </div>
          </motion.div>
        </div>

        <p className="hero2__side-note" aria-hidden="true">SENSÍVEL AO FRONTEND <span>↓</span></p>

        <a href="#objetivo" className="hero2__scroll" aria-label="Rolar para o objetivo">
          <span>Scroll</span><ArrowDown size={14} aria-hidden="true" />
        </a>

        <AnimatePresence>
          {isPhotoOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPhotoOpen(false)}
            >
              <motion.div
                className="relative flex flex-col items-center justify-center max-h-[95vh] max-w-[95vw]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="mb-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 font-mono text-xs text-white uppercase backdrop-blur-sm transition-all hover:border-white hover:bg-black"
                  onClick={() => setIsPhotoOpen(false)}
                >
                  <X size={16} aria-hidden="true" />
                  <span>Fechar</span>
                </button>
                <img
                  src={heroBg}
                  alt="Foto completa de Paulo Henrique"
                  className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain shadow-2xl border border-white/10"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section id="objetivo" className="home-objective">
        <div className="home-section__inner">
          <p className="home-kicker">01 — Objetivo</p>
          <motion.div className="home-objective__heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
            <h2 className="script-heading">Ideia que vira<br />produto.</h2>
            <p className="home-muted">Desenvolvedor Full Stack focado em transformar necessidades em experiências digitais úteis, bonitas e fáceis de usar.</p>
          </motion.div>
          <div className="home-objective__grid">
            {objectives.map(({ icon: Icon, title, text, details }, index) => (
              <motion.article
                key={title}
                className="home-objective__card"
                tabIndex={0}
                role="button"
                aria-haspopup="dialog"
                aria-label={`${title}: ${text}`}
                onClick={() => setActiveObjective(objectives[index])}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveObjective(objectives[index]);
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="home-objective__card-screen" aria-hidden="true">
                  <span className="home-objective__card-screen-number">0{index + 1} / PRINCÍPIO</span>
                  <strong>{title}</strong>
                  <span>{details}</span>
                  <i />
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {activeObjective && (
            <motion.div
              className="objective-dialog-backdrop"
              role="presentation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveObjective(null)}
            >
              <motion.div
                className="objective-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="objective-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="objective-dialog__topline">
                  <span>PRINCÍPIO / 0{objectives.indexOf(activeObjective) + 1}</span>
                  <button type="button" onClick={() => setActiveObjective(null)} aria-label="Fechar explicação">
                    <X size={18} aria-hidden="true" />
                  </button>
                </div>
                <h3 id="objective-dialog-title">{activeObjective.title}</h3>
                {activeObjective.title === "Código sustentável" ? (
                  <div className="objective-code-preview" aria-label="Exemplo visual de código sendo criado">
                    <div className="objective-code-preview__bar">
                      <span><i /><i /><i /></span>
                      <em>principles.tsx</em>
                      <b>● criando</b>
                    </div>
                    <div className="objective-code-preview__body">
                      <p><small>01</small><span><mark>type</mark> Principle = {'{'}</span></p>
                      <p><small>02</small><span>  name: <strong>"sustainable"</strong>;</span></p>
                      <p><small>03</small><span>  typed: <strong>true</strong>;</span></p>
                      <p><small>04</small><span>  scalable: <strong>true</strong>;</span></p>
                      <p><small>05</small><span>{'}'};</span></p>
                      <p><small>06</small><span><mark>export</mark> <mark>const</mark> <strong>architecture</strong> = <i>build</i>(Principle);</span></p>
                      <p><small>07</small><span className="is-current">▋</span></p>
                    </div>
                    <div className="objective-code-preview__status"><span>✓ sem erros</span><span>componentes tipados</span><span>build 100%</span></div>
                  </div>
                ) : (
                  <p>{activeObjective.details}</p>
                )}
                <div className="objective-dialog__signals">
                  {activeObjective.signals.map((signal) => <span key={signal}>{signal}</span>)}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section id="historia" className="home-history">
        <Sobre />
      </section>

      <section id="stack" className="home-stack">
        <div className="home-section__inner">
          <p className="home-kicker">03 — Stack</p>
          <div className="home-stack__heading">
            <h2 className="script-heading">Ferramentas<br />do dia a dia.</h2>
            <p className="home-muted">Tecnologias que uso para transformar ideia em produto, da interface ao deploy.</p>
          </div>
          <div className="home-stack__grid" aria-label="Tecnologias utilizadas no desenvolvimento">
            {stackDetails.map(({ label, icon: Icon }, index) => (
              <motion.div
                key={label}
                className="home-stack__item"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
              >
                <Icon size={26} aria-hidden="true" />
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="home-projects">
        <Projetos />
      </section>
    </>
  );
}
