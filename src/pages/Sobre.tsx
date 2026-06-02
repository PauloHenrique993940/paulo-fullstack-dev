import { SectionLabel } from "@/components/SectionLabel";
import portrait from "@/assets/portrait.jpg";
import { motion } from "framer-motion";

const skills = {
    "Front-end": ["React.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "React Hook Form", "TanStack Router", "Zod"],
    "Back-end": ["Node.js", "Express.js", "APIs RESTful", "Autenticação"],
    "Dados & Cloud": ["PostgreSQL", "Prisma ORM", "Supabase"],
    "Ferramentas": ["Git", "GitHub", "Vercel", "Mobile First", "Responsividade", "UX/UI"],
};

const timeline = [
    {
        year: "2026",
        title: "Pós em Desenvolvimento Front-end",
        desc: "Especialização em andamento na Anhanguera, aprofundando arquitetura de interfaces, experiência do usuário e práticas modernas de front-end.",
    },
    {
        year: "2024",
        title: "ADS concluído e consolidação prática",
        desc: "Conclusão do tecnólogo em Análise e Desenvolvimento de Sistemas e construção de projetos completos com React, Node.js, PostgreSQL e Prisma.",
    },
    {
        year: "2020 - atual",
        title: "Experiência profissional em operação",
        desc: "Atuação na Secretaria da Segurança Pública da Bahia, fortalecendo organização de processos, análise de dados, rastreabilidade e visão operacional aplicada à tecnologia.",
    },
];

const workStyle = [
    "Desenvolvo interfaces responsivas com foco em clareza, usabilidade e experiência mobile first.",
    "Estruturo APIs e camada de dados pensando em escalabilidade, manutenção e integração limpa entre front-end e back-end.",
    "Uso Git, GitHub e organização de código para sustentar evolução contínua e colaboração.",
    "Prefiro projetos com contexto operacional real, conectando tecnologia, processo e necessidade de negócio.",
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

const staggerGrid = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export default function Sobre() {
    return (
        <>
            <section className="border-b-[3px] border-ink py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="mx-auto max-w-350 px-6 md:px-10"
                >
                    <p className="font-mono text-xs uppercase">Capítulo 02 / Sobre</p>
                    <h1 className="mt-3 font-display text-[14vw] leading-[0.85] md:text-[9rem]">
                        Perfil
                        <span className="text-destructive">/</span>
                        <br />
                        <span className="bg-highlight px-3">profissional</span>
                        <span className="text-destructive">,</span>
                        direto.
                    </h1>
                </motion.div>
            </section>

            <section className="border-b-[3px] border-ink py-20">
                <div className="mx-auto grid max-w-350 gap-10 px-6 md:px-10 lg:grid-cols-12">
                    <motion.div
                        className="lg:col-span-5"
                        variants={revealUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <div className="brutal-border brutal-shadow-lg overflow-hidden">
                            <img
                                src={portrait}
                                alt="Retrato editorial"
                                width={1024}
                                height={1024}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        className="space-y-6 lg:col-span-7"
                        variants={revealUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.25 }}
                    >
                        <SectionLabel index="01">Resumo executivo</SectionLabel>
                        <p className="text-2xl leading-snug md:text-3xl">
                            Desenvolvedor Full Stack com formação em ADS, pós-graduação em andamento e atuação prática na construção de aplicações web modernas, escaláveis e orientadas à experiência do usuário.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Tenho domínio prático do ecossistema JavaScript e TypeScript, com interfaces em React.js, APIs RESTful em Node.js e Express, modelagem com PostgreSQL e Prisma, além de integração com Supabase e deploy em produção.
                        </p>
                        <motion.div
                            className="grid grid-cols-3 gap-4 pt-4"
                            variants={staggerGrid}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {[
                                { n: "3", l: "Formações acadêmicas" },
                                { n: "2024", l: "ADS concluído" },
                                { n: "2", l: "Cases aderentes ao currículo" },
                            ].map((s) => (
                                <motion.div key={s.l} className="brutal-border bg-paper p-4" variants={revealUp}>
                                    <p className="font-display text-4xl">{s.n}</p>
                                    <p className="font-mono text-xs uppercase opacity-60">{s.l}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="border-b-[3px] border-ink bg-ink py-20 text-paper">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase">
                        <span className="bg-paper px-2 py-1 text-ink">02</span>
                        <span className="h-0.5 flex-1 bg-paper" />
                        <span>Linha do tempo</span>
                    </div>
                    <motion.div
                        className="space-y-6"
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {timeline.map((t, index) => (
                            <motion.div
                                key={t.year}
                                className="grid items-start gap-4 border-b border-paper/30 pb-6 md:grid-cols-12"
                                variants={revealUp}
                                transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.8, delay: index * 0.04 }}
                            >
                                <p className="font-display text-5xl text-highlight md:col-span-2">{t.year}</p>
                                <h3 className="font-display text-3xl uppercase md:col-span-4">{t.title}</h3>
                                <p className="text-base text-paper/80 md:col-span-6">{t.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="border-b-[3px] border-ink py-20 md:py-24">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <SectionLabel index="03">Como eu atuo</SectionLabel>
                    <motion.div
                        className="grid gap-4 md:grid-cols-2"
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {workStyle.map((item, index) => (
                            <motion.div
                                key={item}
                                className="brutal-border brutal-hover bg-paper p-5"
                                variants={revealUp}
                                transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.8, delay: index * 0.03 }}
                            >
                                <p className="font-mono text-xs uppercase opacity-60">0{index + 1}</p>
                                <p className="mt-3 text-lg leading-relaxed">{item}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <SectionLabel index="04">Stack & Skills</SectionLabel>
                    <h2 className="mb-12 font-display text-5xl uppercase md:text-7xl">
                        Competências<span className="text-destructive">.</span>
                    </h2>
                    <motion.div
                        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                        variants={staggerGrid}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {Object.entries(skills).map(([cat, items], index) => (
                            <motion.div
                                key={cat}
                                className="brutal-border brutal-shadow brutal-hover bg-paper p-6"
                                variants={revealUp}
                                transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.8, delay: index * 0.03 }}
                            >
                                <p className="font-mono text-xs uppercase opacity-60">/{cat.toLowerCase()}</p>
                                <h3 className="mt-2 font-display text-2xl">{cat}</h3>
                                <ul className="mt-4 space-y-2">
                                    {items.map((s) => (
                                        <li key={s} className="flex items-center gap-2 font-mono text-sm">
                                            <span className="text-destructive">▸</span>
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </>
    );
}
