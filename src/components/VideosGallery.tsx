'use client';

import { useState, useEffect, useRef } from 'react';
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
    src: '/assets/思い思い出 - 原口沙輔【visualizer】 - 原口沙輔 (1080p, h264).mp4',
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

  // Custom playback controller states
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // Refs for video node and progress scrubber
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrubbingRef = useRef(false);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Update a ref to track isPlaying in event handlers without triggering re-runs
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

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

  // Sync state with HTML5 Video element API
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!isScrubbingRef.current) {
        setCurrentTime(video.currentTime);
      }
    };

    const handleDurationChange = () => {
      setDuration(video.duration);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      video.currentTime = 0;
      setCurrentTime(0);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    // Initial value checks
    if (video.duration) setDuration(video.duration);
    setIsMuted(video.muted);
    setVolume(video.volume);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, [selectedVideo]);

  // Watch for fullscreen change events triggered natively by browser
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Intelligent mouse inactivity auto-hide cursor & controls
  useEffect(() => {
    if (!selectedVideo) {
      document.body.classList.remove('hide-cursor');
      return;
    }

    let idleTimer: NodeJS.Timeout;

    const resetIdleTimer = () => {
      document.body.classList.remove('hide-cursor');
      setShowControls(true);

      clearTimeout(idleTimer);

      if (isPlayingRef.current) {
        idleTimer = setTimeout(() => {
          document.body.classList.add('hide-cursor');
          setShowControls(false);
        }, 2500);
      }
    };

    const modalElement = document.getElementById('video-modal-container');
    if (modalElement) {
      modalElement.addEventListener('mousemove', resetIdleTimer);
      modalElement.addEventListener('mousedown', resetIdleTimer);
    }

    resetIdleTimer();

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('mousemove', resetIdleTimer);
        modalElement.removeEventListener('mousedown', resetIdleTimer);
      }
      clearTimeout(idleTimer);
      document.body.classList.remove('hide-cursor');
    };
  }, [selectedVideo, isPlaying]);

  // Modal custom keyboard interaction controller
  useEffect(() => {
    if (!selectedVideo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case ' ':
          e.preventDefault();
          togglePlay();
          break;
        case 'm':
        case 'M':
          toggleMute();
          break;
        case 'ArrowRight':
          e.preventDefault();
          seek(5);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          seek(-5);
          break;
        case 'Escape':
          e.preventDefault();
          closeModal();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo, isPlaying, isMuted]);

  // Video Action Functions
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !videoRef.current.muted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const val = parseFloat(e.target.value);
    videoRef.current.volume = val;
    setVolume(val);
    if (val === 0) {
      videoRef.current.muted = true;
      setIsMuted(true);
    } else {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const seek = (seconds: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = Math.max(0, Math.min(videoRef.current.duration, videoRef.current.currentTime + seconds));
    setCurrentTime(videoRef.current.currentTime);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Timeline Progress Scrubber Scrubber Engine
  const handleTimelineMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    isScrubbingRef.current = true;
    scrub(e.nativeEvent);

    const handleMouseMove = (moveEvent: MouseEvent) => {
      scrub(moveEvent);
    };

    const handleMouseUp = () => {
      isScrubbingRef.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const scrub = (e: MouseEvent) => {
    if (!videoRef.current || !timelineRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const boundedPos = Math.max(0, Math.min(1, pos));
    videoRef.current.currentTime = boundedPos * videoRef.current.duration;
    setCurrentTime(videoRef.current.currentTime);
  };

  // Formatting utility for timecodes
  const formatTime = (time: number) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const pad = (num: number) => String(num).padStart(2, '0');
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  const openModal = (video: VideoProject) => {
    setSelectedVideo(video);
    setIsPlaying(true); // Automatically trigger playback on load
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
    setCurrentTime(0);
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

            <div style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '145px', borderBottom: '1px solid rgba(128,128,128,0.15)' }}>
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
            ref={containerRef}
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
                  RAW FEED // MON_0{selectedVideo.id}
                </span>
              </div>

              {/* Center telemetry */}
              <div className="desktop-only" style={{ fontSize: '9px', fontFamily: 'monospace', letterSpacing: '1.5px', color: 'var(--muted-color)', opacity: 0.8 }}>
                COLOR SPACE: DCI-P3 // CODEC: PRORES_422_HQ // FREQ: 48.0 KHZ
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

            {/* Video Content Container */}
            <div 
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxHeight: '520px', 
                background: '#020104', 
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <video
                ref={videoRef}
                src={selectedVideo.src}
                autoPlay
                playsInline
                style={{
                  width: '100%',
                  maxHeight: '520px',
                  display: 'block',
                  margin: '0 auto',
                  objectFit: 'contain'
                }}
              />

              {/* Cinematic HUD Technical Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                opacity: showControls ? 0.75 : 0,
                transition: 'opacity 0.5s ease',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                fontSize: '9px',
                color: 'rgba(255, 255, 255, 0.45)',
                letterSpacing: '1px',
                zIndex: 10
              }}>
                {/* Top telemetry inside video frame */}
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <div>TIMECODE: 00:0{selectedVideo.id}:{formatTime(currentTime)}:18</div>
                  <div>STATUS: {isPlaying ? 'PLAYBACK_ACTIVE' : 'PLAYBACK_PAUSED'}</div>
                </div>
                
                {/* Bottom telemetry inside video frame */}
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '60px' }}>
                  <div>RATE: 45.2 MBPS // BITRATE: CBR</div>
                  <div>DCI-P3 GAMUT // Rec.709 SIM</div>
                </div>
              </div>

              {/* Custom Controller Overlay Panel */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  background: 'linear-gradient(to top, rgba(4, 3, 7, 0.95) 0%, rgba(4, 3, 7, 0.7) 80%, transparent 100%)',
                  backdropFilter: 'blur(8px)',
                  borderTop: '1px solid rgba(121, 82, 255, 0.15)',
                  padding: '16px 24px 20px 24px',
                  opacity: showControls ? 1 : 0,
                  transform: showControls ? 'translateY(0)' : 'translateY(15px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                  zIndex: 20
                }}
              >
                {/* Timeline Scrubber Container */}
                <div 
                  ref={timelineRef}
                  onMouseDown={handleTimelineMouseDown}
                  style={{
                    width: '100%',
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    position: 'relative',
                    cursor: 'pointer',
                    marginBottom: '14px',
                    transition: 'height 0.15s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.height = '8px'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.height = '6px'; }}
                >
                  {/* Progress line */}
                  <div style={{
                    height: '100%',
                    width: `${(currentTime / (duration || 1)) * 100}%`,
                    background: 'linear-gradient(to right, var(--brand-purple), #a28fff)',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }} />
                  
                  {/* Playhead handle block */}
                  <div style={{
                    width: '8px',
                    height: '14px',
                    background: '#fff',
                    border: '1px solid var(--brand-purple)',
                    position: 'absolute',
                    left: `${(currentTime / (duration || 1)) * 100}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none'
                  }} />
                </div>

                {/* Control Buttons Panel */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  
                  {/* Playback & Volume Area */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Play / Pause Toggle button */}
                    <button
                      onClick={togglePlay}
                      className="interactive"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-purple)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                    >
                      {isPlaying ? (
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.5 3.5A.5.5 0 0 1 6 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                        </svg>
                      )}
                    </button>

                    {/* Volume Controller Block */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        onClick={toggleMute}
                        className="interactive"
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#fff',
                          cursor: 'pointer',
                          padding: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-purple)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                      >
                        {isMuted || volume === 0 ? (
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
                          </svg>
                        ) : (
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.536 14.01A8.473 8.473 0 0 0 14 8c0-2.29-.904-4.37-2.37-5.914a.5.5 0 0 0-.748.665A7.473 7.473 0 0 1 13 8a7.473 7.473 0 0 1-2.21 5.26a.5.5 0 0 0 .746.75zm-2.58-2.58A5.474 5.474 0 0 0 10 8c0-1.5-.61-2.86-1.595-3.84a.5.5 0 0 0-.708.708C8.423 5.58 8.8 6.74 8.8 8c0 1.26-.377 2.42-.903 3.13a.5.5 0 1 0 .708.708zm-2.239-2.24a2.97 2.97 0 0 0 .428-1.583c0-.685-.23-1.317-.617-1.815a.5.5 0 1 0-.78.625c.257.32.407.724.407 1.19c0 .438-.137.848-.363 1.194a.5.5 0 0 0 .825.59zM4.707 5.5H2a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h2.707l3.147 3.146A.5.5 0 0 0 9 13V3a.5.5 0 0 0-.854-.354L4.707 5.5z"/>
                          </svg>
                        )}
                      </button>
                      
                      {/* Horizontal Volume Scrubber */}
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="interactive"
                        style={{
                          width: '60px',
                          height: '3px',
                          background: 'rgba(255,255,255,0.2)',
                          outline: 'none',
                          cursor: 'pointer',
                          borderRadius: '0',
                          appearance: 'none',
                          WebkitAppearance: 'none'
                        }}
                      />
                    </div>

                    {/* Monospace High-Precision Timecode */}
                    <div style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--muted-color)', letterSpacing: '1px', marginLeft: '4px' }}>
                      {formatTime(currentTime)} <span style={{ color: 'rgba(128,128,128,0.5)' }}>//</span> {formatTime(duration)}
                    </div>
                  </div>

                  {/* Right section: Fullscreen Toggle */}
                  <div>
                    <button
                      onClick={toggleFullscreen}
                      className="interactive"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-purple)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}
                    >
                      {isFullscreen ? (
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4A.5.5 0 0 0 5 4.5v-4A.5.5 0 0 1 5.5 0zm9.5 5.5a.5.5 0 0 1-.5.5h-4A1.5 1.5 0 0 1 9 4.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 .5.5zM6 11.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5zm5 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-3.5h3.5a.5.5 0 0 0 0-1h-4zM10 .5a.5.5 0 0 0 0 1h3.5v3.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5h-4zM.5 10a.5.5 0 0 0 .5.5h3.5a.5.5 0 0 0 0-1h-3.5v-3.5a.5.5 0 0 0-1 0v4zm14 0a.5.5 0 0 0-.5-.5h-3.5a.5.5 0 0 0 0 1h3.5v3.5a.5.5 0 0 0 1 0v-4z"/>
                        </svg>
                      )}
                    </button>
                  </div>

                </div>
              </div>

            </div>

            {/* Title / Description Grading Lab Details Panel */}
            <div style={{ 
              padding: '24px 32px', 
              borderTop: '1px solid rgba(128,128,128,0.2)', 
              background: 'rgba(4, 3, 7, 0.3)' 
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--brand-purple)', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                  {selectedVideo.category}
                </span>
                <span style={{ fontSize: '9px', fontFamily: 'monospace', color: 'var(--muted-color)', letterSpacing: '2px' }}>
                  STATUS: GRADE_VERIFIED // BT.1886
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
        .video-card:hover video {
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

        /* Custom volume slider thumb */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 6px;
          height: 12px;
          background: var(--brand-purple);
          border-radius: 0px;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          width: 6px;
          height: 12px;
          background: var(--brand-purple);
          border-radius: 0px;
          cursor: pointer;
          border: none;
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
