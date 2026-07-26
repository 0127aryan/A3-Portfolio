"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";

// Custom component to sync HTML scroll with the Three.js camera
function CameraScroll() {
  const { camera } = useThree();
  
  useFrame(() => {
    // 1 viewport height (100vh) roughly equals 8.28 world units at 45 FOV & Z=10
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const scrollProgress = scrollY / vh;
    
    // Target Y position (moving down means negative Y in world space)
    const targetY = -scrollProgress * 8.28;
    
    // Lerp camera for smooth scrolling
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
  });

  return null;
}

export default function Scene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={1} color="#fbc2eb" />
      <directionalLight position={[-10, -10, -10]} intensity={1} color="#a8edea" />
      
      <CameraScroll />

      {/* --- HERO SECTION OBJECTS (Y: 0 to -4) --- */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-3.5, 2, 0]}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#fbc2eb" wireframe />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[3.5, -1, -2]}>
          <torusGeometry args={[1.2, 0.4, 16, 100]} />
          <meshStandardMaterial color="#a6c1ee" roughness={0.1} metalness={0.8} />
        </mesh>
      </Float>

      {/* --- ABOUT SECTION OBJECTS (Y: -8 to -12) --- */}
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-4, -9, 1]}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#a8edea" roughness={0.2} metalness={0.5} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={3} floatIntensity={2}>
        <mesh position={[4, -11, -3]}>
          <coneGeometry args={[1.2, 2.5, 32]} />
          <meshStandardMaterial color="#fed6e3" roughness={0.1} metalness={0.9} wireframe />
        </mesh>
      </Float>

      {/* --- PROJECTS SECTION OBJECTS (Y: -16 to -20) --- */}
      <Float speed={3} rotationIntensity={2} floatIntensity={3}>
        <mesh position={[-3, -17, -2]}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial color="#fbc2eb" roughness={0.3} metalness={0.6} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[4.5, -19, 1]}>
           <dodecahedronGeometry args={[1.2, 0]} />
           <meshStandardMaterial color="#a6c1ee" roughness={0.2} metalness={0.8} wireframe />
        </mesh>
      </Float>

      {/* --- CONTACT SECTION OBJECTS (Y: -24 to -28) --- */}
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2.5}>
        <mesh position={[0, -25, -4]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial color="#a8edea" roughness={0.4} metalness={0.2} />
        </mesh>
      </Float>
    </Canvas>
  );
}
