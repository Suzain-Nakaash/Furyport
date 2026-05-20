'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* --- THREE.JS CINEMATIC SHADER & GEOMETRY SPACE --- */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 8;

    // --- DARK MODE OBJECTS ---
    const particleCount = window.innerWidth < 768 ? 800 : 2500;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const randoms = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 15;
      randoms[i / 3] = Math.random();
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    const coreGeo = new THREE.IcosahedronGeometry(2, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    const particles = new THREE.Points(particlesGeo, particlesMat);
    
    scene.add(coreMesh);
    scene.add(particles);

    // --- LIGHT MODE OBJECTS (Fluid Glossy Wave) ---
    const waveGeo = new THREE.PlaneGeometry(30, 15, 128, 128);
    const waveMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.15,
      transmission: 0.9,
      ior: 1.5,
      thickness: 1.0,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide
    });
    const waveMesh = new THREE.Mesh(waveGeo, waveMat);
    waveMesh.rotation.x = -Math.PI / 2.5;
    waveMesh.position.y = -2;
    waveMesh.visible = false;
    scene.add(waveMesh);

    // Lights for the glossy wave
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const light1 = new THREE.DirectionalLight(0x7c3aed, 3); // Purple
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0x3b82f6, 3); // Blue
    light2.position.set(-5, 5, 5);
    scene.add(light2);
    
    const light3 = new THREE.DirectionalLight(0xec4899, 2); // Pink
    light3.position.set(0, -5, 5);
    scene.add(light3);

    // Theme logic
    const updateTheme = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      
      if (isLight) {
        // Show fluid wave, hide dark mode elements
        coreMesh.visible = false;
        particles.visible = false;
        waveMesh.visible = true;
      } else {
        // Show dark mode elements, hide fluid wave
        coreMesh.visible = true;
        particles.visible = true;
        waveMesh.visible = false;
      }
    };
    
    updateTheme(); // Initial check

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    // Smooth Mouse Parallax Vector Tracking variables
    let targetX = 0, targetY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Cinematic Scene Transformation tied to Global Scroll Position
    let targetScrollY = 0;
    const handleScroll = () => {
      targetScrollY = window.scrollY / window.innerHeight;
    };
    window.addEventListener('scroll', handleScroll);

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const initialPositions = waveGeo.attributes.position.clone();

    function renderFrame() {
      const elapsedTime = clock.getElapsedTime();

      // Dark mode animations
      if (coreMesh.visible) {
        coreMesh.rotation.y = elapsedTime * 0.05;
        coreMesh.rotation.x = elapsedTime * 0.02;
        particles.rotation.y = elapsedTime * 0.01;
        
        coreMesh.position.y = -(targetScrollY * 1.5);
      }

      // Light mode animations (Fluid Wave)
      if (waveMesh.visible) {
        const positions = waveGeo.attributes.position;
        for (let i = 0; i < positions.count; i++) {
          const ix = initialPositions.getX(i);
          const iy = initialPositions.getY(i);
          
          // Complex sine wave for fluid motion
          const z = Math.sin(ix * 0.2 + elapsedTime * 0.8) * 1.5 
                  + Math.cos(iy * 0.3 + elapsedTime * 0.6) * 1.0
                  + Math.sin((ix + iy) * 0.15 + elapsedTime * 0.5) * 0.5;
                  
          positions.setZ(i, z);
        }
        positions.needsUpdate = true;
        waveGeo.computeVertexNormals();
        
        waveMesh.position.y = -1 - (targetScrollY * 0.5);
        waveMesh.rotation.y = targetX * 0.1;
        waveMesh.rotation.x = -Math.PI / 2.5 + targetY * 0.1;
      }

      // Smooth positional interpolation for reactive camera tracking
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.position.z = 8 - (targetScrollY * 2.5);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(renderFrame);
    }
    renderFrame();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      
      // Cleanup Three.js resources
      particlesGeo.dispose();
      particlesMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      waveGeo.dispose();
      waveMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}
