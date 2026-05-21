import type { Metadata } from 'next';
import VideosGallery from '../../components/VideosGallery';

export const metadata: Metadata = {
  title: 'FURYXZIA — Video Production & VFX Showreels',
  description: 'High-end cinema editing, motion graphics, and sound composition reel showcases by Furyxzia. // 2026',
};

export default function VideosPage() {
  return (
    <div style={{ padding: '160px 0 120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Clean, Elegant Heading Structure */}
      <div style={{ width: '100%', maxWidth: '1400px', padding: '0 5%', marginBottom: '60px', alignSelf: 'center' }}>
        <span style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--brand-purple)', letterSpacing: '4px', textTransform: 'uppercase', display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          CINEMATIC MOTION
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '-1.5px', margin: 0, fontWeight: 'bold', lineHeight: 0.9 }}>
          VIDEO PROJECTS
        </h1>
      </div>

      {/* Videos Gallery Component */}
      <VideosGallery />

    </div>
  );
}
