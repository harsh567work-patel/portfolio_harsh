"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function F1Car() {
  const carRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!carRef.current) return;

    const time = state.clock.elapsedTime * 0.7;
    const radius = 3.6;
    carRef.current.position.set(Math.cos(time) * radius, 0.16, Math.sin(time) * radius);
    carRef.current.rotation.y = Math.atan2(Math.cos(time), -Math.sin(time));
  });

  return (
    <group ref={carRef}>
      <mesh position={[0, 0.12, 0]} castShadow>
        <boxGeometry args={[1.6, 0.22, 0.8]} />
        <meshStandardMaterial color="#ff1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.26, 0]} castShadow>
        <boxGeometry args={[1.2, 0.18, 0.5]} />
        <meshStandardMaterial color="#111111" metalness={0.4} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.08, -0.4]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.16, 0.18, 20]} />
        <meshStandardMaterial color="#191919" metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.08, 0.4]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.16, 0.18, 20]} />
        <meshStandardMaterial color="#191919" metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh position={[-0.7, 0.08, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.14, 0.14, 0.16, 20]} />
        <meshStandardMaterial color="#191919" metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh position={[0.7, 0.08, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.14, 0.14, 0.16, 20]} />
        <meshStandardMaterial color="#191919" metalness={0.9} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.38, -0.3]} castShadow>
        <boxGeometry args={[0.6, 0.1, 0.2]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.35} />
      </mesh>
    </group>
  );
}

function TrackSurface() {
  return (
    <mesh rotation-x={-Math.PI / 2} receiveShadow>
      <planeGeometry args={[15, 8, 1, 1]} />
      <meshStandardMaterial color="#111111" />
    </mesh>
  );
}

function TrackOutline() {
  const points = useMemo(() => {
    const result: [number, number, number][] = [];
    const segments = 96;
    for (let index = 0; index <= segments; index += 1) {
      const angle = (index / segments) * Math.PI * 2;
      const radius = 3.7 + Math.sin(angle * 2.0) * 0.25;
      result.push([Math.cos(angle) * radius, 0.01, Math.sin(angle) * radius]);
    }
    return result;
  }, []);

  return (
    <Line points={points} color="#ffffff" lineWidth={2} dashed dashSize={0.12} gapSize={0.08} />
  );
}

export function F1Scene() {
  return (
    <div className="h-full w-full">
      <Canvas shadows camera={{ position: [0, 4.8, 8], fov: 38, near: 0.1, far: 100 }}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <TrackSurface />
        <TrackOutline />
        <F1Car />
        <Sparkles count={18} scale={[9, 0.1, 5]} position={[0, 1.2, 0]} speed={0.3} size={2} noise={1} />
      </Canvas>
    </div>
  );
}
