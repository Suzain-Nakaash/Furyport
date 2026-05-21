import type { Metadata } from 'next';
import VideosGallery from '../../components/VideosGallery';

export const metadata: Metadata = {
  title: 'FURYXZIA — Video Production & VFX Showreels',
  description: 'High-end cinema editing, motion graphics, and sound composition reel showcases by Furyxzia. // 2026',
};

export default function VideosPage() {
  return (
    <div style={{ padding: '160px 0 120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Page Title */}
      <div style={{ width: '100%', maxWidth: '1400px', borderTop: '1px solid rgba(128,128,128,0.3)', borderBottom: '1px solid rgba(128,128,128,0.3)', padding: '30px 0', marginBottom: '60px', textAlign: 'center', margin: '0 5%' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '8px', margin: 0 }}>VIDEO PRODUCTION</h2>
      </div>

      {/* Videos Gallery Component */}
      <VideosGallery />

    </div>
  );
}
