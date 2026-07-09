'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeContext';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLImageElement>(null);
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half the width/height if you want it centered, 
      // or 0 if it's a pointer cursor pointing from top-left.
      // Usually custom image cursors point from top-left.
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Event delegation for hover states
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('.interactive')) {
        cursor.classList.add('hovered');
      } else {
        cursor.classList.remove('hovered');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mounted]);

  // Reset cursor hover state whenever the path changes to prevent sticky states
  useEffect(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.classList.remove('hovered');
    }
  }, [pathname]);

  if (!mounted) return null;

  return (
    <img
      src={theme === 'light' ? '/assets/cursor-blue.png' : '/assets/cursor-purple.png'}
      alt="Custom Cursor"
      className="custom-cursor-img"
      ref={cursorRef}
    />
  );
}
