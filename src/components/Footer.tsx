'use client';

export default function Footer() {
  return (
    <footer style={{ background: 'transparent', borderTop: 'none', paddingBottom: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
      {/* Aesthetic minimal inline social links */}
      <div 
        className="footer-social-row"
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '30px', 
          marginBottom: '5px' 
        }}
      >
        <a href="https://www.instagram.com/furyxzia" target="_blank" rel="noopener noreferrer" className="footer-link interactive" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', color: 'var(--muted-color)', transition: 'color 0.3s', fontWeight: 600 }}>INSTAGRAM</a>
        <a href="https://x.com/Furyxzia" target="_blank" rel="noopener noreferrer" className="footer-link interactive" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', color: 'var(--muted-color)', transition: 'color 0.3s', fontWeight: 600 }}>X (TWITTER)</a>
        <a href="https://www.youtube.com/@furyxzia" target="_blank" rel="noopener noreferrer" className="footer-link interactive" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', color: 'var(--muted-color)', transition: 'color 0.3s', fontWeight: 600 }}>YOUTUBE</a>
        <a href="https://payhip.com/Furyxzia" target="_blank" rel="noopener noreferrer" className="footer-link interactive" style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', color: 'var(--muted-color)', transition: 'color 0.3s', fontWeight: 600 }}>STORE</a>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', fontSize: '11px', color: 'var(--muted-color)' }}>
        <div>&copy; 2026 FURYXZIA. All Rights Reserved.</div>
        <div style={{ fontSize: '9px', letterSpacing: '3px', color: 'var(--muted-color)', opacity: 0.7 }}>VISUAL NARRATIVES & ART</div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer-link:hover {
          color: var(--accent-color) !important;
        }
      `}} />
    </footer>
  );
}
