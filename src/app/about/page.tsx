import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FURYXZIA — About & Professional Bio',
  description: 'Professional background, expertise, and capabilities for Darshan Arsid (Furyxzia). // 2026',
};

export default function AboutPage() {
  return (
    <div style={{ padding: '160px 0 120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Clean, Elegant Heading Structure */}
      <div style={{ width: '100%', maxWidth: '1400px', padding: '0 5%', marginBottom: '60px', alignSelf: 'center' }}>
        <span style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--brand-purple)', letterSpacing: '4px', textTransform: 'uppercase', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          PROFESSIONAL PROFILE
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '-1.5px', margin: 0, fontWeight: 'bold', lineHeight: 0.9 }}>
          ABOUT ME
        </h1>
      </div>

      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <section className="glass-panel" style={{ width: '100%', maxWidth: '1400px', margin: '0 5%', position: 'relative', overflow: 'hidden', border: '1px solid rgba(128,128,128,0.2)', display: 'grid', gridTemplateColumns: '1fr 1.2fr', background: 'var(--bg-color)', minHeight: '700px' }}>
          
          <video src="/assets/SD mat2.mp4" autoPlay loop muted playsInline style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.3, pointerEvents: 'none', borderRadius: '0' }}></video>
          
          {/* Tech/HUD decorations */}
          <div style={{ position: 'absolute', top: '30px', left: '30px', width: '15px', height: '15px', borderTop: '1px solid var(--accent-color)', borderLeft: '1px solid var(--accent-color)', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', top: '30px', right: '30px', width: '15px', height: '15px', borderTop: '1px solid var(--accent-color)', borderRight: '1px solid var(--accent-color)', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', bottom: '30px', left: '30px', width: '15px', height: '15px', borderBottom: '1px solid var(--accent-color)', borderLeft: '1px solid var(--accent-color)', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', bottom: '30px', right: '30px', width: '15px', height: '15px', borderBottom: '1px solid var(--accent-color)', borderRight: '1px solid var(--accent-color)', zIndex: 1 }}></div>
          
          {/* Top Info Bar */}
          <div style={{ position: 'absolute', top: '35px', left: '60px', right: '60px', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '3px', color: 'var(--accent-color)', textTransform: 'uppercase', borderBottom: '1px solid rgba(128,128,128,0.2)', paddingBottom: '12px', zIndex: 2 }}>
            <div>INFOGRAPHICS / BIO_DATA</div>
            <div style={{ display: 'flex', gap: '40px' }}>
              <span className="hide-on-mobile">VOL.01 AE.</span>
              <span className="hide-on-mobile">VISCOM.17 / 2026©</span>
              <span>13</span>
            </div>
          </div>

          {/* Left Column: Traditional / Japanese Vertical layout */}
          <div className="about-left-col" style={{ position: 'relative', zIndex: 2, padding: '120px 50px 50px 60px', display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(128,128,128,0.1)' }}>
            
            <div style={{ display: 'flex', gap: '30px', height: '350px' }}>
              <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--accent-color)', letterSpacing: '15px' }}>
                創造的な卓越性
              </div>
              <div style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--muted-color)', letterSpacing: '6px', marginTop: '60px' }}>
                常に進化を続ける
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
              <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', letterSpacing: '-0.5px', marginBottom: '25px', textTransform: 'uppercase' }}>Professional Overview</h2>
              <p style={{ fontSize: '14px', color: 'var(--muted-color)', lineHeight: 1.8, fontFamily: 'var(--font-sans)', maxWidth: '450px' }}>
                I am Darshan Arsid, the creative force behind Furyxzia, a digital studio specializing in high-end cinematic video editing, visual effects, and complex 3D aesthetics. My signature aesthetic is built on seamless transitions, sharp geometry, and structural balance, aiming to deliver professional, world-class visual storytelling that elevates brands and digital experiences.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '40px', marginBottom: '60px' }}>
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

            {/* Tiny technical block */}
            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '25px', borderTop: '1px dashed rgba(128,128,128,0.2)', paddingTop: '30px' }}>
              <div style={{ fontSize: '8px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '1px', lineHeight: 1.6, maxWidth: '280px' }}>
                DEDICATED TO DELIVERING HIGH-FIDELITY VISUAL EXPERIENCES. LEVERAGING INDUSTRY-STANDARD TOOLS AND ADVANCED WORKFLOWS TO BRING COMPLEX CREATIVE VISIONS TO LIFE WITH PRECISION AND SCALE.
              </div>
              
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[1,2,3,4,5].map(n => (
                    <div key={n} style={{ width: '4px', height: '4px', background: n > 3 ? 'transparent' : 'var(--accent-color)', border: '1px solid var(--accent-color)', borderRadius: '50%' }}></div>
                  ))}
                </div>
                <div style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--accent-color)', letterSpacing: '2px', fontWeight: 'bold' }}>PRO</div>
              </div>
            </div>
            
          </div>
          
        </section>
      </div>

    </div>
  );
}
