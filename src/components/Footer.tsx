import { motion } from "framer-motion";

const socialLinks = [
    { label: "GitHub", href: "https://github.com/PauloHenrique993940" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/paulohenriquefranca/" },
    { label: "Portfólio", href: "https://paulo-fullstack-dev.vercel.app/" },
];

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer border-t border-border bg-paper text-ink">
            <div className="mx-auto grid max-w-350 gap-8 px-6 py-10 md:grid-cols-3 md:px-10">
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
                        className="contact-email mt-2 inline-block font-display underline decoration-highlight decoration-2 underline-offset-4 hover:text-highlight"
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
                                className="border border-border px-3 py-1 hover:bg-highlight hover:text-white transition-colors"
                            >
                                {link.label} ↗
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
            <div className="border-t border-border px-6 py-4 text-center font-mono text-xs uppercase opacity-70 md:px-10">
                © {year} — Desenvolvedor Front-end | React, TypeScript, acessibilidade e interfaces responsivas.
            </div>
        </footer>
    );
}
