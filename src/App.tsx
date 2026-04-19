import { Routes, Route } from 'react-router-dom'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import Home from '@/pages/Home'
import Sobre from '@/pages/Sobre'
import Projetos from '@/pages/Projetos'
import Contato from '@/pages/Contato'
// import { Toaster } from '@/components/ui/sonner.tsx' // removed dep


function App() {
    return (
        <div className="min-h-screen flex flex-col bg-paper text-ink">
            <Nav />
            <main className="flex-1">
                <Routes>
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
            </main>
            <Footer />
            {/* <Toaster /> sonner removed */}
        </div>
    )
}

export default App
