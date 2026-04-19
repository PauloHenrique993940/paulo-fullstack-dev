import { motion } from "framer-motion";
import portrait from "@/assets/portrait.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project5 from "@/assets/project-5.jpg";
import project4 from "@/assets/project-4.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project3 from "@/assets/project-3.jpg";
import project8 from "@/assets/project-8.jpg";

import { SectionLabel } from "@/components/SectionLabel";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="relative overflow-hidden border-b-[3px] border-ink">
                <div className="pointer-events-none absolute inset-0 grid-noise" />

                <div className="relative mx-auto grid max-w-350 gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-12 lg:gap-6 lg:py-32">
                    {/* meta strip */}
                    <div className="lg:col-span-12">
                        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase">
                            <span className="bg-ink px-2 py-1 text-paper">Edição 01</span>
                            <span>—</span>
                            <span>Portfólio / 2026</span>
                            <span className="ml-auto flex items-center gap-2">
                                <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" />
                                Aberto a oportunidades
                            </span>
                        </div>
                    </div>

                    {/* huge title */}
                    <div className="lg:col-span-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="font-display text-[16vw] leading-[0.85] md:text-[11rem] lg:text-[13rem]"
                        >
                            Cons<span className="text-destructive">-</span>
                            <br />
                            truin<span className="bg-highlight px-2">do</span>
                            <br />
                            a web<span className="blink">.</span>
                        </motion.h1>
                    </div>

                    {/* portrait + intro */}
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
                            <p className="font-mono text-xs uppercase opacity-60">Quem fala</p>
                            <p className="text-lg leading-snug">
                                Olá, sou um <strong className="bg-highlight px-1">desenvolvedor júnior</strong>{" "}
                                em transição de carreira. Aprendendo em público, errando rápido, enviando código
                                todos os dias.
                            </p>
                            <Link
                                to="/projetos"
                                className="brutal-border brutal-shadow brutal-hover inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-sm uppercase text-paper"
                            >
                                Ver projetos →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* bottom info bar */}
                <div className="border-t-[3px] border-ink bg-ink text-paper">
                    <div className="mx-auto grid max-w-350 grid-cols-2 divide-x divide-paper/30 md:grid-cols-4">
                        {[
                            { k: "Foco", v: "Fullstack" },
                            { k: "Stack", v: "TS · React · Node . PostgreSQL . Prisma .  Docker . ApisRest" },
                            { k: "Local", v: "Salvador, BA . Brasil" },
                            { k: "Status", v: "Disponível" },
                        ].map((i) => (
                            <div key={i.k} className="px-6 py-5 md:px-10">
                                <p className="font-mono text-[10px] uppercase opacity-60">{i.k}</p>
                                <p className="mt-1 font-display text-xl">{i.v}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Rest of Home content stub - migrate full later */}
        </>
    );
}
