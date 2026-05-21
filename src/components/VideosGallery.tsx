'use client';

import { useState, useEffect } from 'react';

interface VideoProject {
  id: string;
  title: string;
  category: string;
  src: string;
  details: string;
  resolution: string;
  fps: string;
  bitrate: string;
  duration: string;
}

const videosList: VideoProject[] = [
  {
    id: '01',
    title: 'PROJECT ALPHA',
    category: 'Commercial Editing & VFX',
    src: '/assets/PB 1.mp4',
    details: 'A high-velocity advertising sequence integrating live-action composites, quick rhythmic transitions, and digital geometry overlay designs.',
    resolution: '3840 x 2160 UHD',
    fps: '24.00 FPS',
    bitrate: '45 MBPS',
    duration: '0:12'
  },
  {
    id: '02',
    title: 'NEON DREAMS',
    category: 'Music Video Color Grading',
    src: '/assets/PB 2.mp4',
    details: 'An atmospheric nocturne tracking urban landscapes under heavy neon illumination. Explores low-light noise characteristics and vibrant HSL adjustments.',
    resolution: '1920 x 1080 FHD',
    fps: '23.976 FPS',
    bitrate: '28 MBPS',
    duration: '0:14'
  },
  {
    id: '03',
    title: 'SYNTHETIC LIFE',
    category: '3D Animation & Sound',
    src: '/assets/PB 3.mp4',
    details: 'An abstract mechanical design study mapping simulated physical collisions, glossy fluid textures, and metallic sheen attributes.',
    resolution: '3840 x 2160 UHD',
    fps: '30.00 FPS',
    bitrate: '52 MBPS',
    duration: '0:15'
  }
];

