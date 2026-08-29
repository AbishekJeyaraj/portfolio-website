"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Hooks & Helpers ---

const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);
  return reducedMotion;
};

const checkWebGLSupport = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
};

// --- 3D Scene Components ---

const MAX_PARTICLES = 150; // Kept reasonable for mobile performance
const MAX_LINES = (MAX_PARTICLES * (MAX_PARTICLES - 1)) / 2;
const CONNECTION_DISTANCE = 3.5;

function ParticleNetwork({ reducedMotion }: { reducedMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);
  
  const { mouse, camera } = useThree();

  const { particlePositions, particleVelocities, linePositions, lineColors } = useMemo(() => {
    const pPositions = new Float32Array(MAX_PARTICLES * 3);
    const pVelocities = [];
    
    // Spread particles across a volume
    for (let i = 0; i < MAX_PARTICLES; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 25; // x
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 25; // y
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2; // z
      
      pVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015
        )
      );
    }
    
    return {
      particlePositions: pPositions,
      particleVelocities: pVelocities,
      linePositions: new Float32Array(MAX_LINES * 6),
      lineColors: new Float32Array(MAX_LINES * 6),
    };
  }, []);

  const colorPrimary = new THREE.Color("#0ea5e9"); // Tailwind sky-500
  const colorSecondary = new THREE.Color("#10b981"); // Tailwind emerald-500

  useFrame(() => {
    if (reducedMotion) return;
    
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    // Animate particles
    for (let i = 0; i < MAX_PARTICLES; i++) {
      positions[i * 3] += particleVelocities[i].x;
      positions[i * 3 + 1] += particleVelocities[i].y;
      positions[i * 3 + 2] += particleVelocities[i].z;
      
      // Bounds check & bounce
      if (Math.abs(positions[i * 3]) > 12.5) particleVelocities[i].x *= -1;
      if (Math.abs(positions[i * 3 + 1]) > 12.5) particleVelocities[i].y *= -1;
      if (Math.abs(positions[i * 3 + 2] + 2) > 5) particleVelocities[i].z *= -1;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // Subtle parallax with mouse (damped)
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
    camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, -2);

    // Update connecting lines
    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;
    
    for (let i = 0; i < MAX_PARTICLES; i++) {
      for (let j = i + 1; j < MAX_PARTICLES; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;
        
        if (distSq < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
          const dist = Math.sqrt(distSq);
          const alpha = 1.0 - (dist / CONNECTION_DISTANCE);
          
          linePositions[vertexpos++] = positions[i * 3];
          linePositions[vertexpos++] = positions[i * 3 + 1];
          linePositions[vertexpos++] = positions[i * 3 + 2];
          
          linePositions[vertexpos++] = positions[j * 3];
          linePositions[vertexpos++] = positions[j * 3 + 1];
          linePositions[vertexpos++] = positions[j * 3 + 2];
          
          // Additive blend fading (fade towards black which means transparent with AdditiveBlending)
          // We mix a bit of secondary color based on connection distance
          const mixColor = colorPrimary.clone().lerp(colorSecondary, alpha);
          
          const r = mixColor.r * alpha;
          const g = mixColor.g * alpha;
          const b = mixColor.b * alpha;
          
          lineColors[colorpos++] = r;
          lineColors[colorpos++] = g;
          lineColors[colorpos++] = b;
          
          lineColors[colorpos++] = r;
          lineColors[colorpos++] = g;
          lineColors[colorpos++] = b;
          
          numConnected++;
        }
      }
    }
    
    linesRef.current.geometry.setDrawRange(0, numConnected * 2);
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.color.needsUpdate = true;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} count={MAX_PARTICLES} />
        </bufferGeometry>
        <pointsMaterial color="#0ea5e9" size={0.06} transparent opacity={0.8} sizeAttenuation={true} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} count={MAX_LINES * 2} />
          <bufferAttribute attach="attributes-color" args={[lineColors, 3]} count={MAX_LINES * 2} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  );
}

function CyberShapes({ reducedMotion }: { reducedMotion: boolean }) {
  const shape1Ref = useRef<THREE.Mesh>(null!);
  const shape2Ref = useRef<THREE.Mesh>(null!);
  
  useFrame((_, delta) => {
    if (reducedMotion) return;
    if (shape1Ref.current) {
      shape1Ref.current.rotation.x += delta * 0.05;
      shape1Ref.current.rotation.y += delta * 0.08;
    }
    if (shape2Ref.current) {
      shape2Ref.current.rotation.x -= delta * 0.06;
      shape2Ref.current.rotation.z -= delta * 0.04;
    }
  });

  return (
    <>
      <mesh ref={shape1Ref} position={[-5, 2, -10]}>
        <icosahedronGeometry args={[3, 1]} />
        <meshBasicMaterial color="#0ea5e9" wireframe transparent opacity={0.06} />
      </mesh>
      <mesh ref={shape2Ref} position={[6, -4, -12]}>
        <torusKnotGeometry args={[2.5, 0.5, 64, 8]} />
        <meshBasicMaterial color="#10b981" wireframe transparent opacity={0.05} />
      </mesh>
    </>
  );
}

// --- Main Component ---

export default function ProfileBackground3D() {
  const [isSupported, setIsSupported] = useState<boolean | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setIsSupported(checkWebGLSupport());
  }, []);

  useGSAP(() => {
    if (!containerRef.current || !isSupported) return;
    
    // Parallax & fade effect as user scrolls away from hero
    gsap.to(containerRef.current, {
      y: "30%",
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    // Radar scan line animation
    if (scanLineRef.current && !reducedMotion) {
      gsap.fromTo(
        scanLineRef.current,
        { yPercent: -100 },
        { yPercent: 500, duration: 6, repeat: -1, ease: "none" }
      );
    }
  }, { dependencies: [reducedMotion, isSupported], scope: containerRef });

  if (isSupported === null) return null; // Avoid hydration mismatch

  if (!isSupported) {
    // Fallback static/CSS background
    return (
      <div 
        ref={containerRef} 
        className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8cGF0aCBkPSJNMjAgMEwxMCAxMEwwIDIwIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] mix-blend-overlay" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
      <Canvas
        camera={{ position: [0, 0, 0], fov: 60 }}
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1}
        gl={{ antialias: false, alpha: false }} // alpha false + background color for better performance
      >
        <color attach="background" args={["#020617"]} /> {/* matches slate-950 */}
        <fog attach="fog" args={["#020617", 5, 20]} />

        <ParticleNetwork reducedMotion={reducedMotion} />
        <CyberShapes reducedMotion={reducedMotion} />
      </Canvas>
      
      {/* Scanning line overlay */}
      {!reducedMotion && (
        <div 
          ref={scanLineRef}
          className="absolute top-0 left-0 w-full h-[20%] pointer-events-none bg-gradient-to-b from-transparent via-sky-500/10 to-transparent" 
        />
      )}
    </div>
  );
}
