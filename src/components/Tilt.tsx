import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function Tilt({ children, className = "", max = 9 }: { children: React.ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glare = useMotionTemplate`radial-gradient(380px circle at ${gx}% ${gy}%, rgba(240, 217, 164, 0.2), transparent 62%)`;
  const glareOpacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });

  const move = (e: React.PointerEvent) => {
    if (e.pointerType === "touch" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 2 * max);
    rx.set(-(py - 0.5) * 2 * max);
    gx.set(px * 100);
    gy.set(py * 100);
    glareOpacity.set(1);
  };
  const leave = () => {
    rx.set(0);
    ry.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`tilt ${className}`}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      onPointerMove={move}
      onPointerLeave={leave}
    >
      {children}
      <motion.span className="tilt-glare" style={{ background: glare, opacity: glareOpacity }} aria-hidden="true" />
    </motion.div>
  );
}
