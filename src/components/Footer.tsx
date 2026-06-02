import { motion } from "framer-motion";

const socialLinks = [
    { label: "GitHub", href: "https://github.com/PauloHenrique993940" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/paulo-henrique-ferreira-fran%C3%A7a-751256262/" },
    { label: "Portfólio", href: "https://paulo-fullstack-dev.vercel.app/" },
];

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t-[3px] border-ink bg-ink text-paper">
            <div className="overflow-hidden border-b border-paper/20 py-6">
                <motion.div
                    className="marquee-track flex whitespace-nowrap font-display text-5xl uppercase md:text-7xl"
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {Array.from({ length: 6 }).map((_, i) => (
                        <span key={i} className="mx-8 flex items-center gap-8">
                            Disponível para oportunidades
                            <span className="text-highlight">★</span>
                        </span>
                    ))}
                </motion.div>
            </div>
            <div className="mx-auto grid max-w-350 gap-8 px-6 py-12 md:grid-cols-3 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 36, scale: 0.96, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.85 }}
                >
                    <p className="font-mono text-xs uppercase opacity-60">Localização</p>
                    <p className="mt-2 font-display text-2xl">Salvador, BA</p>
                    <p className="font-mono text-sm opacity-70">UTC −03:00</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 36, scale: 0.96, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.85, delay: 0.06 }}
                >
                    <p className="font-mono text-xs uppercase opacity-60">Contato</p>
                    <a
                        href="mailto:paulohenriqueferreirafranca2@gmail.com"
                        className="mt-2 inline-block font-display text-1xl underline decoration-highlight decoration-4 underline-offset-4 hover:text-highlight"
                    >
                        paulohenriqueferreirafranca2@gmail.com
                    </a>
                    <a
                        href="tel:+5571993061316"
                        className="mt-3 block font-mono text-sm uppercase opacity-80 hover:text-highlight"
                    >
                        +55 71 99306-1316
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 36, scale: 0.96, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.85, delay: 0.12 }}
                >
                    <p className="font-mono text-xs uppercase opacity-60">Sociais</p>
                    <div className="mt-2 flex flex-wrap gap-3 font-mono text-sm">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-paper/40 px-3 py-1 hover:bg-highlight hover:text-ink"
                            >
                                {link.label} ↗
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
            <div className="border-t border-paper/20 px-6 py-4 text-center font-mono text-xs uppercase opacity-60 md:px-10">
                © {year} — Desenvolvedor Full Stack Júnior | React.js, Node.js, TypeScript, PostgreSQL e APIs REST.
            </div>
        </footer>
    );
}
