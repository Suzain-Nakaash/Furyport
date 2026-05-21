'use client';

import { ThemeProvider } from './ThemeContext';
import CinematicBackground from './CinematicBackground';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {/* Background canvas overlay */}
      <div className="grid-bg"></div>
      <CinematicBackground />

      {/* Persistent Cursor */}
      <CustomCursor />

      {/* Global Header / Navigation */}
      <Navbar />

      {/* Primary page shell */}
      <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {children}
      </main>

      {/* Reusable Footer */}
      <Footer />
    </ThemeProvider>
  );
}
