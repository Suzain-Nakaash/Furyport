'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface VideoProject {
  id: string;
  title: string;
  category: string;
  src: string;
  details: string;
}

const videosList: VideoProject[] = [
  { id: '01', title: 'CINEMATIC HORIZONS', category: 'VFX / Directing', src: 'f6qcaD6BndM', details: 'Brand new cinematic horizons exploring light and shadow.' },
  { id: '02', title: 'ECHOES OF TOMORROW', category: 'Motion Design', src: '7aoDADYw_2w', details: 'Advanced motion graphics composition with dynamic vectors.' },
  { id: '03', title: 'FRACTAL VISIONS', category: '3D Simulation', src: 'Aivg9Oc-pRw', details: 'Procedural generation of complex fractal geometries.' },
  { id: '04', title: 'VELD FESTIVAL 2025', category: 'Live Visual Design / VFX', src: 'PwLXhfCm6Tg', details: 'Official live visuals composite and VFX direction for Paper Skies performing live at Veld Music Festival, Toronto.' },
  { id: '05', title: 'CYBERNETIC DREAMS', category: '3D Motion Design / CGI', src: 'WveVfdQCHtY', details: 'Experimental abstract render exploration using procedural geometry dispersion and emission tracking.' },
  { id: '06', title: 'ABSTRACT FORMATIONS', category: 'Visual Art Pack Showcase', src: 'IUPTGMiekFw', details: 'A presentation of custom abstract VFX assets, displacement maps, and overlays designed for After Effects.' },
  { id: '07', title: 'CHRONOS // 時間', category: 'AMV / Kinetic Typography', src: 'AGYchbTmzPk', details: 'High-frequency typography edit featuring Japanese characters, custom tracking grids, and speed ramps.' },
  { id: '08', title: 'LIQUID SHIMMER', category: 'Volumetric Fluid CGI', src: 'vsZFEvmVTmQ', details: 'An examination of synthetic liquid reflection, high-gloss metals, and real-time physical simulation nodes.' },
  { id: '09', title: 'MEMORIES OF TOKYO // 思い出', category: 'Cinematic Color Grading', src: 'Sg3tLKUL3wk', details: 'Atmospheric urban nocturne grading study utilizing custom film emulation LUTs and custom noise profiles.' },
  { id: '10', title: 'I AM A MIRROR TO MYSELF', category: 'Typographic CG Visualizer', src: 'u5wYKmw0F_8', details: 'Official visualizer art direction featuring low-fi screen artifacts, rhythmic typography, and visual symmetry.' },
  { id: '11', title: 'KAIZEN // 改善', category: 'Experimental Volumetric Edit', src: 'YxT9M1q7Cuw', details: 'Volumetric lighting composition designed around spatial geometry, glow decays, and low-light rendering.' },
  { id: '12', title: 'SPECTRAL FREQUENCY', category: 'Audio-Reactive VFX', src: 'gRnnjNWhrBk', details: 'Sound-reactive digital displacement patterns synced to high-frequency industrial synthesizers.' },
  { id: '13', title: 'ECHOES IN LIGHT', category: 'Motion Graphics Study', src: 'sGwz1A1Zy9o', details: 'A motion sequence mapping thin vector outlines, custom technical HUD telemetry, and geometric arrays.' },
  { id: '14', title: 'NEON METROPOLIS', category: 'Cinematic VFX Composite', src: 'iwTKySkRpVM', details: 'Synthesized futuristic cityscape composite layering 3D volumetric assets over real-world night photography.' },
  { id: '15', title: 'FRACTURED FLOW', category: 'Procedural 3D Render', src: 'oCfsN2jPuiU', details: 'Procedural particle scattering simulation studying gravitational fields and complex dispersion patterns.' },
  { id: '16', title: 'RESONANCE // 反響', category: 'Commercial Motion Art', src: '0lzm4dkqlN8', details: 'Commercial visual showcase integrating live action, dynamic speed vectors, and high-frequency color grading.' },
  { id: '17', title: 'DIGITAL SHADOWS', category: 'Glitch Art & VFX', src: 'AYZT8BgBwkc', details: 'Low-fidelity digital glitch aesthetic exploration incorporating analog television noise and scanline layers.' },
  { id: '18', title: 'GROWTH // BLISS', category: '3D Abstract Composition', src: '0fWgraG8V2o', details: 'High-fidelity organic abstract growth CGI mapping dynamic surface textures, procedural noises, and ambient glows.' },
  { id: '19', title: 'SYNAPSE // 神経', category: 'Volumetric FX Edit', src: 'k81CI5Ypv0E', details: 'Cinematic video sequence mapping rapid transitions, high-contrast light flares, and kinetic motion frames.' },
  { id: '20', title: 'LIMITLESS // 無限', category: 'Typography Art Showcase', src: '3vb0z5KxEHo', details: 'An elegant typographic composite utilizing modern sans-serif layouts, neon outlines, and technical grids.' },
  { id: '21', title: 'ANYTHING // 何でも', category: 'AMV / Sound Visualizer', src: 'zSNn7Q3ZLuA', details: 'Official visualizer art direction combining abstract particle systems and rhythmic soundwave distortions.' }
];

