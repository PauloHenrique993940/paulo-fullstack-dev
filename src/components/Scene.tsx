import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Arena() {
  const embers = useMemo(() => {
    const points = new Float32Array(420 * 3);
    for (let i = 0; i < points.length; i += 3) {
      points[i] = (Math.random() - 0.5) * 18;
      points[i + 1] = Math.random() * 8 - 1;
      points[i + 2] = (Math.random() - 0.5) * 10 - 1;
    }
    return points;
  }, []);
  const particles = useRef<THREE.Points>(null);
  useFrame((_, dt) => { if (particles.current) particles.current.rotation.y += dt * 0.018; });
  return (
    <>
      <fog attach="fog" args={["#0a1020", 11, 26]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 7, 4]} intensity={1.2} color="#ffe1c1" castShadow />
      <pointLight position={[-5, 3, -3]} intensity={22} color="#f02a19" distance={13} />
      <pointLight position={[5, 3, -4]} intensity={17} color="#2d7cff" distance={12} />
      <points ref={particles}>
        <bufferGeometry><bufferAttribute attach="attributes-position" args={[embers, 3]} /></bufferGeometry>
        <pointsMaterial size={0.055} color="#ff8040" transparent opacity={0.8} sizeAttenuation depthWrite={false} />
      </points>
    </>
  );
}

export default function Scene() {
  return <div className="scene" aria-hidden="true"><Canvas dpr={[1, 1.5]} camera={{ position: [0, 2.1, 10], fov: 43 }} shadows gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}><Arena /></Canvas></div>;
}
