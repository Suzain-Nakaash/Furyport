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
    <header className={isScrolledDown ? 'header-hidden' : ''}>
      <div className="nav-container">
        <Link href="/" className="nav-logo interactive">
          <img src="/assets/Furyxzia_logo_00000-depositphotos-bgremover.png" alt="Furyxzia Logo" className="logo-img" />
        </Link>

        <div className="nav-left">
          <Link href="/work" className={`nav-btn interactive ${isActive('/work')}`} style={{ marginLeft: 0 }}>
            Works
          </Link>
          <Link href="/videos" className={`nav-btn interactive ${isActive('/videos')}`}>
            Videos
          </Link>
          <Link href="/about" className={`nav-btn interactive ${isActive('/about')}`}>
            About
          </Link>
        </div>

        <div className="nav-right">
          <Link href="/contact" className={`nav-btn interactive ${isActive('/contact')}`}>
            Contact
          </Link>
          <a href="https://www.instagram.com/furyxzia" target="_blank" rel="noopener noreferrer" className="nav-btn interactive">
            Instagram ↗
          </a>
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
  );
}
