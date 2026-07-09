'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Track position purely in refs to avoid re-renders
  const positionRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Use requestAnimationFrame for the absolute smoothest visual updates
    const updateCursor = () => {
      cursor.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      requestRef.current = requestAnimationFrame(updateCursor);
    };

    requestRef.current = requestAnimationFrame(updateCursor);

    // Only update ref on mouse move, let rAF handle DOM
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current.x = e.clientX;
      positionRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="custom-arrow-cursor" ref={cursorRef}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2L10.5 21.5L14 14L21.5 10.5L4 2Z" fill="currentColor" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
