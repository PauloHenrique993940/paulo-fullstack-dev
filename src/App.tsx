import { Routes, Route, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import Home from '@/pages/Home'
// import { Toaster } from '@/components/ui/sonner.tsx' // removed dep


function App() {
    const location = useLocation()

    useEffect(() => {
        if (!location.hash) return

        const targetId = location.hash.slice(1)
        const target = document.getElementById(targetId)
        if (!target) return

        requestAnimationFrame(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
    }, [location.hash, location.pathname])

    return (
        <MotionConfig reducedMotion="user">
        <div className="portfolio-interface min-h-screen flex flex-col bg-paper text-ink">
            <a className="skip-link" href="#conteudo-principal">Pular para o conteúdo principal</a>
            <Nav />
            <main id="conteudo-principal" className="relative flex-1 overflow-hidden" tabIndex={-1}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        className="relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.24, ease: 'easeOut' }}
                    >
                        <Routes location={location}>
                            <Route path="/" element={<Home />} />
                            <Route path="/sobre" element={<Navigate to="/#sobre" replace />} />
                            <Route path="/projetos" element={<Navigate to="/#projetos" replace />} />
                            <Route path="/contato" element={<Navigate to="/#contato" replace />} />
                            <Route path="*" element={<div className="flex min-h-screen flex-col items-center justify-center bg-paper px-4">
                                <div className="max-w-xl text-center">
                                    <p className="font-mono text-sm uppercase">Erro / 404</p>
                                    <h1 className="mt-2 font-display text-[18vw] leading-none md:text-[10rem]">404</h1>
                                    <h2 className="mt-2 font-display text-2xl uppercase">Página não encontrada</h2>
                                    <a href="/" className="brutal-border brutal-shadow brutal-hover mt-8 inline-block bg-highlight px-6 py-3 font-mono text-sm uppercase">
                                        ← Voltar ao início
                                    </a>
                                </div>
                            </div>} />
                        </Routes>
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
            {/* <Toaster /> sonner removed */}
        </div>
        </MotionConfig>
    )
}

export default App
