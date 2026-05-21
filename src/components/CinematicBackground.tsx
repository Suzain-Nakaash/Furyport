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

    // --- GEOMETRY space particles ---
    const particleCount = window.innerWidth < 768 ? 600 : 2000;
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
      size: 0.045,
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });

    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load('/assets/Furyxzia_logo_00000-depositphotos-bgremover.png');

    const coreGeo = new THREE.PlaneGeometry(6, 6);
    
    // Dynamic Theme Shader: Handles light and dark mode colors
    const coreMat = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: logoTexture },
        opacity: { value: 0.15 },
        uIsLight: { value: 0.0 } // 0.0 for Dark mode (Inverted), 1.0 for Light mode (Original)
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float opacity;
        uniform float uIsLight;
        varying vec2 vUv;
        void main() {
          vec4 texColor = texture2D(tDiffuse, vUv);
          
          if (uIsLight > 0.5) {
            // Light Mode: Render logo in its original dark colors
            gl_FragColor = vec4(texColor.rgb, texColor.a * opacity);
          } else {
            // Dark Mode: Invert black logo to white for visibility
            vec3 invertedColor = vec3(1.0) - texColor.rgb;
            gl_FragColor = vec4(invertedColor, texColor.a * opacity);
          }
        }
      `,
      transparent: true,
      depthWrite: false
    });
    
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    const particles = new THREE.Points(particlesGeo, particlesMat);
    
    scene.add(coreMesh);
    scene.add(particles);

    // Global ambient and directional lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const light1 = new THREE.DirectionalLight(0x7952ff, 1.5); // Purple
    light1.position.set(5, 5, 5);
    scene.add(light1);
    
    // Theme adjustment logic
    const updateTheme = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      
      if (isLight) {
        // Light theme: original dark logo floating, elegant purple particles
        coreMat.uniforms.uIsLight.value = 1.0;
        coreMat.uniforms.opacity.value = 0.08; // Softer opacity against light backgrounds
        
        particlesMat.color.setHex(0x7952ff); // Theme purple particles
        particlesMat.opacity = 0.22;
        particlesMat.size = 0.035;
      } else {
        // Dark theme: inverted white logo floating, subtle white particles
        coreMat.uniforms.uIsLight.value = 0.0;
        coreMat.uniforms.opacity.value = 0.15;
        
        particlesMat.color.setHex(0xffffff); // White particles
        particlesMat.opacity = 0.4;
        particlesMat.size = 0.045;
      }
    };
    
    updateTheme(); // Run initial setup

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

    function renderFrame() {
      const elapsedTime = clock.getElapsedTime();

      // Core floating animations
      coreMesh.rotation.z = Math.sin(elapsedTime * 0.15) * 0.08; // Gentle floating sway
      coreMesh.position.y = Math.sin(elapsedTime * 0.45) * 0.18 - (targetScrollY * 1.5); // Floating displacement
      
      particles.rotation.y = elapsedTime * 0.008;

      // Smooth positional interpolation for reactive camera tracking (parallax trailing)
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.position.z = 8 - (targetScrollY * 2.2);

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
