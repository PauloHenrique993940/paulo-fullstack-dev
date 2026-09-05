
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const links = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" },
    { to: "/projetos", label: "Projetos" },
    { to: "/contato", label: "Contato" },
] as const;

export function Nav() {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    return (
        <header className="site-header sticky top-0 z-50">
            <div className="site-header__inner mx-auto flex max-w-350 items-center justify-between px-6 py-4 md:px-10">
                <Link to="/" className="group flex items-center gap-3">
                    <span className="brand-mark brand-wordmark">
                        PAULO<span>.</span>
                    </span>
                </Link>

                {/* Menu Desktop */}
                <nav className="site-nav hidden items-center gap-1 md:flex">
                    {links.map((l) => {
                        const isActive = location.pathname === l.to;
                        return (
                            <motion.div key={l.to} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                <Link
                                    key={l.to}
                                    to={l.to}
                                    className={`site-nav__link px-4 py-2 font-mono text-sm uppercase transition-colors ${isActive ? "is-active" : ""}`}
                                >
                                    {l.label}
                                </Link>
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Botão Hamburger Mobile */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                    aria-label="Abrir menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
                    <span className={`block h-0.5 w-6 bg-ink my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
                    <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </button>

                {/* Botão de contato Desktop */}
                <div className="header-socials hidden items-center gap-5 md:flex">
                    <a href="https://www.linkedin.com/in/paulohenriquefranca/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
                    <a href="https://github.com/PauloHenrique993940" target="_blank" rel="noopener noreferrer" aria-label="GitHub">gh</a>
                    <a href="mailto:paulohenriqueferreirafranca2@gmail.com" aria-label="Enviar e-mail">@</a>
                </div>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, y: -14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="site-nav--mobile flex flex-col gap-2 px-6 pb-4 md:hidden"
                    >
                        {links.map((l, index) => {
                            const isActive = location.pathname === l.to;
                            return (
                                <motion.div
                                    key={l.to}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.18, delay: index * 0.04 }}
                                >
                                    <Link
                                        to={l.to}
                                        onClick={() => setOpen(false)}
                                        className={`site-nav__link px-4 py-2 font-mono text-sm uppercase transition-colors ${isActive ? "is-active" : ""}`}
                                    >
                                        {l.label}
                                    </Link>
                                </motion.div>
                            );
                        })}
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.18, delay: links.length * 0.04 }}
                        >
                            <Link
                                to="/contato"
                                onClick={() => setOpen(false)}
                                className="header-cta inline-flex"
                            >
                                Vamos conversar →
                            </Link>
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
