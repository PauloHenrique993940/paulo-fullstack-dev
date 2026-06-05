import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import financeProImage from "@/assets/financePro.png";
import { SectionLabel } from "@/components/SectionLabel";

const proofPoints = [
  {
    title: "Quem eu sou",
    text: "Paulo Henrique Ferreira França, desenvolvedor full stack júnior com base prática em React.js, Node.js, TypeScript e PostgreSQL.",
  },
  {
    title: "O que eu faço",
    text: "Construo interfaces responsivas em React e APIs RESTful com Node.js e Express, conectando front-end, regra de negócio e banco de dados.",
  },
  {
    title: "Valor que eu entrego",
    text: "Entrego aplicações com foco em usabilidade, organização de código, escalabilidade e contexto real de operação.",
  },
];

const marketSignals = [
  "React.js, TypeScript e Tailwind para interfaces mobile first",
  "Node.js, Express e APIs REST integrando front-end e back-end",
  "PostgreSQL, Prisma e Supabase na camada de dados",
  "Deploy em produção com foco em UX, performance e manutenção",
];

const feedbacks = [
  {
    name: "Keven Matheus",
    role: "FullStack Developer | Artificial Intelligence & Automation Specialist",
    context: "Estudava com Paulo Henrique na mesma instituição",
    text: [
      "Paulo é um estudante extremamente comprometido, responsável e dedicado, com grande facilidade de aprendizado e trabalho em equipe.",
      "Também se destaca pelo domínio técnico, organização e determinação em evoluir na área de tecnologia.",
    ],
  },
  {
    name: "Eliane Pereira Tavares",
    role: "Tecnologia | Cibersegurança | Engenharia de Software | Experiência com Cliente",
    context: "Trabalhava com Paulo Henrique na mesma equipe",
    text: [
      "Paulo está em transição para tecnologia com um diferencial competitivo claro: inteligência emocional e espírito colaborativo.",
      "Compartilha conhecimento com generosidade, incentiva quem está ao redor e demonstra comunicação clara, proatividade e senso de comunidade.",
    ],
  },
  {
    name: "Renan Carlo Siebert",
    role: "Desenvolvedor Front-End | HTML | CSS | JavaScript | React",
    context: "Estudava com Paulo Henrique na mesma instituição",
    text: [
      "Paulo se tornou uma referência no meu desenvolvimento profissional, contribuindo com sugestões valiosas de design, organização e apresentação de projetos.",
      "Sua experiência prática e vontade de compartilhar conhecimento fazem diferença para quem está evoluindo na área de tecnologia.",
    ],
  },
  {
    name: "Rafaela de Sousa",
    role: "Desenvolvedora Front-end | HTML | CSS | JavaScript | GitHub",
    context: "Acompanhou o trabalho de Paulo Henrique",
    text: [
      "Destaco a forte atuação em Front-End, especialmente com React.js e JavaScript, com atenção a performance e organização de código.",
      "Além do domínio técnico, Paulo demonstra foco em UX, clareza visual e postura colaborativa para entregar projetos bem construídos.",
    ],
  },
];

const revealUp = {
  hidden: { opacity: 0, y: 56, scale: 0.94, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 120, damping: 18, mass: 0.8 },
  },
};

const revealSideLeft = {
  hidden: { opacity: 0, x: -56, scale: 0.95, filter: "blur(8px)" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 120, damping: 18, mass: 0.8 },
  },
};

const revealSideRight = {
  hidden: { opacity: 0, x: 56, scale: 0.95, filter: "blur(8px)" },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 120, damping: 18, mass: 0.8 },
  },
};

const staggerGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b-[3px] border-ink">
        <div className="pointer-events-none absolute inset-0 grid-noise" />

        <div className="relative mx-auto grid max-w-350 gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-6 lg:py-32">
          <div className="lg:col-span-12">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase">
              <span className="bg-ink px-2 py-1 text-paper">Edição 01</span>
              <span>—</span>
              <span>Portfólio profissional / 2026</span>
              <span className="ml-auto flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" />
                Aberto a oportunidades
              </span>
            </div>
          </div>

          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-[16vw] leading-[0.85] md:text-[10rem] lg:text-[11rem]"
            >
              Full<span className="text-destructive">-</span>
              <br />
              stack
              <br />
              <span className="bg-highlight px-2">júnior</span>
              <span className="blink">.</span>
            </motion.h1>
            <div className="mt-8 max-w-4xl space-y-5">
              <p className="text-2xl leading-tight md:text-4xl">
                Desenvolvedor Full Stack Júnior focado em aplicações web modernas, escaláveis e
                orientadas à experiência do usuário.
              </p>
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Atuo com React.js, TypeScript, Node.js, Express, PostgreSQL, Prisma e Supabase para
                criar soluções com interface responsiva, APIs RESTful e estrutura pronta para
                evolução.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/projetos"
                  className="brutal-border brutal-shadow brutal-hover inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-sm uppercase text-paper"
                >
                  Ver projetos em destaque →
                </Link>
                <a
                  href="https://github.com/PauloHenrique993940"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-border brutal-shadow-sm brutal-hover inline-flex items-center gap-2 bg-paper px-5 py-3 font-mono text-sm uppercase"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/paulohenriquefranca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-border brutal-shadow-sm brutal-hover inline-flex items-center gap-2 bg-highlight px-5 py-3 font-mono text-sm uppercase"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-4">
            <div className="brutal-border brutal-shadow-lg overflow-hidden bg-secondary">
              <img
                src={portrait}
                alt="Retrato editorial do desenvolvedor"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase opacity-60">Posicionamento</p>
              <p className="text-lg leading-snug">
                Minha proposta é clara: transformar aprendizado técnico em software utilizável, com
                autenticação, integração entre camadas, experiência responsiva e organização de
                código alinhada a boas práticas.
              </p>
              <div className="brutal-border bg-paper p-4">
                <p className="font-mono text-xs uppercase opacity-60">Objetivo profissional</p>
                <p className="mt-2 text-base leading-relaxed">
                  Atuar como Desenvolvedor Full Stack Júnior com foco em React.js, Node.js,
                  TypeScript e PostgreSQL, contribuindo com soluções eficientes, escaláveis e bem
                  estruturadas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-[3px] border-ink bg-ink text-paper">
          <div className="mx-auto grid max-w-350 grid-cols-2 divide-x divide-paper/30 md:grid-cols-4">
            {[
              { k: "Foco", v: "React.js · Node.js · TypeScript" },
              { k: "Dados", v: "PostgreSQL · Prisma · Supabase" },
              { k: "Entrega", v: "APIs REST · UX responsiva · Deploy" },
              { k: "Status", v: "Remoto, híbrido ou presencial" },
            ].map((i) => (
              <div key={i.k} className="px-6 py-5 md:px-10">
                <p className="font-mono text-[10px] uppercase opacity-60">{i.k}</p>
                <p className="mt-1 font-display text-xl">{i.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink py-20 md:py-24">
        <div className="mx-auto max-w-350 px-6 md:px-10">
          <SectionLabel index="01">Leitura rápida</SectionLabel>
          <motion.div
            className="grid gap-6 lg:grid-cols-3"
            variants={staggerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {proofPoints.map((item) => (
              <motion.article
                key={item.title}
                className="brutal-border brutal-shadow bg-paper p-6"
                variants={revealUp}
              >
                <p className="font-mono text-xs uppercase opacity-60">{item.title}</p>
                <p className="mt-4 text-lg leading-relaxed">{item.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-secondary py-20 md:py-24">
        <motion.div
          className="mx-auto grid max-w-350 gap-10 px-6 md:px-10 lg:grid-cols-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="lg:col-span-5" variants={revealSideLeft}>
            <SectionLabel index="02">Projeto principal</SectionLabel>
            <h2 className="font-display text-5xl uppercase md:text-7xl">
              Almoxarif<span className="text-destructive">.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              Plataforma de gestão de almoxarifado criada para um cenário real de logística e
              suprimentos, com autenticação, controle de materiais, rastreabilidade e integração
              completa entre front-end e back-end.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://gestao-almoxarifado-frontend.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-border brutal-shadow-sm brutal-hover bg-ink px-5 py-3 font-mono text-sm uppercase text-paper"
              >
                Ver deploy ↗
              </a>
              <a
                href="https://github.com/PauloHenrique993940/GestaoAlmoxarifadoFrontend.git"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-border brutal-shadow-sm brutal-hover bg-paper px-5 py-3 font-mono text-sm uppercase"
              >
                Ver código ↗
              </a>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7" variants={revealSideRight}>
            <div className="brutal-border brutal-shadow-lg overflow-hidden bg-paper">
              <img
                src={project1}
                alt="Projeto Almoxarif"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <motion.div
              className="mt-6 grid gap-4 md:grid-cols-2"
              variants={staggerGrid}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {[
                {
                  label: "Problema",
                  text: "Centralizar estoque, inventário e movimentações para reduzir retrabalho e melhorar a visibilidade operacional.",
                },
                {
                  label: "Solução",
                  text: "Aplicação full stack com interface responsiva, APIs RESTful, autenticação e fluxo centralizado de consulta e atualização.",
                },
                {
                  label: "Tecnologias",
                  text: "React.js, TypeScript, Node.js, Express, PostgreSQL, Prisma e Supabase.",
                },
                {
                  label: "Resultado",
                  text: "Case aderente ao meu currículo, mostrando arquitetura full stack, modelagem relacional e foco em produtividade operacional.",
                },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="brutal-border bg-paper p-5"
                  variants={revealUp}
                >
                  <p className="font-mono text-xs uppercase opacity-60">{item.label}</p>
                  <p className="mt-3 text-base leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-b-[3px] border-ink py-20 md:py-24">
        <div className="mx-auto max-w-350 px-6 md:px-10">
          <SectionLabel index="03">Sinais de maturidade</SectionLabel>
          <motion.div
            className="grid gap-4 md:grid-cols-2"
            variants={staggerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {marketSignals.map((item, index) => (
              <motion.div
                key={item}
                className="brutal-border brutal-hover bg-paper p-5"
                variants={revealUp}
              >
                <p className="font-mono text-xs uppercase opacity-60">0{index + 1}</p>
                <p className="mt-3 text-lg leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-350 px-6 md:px-10">
          <SectionLabel index="04">Feedback profissional</SectionLabel>
          <motion.div
            className="grid gap-6 lg:grid-cols-2"
            variants={staggerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {feedbacks.map((feedback, index) => (
              <motion.article
                key={feedback.name}
                className="brutal-border brutal-shadow bg-paper p-6"
                variants={revealUp}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-xs uppercase opacity-60">Depoimento 0{index + 1}</p>
                  <span className="h-2 w-2 rounded-full bg-green-600" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-2xl leading-tight">{feedback.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feedback.role}
                </p>
                <p className="mt-1 font-mono text-xs uppercase opacity-60">{feedback.context}</p>

                <div className="mt-5 space-y-3 text-base leading-relaxed">
                  {feedback.text.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-350 gap-10 px-6 md:px-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            variants={revealSideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionLabel index="05">Outro case forte</SectionLabel>
            <h2 className="font-display text-5xl uppercase md:text-7xl">FinancePro.</h2>
            <p className="mt-6 text-lg leading-relaxed">
              Sistema SaaS para controle financeiro de pequenos negócios com arquitetura MVC em PHP,
              autenticação por sessão/JWT, dashboard operacional, CRUDs e relatórios gerenciais.
            </p>
            <p className="mt-4 max-w-3xl font-mono text-sm uppercase">
              PHP 8+ · MVC · PostgreSQL · JWT · Bootstrap 5 · Chart.js · Dompdf · PhpSpreadsheet
            </p>
            <div className="mt-6">
              <a
                href="https://github.com/PauloHenrique993940/Sistema-Saas--de-Controle-Financeiro-para-Pequenos-Negocios.git"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-border brutal-shadow-sm brutal-hover inline-flex items-center gap-2 bg-paper px-5 py-3 font-mono text-sm uppercase"
              >
                Ver código ↗
              </a>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-5"
            variants={revealSideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="brutal-border brutal-shadow-lg overflow-hidden bg-paper">
              <img
                src={financeProImage}
                alt="Projeto FinancePro"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
