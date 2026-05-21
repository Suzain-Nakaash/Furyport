'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
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

  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  return (
    <header 
      className={isScrolledDown ? 'header-hidden' : ''} 
      style={{ 
        padding: '10px 5%', 
        borderBottom: '1px solid rgba(128, 128, 128, 0.1)', 
        background: theme === 'light' ? 'rgba(255, 255, 255, 0.75)' : 'rgba(10, 10, 10, 0.7)', 
        backdropFilter: 'blur(20px)', 
        WebkitBackdropFilter: 'blur(20px)', 
        boxShadow: 'none'
      }}
    >
      <div className="nav-container">
        <Link href="/" className="nav-logo interactive" style={{ marginRight: '40px' }}>
          <img 
            src="/assets/Furyxzia_logo_00000-depositphotos-bgremover.png" 
            alt="Furyxzia Logo" 
            style={{ height: '30px', width: 'auto', objectFit: 'contain' }} 
          />
        </Link>

        <div className="nav-left">
          <Link href="/work" className={`nav-link-minimal interactive ${isActive('/work')}`} style={{ marginLeft: 0 }}>
            Works
          </Link>
          <Link href="/videos" className={`nav-link-minimal interactive ${isActive('/videos')}`}>
            Videos
          </Link>
          <Link href="/about" className={`nav-link-minimal interactive ${isActive('/about')}`}>
            About
          </Link>
        </div>

        <div className="nav-right">
          <Link href="/contact" className={`nav-link-minimal interactive ${isActive('/contact')}`}>
            Contact
          </Link>
          <a href="https://www.instagram.com/furyxzia" target="_blank" rel="noopener noreferrer" className="nav-link-minimal interactive">
            Instagram ↗
          </a>
          <a href="https://www.youtube.com/@furyxzia" target="_blank" rel="noopener noreferrer" className="nav-link-minimal interactive hide-on-mobile">
            YouTube ↗
          </a>
          <a href="https://payhip.com/Furyxzia" target="_blank" rel="noopener noreferrer" className="nav-link-minimal interactive hide-on-mobile">
            Store ↗
          </a>
          
          {/* Custom Industrial Pill Switch Toggle */}
          <div 
            onClick={toggleTheme}
            className="interactive"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              marginLeft: '25px',
              userSelect: 'none'
            }}
          >
            <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', letterSpacing: '1.5px', color: 'var(--muted-color)', textTransform: 'uppercase', fontWeight: 600 }}>
              {theme === 'light' ? 'LIGHT' : 'DARK'}
            </span>
            <div 
              style={{
                width: '34px',
                height: '18px',
                background: theme === 'light' ? 'var(--brand-purple)' : 'rgba(128, 128, 128, 0.15)',
                border: '1px solid rgba(128, 128, 128, 0.2)',
                borderRadius: '9px',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div 
                style={{
                  width: '12px',
                  height: '12px',
                  background: theme === 'light' ? '#fff' : 'var(--muted-color)',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '2px',
                  left: theme === 'light' ? '18px' : '2px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
