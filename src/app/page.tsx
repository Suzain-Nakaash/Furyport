'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [isThemeHovered, setIsThemeHovered] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    const interactives = document.querySelectorAll('.interactive');
    
    const handleMouseEnter = () => {
      cursor.style.width = '55px';
      cursor.style.height = '55px';
      cursor.style.backgroundColor = document.documentElement.getAttribute('data-theme') === 'light' 
        ? 'rgba(59, 77, 224, 0.1)' 
        : 'rgba(255, 255, 255, 0.08)';
    };

    const handleMouseLeave = () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.backgroundColor = 'transparent';
    };

    interactives.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactives.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [theme]); // Re-bind if theme changes to update hover color

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      setTheme('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      setTheme('light');
    }
  };

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="custom-cursor-dot" ref={cursorDotRef}></div>

      <div className="grid-bg"></div>

      <header>
        <div className="nav-container">
          <div className="nav-left">
            <a href="#works" className="interactive" style={{ marginLeft: 0 }}>Works</a>
            <a href="#video" className="interactive">Video</a>
            <a href="#about" className="interactive">About</a>
          </div>
          
          <div className="nav-center interactive">
            <img src="/assets/Furyxzia_logo_00000-depositphotos-bgremover.png" alt="Furyxzia Logo" className="logo-img" />
          </div>

          <div className="nav-right">
            <a href="#contact" className="interactive">Contact</a>
            <a href="https://www.instagram.com/furyxzia" target="_blank" rel="noopener noreferrer" className="interactive">Instagram ↗</a>
            <button 
              id="theme-toggle" 
              className="interactive glass-panel"
              onClick={toggleTheme}
              onMouseEnter={() => setIsThemeHovered(true)}
              onMouseLeave={() => setIsThemeHovered(false)}
              style={{ 
                background: isThemeHovered ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.1)', 
                color: isThemeHovered ? 'var(--bg-color)' : 'var(--accent-color)', 
                border: '1px solid var(--accent-color)', 
                padding: '8px 16px', 
                borderRadius: '30px', 
                fontFamily: 'var(--font-sans)', 
                textTransform: 'uppercase', 
                fontSize: '0.75rem', 
                marginLeft: '30px', 
                transition: 'all 0.3s', 
                cursor: 'none' 
              }}
            >
              {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="particles-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <img src="/assets/Comp_1_00011.png" alt="Particle" style={{ position: 'absolute', top: '20%', left: '15%', width: '120px', opacity: 0.4, borderRadius: '15px', filter: 'blur(4px)', animation: 'floatParticle 8s ease-in-out infinite' }} />
          <img src="/assets/Comp_1_00069.png" alt="Particle" style={{ position: 'absolute', top: '65%', right: '10%', width: '180px', opacity: 0.3, borderRadius: '20px', filter: 'blur(5px)', animation: 'floatParticle 10s ease-in-out infinite reverse' }} />
          <img src="/assets/Live_as_you_should_00085.png" alt="Particle" style={{ position: 'absolute', top: '80%', left: '20%', width: '90px', opacity: 0.5, borderRadius: '12px', filter: 'blur(3px)', animation: 'floatParticle 7s ease-in-out infinite' }} />
          <img src="/assets/frame_00089.png" alt="Particle" style={{ position: 'absolute', top: '25%', right: '20%', width: '140px', opacity: 0.4, borderRadius: '18px', filter: 'blur(4px)', animation: 'floatParticle 9s ease-in-out infinite 2s' }} />
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes floatParticle {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-40px) rotate(15deg); }
            }
          `}} />
        </div>
        <h1 style={{ position: 'relative', zIndex: 1, textShadow: theme === 'light' ? '0 4px 30px rgba(0,51,255,0.4)' : '0 4px 30px rgba(255,255,255,0.2)' }}>
          ELEVATING<br />VISUAL NARRATIVES
        </h1>
        <p className="glass-panel" style={{ position: 'relative', zIndex: 1, padding: '15px 30px', display: 'inline-block', marginTop: '20px' }}>
          Cinematic Video Editing & Digital Art Portfolio // 2026
        </p>
        <div className="scroll-indicator" style={{ zIndex: 1 }}>Scroll down</div>
      </section>

      <section className="gallery-section" id="works">
        <h2 className="section-title glass-panel" style={{ display: 'inline-block', padding: '10px 30px', borderRadius: '30px', marginLeft: '5%', marginBottom: '0' }}>Abstract 3D Art</h2>
        <div className="slider-wrapper">
          <div className="slider-track">
            <div className="slide-item interactive">
              <img src="/assets/Comp_1_00011.png" alt="Art 01" className="slide-artwork-placeholder" />
            </div>
            <div className="slide-item interactive">
              <img src="/assets/Comp_1_00069.png" alt="Art 02" className="slide-artwork-placeholder" />
            </div>
            <div className="slide-item interactive">
              <img src="/assets/Comp_1_00087.png" alt="Art 03" className="slide-artwork-placeholder" />
            </div>
            <div className="slide-item interactive">
              <img src="/assets/Comp_1_00278.png" alt="Art 04" className="slide-artwork-placeholder" />
            </div>
            <div className="slide-item interactive">
              <img src="/assets/Live_as_you_should_00085.png" alt="Art 05" className="slide-artwork-placeholder" />
            </div>
            <div className="slide-item interactive">
              <img src="/assets/frame_00089.png" alt="Art 06" className="slide-artwork-placeholder" />
            </div>

            <div className="slide-item interactive">
              <img src="/assets/Comp_1_00011.png" alt="Art 01" className="slide-artwork-placeholder" />
            </div>
            <div className="slide-item interactive">
              <img src="/assets/Comp_1_00069.png" alt="Art 02" className="slide-artwork-placeholder" />
            </div>
            <div className="slide-item interactive">
              <img src="/assets/Comp_1_00087.png" alt="Art 03" className="slide-artwork-placeholder" />
            </div>
            <div className="slide-item interactive">
              <img src="/assets/Comp_1_00278.png" alt="Art 04" className="slide-artwork-placeholder" />
            </div>
            <div className="slide-item interactive">
              <img src="/assets/Live_as_you_should_00085.png" alt="Art 05" className="slide-artwork-placeholder" />
            </div>
            <div className="slide-item interactive">
              <img src="/assets/frame_00089.png" alt="Art 06" className="slide-artwork-placeholder" />
            </div>
          </div>
        </div>
      </section>

      <section className="video-section" id="video" style={{ padding: '100px 5%', position: 'relative', zIndex: 1 }}>
        <h2 className="section-title glass-panel" style={{ display: 'inline-block', padding: '10px 30px', borderRadius: '30px', marginBottom: '40px' }}>Video Production</h2>
        <div className="video-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div className="video-card glass-panel interactive" style={{ padding: '20px', borderRadius: '20px', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
             <video src="/assets/SD mat2.mp4" autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', height: '220px' }}></video>
             <h3 style={{ marginTop: '20px', fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>Project Alpha</h3>
             <p style={{ color: 'var(--muted-color)', fontSize: '1rem', marginTop: '5px' }}>Commercial Editing // VFX</p>
          </div>
          <div className="video-card glass-panel interactive" style={{ padding: '20px', borderRadius: '20px', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
             <video src="/assets/SD mat2.mp4" autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', height: '220px' }}></video>
             <h3 style={{ marginTop: '20px', fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>Neon Dreams</h3>
             <p style={{ color: 'var(--muted-color)', fontSize: '1rem', marginTop: '5px' }}>Music Video // Color Grading</p>
          </div>
          <div className="video-card glass-panel interactive" style={{ padding: '20px', borderRadius: '20px', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
             <video src="/assets/SD mat2.mp4" autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', height: '220px' }}></video>
             <h3 style={{ marginTop: '20px', fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>Synthetic Life</h3>
             <p style={{ color: 'var(--muted-color)', fontSize: '1rem', marginTop: '5px' }}>3D Animation // Sound Design</p>
          </div>
        </div>
      </section>

      <div id="about" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        <section className="info-section glass-panel" style={{ margin: '0 5% 100px 5%', maxWidth: '1400px', borderRadius: '40px', padding: '60px' }}>
          <div>
            <h2 className="bio-title">
              <span style={{ fontFamily: '"Honoka Mincho", serif', fontWeight: 'normal' }}>世界に対するビジョン</span> //
              <br />FURYXZIA
            </h2>
          </div>
          <div>
            <p className="bio-text">
              Furyxzia is a multidisciplinary digital studio specializing in
              high-end cinematic video editing, visual effects, and complex 3D aesthetics. Pushing a
              signature look built on seamless transitions, sharp geometry, and structural balance, the work
              challenges contemporary visual storytelling norms.
            </p>
            <ul className="meta-list">
              <li>
                <span className="meta-label">Focus</span>
                <span>Video Editing & Digital Art</span>
              </li>
              <li>
                <span className="meta-label">Est. Timeline</span>
                <span>2026 // Next-gen Narratives</span>
              </li>
              <li>
                <span className="meta-label">Source Network</span>
                <span><a href="https://www.instagram.com/furyxzia" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }} className="interactive">@furyxzia</a></span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <section className="contact-section" id="contact" style={{ padding: '0 5% 100px 5%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 40px', borderRadius: '40px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-display)', marginBottom: '20px', textTransform: 'uppercase' }}>Let's Collaborate</h2>
          <p style={{ color: 'var(--muted-color)', marginBottom: '40px', fontSize: '1.2rem' }}>Ready to elevate your visual identity with premium video editing and 3D art?</p>
          <a href="mailto:hello@furyxzia.com" className="interactive glass-panel" style={{ display: 'inline-block', padding: '18px 45px', fontSize: '1.1rem', textDecoration: 'none', color: 'var(--accent-color)', borderRadius: '30px', transition: 'all 0.3s', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-color)'; e.currentTarget.style.color = 'var(--bg-color)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; e.currentTarget.style.color = 'var(--accent-color)'; }}>
            Get In Touch
          </a>
        </div>
      </section>

      <footer style={{ background: 'transparent', borderTop: 'none', paddingBottom: '40px' }}>
        <div>&copy; 2026 FURYXZIA. All Rights Reserved.</div>
        <div>VISUAL NARRATIVES & ART</div>
      </footer>
    </>
  );
}