export default function VideosGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  // Lock body scroll and toggle navbar visibility state when modal is active
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('video-modal-active');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('video-modal-active');
      setIsTheaterMode(false); // Reset theater mode on close
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('video-modal-active');
    };
  }, [selectedVideo]);

  // Frame telemetry timer simulation (24 FPS) when modal is active
  useEffect(() => {
    if (!selectedVideo) return;
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % 3600);
    }, 41.67);
    return () => clearInterval(interval);
  }, [selectedVideo]);

  const openModal = (video: VideoProject) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div style={{ width: '100%', maxWidth: '1400px', padding: '0 5%' }}>
      
      {/* Video Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
        {videosList.map((video) => (
          <div
            key={video.id}
            className="video-card glass-panel interactive"
            onClick={() => openModal(video)}
            style={{
              padding: '24px',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s',
              background: 'var(--bg-color)',
              border: '1px solid rgba(128, 128, 128, 0.2)',
              borderRadius: '0',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            {/* Cinematic Frame Notch */}
            <div style={{ position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', borderRight: '1px solid var(--brand-purple)', borderTop: '1px solid var(--brand-purple)' }}></div>
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '8px', height: '8px', borderLeft: '1px solid var(--brand-purple)', borderBottom: '1px solid var(--brand-purple)' }}></div>

            <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '220px', borderBottom: '1px solid rgba(128,128,128,0.15)' }}>
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
              
              {/* Play hint on hover */}
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
                <div style={{ background: 'var(--brand-purple)', color: '#fff', padding: '12px 24px', fontSize: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '3px', fontWeight: 'bold' }}>
                  PLAY CINEMATIC ↗
                </div>
              </div>
            </div>

            <span style={{ display: 'inline-block', fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--brand-purple)', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '20px', marginBottom: '6px' }}>
              {video.category}
            </span>
            
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', letterSpacing: '-0.5px', marginBottom: '8px' }}>
              {video.title}
            </h3>

            <div style={{ display: 'flex', gap: '15px', color: 'var(--muted-color)', fontSize: '10px', fontFamily: 'var(--font-sans)', letterSpacing: '1px', marginTop: '5px' }}>
              <span>{video.resolution}</span>
              <span>•</span>
              <span>{video.fps}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Video Modal */}
      {selectedVideo && (
        <div
          onClick={closeModal}
          className="cinema-modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1000, // Sits perfectly above header (100) and below custom cursor (100000)
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            transition: 'all 0.3s ease'
          }}
        >
          {/* Main Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel cinema-modal-container"
            style={{
              width: '100%',
              maxWidth: isTheaterMode ? '95%' : '1200px',
              background: 'var(--bg-color)',
              border: '1px solid rgba(121, 82, 255, 0.4)',
              borderRadius: '0',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 40px 100px rgba(121, 82, 255, 0.15)',
              overflow: 'hidden',
              transition: 'max-width 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Viewport UI Technical Corners */}
            <div style={{ position: 'absolute', top: '15px', left: '15px', width: '12px', height: '12px', borderTop: '1px solid var(--muted-color)', borderLeft: '1px solid var(--muted-color)', zIndex: 10, opacity: 0.5 }}></div>
            <div style={{ position: 'absolute', top: '15px', right: '15px', width: '12px', height: '12px', borderTop: '1px solid var(--muted-color)', borderRight: '1px solid var(--muted-color)', zIndex: 10, opacity: 0.5 }}></div>
            <div style={{ position: 'absolute', bottom: '15px', left: '15px', width: '12px', height: '12px', borderBottom: '1px solid var(--muted-color)', borderLeft: '1px solid var(--muted-color)', zIndex: 10, opacity: 0.5 }}></div>
            <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '12px', height: '12px', borderBottom: '1px solid var(--muted-color)', borderRight: '1px solid var(--muted-color)', zIndex: 10, opacity: 0.5 }}></div>

            {/* Video Controller & Diagnostics Header Bar */}
            <div style={{ 
              padding: '18px 30px', 
              background: 'rgba(128, 128, 128, 0.03)', 
              borderBottom: '1px solid rgba(128, 128, 128, 0.15)', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              letterSpacing: '2px',
              color: 'var(--muted-color)',
              textTransform: 'uppercase'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: 'var(--brand-purple)', fontWeight: 'bold' }}>● RENDER_VIEWPORT</span>
                <span>/</span>
                <span className="hide-on-mobile">CAM_01_PERSPECTIVE</span>
                <span>/</span>
                <span style={{ color: 'var(--accent-color)' }}>FRAME: [{frameIndex.toString().padStart(6, '0')}]</span>
              </div>
              <div style={{ display: 'flex', gap: '30px' }} className="hide-on-mobile">
                <span>BITRATE: {selectedVideo.bitrate}</span>
                <span>FPS: {selectedVideo.fps}</span>
                <span>RES: {selectedVideo.resolution}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Widescreen Theater Mode Toggle */}
                <button
                  onClick={() => setIsTheaterMode(!isTheaterMode)}
                  className="interactive"
                  style={{
                    background: isTheaterMode ? 'var(--brand-purple)' : 'transparent',
                    border: '1px solid rgba(121, 82, 255, 0.4)',
                    color: isTheaterMode ? '#fff' : 'var(--accent-color)',
                    padding: '4px 12px',
                    fontSize: '9px',
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    borderRadius: '0',
                    marginRight: '12px'
                  }}
                >
                  {isTheaterMode ? 'THEATER ON ⛶' : 'THEATER OFF ⛶'}
                </button>

                <button
                  onClick={closeModal}
                  className="interactive"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(128, 128, 128, 0.3)',
                    color: 'var(--accent-color)',
                    padding: '4px 12px',
                    fontSize: '9px',
                    fontFamily: 'var(--font-sans)',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    borderRadius: '0'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brand-purple)'; e.currentTarget.style.color = 'var(--brand-purple)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(128, 128, 128, 0.3)'; e.currentTarget.style.color = 'var(--accent-color)'; }}
                >
                  CLOSE ✕
                </button>
              </div>
            </div>

            {/* Video Canvas Container */}
            <div style={{ 
              width: '100%', 
              height: 'auto', 
              maxHeight: isTheaterMode ? '72vh' : '550px', 
              background: '#000', 
              position: 'relative', 
              overflow: 'hidden',
              transition: 'max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              <video
                src={selectedVideo.src}
                controls
                autoPlay
                style={{
                  width: '100%',
                  maxHeight: isTheaterMode ? '70vh' : '520px',
                  display: 'block',
                  margin: '0 auto',
                  objectFit: 'contain',
                  background: '#000',
                  transition: 'max-height 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            </div>

            {/* Detailed Metadata Spec Sheet */}
            <div style={{ padding: '30px 40px', borderTop: '1px solid rgba(128, 128, 128, 0.15)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--brand-purple)', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                  {selectedVideo.category}
                </span>
                <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '2px' }} className="hide-on-mobile">
                  DECODING: HARDWARE_ACCEL // AUDIO_MONO_48KHZ // RATIO_16_9
                </span>
              </div>
              
              <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', letterSpacing: '-1.5px', textTransform: 'uppercase', margin: '5px 0' }}>
                {selectedVideo.title}
              </h2>
              
              <p style={{ fontSize: '13.5px', color: 'var(--muted-color)', lineHeight: 1.6, fontFamily: 'var(--font-sans)', maxWidth: '850px' }}>
                {selectedVideo.details}
              </p>

              {/* Technical specs footer */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '30px', 
                borderTop: '1px dashed rgba(128,128,128,0.2)', 
                paddingTop: '18px', 
                marginTop: '10px', 
                fontSize: '9px', 
                fontFamily: 'var(--font-sans)', 
                color: 'var(--muted-color)', 
                letterSpacing: '1px',
                alignItems: 'center'
              }}>
                <div>DURATION: {selectedVideo.duration}</div>
                <div>RENDER ENGINE: CINEMA 4D R26 / REDSHIFT</div>
                <div className="hide-on-mobile">CODEC: H.264 / LINEAR PCM</div>
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Dynamic HUD Equalizer VU Meter */}
                  <div className="hud-eq-container" style={{ marginRight: '5px' }}>
                    <div className="hud-eq-bar"></div>
                    <div className="hud-eq-bar"></div>
                    <div className="hud-eq-bar"></div>
                    <div className="hud-eq-bar"></div>
                    <div className="hud-eq-bar"></div>
                    <div className="hud-eq-bar"></div>
                    <div className="hud-eq-bar"></div>
                    <div className="hud-eq-bar"></div>
                    <div className="hud-eq-bar"></div>
                    <div className="hud-eq-bar"></div>
                  </div>
                  <span style={{ color: 'var(--brand-purple)', fontWeight: 'bold' }}>SYSTEM STATE: PLAYING_OK</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Embedded CSS rules for hover effects */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .video-card:hover {
          border-color: var(--brand-purple) !important;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(121, 82, 255, 0.08);
        }
        .video-card:hover video {
          transform: scale(1.04);
        }
        .video-card:hover .play-overlay-hint {
          opacity: 1;
        }
      `}} />

    </div>
  );
}

