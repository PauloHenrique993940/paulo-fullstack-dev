import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, Braces, GitBranch, Layers3, MousePointer2, Terminal } from "lucide-react";
import { SiCss, SiDocker, SiExpress, SiFigma, SiGit, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.jpg";
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
  { icon: Layers3, title: "Produtos claros", text: "Interfaces objetivas para resolver problemas reais sem adicionar complexidade desnecessária." },
  { icon: MousePointer2, title: "Experiência direta", text: "Fluxos responsivos, acessíveis e fáceis de entender desde o primeiro clique." },
  { icon: Braces, title: "Código sustentável", text: "Componentes tipados, arquitetura organizada e uma base pronta para continuar crescendo." },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);

  return (
    <>
      <section ref={heroRef} className="hero2 hero2--editorial">
        <motion.img className="hero2__background" style={{ y: imageY, scale: imageScale }} src={portrait} alt="Retrato autoral de Paulo Henrique" />
        <motion.div className="hero2__overlay" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} />
        <div className="hero2__inner">
          <motion.div
            className="hero2__copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="hero2__greeting hero2__reveal hero2__reveal--1">Portfólio · Salvador, BA</p>
            <h1 className="hero2__title hero2__reveal hero2__reveal--2">Paulo Henrique</h1>
            <p className="hero2__role hero2__reveal hero2__reveal--3">Desenvolvedor <span>/</span> Full Stack</p>
            <p className="hero2__lead hero2__reveal hero2__reveal--4">Construo produtos digitais claros, responsivos e funcionais.</p>
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
        </div>
        <a href="#objetivo" className="hero2__scroll" aria-label="Rolar para o objetivo">
          <span>Scroll</span><ArrowDown size={14} aria-hidden="true" />
        </a>
      </section>

      <section id="objetivo" className="home-objective">
        <div className="home-section__inner">
          <p className="home-kicker">01 — Objetivo</p>
          <motion.div className="home-objective__heading" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
            <h2 className="script-heading">Ideia que vira<br />produto.</h2>
            <p className="home-muted">Desenvolvedor Full Stack focado em transformar necessidades em experiências digitais úteis, bonitas e fáceis de usar.</p>
          </motion.div>
          <div className="home-objective__grid">
            {objectives.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                className="home-objective__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
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
