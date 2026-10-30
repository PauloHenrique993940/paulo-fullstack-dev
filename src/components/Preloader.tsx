import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / 1800);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else window.setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const name = "Paulo Henrique";

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!done && (
        <motion.div
          className="preloader"
          role="status"
          aria-label="Carregando portfólio"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader-portal" aria-hidden="true">
            <span className="portal-ring portal-ring-outer" />
            <span className="portal-ring portal-ring-inner" />
            <span className="portal-core" />
          </div>
          <div className="preloader-name" aria-hidden="true">
            {name.split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.045, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </div>
          <motion.p className="preloader-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}>
            Desenvolvedor Full Stack
          </motion.p>
          <div className="preloader-foot" aria-hidden="true">
            <span>Portfólio {new Date().getFullYear()}</span>
            <span className="preloader-count">{String(count).padStart(3, "0")}</span>
          </div>
          <div className="preloader-line" aria-hidden="true">
            <div style={{ transform: `scaleX(${count / 100})` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
