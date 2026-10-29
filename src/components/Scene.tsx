import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import * as THREE from "three";

type Pointer = { x: number; y: number };

// Trajetória do objeto principal ao longo da página: [progresso, x, y, z, escala]
const path: [number, number, number, number, number][] = [
  [0, 3.4, 0.2, -0.5, 1.25],
  [0.22, 4.1, -0.6, -2.6, 0.9],
  [0.45, 4.3, 0.4, -2.2, 1],
  [0.7, 4.2, -0.3, -2.8, 0.85],
  [1, 3.2, 0.2, -1.5, 1.1],
];

const smooth = (t: number) => t * t * (3 - 2 * t);

function sample(p: number) {
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i];
    const b = path[i + 1];
    if (p <= b[0]) {
      const t = smooth((p - a[0]) / (b[0] - a[0]));
      return a.slice(1).map((v, k) => v + (b[k + 1] - v) * t) as [number, number, number, number];
    }
  }
  return path[path.length - 1].slice(1) as [number, number, number, number];
}

const scrollProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
};

function Hero3D({ pointer }: { pointer: React.MutableRefObject<Pointer> }) {
  const group = useRef<THREE.Group>(null);
  const knot = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const cage = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    const p = scrollProgress();
    const [x, y, z, s] = sample(p);
    const fit = Math.min(1, viewport.width / 10.3);
    const narrow = viewport.width < 6;
    const tx = narrow ? 0 : x * fit;
    const ty = narrow ? 1.6 - p * 0.6 : y;
    const tz = narrow ? z - 2.5 : z;
    const ts = (narrow ? s * 0.6 : s) * (0.6 + 0.4 * fit);
    g.position.x = THREE.MathUtils.damp(g.position.x, tx + pointer.current.x * 0.3, 3, dt);
    g.position.y = THREE.MathUtils.damp(g.position.y, ty + pointer.current.y * 0.25, 3, dt);
    g.position.z = THREE.MathUtils.damp(g.position.z, tz, 3, dt);
    g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, ts, 3, dt));
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, p * Math.PI * 4 + pointer.current.x * 0.6, 2.5, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -pointer.current.y * 0.4 + p * 1.2, 2.5, dt);
    if (knot.current) knot.current.rotation.z += dt * 0.25;
    if (ringA.current) ringA.current.rotation.x += dt * 0.35;
    if (ringB.current) ringB.current.rotation.y -= dt * 0.28;
    if (cage.current) cage.current.rotation.y += dt * 0.08;
  });

  return (
    <group ref={group}>
      <mesh ref={knot}>
        <torusKnotGeometry args={[0.85, 0.27, 220, 36, 2, 3]} />
        <meshPhysicalMaterial color="#d6b370" metalness={1} roughness={0.22} clearcoat={0.6} envMapIntensity={1.3} />
      </mesh>
      <mesh ref={cage} scale={1.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#f0d9a4" wireframe transparent opacity={0.16} />
      </mesh>
      <mesh ref={ringA} rotation={[1.1, 0, 0]}>
        <torusGeometry args={[1.55, 0.008, 12, 160]} />
        <meshBasicMaterial color="#f0d9a4" transparent opacity={0.7} />
      </mesh>
      <mesh ref={ringB} rotation={[0, 0.6, 1.2]}>
        <torusGeometry args={[2, 0.006, 12, 180]} />
        <meshBasicMaterial color="#d6b370" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const a = new Float32Array(1400 * 3);
    for (let i = 0; i < a.length; i += 3) {
      a[i] = (Math.random() - 0.5) * 30;
      a[i + 1] = (Math.random() - 0.5) * 22;
      a[i + 2] = (Math.random() - 0.5) * 16 - 3;
    }
    return a;
  }, []);

  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.015;
    ref.current.position.y = scrollProgress() * 5;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#f0d9a4" transparent opacity={0.55} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Shapes() {
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    if (ref.current) ref.current.position.y = scrollProgress() * 3.2;
  });
  const items: { p: [number, number, number]; g: "oct" | "dod" | "tet"; s: number }[] = [
    { p: [-4.6, 2, -2], g: "oct", s: 0.34 },
    { p: [-3.2, -2.2, -1], g: "dod", s: 0.28 },
    { p: [1.2, 2.8, -3.5], g: "tet", s: 0.3 },
    { p: [-5.4, -0.4, -4], g: "tet", s: 0.38 },
    { p: [5.6, -3, -3], g: "oct", s: 0.3 },
  ];
  return (
    <group ref={ref}>
      {items.map((it, i) => (
        <Float key={i} speed={1.2 + i * 0.2} rotationIntensity={1.4} floatIntensity={1.2} position={it.p}>
          <mesh scale={it.s}>
            {it.g === "oct" ? <octahedronGeometry /> : it.g === "dod" ? <dodecahedronGeometry /> : <tetrahedronGeometry />}
            <meshStandardMaterial color="#1c1a18" metalness={0.9} roughness={0.25} emissive="#d6b370" emissiveIntensity={0.08} />
          </mesh>
          <mesh scale={it.s * 1.5}>
            {it.g === "oct" ? <octahedronGeometry /> : it.g === "dod" ? <dodecahedronGeometry /> : <tetrahedronGeometry />}
            <meshBasicMaterial color="#d6b370" wireframe transparent opacity={0.3} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function Scene() {
  const pointer = useRef<Pointer>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="scene" aria-hidden="true">
      <Canvas dpr={[1, 1.75]} camera={{ position: [0, 0, 7], fov: 45 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[4, 5, 4]} intensity={1.6} color="#ffe2a8" />
        <pointLight position={[-5, -2, 3]} intensity={18} color="#d6b370" />
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={3} color="#fff1d0" position={[0, 5, -6]} scale={[12, 3, 1]} />
          <Lightformer form="rect" intensity={2} color="#d6b370" position={[-6, 0, 2]} scale={[2, 8, 1]} />
          <Lightformer form="ring" intensity={2.5} color="#ffffff" position={[5, 1, 3]} scale={3} />
        </Environment>
        <Hero3D pointer={pointer} />
        <Particles />
        <Shapes />
      </Canvas>
    </div>
  );
}
