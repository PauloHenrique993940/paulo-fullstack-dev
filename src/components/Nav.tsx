
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
        <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
            <div className="mx-auto flex max-w-350 items-center justify-between px-6 py-4 md:px-10">
                <Link to="/" className="group flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center bg-ink text-paper font-display text-lg">
                        PH
                    </div>
                    <span className="font-display text-sm uppercase tracking-tight">
                        Paulo Henrique<span className="text-destructive">/</span> Full Stack Júnior
                    </span>
                </Link>

                {/* Menu Desktop */}
                <nav className="hidden items-center gap-1 md:flex">
                    {links.map((l) => {
                        const isActive = location.pathname === l.to;
                        return (
                            <motion.div key={l.to} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                <Link
                                    key={l.to}
                                    to={l.to}
                                    className={`px-4 py-2 font-mono text-sm uppercase transition-colors hover:bg-ink hover:text-paper ${isActive ? "bg-ink text-paper" : ""}`}
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
                <Link
                    to="/contato"
                    className="brutal-border brutal-shadow-sm brutal-hover bg-highlight px-4 py-2 font-mono text-xs uppercase md:text-sm hidden md:inline"
                >
                    Vamos conversar →
                </Link>
            </div>

            {/* Menu Mobile */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, y: -14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="flex flex-col gap-2 px-6 pb-4 md:hidden"
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
                                        className={`px-4 py-2 font-mono text-sm uppercase rounded transition-colors hover:bg-ink hover:text-paper ${isActive ? "bg-ink text-paper" : ""}`}
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
                                className="brutal-border brutal-shadow-sm brutal-hover bg-highlight px-4 py-2 font-mono text-xs uppercase"
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