'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, Suspense, useMemo, memo } from 'react';
import * as random from 'maath/random/dist/maath-random.cjs';
import * as THREE from 'three';

/* ── Particles ── reduced to 1500, smaller radius ── */
const StarField = memo(function StarField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(
    () => random.inSphere(new Float32Array(1500 * 3), { radius: 1.4 }) as Float32Array,
    []
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 35;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#7dd3fc"
          size={0.0025}
          sizeAttenuation
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
});

/* ── Soft glow orb — simple sphere + basicMaterial, no distort ── */
const GlowOrb = memo(function GlowOrb({
  position,
  color,
  size = 1,
  speed = 0.6,
}: {
  position: [number, number, number];
  color: string;
  size?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.25;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.08} />
    </mesh>
  );
});

export default function ThreeScene() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'low-power',
          stencil: false,
          depth: true,
        }}
        dpr={1}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={['#030712']} />
        <fog attach="fog" args={['#030712', 1.5, 4.5]} />
        <Suspense fallback={null}>
          <StarField />
          <GlowOrb position={[-2.5, 1.5, -2]} color="#6366f1" size={0.8} speed={0.6} />
          <GlowOrb position={[2.8, -1, -2.5]} color="#0ea5e9" size={0.6} speed={0.9} />
          <GlowOrb position={[0, 2.5, -3]} color="#8b5cf6" size={1} speed={0.4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
