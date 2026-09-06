
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
    { to: "/#sobre", label: "Sobre" },
    { to: "/#stack", label: "Stack" },
    { to: "/#projetos", label: "Projetos" },
    { to: "/#experiencia", label: "Experiência" },
    { to: "/#github", label: "GitHub" },
    { to: "/#contato", label: "Contato" },
] as const;

export function Nav() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname, location.hash]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

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

                {/* Botão de contato Desktop */}
                <div className="header-socials hidden items-center gap-5 md:flex">
                    <a href="https://www.linkedin.com/in/paulohenriquefranca/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
                    <a href="https://github.com/PauloHenrique993940" target="_blank" rel="noopener noreferrer" aria-label="GitHub">gh</a>
                    <a href="mailto:paulohenriqueferreirafranca2@gmail.com" aria-label="Enviar e-mail">@</a>
                </div>

                {/* Botão do menu Mobile */}
                <button
                    type="button"
                    className="site-nav__toggle md:hidden"
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((open) => !open)}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        className="site-nav-mobile md:hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <ul className="site-nav-mobile__list">
                            {links.map((l) => {
                                const isActive = location.pathname === l.to;
                                return (
                                    <li key={l.to}>
                                        <Link
                                            to={l.to}
                                            className={`site-nav-mobile__link ${isActive ? "is-active" : ""}`}
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="site-nav-mobile__socials">
                            <a href="https://www.linkedin.com/in/paulohenriquefranca/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/PauloHenrique993940" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="mailto:paulohenriqueferreirafranca2@gmail.com">E-mail</a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
