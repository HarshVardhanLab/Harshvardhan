'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

function FloatingCube() {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh ref={meshRef} castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#ffb690"
          metalness={0.8}
          roughness={0.2}
          emissive="#f97316"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={1.5}
      position={[3, 0, -2]}
    >
      <mesh castShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#c3c0ff"
          metalness={0.9}
          roughness={0.1}
          emissive="#3626ce"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus() {
  return (
    <Float
      speed={1.8}
      rotationIntensity={1.2}
      floatIntensity={1.8}
      position={[-3, 1, -1]}
    >
      <mesh castShadow>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial
          color="#e4c461"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ffb690" />
        <pointLight position={[5, -5, -5]} intensity={0.5} color="#c3c0ff" />
        
        {/* 3D Objects */}
        <FloatingCube />
        <FloatingSphere />
        <FloatingTorus />
      </Canvas>
    </div>
  );
}
