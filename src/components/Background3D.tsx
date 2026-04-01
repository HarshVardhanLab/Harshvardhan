'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    const colors = new Float32Array(3000 * 3);
    
    const color1 = new THREE.Color('#ffb690');
    const color2 = new THREE.Color('#c3c0ff');
    const color3 = new THREE.Color('#e4c461');
    
    for (let i = 0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 80;
      const y = (Math.random() - 0.5) * 80;
      const z = (Math.random() - 0.5) * 80;
      
      positions.set([x, y, z], i * 3);
      
      const mixedColor = new THREE.Color();
      const rand = Math.random();
      if (rand < 0.33) {
        mixedColor.copy(color1);
      } else if (rand < 0.66) {
        mixedColor.copy(color2);
      } else {
        mixedColor.copy(color3);
      }
      
      colors.set([mixedColor.r, mixedColor.g, mixedColor.b], i * 3);
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.075;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function WireframeSphere({ position, scale, color, speed }: { position: [number, number, number], scale: number, color: string, speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.7;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.3) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.15}
        wireframe
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function RotatingRing({ position, color }: { position: [number, number, number], color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[3, 0.1, 16, 100]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.2}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

function FloatingCubes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  const cubes = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 15;
      return {
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle * 2) * 3,
          Math.sin(angle) * radius
        ] as [number, number, number],
        color: i % 3 === 0 ? '#ffb690' : i % 3 === 1 ? '#c3c0ff' : '#e4c461'
      };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <mesh key={i} position={cube.position}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial
            color={cube.color}
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[20, 20, 20]} intensity={0.5} color="#ffb690" />
        <pointLight position={[-20, -20, -20]} intensity={0.5} color="#c3c0ff" />
        <pointLight position={[0, 20, -20]} intensity={0.3} color="#e4c461" />
        
        <ParticleField />
        
        <WireframeSphere position={[-12, 0, -15]} scale={2} color="#ffb690" speed={0.2} />
        <WireframeSphere position={[12, 5, -20]} scale={1.5} color="#c3c0ff" speed={0.15} />
        <WireframeSphere position={[0, -8, -25]} scale={1.8} color="#e4c461" speed={0.18} />
        
        <RotatingRing position={[0, 0, -30]} color="#ffb690" />
        <RotatingRing position={[10, 5, -35]} color="#c3c0ff" />
        
        <FloatingCubes />
        
        <fog attach="fog" args={['#0c1322', 30, 80]} />
      </Canvas>
    </div>
  );
}
