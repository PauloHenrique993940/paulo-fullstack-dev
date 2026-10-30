import { useEffect, useState, lazy, Suspense } from "react";
import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import Home from "@/pages/Home";

const Scene = lazy(() => import("@/components/Scene"));

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function App() {
  const [ready, setReady] = useState(false);
  const [webgl] = useState(hasWebGL);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    document.documentElement.classList.toggle("is-loading", !ready);
    if (ready && location.hash) {
      window.setTimeout(() => document.getElementById(location.hash.slice(1))?.scrollIntoView(), 100);
    }
  }, [ready]);

  return (
    <MotionConfig reducedMotion="user">
      {!ready && (
        <Preloader
          onDone={() => {
            setReady(true);
          }}
        />
      )}
      <motion.div className="progress" style={{ scaleX: progress }} aria-hidden="true" />
      {webgl && (
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      )}
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Nav />
      <main id="conteudo" tabIndex={-1}>
        <Home ready={ready} />
      </main>
      <Footer />
    </MotionConfig>
  );
}
