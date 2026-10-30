import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight, Mail, X, ExternalLink, Flame, Swords, Sparkles } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiNodedotjs, SiExpress, SiPostgresql,
  SiPrisma, SiDocker, SiGithub, SiVercel, SiHtml5, SiSwagger, SiJsonwebtokens, SiMysql, SiGithubactions,
  SiRailway, SiRender,
} from "react-icons/si";
import { FaLinkedin as SiLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import portrait from "@/assets/paulo-fighter.png";
import { projects } from "@/data/projects";
import { profile, timeline, courses, skills, deliveries } from "@/data/profile";
import { goTo } from "@/components/Nav";
import { Tilt } from "@/components/Tilt";

type Project = (typeof projects)[number];

const EMAIL = "paulohenriqueferreirafranca2@gmail.com";
const WHATSAPP = "557193411990";
const ease = [0.22, 1, 0.36, 1] as const;

const technologies = [
  { name: "React", Icon: SiReact }, { name: "Next.js", Icon: SiNextdotjs }, { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript }, { name: "Tailwind", Icon: SiTailwindcss }, { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express", Icon: SiExpress }, { name: "PostgreSQL", Icon: SiPostgresql }, { name: "Prisma", Icon: SiPrisma },
  { name: "Docker", Icon: SiDocker }, { name: "GitHub", Icon: SiGithub }, { name: "Vercel", Icon: SiVercel },
  { name: "HTML & CSS", Icon: SiHtml5 }, { name: "Swagger", Icon: SiSwagger }, { name: "JWT", Icon: SiJsonwebtokens },
  { name: "MySQL", Icon: SiMysql }, { name: "Actions", Icon: SiGithubactions }, { name: "Railway", Icon: SiRailway },
  { name: "Render", Icon: SiRender },
];

const featuredTitles = ["Almoxarifado 3D", "Vanguard", "playPipoca", "Almoxarif", "Sistema de Informações APS/AFM", "Rastreio de Encomendas", "Efood"];
const isFullstack = (tags: string[]) => tags.some((t) => /fullstack|node|express|php|postgresql/i.test(t));
const filters = ["Destaques", "Full Stack", "Front-end", "Todos"] as const;
type Filter = (typeof filters)[number];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 40, rotateX: 16, transformPerspective: 1200 },
  whileInView: { opacity: 1, y: 0, rotateX: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 1, ease, delay },
});

function Lines({ children, delay = 0 }: { children: string[]; delay?: number }) {
  return (
    <>
      {children.map((line, i) => (
        <span className="mask" key={line}>
          <motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, ease, delay: delay + i * 0.12 }}>
            {line}
          </motion.span>
        </span>
      ))}
    </>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 1600);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

function Img({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`img ${loaded ? "is-loaded" : ""}`}>
      <img src={src} alt={alt} loading="lazy" onLoad={() => setLoaded(true)} />
    </div>
  );
}

function SectionTitle({ index, kicker, children }: { index: string; kicker: string; children: React.ReactNode }) {
  return (
    <motion.div className="section-title" {...reveal()}>
      <span className="kicker"><b>{index}</b> {kicker}</span>
      <h2>{children}</h2>
    </motion.div>
  );
}

