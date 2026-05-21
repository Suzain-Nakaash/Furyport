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
  {
    id: '01',
    title: 'PROJECT ALPHA',
    category: 'Commercial Editing & VFX',
    src: '/assets/PB 1.mp4',
    details: 'A high-velocity advertising sequence integrating live-action composites, quick rhythmic transitions, and digital geometry overlay designs.'
  },
  {
    id: '02',
    title: 'NEON DREAMS',
    category: 'Music Video Color Grading',
    src: '/assets/PB 2.mp4',
    details: 'A atmospheric nocturne tracking urban landscapes under heavy neon illumination. Explores low-light noise characteristics and vibrant HSL adjustments.'
  },
  {
    id: '03',
    title: 'SYNTHETIC LIFE',
    category: '3D Animation & Sound',
    src: '/assets/PB 3.mp4',
    details: 'An abstract mechanical design study mapping simulated physical collisions, glossy fluid textures, and metallic sheen attributes.'
  },
  {
    id: '04',
    title: 'EMPTY OLD CITY',
    category: 'Motion Design / Cinematic CG',
    src: '/assets/Empty old City - Vivop - Empty old City (1080p, h264).mp4',
    details: 'An experimental cinematic study exploring urban decay, spatial voids, and atmospheric lighting in a simulated futuristic metropolis.'
  },
  {
    id: '05',
    title: 'OMOIDE SHITA // 思い出した',
    category: 'Experimental Audio Visualizer',
    src: '/assets/思い出した - 原口沙輔【visualizer】 - 原口沙輔 (1080p, h264).mp4',
    details: 'Official visualizer composition for Sasuke Haraguchi (原口沙輔) featuring abstract typographic patterns and rhythmic digital motion forms.'
  },
  {
    id: '06',
    title: 'MIMASHOU // 見ましょう',
    category: 'Abstract Motion Art',
    src: '/assets/見ましょう - 原口沙輔【visualizer】 - 原口沙輔 (1080p, h264).mp4',
    details: 'Typographic CG visualizer conceptualized around low-fi screen characteristics, rhythmic synchronization, and minimalist modern layout templates.'
  }
];

export default function VideosGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const openModal = (video: VideoProject) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div style={{ width: '100%', maxWidth: '1400px', padding: '0 5%' }}>
      
      {/* Video Grid (Matching Works card sizing) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {videosList.map((video) => (
          <div
            key={video.id}
            className="video-card glass-panel interactive"
            onClick={() => openModal(video)}
            style={{
              padding: '20px',
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

            <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '170px', borderBottom: '1px solid rgba(128,128,128,0.15)' }}>
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '0',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              
              {/* Play Hint */}
              <div 
                className="play-overlay-hint"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'rgba(0,0,0,0.4)',
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
            
            <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', letterSpacing: '-0.5px', marginBottom: '6px', fontWeight: 'bold' }}>
              {video.title}
            </h3>

            <p style={{ fontSize: '12px', color: 'var(--muted-color)', lineHeight: 1.4, fontFamily: 'var(--font-sans)' }}>
              Click to unfold in fullscreen audio studio.
            </p>
          </div>
        ))}
      </div>

      {/* Fullscreen Video Modal (Rendered via React Portal at body level to prevent nav bar overlap issues) */}
      {selectedVideo && mounted && createPortal(
        <div
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.94)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(15px)',
            padding: '20px'
          }}
        >
          {/* Main Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '1100px',
              background: 'var(--bg-color)',
              border: '1px solid rgba(121, 82, 255, 0.3)',
              borderRadius: '0',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 40px 100px rgba(0, 0, 0, 0.8)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="interactive"
              style={{
                position: 'absolute',
                top: '-50px',
                right: '0',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#fff',
                padding: '8px 24px',
                fontSize: '11px',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
                borderRadius: '0'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brand-purple)'; e.currentTarget.style.color = 'var(--brand-purple)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = '#fff'; }}
            >
              CLOSE SYSTEM ✕
            </button>

            {/* Video Container */}
            <div style={{ width: '100%', height: 'auto', maxHeight: '550px', background: '#000', position: 'relative' }}>
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                style={{
                  width: '100%',
                  maxHeight: '550px',
                  display: 'block',
                  margin: '0 auto',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Title / Description Bar */}
            <div style={{ padding: '25px 35px', borderTop: '1px solid rgba(128,128,128,0.2)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--brand-purple)', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                  {selectedVideo.category}
                </span>
                <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '2px' }}>
                  SYSTEM: STEREO_OUTPUT // 48KHZ
                </span>
              </div>
              <h2 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', letterSpacing: '-1px', textTransform: 'uppercase', fontWeight: 'bold', margin: 0 }}>
                {selectedVideo.title}
              </h2>
              <p style={{ fontSize: '13.5px', color: 'var(--muted-color)', lineHeight: 1.5, fontFamily: 'var(--font-sans)', marginTop: '6px', margin: 0 }}>
                {selectedVideo.details}
              </p>
            </div>

          </div>
        </div>,
        document.body
      )}

      {/* Embedded CSS rules for hover effects */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .video-card:hover {
          border-color: var(--brand-purple) !important;
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(121, 82, 255, 0.05);
        }
        .video-card:hover video {
          transform: scale(1.05);
        }
        .video-card:hover .play-overlay-hint {
          opacity: 1;
        }
      `}} />

    </div>
  );
}
