'use client';

import Link from 'next/link';
import { useTheme } from '../components/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      {/* 1. Hero Landing Section */}
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

            {/* Giant Center typography */}
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

            {/* Right side floating list */}
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

      {/* 2. Works Preview (Slider & Portal Link) */}
      <section className="gallery-section" id="works">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 5%', marginBottom: '20px' }}>
          <div>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', width: '100%', maxWidth: '1400px' }}>
          
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
              minHeight: '380px'
            }}
          >
            <div style={{ position: 'relative', borderLeft: '2px solid var(--brand-purple)', paddingLeft: '15px' }}>
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
            <div>
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
              minHeight: '380px'
            }}
          >
            <div style={{ position: 'relative', borderLeft: '2px solid var(--brand-purple)', paddingLeft: '15px' }}>
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
            <div>
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
              minHeight: '380px'
            }}
          >
            <div style={{ position: 'relative', borderLeft: '2px solid var(--brand-purple)', paddingLeft: '15px' }}>
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
            <div>
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