function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const d = ready ? 0.1 : 1.4;

  return (
    <section className="hero" id="inicio" ref={ref} aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span className="kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: d, duration: 1 }}>
            <i className="dot" /> PLAYER 1 ONLINE
          </motion.span>
          <h1 id="hero-title">
            <Lines delay={d + 0.1}>{["Paulo Henrique", "desenvolvedor", "Full Stack"]}</Lines>
            <span className="mask"><motion.em initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 1, ease, delay: d + 0.46 }}>PRONTO PARA O PRÓXIMO ROUND</motion.em></span>
          </h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: d + 0.7 }}>
            {profile.objective}
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: d + 0.85 }}>
            <button type="button" className="btn btn-solid" onClick={() => goTo("projetos")}>Ver minhas lutas <ArrowRight size={16} /></button>
            <button type="button" className="btn btn-ghost" onClick={() => goTo("contato")}>Desafiar</button>
          </motion.div>
        </div>

        <Tilt className="photo-tilt" max={8}>
          <motion.figure className="hero-photo" style={{ y }} initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }} animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1.3, ease, delay: d + 0.2 }}>
            <img src={portrait} alt="Retrato de Paulo Henrique" />
            <figcaption>
              <strong>Paulo Henrique</strong>
              <span>PLAYER 1 | FULL STACK | SALVADOR, BA</span>
            </figcaption>
          </motion.figure>
        </Tilt>
      </div>

      <motion.ul className="container stats" {...reveal()}>
        <li><strong><Counter to={projects.length} /></strong><span>Lutas vencidas</span></li>
        <li><strong><Counter to={technologies.length} /></strong><span>Golpes no arsenal</span></li>
        <li><strong><Counter to={6} suffix="+" /></strong><span>Anos de experiência em operações</span></li>
        <li><strong><Counter to={courses.length} /></strong><span>Cursos concluidos</span></li>
      </motion.ul>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} onClick={onClose}>
      <motion.article
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        initial={{ opacity: 0, y: 60, scale: 0.96, rotateX: 18, transformPerspective: 1400 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        exit={{ opacity: 0, y: 40, scale: 0.98, rotateX: -8 }}
        transition={{ duration: 0.6, ease }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Fechar"><X size={18} /></button>
        <Img src={project.img} alt={`Prévia do projeto ${project.title}`} />
        <div className="modal-body">
          <span className="kicker">{project.year} · {project.sub}</span>
          <h3 id="modal-title">{project.title}</h3>
          <dl>
            <div><dt>Desafio</dt><dd>{project.problem}</dd></div>
            <div><dt>Solução</dt><dd>{project.solution}</dd></div>
            <div><dt>Resultado</dt><dd>{project.result}</dd></div>
          </dl>
          <ul className="tags">{project.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          <div className="hero-actions">
            {project.deploy && project.deploy !== "#" && (
              <a className="btn btn-solid" href={project.deploy} target="_blank" rel="noopener noreferrer">Ver online <ExternalLink size={15} /></a>
            )}
            {project.github && (
              <a className="btn btn-ghost" href={project.github} target="_blank" rel="noopener noreferrer"><SiGithub size={15} /> Código</a>
            )}
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

function Projects() {
  const [filter, setFilter] = useState<Filter>("Destaques");
  const [open, setOpen] = useState<Project | null>(null);
  const list = projects.filter((p) =>
    filter === "Destaques" ? featuredTitles.includes(p.title)
      : filter === "Full Stack" ? isFullstack(p.tags)
      : filter === "Front-end" ? !isFullstack(p.tags)
      : true,
  );

  return (
    <section className="section" id="projetos" aria-labelledby="projetos-title">
      <div className="container">
        <SectionTitle index="01" kicker="SELECT YOUR OPPONENT"><span id="projetos-title">Lutas <em>vencidas</em></span></SectionTitle>
        <p className="section-intro">Cada projeto trouxe um novo desafio. Escolha um card para ver o golpe final e os detalhes da solução.</p>
        <motion.div className="filters" role="tablist" aria-label="Filtrar projetos" {...reveal(0.1)}>
          {filters.map((f) => (
            <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)} className={filter === f ? "is-on" : ""}>
              {filter === f && <motion.span layoutId="filter-pill" className="pill" transition={{ duration: 0.45, ease }} />}
              <span>{f}</span>
            </button>
          ))}
          <span className="count">{String(list.length).padStart(2, "0")} projetos</span>
        </motion.div>

        <motion.ul className="grid" layout>
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.li key={p.title} layout initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.6, ease, delay: Math.min(i, 5) * 0.05 }}>
                <Tilt className="card-tilt" max={7}>
                  <button type="button" className="card" onClick={() => setOpen(p)} aria-label={`Abrir detalhes de ${p.title}`}>
                    <Img src={p.img} alt="" />
                    <div className="card-body">
                      <span className="card-meta"><Flame size={13} /> Chefe {p.n} | {p.year}</span>
                      <h3>{p.title}</h3>
                      <p>{p.sub}</p>
                      <span className="card-arrow"><ArrowUpRight size={18} /></span>
                    </div>
                  </button>
                </Tilt>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
      <AnimatePresence>{open && <ProjectModal project={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}

function Stack() {
  const n = technologies.length;
  return (
    <section className="section" id="stack" aria-labelledby="stack-title">
      <div className="container">
        <SectionTitle index="02" kicker="Habilidades"><span id="stack-title">Meu arsenal <em>de tecnologia</em></span></SectionTitle>
      </div>
      <div className="carousel3d" role="img" aria-label={`Tecnologias: ${technologies.map((t) => t.name).join(", ")}`}>
        <div className="carousel3d-ring">
          {technologies.map(({ name, Icon }, i) => (
            <div key={name} className="carousel3d-item" style={{ transform: `rotateY(${(360 / n) * i}deg) translateZ(var(--radius))` }}>
              <Icon size={34} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="container skills">
        {skills.map((s, i) => (
          <motion.div key={s.title} className="skill" {...reveal(i * 0.08)}>
            <h3>{s.title}</h3>
            <ul>{s.tags.map((t) => <li key={t}><Swords size={13} /> {t}</li>)}</ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="sobre" aria-labelledby="sobre-title">
      <div className="container">
        <SectionTitle index="03" kicker="História"><span id="sobre-title">Minha torre de <em>batalhas</em></span></SectionTitle>
        <div className="about">
          <motion.div {...reveal()}>
            <p className="about-lead">{profile.summary}</p>
            <ul className="deliveries">
              {deliveries.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </motion.div>
          <ol className="timeline">
            {timeline.map((t, i) => (
              <motion.li key={t.title} {...reveal(i * 0.1)}>
                <span className="kicker">{t.year}</span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
        <motion.div className="courses" {...reveal()}>
          <h3>Cursos e certificações</h3>
          <ul>
            {courses.map((c) => (
              <li key={c.title}><span>{c.year}</span><strong>{c.title}</strong><em>{c.institution}</em></li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };
  return (
    <section className="section contact" id="contato" aria-labelledby="contato-title">
      <div className="container">
        <motion.span className="kicker" {...reveal()}><b>04</b> Contato</motion.span>
        <motion.h2 id="contato-title" {...reveal(0.1)}>Vamos criar algo <em>extraordinário</em> juntos?</motion.h2>
        <motion.div className="contact-actions" {...reveal(0.2)}>
          <a className="btn btn-solid btn-lg" href={`mailto:${EMAIL}`}><Mail size={18} /> Fatality: enviar e-mail</a>
          <a className="btn btn-whatsapp btn-lg" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" aria-label="Chamar Paulo no WhatsApp">
            <FaWhatsapp size={20} /> WhatsApp: 71 93411-990 <Flame size={17} className="whatsapp-flame" aria-hidden="true" />
          </a>
          <button type="button" className="btn btn-ghost btn-lg" onClick={copy}>{copied ? "E-mail copiado ✓" : EMAIL}</button>
        </motion.div>
        <motion.div className="socials" {...reveal(0.3)}>
          <a href="https://github.com/PauloHenrique993940" target="_blank" rel="noopener noreferrer"><SiGithub size={18} /> GitHub</a>
          <a href="https://www.linkedin.com/in/paulohenriquefranca/" target="_blank" rel="noopener noreferrer"><SiLinkedin size={18} /> LinkedIn</a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home({ ready }: { ready: boolean }) {
  return (
    <>
      <Hero ready={ready} />
      <Projects />
      <Stack />
      <About />
      <Contact />
    </>
  );
}
