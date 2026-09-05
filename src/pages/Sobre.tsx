import { SectionLabel } from "@/components/SectionLabel";
import portrait from "@/assets/portrait.jpg";
import { motion } from "framer-motion";

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
                        Minha
                        <br />
                        <span className="bg-highlight px-3">história</span>
                        <span className="text-destructive">.</span>
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
                        <SectionLabel index="01">Minha história</SectionLabel>
                        <p className="text-2xl leading-snug md:text-3xl">
                            Minha trajetória combina formação em tecnologia, experiência profissional em operação e a construção contínua de produtos web.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            Comecei minha formação em Análise e Desenvolvimento de Sistemas e, desde então, venho transformando problemas reais em aplicações úteis. Hoje me especializo em desenvolvimento Full Stack e continuo minha pós-graduação em Front-end.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="border-b-[3px] border-ink bg-ink py-20 text-paper">
                <div className="mx-auto max-w-350 px-6 md:px-10">
                    <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase">
                        <span className="bg-paper px-2 py-1 text-ink">02</span>
                        <span className="h-0.5 flex-1 bg-paper" />
                        <span>Minha trajetória</span>
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

        </>
    );
}
