'use client';

import { useEffect, useRef, useState } from 'react';
import CinematicBackground from '../components/CinematicBackground';
import ContactTerminal from '../components/ContactTerminal';

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [isThemeHovered, setIsThemeHovered] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      cursor.classList.add('hovered');
      cursorDot.classList.add('hovered');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hovered');
      cursorDot.classList.remove('hovered');
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

      <CinematicBackground />

      <header className={isScrolledDown ? 'header-hidden' : ''}>
        <div className="nav-container">
          <div className="nav-left">
            <a href="#works" className="nav-btn interactive" style={{ marginLeft: 0 }}>Works</a>
            <a href="#video" className="nav-btn interactive">Video</a>
            <a href="#about" className="nav-btn interactive">About</a>
          </div>

          <div className="nav-center interactive">
            <img src="/assets/Furyxzia_logo_00000-depositphotos-bgremover.png" alt="Furyxzia Logo" className="logo-img" />
          </div>

          <div className="nav-right">
            <a href="#contact" className="nav-btn interactive">Contact</a>
            <a href="https://www.instagram.com/furyxzia" target="_blank" rel="noopener noreferrer" className="nav-btn interactive">Instagram ↗</a>
            <button
              id="theme-toggle"
              className="nav-btn interactive"
              onClick={toggleTheme}
            >
              {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="particles-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <img src="/assets/Comp_1_00011.png" alt="Particle" style={{ position: 'absolute', top: '20%', left: '15%', width: '120px', opacity: 0.4, filter: 'blur(4px)', animation: 'floatParticle 8s ease-in-out infinite' }} />
          <img src="/assets/Comp_1_00069.png" alt="Particle" style={{ position: 'absolute', top: '65%', right: '10%', width: '180px', opacity: 0.3, filter: 'blur(5px)', animation: 'floatParticle 10s ease-in-out infinite reverse' }} />
          <img src="/assets/Live_as_you_should_00085.png" alt="Particle" style={{ position: 'absolute', top: '80%', left: '20%', width: '90px', opacity: 0.5, filter: 'blur(3px)', animation: 'floatParticle 7s ease-in-out infinite' }} />
          <img src="/assets/frame_00089.png" alt="Particle" style={{ position: 'absolute', top: '25%', right: '20%', width: '140px', opacity: 0.4, filter: 'blur(4px)', animation: 'floatParticle 9s ease-in-out infinite 2s' }} />
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes floatParticle {
              0%, 100% { transform: translateY(0) rotate(0deg); }
              50% { transform: translateY(-40px) rotate(15deg); }
            }
          `}} />
        </div>
        {/* HUD Frame */}
        <div className="hero-hud-frame" style={{ position: 'absolute', top: '120px', bottom: '80px', left: '5%', right: '5%', pointerEvents: 'none', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>
          
          {/* Top Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderTop: '1px solid rgba(128,128,128,0.2)', paddingTop: '15px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
               <div style={{ width: '4px', height: '4px', background: 'var(--brand-purple)', marginTop: '8px' }}></div>
               <div>
                 <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2vw, 24px)', letterSpacing: '6px', color: 'var(--accent-color)', fontWeight: 'bold', textTransform: 'uppercase' }}>DARSHAN ARSID</div>
                 <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '4px', color: 'var(--muted-color)', textTransform: 'uppercase', marginTop: '6px' }}>Visual Artist // Director</div>
               </div>
            </div>
            
            <div className="hide-on-mobile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '3px', color: 'var(--muted-color)', textTransform: 'uppercase' }}>AR/17 — 20/.0610</div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '1px', background: 'var(--accent-color)' }}></div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '4px', color: 'var(--accent-color)' }}>AGE: 21</div>
              </div>
            </div>
          </div>

          {/* Center Area (Grid & Typography) */}
          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px 0' }}>
            
            {/* Massive Faint Background Logo (Light Theme Only) */}
            <img 
              src="/assets/Furyxzia_logo_00000-depositphotos-bgremover.png" 
              alt="Furyxzia Background Logo" 
              style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: 'clamp(250px, 40vw, 800px)', 
                opacity: 0.15, 
                objectFit: 'contain', 
                filter: 'none',
                display: theme === 'dark' ? 'none' : 'block',
                WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 90%)',
                maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 90%)'
              }} 
            />

            {/* Huge Vertical Japanese Text */}
            <div className="hide-on-mobile" style={{ position: 'absolute', left: '2%', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '30px' }}>
              <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2vw, 2.5rem)', color: 'var(--accent-color)', letterSpacing: '15px', fontWeight: 300 }}>
                夏の夜道と冬の海
              </div>
              <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'var(--muted-color)', letterSpacing: '8px', paddingTop: '60px' }}>
                BURIAL OF BLACK SARANA
              </div>
            </div>

            {/* Giant Center typography inspired by UW Design poster */}
            <div className="hide-on-mobile" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                 <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 'bold', color: 'var(--accent-color)', lineHeight: 0.8, letterSpacing: '-2px' }}>D</div>
                 <div style={{ width: '1px', height: '60px', background: 'var(--accent-color)', opacity: 0.3 }}></div>
                 <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 'bold', color: 'var(--accent-color)', lineHeight: 0.8, letterSpacing: '-2px' }}>H</div>
                 <div style={{ width: '1px', height: '60px', background: 'var(--accent-color)', opacity: 0.3 }}></div>
                 <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 'bold', color: 'var(--accent-color)', lineHeight: 0.8, letterSpacing: '-2px' }}>U</div>
                 <div style={{ width: '1px', height: '60px', background: 'var(--accent-color)', opacity: 0.3 }}></div>
                 <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 'bold', color: 'var(--accent-color)', lineHeight: 0.8, letterSpacing: '-2px' }}>2</div>
                 <div style={{ width: '1px', height: '60px', background: 'var(--accent-color)', opacity: 0.3 }}></div>
                 <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 'bold', color: 'var(--accent-color)', lineHeight: 0.8, letterSpacing: '-2px' }}>6</div>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '12px', color: 'var(--brand-purple)', textTransform: 'uppercase', paddingLeft: '12px' }}>
                C I N E M A T I C S
              </div>
            </div>

            {/* Right side floating list like the Japanese poster */}
            <div className="hide-on-mobile" style={{ position: 'absolute', right: '2%', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {[
                { num: '01', jp: 'ブラックサラナの埋葬', en: 'TOKYO, JAPAN' },
                { num: '02', jp: '午前４時のバカンス', en: 'CG & VFX EXPERIMENTALIST' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)', letterSpacing: '-1px', lineHeight: 1 }}>{item.num}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', letterSpacing: '4px', color: 'var(--accent-color)', borderBottom: '1px solid rgba(121, 82, 255, 0.3)', paddingBottom: '6px' }}>
                      {item.jp}
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '2px', color: 'var(--muted-color)' }}>{item.en}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom Row HUD */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
               <div style={{ display: 'flex', gap: '5px' }}>
                 {[1,2,3].map(n => <div key={n} style={{ width: '15px', height: '4px', background: n === 1 ? 'var(--brand-purple)' : 'rgba(128,128,128,0.3)' }}></div>)}
               </div>
               <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '4px', color: 'var(--muted-color)' }}>SYSTEM ACTIVE</div>
            </div>
            
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '4px', color: 'var(--accent-color)' }}>
               [ LAT: 35.6762° N // LON: 139.6503° E ]
            </div>
          </div>
          
        </div>

        <div className="scroll-indicator" style={{ zIndex: 1 }}>Scroll down</div>
      </section>

      <section className="gallery-section" id="works">

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
        <h2 className="section-title glass-panel" style={{ display: 'inline-block', padding: '10px 30px', marginBottom: '40px' }}>Video Production</h2>
        <div className="video-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div className="video-card glass-panel interactive" style={{ padding: '20px', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <video src="/assets/PB 1.mp4" autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '0', objectFit: 'cover', height: '220px' }}></video>
            <h3 style={{ marginTop: '20px', fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>Project Alpha</h3>
            <p style={{ color: 'var(--muted-color)', fontSize: '1rem', marginTop: '5px' }}>Commercial Editing VFX</p>
          </div>
          <div className="video-card glass-panel interactive" style={{ padding: '20px', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <video src="/assets/PB 2.mp4" autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '0', objectFit: 'cover', height: '220px' }}></video>
            <h3 style={{ marginTop: '20px', fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>Neon Dreams</h3>
            <p style={{ color: 'var(--muted-color)', fontSize: '1rem', marginTop: '5px' }}>Music Video Color Grading</p>
          </div>
          <div className="video-card glass-panel interactive" style={{ padding: '20px', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <video src="/assets/PB 3.mp4" autoPlay loop muted playsInline style={{ width: '100%', borderRadius: '0', objectFit: 'cover', height: '220px' }}></video>
            <h3 style={{ marginTop: '20px', fontSize: '1.4rem', fontFamily: 'var(--font-display)' }}>Synthetic Life</h3>
            <p style={{ color: 'var(--muted-color)', fontSize: '1rem', marginTop: '5px' }}>3D Animation Sound Design</p>
          </div>
        </div>
      </section>

      <ContactTerminal />

      <div id="about" style={{ position: 'relative', width: '100%', paddingBottom: '120px', display: 'flex', justifyContent: 'center' }}>
        <section className="glass-panel" style={{ width: '100%', maxWidth: '1400px', margin: '0 5%', position: 'relative', overflow: 'hidden', border: '1px solid rgba(128,128,128,0.2)', display: 'grid', gridTemplateColumns: '1fr 1.2fr', background: 'var(--bg-color)', minHeight: '700px' }}>
          
          <video src="/assets/SD mat2.mp4" autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.1, pointerEvents: 'none', borderRadius: '0' }}></video>
          
          {/* Tech/HUD decorations */}
          <div style={{ position: 'absolute', top: '30px', left: '30px', width: '15px', height: '15px', borderTop: '1px solid var(--accent-color)', borderLeft: '1px solid var(--accent-color)', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', top: '30px', right: '30px', width: '15px', height: '15px', borderTop: '1px solid var(--accent-color)', borderRight: '1px solid var(--accent-color)', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', bottom: '30px', left: '30px', width: '15px', height: '15px', borderBottom: '1px solid var(--accent-color)', borderLeft: '1px solid var(--accent-color)', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', bottom: '30px', right: '30px', width: '15px', height: '15px', borderBottom: '1px solid var(--accent-color)', borderRight: '1px solid var(--accent-color)', zIndex: 1 }}></div>
          
          {/* Top Info Bar (Like CSM/Apollo ref) */}
          <div style={{ position: 'absolute', top: '35px', left: '60px', right: '60px', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '3px', color: 'var(--accent-color)', textTransform: 'uppercase', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '12px', zIndex: 2 }}>
            <div>INFOGRAPHICS / BIO_DATA</div>
            <div style={{ display: 'flex', gap: '40px' }}>
              <span className="hide-on-mobile">VOL.01 AE.</span>
              <span className="hide-on-mobile">VISCOM.17 / 2026©</span>
              <span>13</span>
            </div>
          </div>

          {/* Large Vertical Text overlay (like THE SHOW ref) */}
          <div style={{ position: 'absolute', top: '50%', left: '40%', transform: 'translate(-50%, -50%)', zIndex: 1, pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: 0.03 }}>
            <div style={{ fontSize: '35vw', lineHeight: '0.8', margin: 0, fontFamily: 'var(--font-display)', letterSpacing: '-15px', color: 'var(--accent-color)', fontWeight: 'bold' }}>F/X</div>
          </div>

          {/* Left Column: Traditional / Japanese Vertical layout */}
          <div className="about-left-col" style={{ position: 'relative', zIndex: 2, padding: '120px 50px 50px 60px', display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(128,128,128,0.1)' }}>
            
            <div style={{ display: 'flex', gap: '30px', height: '350px' }}>
              <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--accent-color)', letterSpacing: '15px' }}>
                世界に対するビジョン
              </div>
              <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--muted-color)', letterSpacing: '6px', marginTop: '60px' }}>
                いつか自分を愛してみたい
              </div>
              
              <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                 <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--brand-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <div style={{ width: '16px', height: '16px', background: 'var(--accent-color)', borderRadius: '50%' }}></div>
                 </div>
                 <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontFamily: 'var(--font-sans)', fontSize: '10px', color: 'var(--accent-color)', letterSpacing: '4px', textTransform: 'uppercase' }}>
                   AR/17 - 20/.0610
                 </div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
              <div style={{ fontSize: '6rem', fontFamily: 'var(--font-display)', fontWeight: 'bold', color: 'var(--accent-color)', letterSpacing: '-4px', lineHeight: 0.8 }}>21</div>
              <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '8px' }}>
                <div style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '4px', textTransform: 'uppercase' }}>Current Age</div>
                <div style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '4px', textTransform: 'uppercase' }}>Design Cycle</div>
              </div>
            </div>
          </div>

          {/* Right Column: English Tech details & Biography */}
          <div className="about-right-col" style={{ position: 'relative', zIndex: 2, padding: '120px 60px 50px 60px', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ marginBottom: '60px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '10px', left: '-20px', width: '2px', height: '40px', background: 'var(--brand-purple)' }}></div>
              <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', letterSpacing: '-0.5px', marginBottom: '25px', textTransform: 'uppercase' }}>Command and Service Module (CSM)</h2>
              <p style={{ fontSize: '14px', color: 'var(--muted-color)', lineHeight: 1.8, fontFamily: 'var(--font-sans)', maxWidth: '450px' }}>
                Furyxzia is a multidisciplinary digital studio specializing in high-end cinematic video editing, visual effects, and complex 3D aesthetics. Pushing a signature look built on seamless transitions, sharp geometry, and structural balance, the work challenges contemporary visual storytelling norms.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '40px', marginBottom: '60px' }}>
              {[
                { label: 'BASE LOCATION', value: 'TOKYO, JAPAN' },
                { label: 'PRIMARY DISCIPLINE', value: 'MOTION / VFX / 3D' },
                { label: 'ACADEMIC / INST', value: 'DHU26' },
                { label: 'STATUS', value: 'COMMISSIONS OPEN', highlight: true }
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '5px' }}>
                    <div style={{ width: '4px', height: '4px', background: stat.highlight ? 'var(--brand-purple)' : 'var(--muted-color)' }}></div>
                    <div style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '2px' }}>{stat.label}</div>
                  </div>
                  <div style={{ fontSize: '13px', fontFamily: 'var(--font-sans)', color: stat.highlight ? 'var(--brand-purple)' : 'var(--accent-color)', fontWeight: 'bold', letterSpacing: '1px' }}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Tiny technical block like in the Ghost HUD */}
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '25px', borderTop: '1px dashed rgba(128,128,128,0.2)', paddingTop: '30px' }}>
              <div style={{ fontSize: '8px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '1px', lineHeight: 1.6, maxWidth: '280px' }}>
                EVENT HORIZON DOLOR SIT AMET, SINGULARITY ELIT SED DO. GRAVITATIONAL LENSING TEMPOR INCIDIDUNT UT LABORE. SPAGHETTIFICATION IPSUM GRAVITY, TIDAL FORCES EXTREME PRESSURE. ELONGATION ATOM BY ATOM.
              </div>
              
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[1,2,3,4,5].map(n => (
                    <div key={n} style={{ width: '4px', height: '4px', background: n > 3 ? 'transparent' : 'var(--accent-color)', border: '1px solid var(--accent-color)', borderRadius: '50%' }}></div>
                  ))}
                </div>
                <div style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--accent-color)', letterSpacing: '2px', fontWeight: 'bold' }}>NASA</div>
              </div>
            </div>
            
          </div>
          
        </section>
      </div>

      <footer style={{ background: 'transparent', borderTop: 'none', paddingBottom: '40px' }}>
        <div>&copy; 2026 FURYXZIA. All Rights Reserved.</div>
        <div>VISUAL NARRATIVES & ART</div>
      </footer>
    </>
  );
}
