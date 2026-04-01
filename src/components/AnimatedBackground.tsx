'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 100;
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      
      positions.set([x, y, z], i * 3);
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffb690"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

function FloatingGeometry({ position, geometry, color }: { position: [number, number, number], geometry: 'box' | 'sphere' | 'torus', color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {geometry === 'box' && <boxGeometry args={[1, 1, 1]} />}
      {geometry === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />}
      {geometry === 'torus' && <torusGeometry args={[0.5, 0.2, 16, 100]} />}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
}

function GridPlane() {
  return (
    <gridHelper args={[100, 50, '#ffb690', '#3626ce']} position={[0, -10, 0]} rotation={[0, 0, 0]} />
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#ffb690" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#c3c0ff" />
        
        <StarField />
        
        <FloatingGeometry position={[-15, 5, -20]} geometry="box" color="#ffb690" />
        <FloatingGeometry position={[15, -5, -25]} geometry="sphere" color="#c3c0ff" />
        <FloatingGeometry position={[0, 8, -30]} geometry="torus" color="#e4c461" />
        <FloatingGeometry position={[-10, -8, -15]} geometry="sphere" color="#ffb690" />
        <FloatingGeometry position={[12, 3, -22]} geometry="box" color="#3626ce" />
        
        <GridPlane />
      </Canvas>
    </div>
  );
}
