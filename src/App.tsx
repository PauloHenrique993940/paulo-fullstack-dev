import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import Home from '@/pages/Home'
import Sobre from '@/pages/Sobre'
import Projetos from '@/pages/Projetos'
import Contato from '@/pages/Contato'
import portrait from '@/assets/portrait.jpg'
// import { Toaster } from '@/components/ui/sonner.tsx' // removed dep

const flyingElements = [
    { id: 'f-1', top: '8%', left: '7%', size: 'h-8 w-8', shape: 'rounded-sm bg-highlight', travelX: 34, travelY: 26, rotate: 36, duration: 12, delay: 0 },
    { id: 'f-2', top: '18%', left: '84%', size: 'h-10 w-10', shape: 'rounded-full border-2 border-ink/30 bg-paper/50', travelX: -44, travelY: 24, rotate: -52, duration: 15, delay: 1.2 },
    { id: 'f-3', top: '34%', left: '14%', size: 'h-3 w-20', shape: 'rounded-full bg-destructive/35', travelX: 56, travelY: -20, rotate: 12, duration: 13, delay: 0.4 },
    { id: 'f-4', top: '45%', left: '74%', size: 'h-7 w-7', shape: 'rounded-sm border-2 border-ink/25 bg-highlight/70', travelX: -28, travelY: -34, rotate: 48, duration: 11, delay: 2 },
    { id: 'f-5', top: '62%', left: '28%', size: 'h-12 w-12', shape: 'rounded-full bg-highlight/45', travelX: 24, travelY: -30, rotate: -28, duration: 14, delay: 0.8 },
    { id: 'f-6', top: '72%', left: '88%', size: 'h-4 w-16', shape: 'rounded-sm bg-ink/15', travelX: -36, travelY: 20, rotate: 22, duration: 10, delay: 1.6 },
    { id: 'f-7', top: '82%', left: '9%', size: 'h-9 w-9', shape: 'rounded-full border-2 border-destructive/40 bg-paper/40', travelX: 46, travelY: -22, rotate: -40, duration: 16, delay: 0.3 },
]


function App() {
    const location = useLocation()
    const reduceMotion = useReducedMotion()
    const [isLoading, setIsLoading] = useState(true)

    const handleEnterClick = () => {
        setIsLoading(false)
    }

    if (isLoading) {
        return (
            <motion.div
                className="anime-loader"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-label="Carregando portfólio"
                role="status"
            >
                <div className="anime-loader__sun" aria-hidden="true" />
                <div className="anime-loader__speed-lines" aria-hidden="true" />
                <div className="anime-loader__portrait-wrap" aria-hidden="true">
                    <img
                        src={portrait}
                        alt=""
                        className="anime-loader__portrait"
                    />
                </div>
                <div className="relative z-10 w-full max-w-2xl px-8">
                    <p className="anime-loader__eyebrow">Abertura / Episódio 01</p>
                    <motion.p
                        className="anime-loader__name"
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45, delay: 0.15 }}
                    >
                        Paulo Henrique
                    </motion.p>
                    <motion.h1
                        className="anime-loader__title"
                        initial={{ opacity: 0, scale: 0.86, rotate: -3 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 150, damping: 14, delay: 0.3 }}
                    >
                        Full Stack <span>Júnior!</span>
                    </motion.h1>
                    <div className="anime-loader__progress" aria-hidden="true">
                        <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: reduceMotion ? 0.4 : 2.15, ease: 'easeInOut' }}
                        />
                    </div>
                    <p className="anime-loader__status">Carregando próxima cena...</p>
                    <button
                        type="button"
                        onClick={handleEnterClick}
                        className="anime-loader__enter-button mt-6 inline-flex items-center justify-center rounded-full border-2 border-paper bg-paper px-8 py-4 font-mono text-sm uppercase tracking-[0.3em] text-ink transition-all duration-300 hover:bg-highlight hover:text-ink"
                    >
                        Entrar
                    </button>
                </div>
            </motion.div>
        )
    }

    return (
        <div className="min-h-screen flex flex-col bg-paper text-ink">
            <Nav />
            <main className="relative flex-1 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 z-0">
                    {flyingElements.map((item) => (
                        <motion.span
                            key={item.id}
                            className={`absolute ${item.size} ${item.shape} shadow-[2px_2px_0_0_rgba(20,20,20,0.15)]`}
                            style={{ top: item.top, left: item.left }}
                            animate={reduceMotion ? undefined : {
                                x: [0, item.travelX, 0, -item.travelX * 0.5, 0],
                                y: [0, -item.travelY, item.travelY * 0.4, 0],
                                rotate: [0, item.rotate, 0],
                            }}
                            transition={reduceMotion ? undefined : {
                                duration: item.duration,
                                delay: item.delay,
                                repeat: Infinity,
                                repeatType: 'mirror',
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        className="relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -14 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                        <Routes location={location}>
                            <Route path="/" element={<Home />} />
                            <Route path="/sobre" element={<Sobre />} />
                            <Route path="/projetos" element={<Projetos />} />
                            <Route path="/contato" element={<Contato />} />
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
    )
}

export default App
