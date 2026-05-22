'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeContext';
import { createPortal } from 'react-dom';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    return pathname === path ? 'active' : '';
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header 
        style={{ 
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: isScrolledDown ? 'translate(-50%, -100px)' : 'translate(-50%, 0)',
          width: '90%',
          maxWidth: '1200px',
          padding: '10px 40px',
          borderRadius: '100px',
          background: theme === 'light' 
            ? 'rgba(255, 255, 255, 0.75)' 
            : 'rgba(10, 10, 10, 0.65)',
          border: theme === 'light' 
            ? '1px solid rgba(121, 82, 255, 0.15)' 
            : '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(24px) saturate(140%)',
          WebkitBackdropFilter: 'blur(24px) saturate(140%)',
          boxShadow: theme === 'light'
            ? '0 12px 40px rgba(121, 82, 255, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
            : '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          zIndex: 100,
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div className="nav-container" style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left: Logo container */}
          <div style={{ flex: '1 1 0%', display: 'flex', justifyContent: 'flex-start' }}>
            <Link href="/" className="nav-logo interactive" style={{ display: 'flex', alignItems: 'center' }} onClick={closeMenu}>
              <img 
                src="/assets/Furyxzia_logo_00000-depositphotos-bgremover.png" 
                alt="Furyxzia Logo" 
                style={{ height: '28px', width: 'auto', objectFit: 'contain' }} 
              />
            </Link>
          </div>

          {/* Center: Main Navigation Links (Desktop Only) */}
          <div className="desktop-only" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Link href="/" className={`nav-link-minimal interactive ${isActive('/')}`} style={{ margin: '0 12px' }}>
              Home
            </Link>
            <Link href="/work" className={`nav-link-minimal interactive ${isActive('/work')}`} style={{ margin: '0 12px' }}>
              Works
            </Link>
            <Link href="/videos" className={`nav-link-minimal interactive ${isActive('/videos')}`} style={{ margin: '0 12px' }}>
              Videos
            </Link>
            <Link href="/about" className={`nav-link-minimal interactive ${isActive('/about')}`} style={{ margin: '0 12px' }}>
              About
            </Link>
            <Link href="/contact" className={`nav-link-minimal interactive ${isActive('/contact')}`} style={{ margin: '0 12px' }}>
              Contact
            </Link>
          </div>

          {/* Right: Theme Toggle & Hamburger */}
          <div style={{ flex: '1 1 0%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px' }}>
            {/* Custom Industrial Pill Switch Toggle (Desktop Only) */}
            <div 
              onClick={toggleTheme}
              className="interactive desktop-only"
              style={{
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
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

            {/* Hamburger Button (Mobile Only) */}
            <div 
              className="mobile-only interactive"
              onClick={() => setIsMobileMenuOpen(true)}
              style={{ cursor: 'pointer', padding: '5px', display: 'flex', flexDirection: 'column', gap: '4px' }}
            >
              <div style={{ width: '24px', height: '2px', background: 'var(--accent-color)' }} />
              <div style={{ width: '24px', height: '2px', background: 'var(--accent-color)' }} />
              <div style={{ width: '16px', height: '2px', background: 'var(--accent-color)', alignSelf: 'flex-end' }} />
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mounted && createPortal(
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: theme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(4, 3, 7, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 999999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: isMobileMenuOpen ? 1 : 0,
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
            transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Close Button */}
          <div 
            onClick={closeMenu}
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              cursor: 'pointer',
              padding: '10px',
              color: 'var(--accent-color)'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center' }}>
            <Link href="/" className={`nav-link-minimal ${isActive('/')}`} onClick={closeMenu} style={{ fontSize: '1.5rem' }}>
              Home
            </Link>
            <Link href="/work" className={`nav-link-minimal ${isActive('/work')}`} onClick={closeMenu} style={{ fontSize: '1.5rem' }}>
              Works
            </Link>
            <Link href="/videos" className={`nav-link-minimal ${isActive('/videos')}`} onClick={closeMenu} style={{ fontSize: '1.5rem' }}>
              Videos
            </Link>
            <Link href="/about" className={`nav-link-minimal ${isActive('/about')}`} onClick={closeMenu} style={{ fontSize: '1.5rem' }}>
              About
            </Link>
            <Link href="/contact" className={`nav-link-minimal ${isActive('/contact')}`} onClick={closeMenu} style={{ fontSize: '1.5rem' }}>
              Contact
            </Link>
          </div>

          {/* Mobile Theme Toggle */}
          <div 
            onClick={() => { toggleTheme(); closeMenu(); }}
            style={{
              marginTop: '50px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              cursor: 'pointer',
              border: '1px solid rgba(128, 128, 128, 0.2)',
              padding: '12px 24px',
              borderRadius: '30px',
              background: theme === 'light' ? 'rgba(121, 82, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'
            }}
          >
            <span style={{ fontSize: '12px', fontFamily: 'var(--font-sans)', letterSpacing: '2px', color: 'var(--accent-color)', textTransform: 'uppercase', fontWeight: 600 }}>
              SWITCH TO {theme === 'light' ? 'DARK' : 'LIGHT'}
            </span>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