export default function VideosGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Smoothly manage header visibility using global body class
  useEffect(() => {
    if (selectedVideo) {
      document.body.classList.add('video-modal-open');
    } else {
      document.body.classList.remove('video-modal-open');
    }
    return () => {
      document.body.classList.remove('video-modal-open');
    };
  }, [selectedVideo]);

  // Modal custom keyboard interaction controller (Close on Escape)
  useEffect(() => {
    if (!selectedVideo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo]);

  const openModal = (video: VideoProject) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div style={{ width: '100%', maxWidth: '1400px', padding: '0 5%' }}>
      
      {/* Video Grid (Dense award-winning 240px card alignment) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
        {videosList.map((video) => (
          <div
            key={video.id}
            className="video-card glass-panel interactive"
            onClick={() => openModal(video)}
            onMouseEnter={() => setHoveredVideoId(video.id)}
            onMouseLeave={() => setHoveredVideoId(null)}
            style={{
              padding: '16px',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s',
              background: 'var(--bg-color)',
              border: '1px solid rgba(128, 128, 128, 0.2)',
              borderRadius: '0',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            {/* Cinematic Frame Notch */}
            <div style={{ position: 'absolute', top: '8px', right: '8px', width: '6px', height: '6px', borderRight: '1px solid var(--brand-purple)', borderTop: '1px solid var(--brand-purple)' }}></div>

            <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '145px', borderBottom: '1px solid rgba(128,128,128,0.15)', backgroundColor: '#020104' }}>
              {hoveredVideoId === video.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.src}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${video.src}`}
                  title={video.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  style={{
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none'
                  }}
                />
              ) : (
                <img
                  src={`https://img.youtube.com/vi/${video.src}/hqdefault.jpg`}
                  alt={video.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '0',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              )}
              
              {/* Play Hint */}
              <div 
                className="play-overlay-hint"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s'
                }}
              >
                <div style={{ background: 'var(--brand-purple)', color: '#fff', padding: '10px 20px', fontSize: '9px', fontFamily: 'var(--font-sans)', letterSpacing: '2px', fontWeight: 'bold' }}>
                  PLAY CINEMATIC ↗
                </div>
              </div>
            </div>

            <span style={{ display: 'inline-block', fontSize: '8.5px', fontFamily: 'var(--font-sans)', color: 'var(--brand-purple)', letterSpacing: '2.5px', textTransform: 'uppercase', marginTop: '16px', marginBottom: '6px' }}>
              {video.category}
            </span>
            
            <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', letterSpacing: '-0.5px', marginBottom: '6px', fontWeight: 'bold' }}>
              {video.title}
            </h3>

            <p style={{ fontSize: '11.5px', color: 'var(--muted-color)', lineHeight: 1.4, fontFamily: 'var(--font-sans)' }}>
              Click to unfold in fullscreen audio studio.
            </p>
          </div>
        ))}
      </div>

      {/* Fullscreen Video Modal (Rendered via React Portal at body level to prevent nav bar overlap issues) */}
      {selectedVideo && mounted && createPortal(
        <div
          id="video-modal-container"
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(4, 3, 7, 0.95)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(25px)',
            padding: '20px',
            overflow: 'hidden'
          }}
        >
          {/* Cinematic Ambient Glow behind the panel */}
          <div style={{
            position: 'absolute',
            width: '110%',
            height: '110%',
            background: 'radial-gradient(circle, rgba(121, 82, 255, 0.12) 0%, transparent 60%)',
            pointerEvents: 'none',
            zIndex: -1
          }} />

          {/* Main Modal Container Panel */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '1000px',
              background: 'var(--bg-color)',
              border: '1px solid rgba(121, 82, 255, 0.3)',
              borderRadius: '0',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 40px 100px rgba(0, 0, 0, 0.85)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Sci-Fi Target Corners */}
            <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '16px', height: '16px', borderLeft: '2px solid var(--brand-purple)', borderTop: '2px solid var(--brand-purple)', zIndex: 10, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '16px', height: '16px', borderRight: '2px solid var(--brand-purple)', borderTop: '2px solid var(--brand-purple)', zIndex: 10, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '16px', height: '16px', borderLeft: '2px solid var(--brand-purple)', borderBottom: '2px solid var(--brand-purple)', zIndex: 10, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '16px', height: '16px', borderRight: '2px solid var(--brand-purple)', borderBottom: '2px solid var(--brand-purple)', zIndex: 10, pointerEvents: 'none' }} />

            {/* Monitor Header Panel */}
            <div style={{
              height: '48px',
              borderBottom: '1px solid rgba(128, 128, 128, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px',
              background: 'rgba(255, 255, 255, 0.02)',
              color: 'var(--accent-color)'
            }}>
              {/* Left Side Blinking Indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="blinking-led" style={{ width: '6px', height: '6px', backgroundColor: '#FF3B30', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 6px #FF3B30' }} />
                <span style={{ fontSize: '10px', fontFamily: 'monospace', letterSpacing: '2.5px', color: 'var(--brand-purple)', fontWeight: 'bold' }}>
                  RAW FEED // STREAM_MON_{selectedVideo.id}
                </span>
              </div>

              {/* Center telemetry */}
              <div className="desktop-only" style={{ fontSize: '9px', fontFamily: 'monospace', letterSpacing: '1.5px', color: 'var(--muted-color)', opacity: 0.8 }}>
                COLOR SPACE: Rec.709 // CODEC: H.264_STREAM // FREQ: 48.0 KHZ
              </div>

              {/* Close Button Inside Monitor */}
              <button
                onClick={closeModal}
                className="interactive"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(121, 82, 255, 0.3)',
                  color: 'var(--accent-color)',
                  padding: '6px 16px',
                  fontSize: '9.5px',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  borderRadius: '0'
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.borderColor = 'var(--brand-purple)'; 
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(121, 82, 255, 0.2)'; 
                  e.currentTarget.style.background = 'rgba(121, 82, 255, 0.1)';
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.borderColor = 'rgba(121, 82, 255, 0.3)'; 
                  e.currentTarget.style.boxShadow = 'none'; 
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                ✕ CLOSE MONITOR
              </button>
            </div>

            {/* Video Content Container (Responsive YouTube Embed Frame) */}
            <div 
              style={{ 
                width: '100%', 
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 Aspect Ratio
                height: 0,
                background: '#020104',
                overflow: 'hidden'
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.src}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block'
                }}
              />
            </div>

            {/* Title / Description Grading Lab Details Panel */}
            <div style={{ 
              padding: '24px 32px', 
              borderTop: '1px solid rgba(128, 128, 128, 0.2)', 
              background: 'rgba(4, 3, 7, 0.3)' 
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--brand-purple)', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                  {selectedVideo.category}
                </span>
                <span style={{ fontSize: '9px', fontFamily: 'monospace', color: 'var(--muted-color)', letterSpacing: '2px' }}>
                  STATUS: STREAM_VERIFIED // Rec.709
                </span>
              </div>
              
              <h2 style={{ 
                fontSize: '1.6rem', 
                fontFamily: 'var(--font-display)', 
                color: 'var(--accent-color)', 
                letterSpacing: '-0.5px', 
                textTransform: 'uppercase', 
                fontWeight: 'bold', 
                margin: 0,
                marginBottom: '8px'
              }}>
                {selectedVideo.title}
              </h2>
              
              <p style={{ 
                fontSize: '13px', 
                color: 'var(--muted-color)', 
                lineHeight: 1.5, 
                fontFamily: 'var(--font-sans)', 
                margin: 0 
              }}>
                {selectedVideo.details}
              </p>
            </div>

          </div>
        </div>,
        document.body
      )}

      {/* Embedded CSS rules for high-density cards & UI animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .video-card:hover {
          border-color: var(--brand-purple) !important;
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(121, 82, 255, 0.05);
        }
        .video-card:hover img {
          transform: scale(1.05);
        }
        .video-card:hover .play-overlay-hint {
          opacity: 1;
        }
        
        /* Monospace font-face and blinking animations */
        @keyframes rawBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .blinking-led {
          animation: rawBlink 1.4s infinite ease-in-out;
        }

        /* Clean display helpers */
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
        }
      `}} />

    </div>
  );
}
