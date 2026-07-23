"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial, Text } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/lib/reduced-motion";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 2400;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.08;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent size={0.03} sizeAttenuation depthWrite={false} color="#111111" />
    </Points>
  );
}

function StructuredField() {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    const items: [number, number, number][] = [];
    for (let y = 0; y < 5; y += 1) {
      for (let x = 0; x < 7; x += 1) {
        items.push([x - 3, y - 2, 0]);
      }
    }
    return items;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.12;
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, index) => (
        <Float key={index} speed={1.1 + (index % 5) * 0.04} rotationIntensity={0.2} floatIntensity={0.25}>
          <mesh position={[pos[0] * 0.27, pos[1] * 0.27, pos[2]]}>
            <boxGeometry args={[0.08, 0.08, 0.08]} />
            <meshStandardMaterial color="#111111" emissive="#d9a35d" emissiveIntensity={0.35} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

function ThesisText({ active }: { active: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <Text
        position={[-1.25, 0.35, 0]}
        fontSize={0.32}
        color="#111111"
        anchorX="center"
        anchorY="middle"
        maxWidth={4}
      >
        ARESH
      </Text>
      <Text
        position={[-0.75, -0.1, 0]}
        fontSize={0.16}
        color="#111111"
        anchorX="center"
        anchorY="middle"
        maxWidth={4}
      >
        DATA • DESIGN • CODE
      </Text>
      <mesh position={[0.55, 0.1, 0.02]}>
        <boxGeometry args={[1.35, 0.1, 0.08]} />
        <meshStandardMaterial color={active ? "#111111" : "#d9a35d"} emissive="#d9a35d" emissiveIntensity={0.25} />
      </mesh>
    </group>
  );
}

export function HeroCanvas() {
  const reducedMotion = useReducedMotion();
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setTimeout(() => setBeat(1), 1400);
    const timer2 = window.setTimeout(() => setBeat(2), 2800);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(timer2);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="h-full w-full rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(17,17,17,0.25),_transparent_45%)]" />
    );
  }

  return (
    <div className="h-full w-full rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(17,17,17,0.4),_transparent_55%)]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 3, 4]} intensity={1.2} />
        <pointLight position={[0, 0, 4]} intensity={0.8} color="#d9a35d" />
        {beat === 0 && <ParticleField />}
        {beat === 1 && <StructuredField />}
        {beat === 2 && <ThesisText active />}
      </Canvas>
      <div className="pointer-events-none absolute inset-0 flex items-end justify-start p-6">
        <div className="rounded-full border border-[#111111]/10 bg-[#f7f5f0]/80 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-[#111111] backdrop-blur">
          {beat === 0 ? "Data" : beat === 1 ? "Design" : "Code"}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#f7f5f0]/10 via-transparent to-transparent" />
    </div>
  );
}
