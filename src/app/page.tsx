'use client';

import Link from 'next/link';
import { useTheme } from '../components/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      {/* 1. Hero Landing Section */}
      <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        
        {/* Distress Grain & Subtle Noise (Reference 2 calligraphic grit texture) */}
        <div className="hud-distress-grain" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }} />
        
        {/* Slow Technical Scanning Laser Line */}
        <div className="laser-scanner-line" style={{ zIndex: 1 }} />

        {/* Ambient floating design particles */}
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
        
        {/* Main Neo-Tokyo Cyber-Japanese HUD Console Framework (Reference 1, 3, & 4) */}
        <div 
          className="hero-hud-frame" 
          style={{ 
            position: 'absolute', 
            top: '110px', 
            bottom: '70px', 
            left: '4%', 
            right: '4%', 
            pointerEvents: 'none', 
            zIndex: 2, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-between',
            border: 'none',
            padding: '20px',
            backgroundColor: 'transparent'
          }}
        >

          {/* Top HUD Console Row (Reference 1 Top Panel) */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            width: '100%', 
            borderBottom: '1px solid rgba(128, 128, 128, 0.15)',
            paddingBottom: '14px',
            position: 'relative'
          }}>
            {/* Top Left: _B42 Technical Tray with Crossed X's */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold', color: 'var(--accent-color)', letterSpacing: '2px' }}>_B42</span>
              
              {/* Mini bracket with + (Reference 1, top left) */}
              <div style={{ border: '1px solid var(--brand-purple)', padding: '2px 6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', color: 'var(--brand-purple)', fontFamily: 'monospace', fontWeight: 'bold' }}>
                +
              </div>
              
              {/* Crossed X segment (Reference 1) */}
              <div style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '4px', color: 'var(--accent-color)', fontWeight: 'bold', opacity: 0.8 }} className="hide-on-mobile">
                ✕✕✕✕
              </div>
              
              {/* Small horizontal barcode block */}
              <div className="tech-barcode-horiz hide-on-mobile" style={{ width: '100px', height: '12px' }} />
            </div>

            {/* Top Center details (Image 4 poster style) */}
            <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ fontSize: '8.5px', fontFamily: 'monospace', letterSpacing: '2px', color: 'var(--muted-color)' }}>
                NEOTOKYO // SYSTEM_NODE_ACTIVE // ARS/26.04
              </div>
              <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--brand-purple)', borderRadius: '50%' }} />
            </div>

            {/* Top Right: Page index & brackets */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Chevron indicators */}
              <span style={{ fontSize: '9px', fontFamily: 'monospace', letterSpacing: '1px', color: 'var(--brand-purple)' }}>&gt;&gt;&gt;&gt;</span>
              
              {/* Diagonal circles symbol ⊘ (Reference 1) */}
              <span style={{ fontSize: '12px', fontFamily: 'monospace', color: 'var(--accent-color)' }}>⊘</span>
              
              {/* Checkerboard segment (Reference 1) */}
              <div className="tech-checkerboard hide-on-mobile" style={{ width: '45px', height: '12px' }} />
              
              {/* Bracketed index */}
              <div style={{ border: '1px solid rgba(128,128,128,0.25)', padding: '2px 8px', fontSize: '9.5px', fontFamily: 'monospace', color: 'var(--accent-color)' }}>
                PAGE / 001
              </div>
            </div>
          </div>

          {/* Left HUD Vertical Border Column (Reference 1 Left side) */}
          <div className="hide-on-mobile" style={{ 
            position: 'absolute', 
            left: '20px', 
            top: '70px', 
            bottom: '70px', 
            width: '30px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '20px 0'
          }}>
            {/* Tech tag B42 */}
            <div style={{ transform: 'rotate(-90deg)', fontSize: '8px', fontFamily: 'monospace', color: 'var(--muted-color)', letterSpacing: '2px', whiteSpace: 'nowrap' }}>
              _B42_SYSTEM_LOG
            </div>
            
            {/* Plus marker in brackets */}
            <div style={{ fontSize: '9px', fontFamily: 'monospace', color: 'var(--brand-purple)' }}>[ + ]</div>
            
            {/* Checker stripes (Reference 1 stripes) */}
            <div className="tech-barcode-vert" style={{ width: '8px', height: '110px' }} />
            
            {/* Crossed X indicators (Reference 1) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold', color: 'var(--accent-color)', opacity: 0.8 }}>
              <div>✕</div>
              <div>✕</div>
            </div>
            
            {/* Curved dashed reticle (Reference 1, bottom left) */}
            <svg width="24" height="24" viewBox="0 0 100 100" style={{ color: 'var(--brand-purple)', opacity: 0.55 }}>
              <path d="M 10 50 A 40 40 0 0 0 50 90" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="8 8" />
            </svg>
          </div>

          {/* Right HUD Vertical Border Column (Reference 1 Right side) */}
          <div className="hide-on-mobile" style={{ 
            position: 'absolute', 
            right: '20px', 
            top: '70px', 
            bottom: '70px', 
            width: '35px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '20px 0'
          }}>
            {/* Diamond column ◆◆◆ */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', color: 'var(--accent-color)', fontSize: '9px' }}>
              <div>◆</div>
              <div>◆</div>
              <div>◆</div>
              <div>◆</div>
            </div>
            
            {/* Vertical Scroll telemetry bar (Reference 1 middle right) */}
            <div style={{ width: '4px', height: '100px', background: 'rgba(128,128,128,0.15)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '30%', left: 0, width: '100%', height: '20px', background: 'var(--brand-purple)' }} />
            </div>

            {/* Checkerboard vertical bar */}
            <div className="tech-checkerboard" style={{ width: '10px', height: '50px' }} />

            {/* Technical scale ticks */}
            <div className="tech-barcode-dense-vert" style={{ width: '6px', height: '90px' }} />

            {/* Heart Outline with Crosshair (Reference 1 Bottom Right - WyHXnR Signature!) */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--brand-purple)', opacity: 0.8 }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              <line x1="12" y1="5" x2="12" y2="12" strokeWidth="1" strokeDasharray="1 1" />
              <line x1="8" y1="8.5" x2="16" y2="8.5" strokeWidth="1" strokeDasharray="1 1" />
            </svg>
          </div>

          {/* Center Area (Grid & Neo-Tokyo calligraphic masterpiece) */}
          <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px 0' }}>
            
            {/* Left side vertical telemetry column */}
            <div className="hide-on-mobile" style={{ position: 'absolute', left: '6%', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '30px', borderLeft: '1px solid rgba(121, 82, 255, 0.15)', paddingLeft: '24px' }}>
              {/* Kanji Calligraphy block */}
              <div className="telemetry-vertical-text" style={{ fontFamily: '"Noto Serif JP", serif', fontSize: 'clamp(1rem, 1.8vw, 2.2rem)', color: 'var(--accent-color)', letterSpacing: '14px', fontWeight: 900 }}>
                夏の夜道と冬の海
              </div>
              <div className="telemetry-vertical-text" style={{ fontFamily: 'var(--font-sans)', fontSize: '9.5px', color: 'var(--muted-color)', letterSpacing: '6px', paddingTop: '40px', fontWeight: 'bold' }}>
                BURIAL OF BLACK SARANA
              </div>
            </div>

            {/* Centerpiece: Hybrid Neo-Tokyo Cyber-Japanese Typography (Reference 2) */}
            <div style={{ 
              position: 'relative', 
              zIndex: 5, 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              textAlign: 'center',
              padding: '0 40px'
            }}>
              


              {/* Main Calligraphic Japanese Title (Reference 2) */}
              <h1 
                className="sajou-brush-sweep"
                style={{ 
                  fontSize: 'clamp(3rem, 7.5vw, 6.6rem)', 
                  fontFamily: '"Noto Serif JP", "Georgia", serif', 
                  fontWeight: 900, 
                  letterSpacing: '12px',
                  lineHeight: 1.1,
                  margin: 0,
                  color: 'var(--accent-color)',
                  textShadow: '0 0 35px rgba(121, 82, 255, 0.15)',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                幽玄虚像
              </h1>

              {/* Distressed Calligraphic Sweep Underline SVG (Reference 2 Brush Stroke) */}
              <svg 
                width="100%" 
                height="30" 
                viewBox="0 0 500 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ 
                  marginTop: '-5px', 
                  color: 'var(--brand-purple)',
                  opacity: 0.85,
                  maxWidth: '460px'
                }}
              >
                {/* Master brush path sweep */}
                <path 
                  d="M10 15 C120 4, 380 28, 490 15 C390 24, 110 0, 10 15 Z" 
                  fill="currentColor" 
                />
                {/* Secondary thin structural trace line (Reference 2 style) */}
                <path 
                  d="M40 17 C160 8, 340 22, 460 17" 
                  stroke="var(--accent-color)" 
                  strokeWidth="0.75" 
                  opacity="0.4"
                />
              </svg>

              {/* Elegant Handwritten Cursive Translation (Reference 2 Subtitle) */}
              <p 
                style={{ 
                  fontSize: 'clamp(14px, 2vw, 19px)', 
                  fontFamily: '"Satisfy", "Caveat", "Brush Script MT", cursive',
                  color: 'var(--muted-color)', 
                  margin: '10px 0 0 0',
                  letterSpacing: '1px',
                  fontWeight: 400,
                  opacity: 0.9,
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}
              >
                Fragments of emotion rendered in light
              </p>
              
              {/* Small high-tech visual sub-label (Reference 4 Sport of adrenaline vibe) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '30px' }}>
                <div style={{ width: '40px', height: '1px', background: 'rgba(128,128,128,0.2)' }} />
                <span style={{ fontSize: '9px', fontFamily: 'monospace', letterSpacing: '4px', color: 'var(--brand-purple)', textTransform: 'uppercase', fontWeight: 'bold' }}>
                  NEO_CINEMATIC_STUDIO
                </span>
                <div style={{ width: '40px', height: '1px', background: 'rgba(128,128,128,0.2)' }} />
              </div>
            </div>

            {/* Right side floating project list (Reference 4 poster lists) */}
            <div className="hide-on-mobile" style={{ position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '35px', borderRight: '1px solid rgba(121, 82, 255, 0.15)', paddingRight: '24px', alignItems: 'flex-end' }}>
              {[
                { num: '01', jp: 'ブラックサラナの埋葬', en: 'TOKYO, JAPAN' },
                { num: '02', jp: '午前４時のバカンス', en: 'CG & VFX EXPERIMENTALIST' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', textAlign: 'right' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 900, fontSize: '13px', letterSpacing: '3px', color: 'var(--accent-color)', borderBottom: '1px solid rgba(121, 82, 255, 0.3)', paddingBottom: '6px' }}>
                      {item.jp}
                    </div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '2px', color: 'var(--muted-color)', fontWeight: 'bold' }}>{item.en}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-color)', letterSpacing: '-1px', lineHeight: 1 }}>{item.num}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom HUD Console Row (Reference 1 Bottom Panel) */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            width: '100%', 
            borderTop: '1px solid rgba(128, 128, 128, 0.15)',
            paddingTop: '14px',
            position: 'relative'
          }}>
            {/* Bottom Left: warning blocks & HANDLE_WITH_CARE; */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '3px' }} className="hud-blink-warning">
                <div style={{ width: '8px', height: '8px', background: '#FF3B30' }} />
                <div style={{ width: '8px', height: '8px', background: '#FF3B30' }} />
              </div>
              
              <span style={{ fontSize: '9px', fontFamily: 'monospace', letterSpacing: '2.5px', color: 'var(--accent-color)', fontWeight: 'bold' }}>
                /// HANDLE_WITH_CARE;
              </span>
            </div>

            {/* Bottom Center reticles & designs */}
            <div className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              {/* Design watermark WyHXnR (Reference 1 bottom center) */}
              <span style={{ fontSize: '8px', fontFamily: 'monospace', letterSpacing: '1px', color: 'var(--muted-color)', opacity: 0.7 }}>
                DESIGNED BY FURYPORT // CO-OP LABS
              </span>
              
              {/* Miniature crossed blocks */}
              <div style={{ display: 'flex', gap: '6px', fontSize: '9px', fontFamily: 'monospace', color: 'var(--brand-purple)', fontWeight: 'bold' }}>
                <span>[✕]</span>
                <span>[+]</span>
              </div>
            </div>

            {/* Bottom Right: GPS Coordinates & Calibration */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              {/* Mini reticle */}
              <span style={{ fontSize: '10px', fontFamily: 'monospace', color: 'var(--brand-purple)' }}>∅</span>
              
              <span style={{ fontSize: '9px', fontFamily: 'monospace', letterSpacing: '3px', color: 'var(--accent-color)' }}>
                [ LAT: 35.6762° N // LON: 139.6503° E ]
              </span>
            </div>
          </div>
          
        </div>

        {/* Custom technical scroll tracker scanner (Reference 1 & 4 Style) */}
        <div 
          className="hide-on-mobile"
          style={{ 
            position: 'absolute', 
            bottom: '82px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '8px',
            zIndex: 4,
            pointerEvents: 'none'
          }}
        >
          <span style={{ fontSize: '8.5px', fontFamily: 'monospace', letterSpacing: '3px', color: 'var(--brand-purple)', textTransform: 'uppercase', fontWeight: 'bold' }}>
            SCROLL TO EXPLORE
          </span>
          {/* Scanning box sliding down a track */}
          <div style={{ width: '1px', height: '42px', background: 'rgba(128,128,128,0.2)', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '14px',
              background: 'var(--brand-purple)',
              boxShadow: '0 0 4px var(--brand-purple)',
              animation: 'scrollSlideHUD 1.8s cubic-bezier(0.16, 1, 0.3, 1) infinite'
            }} />
          </div>
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes scrollSlideHUD {
              0% { top: -14px; }
              100% { top: 42px; }
            }
          `}} />
        </div>
      </section>

      {/* 2. Works Preview (Slider & Portal Link) */}
      <section className="gallery-section" id="works">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 5%', marginBottom: '30px', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--brand-purple)', letterSpacing: '4px', textTransform: 'uppercase' }}>
              EXHIBITION PREVIEW
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '2.2rem', marginTop: '5px', letterSpacing: '-0.5px' }}>
              LAB COMPOSITIONS
            </h2>
          </div>
          <Link href="/work" className="nav-btn interactive" style={{ margin: 0, padding: '10px 28px', fontSize: '11px', fontWeight: 'bold' }}>
            VIEW FULL ARCHIVE ↗
          </Link>
        </div>

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

            {/* Loop duplications */}
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

      {/* 3. Section Previews (About & Videos & Contact Mini-Grid) */}
      <section style={{ padding: '100px 5%', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '30px', width: '100%', maxWidth: '1400px' }}>
          
          {/* About Teaser Card */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: '40px', 
              border: '1px solid rgba(128,128,128,0.2)', 
              background: 'var(--bg-color)', 
              borderRadius: '0', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '380px',
              textAlign: 'center',
              alignItems: 'center'
            }}
          >
            <div style={{ position: 'relative', borderBottom: '2px solid var(--brand-purple)', paddingBottom: '15px' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                CREATOR DOSSIER
              </span>
              <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', textTransform: 'uppercase', marginTop: '5px', letterSpacing: '-0.5px' }}>
                COMMAND SERVICE MODULE
              </h3>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--muted-color)', lineHeight: 1.7, fontFamily: 'var(--font-sans)', margin: '30px 0' }}>
              Pushing a signature aesthetic structured on sharp geometry, light dispersion, and balanced composition. Learn about the Tokyo visual studio, academic origins, and core visions.
            </p>
            <div style={{ width: '100%' }}>
              <Link href="/about" className="nav-btn interactive" style={{ margin: 0, width: '100%', textAlign: 'center', fontWeight: 'bold' }}>
                EXPLORE BIOGRAPHY ↗
              </Link>
            </div>
          </div>

          {/* Videos Teaser Card */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: '40px', 
              border: '1px solid rgba(128,128,128,0.2)', 
              background: 'var(--bg-color)', 
              borderRadius: '0', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '380px',
              textAlign: 'center',
              alignItems: 'center'
            }}
          >
            <div style={{ position: 'relative', borderBottom: '2px solid var(--brand-purple)', paddingBottom: '15px' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                MEDIA LAB
              </span>
              <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', textTransform: 'uppercase', marginTop: '5px', letterSpacing: '-0.5px' }}>
                VIDEO PRODUCTION
              </h3>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--muted-color)', lineHeight: 1.7, fontFamily: 'var(--font-sans)', margin: '30px 0' }}>
              Showcasing cinematic direction, commercial advertising edits, experimental volumetric lighting, and high-frequency audio integrations in the sound studio.
            </p>
            <div style={{ width: '100%' }}>
              <Link href="/videos" className="nav-btn interactive" style={{ margin: 0, width: '100%', textAlign: 'center', fontWeight: 'bold' }}>
                ENTER MEDIA HALL ↗
              </Link>
            </div>
          </div>

          {/* Contact Teaser Card */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: '40px', 
              border: '1px solid rgba(128,128,128,0.2)', 
              background: 'var(--bg-color)', 
              borderRadius: '0', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '380px',
              textAlign: 'center',
              alignItems: 'center'
            }}
          >
            <div style={{ position: 'relative', borderBottom: '2px solid var(--brand-purple)', paddingBottom: '15px' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                SYSTEM NODE
              </span>
              <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', textTransform: 'uppercase', marginTop: '5px', letterSpacing: '-0.5px' }}>
                TRANSMISSION CHANNEL
              </h3>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--muted-color)', lineHeight: 1.7, fontFamily: 'var(--font-sans)', margin: '30px 0' }}>
              Initiate a secure connection to collaborate. Commissions are open for high-end cinematic edits, 3D composits, visual effects direction, or motion graphics projects.
            </p>
            <div style={{ width: '100%' }}>
              <Link href="/contact" className="nav-btn interactive" style={{ margin: 0, width: '100%', textAlign: 'center', fontWeight: 'bold' }}>
                INITIATE CONTACT ↗
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
