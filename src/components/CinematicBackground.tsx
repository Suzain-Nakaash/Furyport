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

    // --- GEOMETRY: 3D Undulating Waving Metallic Dot Grid Mesh (Reference Image 2) ---
    const cols = window.innerWidth < 768 ? 40 : 65;
    const rows = window.innerWidth < 768 ? 40 : 65;
    const particleCount = cols * rows;
    const particlesGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const randoms = new Float32Array(particleCount);

    let index = 0;
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        // Space grid elements symmetrically in 3D scene space
        positions[index * 3] = (x - cols / 2) * 0.38;
        positions[index * 3 + 1] = (y - rows / 2) * 0.38;
        positions[index * 3 + 2] = 0; // Dynamic height Z computed in animation frame
        randoms[index] = Math.random();
        index++;
      }
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.055,
      color: 0x9b66ff,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false
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
    
    // Position and tilt the waving grid dynamically (stretching out like a floor terrain below the logo)
    particles.rotation.x = -Math.PI / 2.3; // Tilted dramatically back
    particles.position.y = -2.2; // Moved down below the center logo
    particles.position.z = -1.0; // Centered depth-wise
    
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
        // Light theme: enable floating logo and set opacity to 0.40 for clear visibility
        coreMesh.visible = true;
        coreMat.uniforms.uIsLight.value = 1.0;
        coreMat.uniforms.opacity.value = 0.40;
        
        particlesMat.color.setHex(0x7952ff); // Theme purple particles
        particlesMat.opacity = 0.18;
        particlesMat.size = 0.03;
      } else {
        // Dark theme: inverted white logo floating, glowing electric-violet metallic waving mesh terrain
        coreMesh.visible = true;
        coreMat.uniforms.uIsLight.value = 0.0;
        coreMat.uniforms.opacity.value = 0.15;
        
        particlesMat.color.setHex(0x9b66ff); // Luminous electric neon-violet
        particlesMat.opacity = 0.65;
        particlesMat.size = 0.055;
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
      
      // Organic undulation calculation for waving terrain dots grid (Reference 2)
      const positionAttr = particlesGeo.getAttribute('position') as THREE.BufferAttribute;
      if (positionAttr) {
        const arr = positionAttr.array as Float32Array;
        const time = elapsedTime * 0.8;
        const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
        const total = cols * rows;
        
        for (let i = 0; i < total; i++) {
          const x = arr[i * 3];
          const y = arr[i * 3 + 1];
          
          // Generate organic waving ridges (multi-frequency sine waves)
          const wave1 = Math.sin(x * 0.3 + time) * Math.cos(y * 0.3 + time);
          const wave2 = Math.sin(x * 0.12 - time * 0.4) * Math.cos(y * 0.12 + time * 0.4) * 1.4;
          const wave3 = Math.cos(Math.sqrt(x*x + y*y) * 0.18 - time * 0.6) * 0.4;
          
          // Combining waves for sophisticated depth landscape. Elevate waves higher in dark theme for premium shadows.
          const amplitude = isLightMode ? 0.3 : 1.1;
          arr[i * 3 + 2] = (wave1 + wave2 + wave3) * amplitude;
        }
        positionAttr.needsUpdate = true;
      }
      
      // Let the entire terrain rotate extremely slowly for perspective changes
      particles.rotation.z = elapsedTime * 0.005;

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
