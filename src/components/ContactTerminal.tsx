'use client';

import React from 'react';

export default function ContactTerminal() {
  return (
    <section
      id="contact-socials"
      style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 5% 80px 5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}
    >
      {/* Direct Ports Connection */}
      <div
        className="social-hub-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '30px',
          width: '100%',
        }}
      >

        {/* Instagram Hub Card */}
        <div
          className="social-card glass-panel interactive"
          style={{
            background: 'var(--contact-bg)',
            border: '1px solid var(--contact-border)',
            padding: '40px 35px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '0',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Neon Hue glow element inside card */}
          <div className="card-accent-glow ig-glow" />

          {/* Top Row: Brand & Handle */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(128,128,128,0.1)', paddingBottom: '20px', marginBottom: '25px' }}>
              <div>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: '#E1306C', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', fontWeight: 'bold' }}>
                  INSTAGRAM
                </span>
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', margin: '5px 0 0 0', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
                  furyxzia
                </h3>
              </div>

              {/* Sharp Industrial Square Icon Badge */}
              <div style={{ width: '40px', height: '40px', background: 'rgba(225, 48, 108, 0.04)', border: '1px solid rgba(225, 48, 108, 0.18)', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="4" ry="4"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </div>

            {/* Middle Row: Biography & Metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
              <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--muted-color)', margin: 0, fontWeight: 300 }}>
                Visual artist and experimentalist specializing in 3D abstract forms, spatial motion design, and high-fidelity CG simulations. Showcasing daily visual concepts and production lookdevs.
              </p>

              {/* Aesthetic flat architectural stats layout */}
              <div className="stats-row" style={{ display: 'flex', gap: '15px', borderTop: '1px solid rgba(128,128,128,0.1)', borderBottom: '1px solid rgba(128,128,128,0.1)', padding: '15px 0', marginTop: '5px' }}>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Followers</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>114K</span>
                </div>
                <div style={{ width: '1px', background: 'rgba(128,128,128,0.12)', alignSelf: 'stretch' }} />
                <div style={{ flex: 1, paddingLeft: '8px' }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Following</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>464</span>
                </div>
                <div style={{ width: '1px', background: 'rgba(128,128,128,0.12)', alignSelf: 'stretch' }} />
                <div style={{ flex: 1, paddingLeft: '8px' }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Focus</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>3D / CG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: QR & Connect Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginTop: 'auto' }}>
            {/* Interactive QR Framing */}
            <div className="qr-container">
              <div className="corner-bracket top-left"></div>
              <div className="corner-bracket top-right"></div>
              <div className="corner-bracket bottom-left"></div>
              <div className="corner-bracket bottom-right"></div>
              <div className="laser-line"></div>
              <img
                src="/assets/ig_qr.png"
                alt="Instagram QR Connection Port"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* Direct Connect Link */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Scan to view on mobile or click below
              </span>
              <a
                href="https://www.instagram.com/furyxzia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn interactive"
                style={{
                  padding: '14px 20px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(128,128,128,0.2)',
                  color: 'var(--accent-color)',
                  borderRadius: '0',
                  background: 'transparent',
                }}
              >
                <span>VISIT INSTAGRAM</span>
                <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}>
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* X (Twitter) Hub Card */}
        <div
          className="social-card glass-panel interactive"
          style={{
            background: 'var(--contact-bg)',
            border: '1px solid var(--contact-border)',
            padding: '40px 35px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '0',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Neon Hue glow element inside card */}
          <div className="card-accent-glow x-glow" />

          {/* Top Row: Brand & Handle */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(128,128,128,0.1)', paddingBottom: '20px', marginBottom: '25px' }}>
              <div>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'rgba(62, 100, 224, 1)', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', fontWeight: 'bold' }}>
                  X / TWITTER
                </span>
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', margin: '5px 0 0 0', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
                  @Furyxzia
                </h3>
              </div>

              {/* Sharp Industrial Square Icon Badge */}
              <div style={{ width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(128, 128, 128, 0.15)', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </div>

            {/* Middle Row: Biography & Metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
              <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--muted-color)', margin: 0, fontWeight: 300 }}>
                Director and motion designer. Sharing experimental CG workflows, project updates, visual direction breakdowns, sound design concepts, and industry collaborations.
              </p>

              {/* Aesthetic flat architectural stats layout */}
              <div style={{ display: 'flex', gap: '15px', borderTop: '1px solid rgba(128,128,128,0.1)', borderBottom: '1px solid rgba(128,128,128,0.1)', padding: '15px 0', marginTop: '5px' }}>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Followers</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>12.2K</span>
                </div>
                <div style={{ width: '1px', background: 'rgba(128,128,128,0.12)', alignSelf: 'stretch' }} />
                <div style={{ flex: 1, paddingLeft: '8px' }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Following</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>699</span>
                </div>
                <div style={{ width: '1px', background: 'rgba(128,128,128,0.12)', alignSelf: 'stretch' }} />
                <div style={{ flex: 1, paddingLeft: '8px' }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Location</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>TOKYO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: QR & Connect Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginTop: 'auto' }}>
            {/* Interactive QR Framing */}
            <div className="qr-container">
              <div className="corner-bracket top-left"></div>
              <div className="corner-bracket top-right"></div>
              <div className="corner-bracket bottom-left"></div>
              <div className="corner-bracket bottom-right"></div>
              <div className="laser-line"></div>
              <img
                src="/assets/x_qr.png"
                alt="X QR Connection Port"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* Direct Connect Link */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Scan to view on mobile or click below
              </span>
              <a
                href="https://x.com/Furyxzia?s=20"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn interactive"
                style={{
                  padding: '14px 20px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(128,128,128,0.2)',
                  color: 'var(--accent-color)',
                  borderRadius: '0',
                  background: 'transparent',
                }}
              >
                <span>VISIT X.COM</span>
                <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}>
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* YouTube Hub Card */}
        <div
          className="social-card glass-panel interactive"
          style={{
            background: 'var(--contact-bg)',
            border: '1px solid var(--contact-border)',
            padding: '40px 35px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '0',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Neon Hue glow element inside card */}
          <div className="card-accent-glow yt-glow" />

          {/* Top Row: Brand & Handle */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(128,128,128,0.1)', paddingBottom: '20px', marginBottom: '25px' }}>
              <div>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: '#FF0000', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', fontWeight: 'bold' }}>
                  YOUTUBE
                </span>
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', margin: '5px 0 0 0', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
                  furyxzia
                </h3>
              </div>

              {/* Sharp Industrial Square Icon Badge */}
              <div style={{ width: '40px', height: '40px', background: 'rgba(255, 0, 0, 0.04)', border: '1px solid rgba(255, 0, 0, 0.18)', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </div>
            </div>

            {/* Middle Row: Biography & Metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
              <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--muted-color)', margin: 0, fontWeight: 300 }}>
                Official repository for high-resolution 3D visualizers, production design showreels, cinematic video works, and experimental audio-visual synchronization breakdowns.
              </p>

              {/* Aesthetic flat statistics layout */}
              <div style={{ display: 'flex', gap: '15px', borderTop: '1px solid rgba(128,128,128,0.1)', borderBottom: '1px solid rgba(128,128,128,0.1)', padding: '15px 0', marginTop: '5px' }}>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Subscribers</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>4.5K</span>
                </div>
                <div style={{ width: '1px', background: 'rgba(128,128,128,0.12)', alignSelf: 'stretch' }} />
                <div style={{ flex: 1, paddingLeft: '8px' }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Type</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>VFX / CG</span>
                </div>
                <div style={{ width: '1px', background: 'rgba(128,128,128,0.12)', alignSelf: 'stretch' }} />
                <div style={{ flex: 1, paddingLeft: '8px' }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Resolution</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>4K UHD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Waveform play port & Connect Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginTop: 'auto' }}>
            {/* Interactive Technical Viewfinder HUD */}
            <div className="qr-container">
              <div className="corner-bracket top-left"></div>
              <div className="corner-bracket top-right"></div>
              <div className="corner-bracket bottom-left"></div>
              <div className="corner-bracket bottom-right"></div>
              <div className="laser-line"></div>
              <img
                src="/assets/yt_qr.png"
                alt="YouTube QR Connection Port"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* Direct Connect Link */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Tune into the direct channel link below
              </span>
              <a
                href="https://www.youtube.com/@furyxzia"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn interactive"
                style={{
                  padding: '14px 20px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(128,128,128,0.2)',
                  color: 'var(--accent-color)',
                  borderRadius: '0',
                  background: 'transparent',
                }}
              >
                <span>WATCH YOUTUBE</span>
                <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}>
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Payhip Store Hub Card */}
        <div
          className="social-card glass-panel interactive"
          style={{
            background: 'var(--contact-bg)',
            border: '1px solid var(--contact-border)',
            padding: '40px 35px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '0',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Neon Hue glow element inside card */}
          <div className="card-accent-glow store-glow" />

          {/* Top Row: Brand & Handle */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(128,128,128,0.1)', paddingBottom: '20px', marginBottom: '25px' }}>
              <div>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: '#F2A900', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', fontWeight: 'bold' }}>
                  PAYHIP
                </span>
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', margin: '5px 0 0 0', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
                  Furyxzia Assets
                </h3>
              </div>

              {/* Sharp Industrial Square Icon Badge */}
              <div style={{ width: '40px', height: '40px', background: 'rgba(242, 169, 0, 0.04)', border: '1px solid rgba(242, 169, 0, 0.18)', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
            </div>

            {/* Middle Row: Biography & Metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
              <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--muted-color)', margin: 0, fontWeight: 300 }}>
                Production-ready 3D abstract kits, lighting setups, blender project files, visual elements, and motion design templates built specifically for professional industry creators.
              </p>

              {/* Aesthetic flat statistics layout */}
              <div style={{ display: 'flex', gap: '15px', borderTop: '1px solid rgba(128,128,128,0.1)', borderBottom: '1px solid rgba(128,128,128,0.1)', padding: '15px 0', marginTop: '5px' }}>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Products</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>3D Kits</span>
                </div>
                <div style={{ width: '1px', background: 'rgba(128,128,128,0.12)', alignSelf: 'stretch' }} />
                <div style={{ flex: 1, paddingLeft: '8px' }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Platform</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>Payhip</span>
                </div>
                <div style={{ width: '1px', background: 'rgba(128,128,128,0.12)', alignSelf: 'stretch' }} />
                <div style={{ flex: 1, paddingLeft: '8px' }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Licensing</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>Royalty-Free</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Isometric wireframe orbital mesh port & Connect Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginTop: 'auto' }}>
            {/* Interactive Technical Abstract 3D Orbital Mesh */}
            <div className="qr-container">
              <div className="corner-bracket top-left"></div>
              <div className="corner-bracket top-right"></div>
              <div className="corner-bracket bottom-left"></div>
              <div className="corner-bracket bottom-right"></div>
              <div className="laser-line"></div>
              <img
                src="/assets/store_qr.png"
                alt="Store QR Connection Port"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>

            {/* Direct Connect Link */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Acquire 3D elements and assets below
              </span>
              <a
                href="https://payhip.com/Furyxzia"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn interactive"
                style={{
                  padding: '14px 20px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(128,128,128,0.2)',
                  color: 'var(--accent-color)',
                  borderRadius: '0',
                  background: 'transparent',
                }}
              >
                <span>GET ASSETS</span>
                <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}>
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Email Hub Card */}
        <div
          className="social-card glass-panel interactive"
          style={{
            background: 'var(--contact-bg)',
            border: '1px solid var(--contact-border)',
            padding: '40px 35px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '0',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Neon Hue glow element inside card */}
          <div className="card-accent-glow email-glow" />

          {/* Top Row: Brand & Handle */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(128,128,128,0.1)', paddingBottom: '20px', marginBottom: '25px' }}>
              <div>
                <span style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: '#00E676', letterSpacing: '3px', textTransform: 'uppercase', display: 'block', fontWeight: 'bold' }}>
                  EMAIL
                </span>
                <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', margin: '5px 0 0 0', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
                  furyxzia@gmail.com
                </h3>
              </div>

              {/* Sharp Industrial Square Icon Badge */}
              <div style={{ width: '40px', height: '40px', background: 'rgba(0, 230, 118, 0.04)', border: '1px solid rgba(0, 230, 118, 0.18)', borderRadius: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </div>

            {/* Middle Row: Biography & Metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
              <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'var(--muted-color)', margin: 0, fontWeight: 300 }}>
                For business inquiries, project collaborations, and direct communication. Feel free to reach out via email for a prompt response.
              </p>

              {/* Aesthetic flat statistics layout */}
              <div style={{ display: 'flex', gap: '15px', borderTop: '1px solid rgba(128,128,128,0.1)', borderBottom: '1px solid rgba(128,128,128,0.1)', padding: '15px 0', marginTop: '5px' }}>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Response Time</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>24H</span>
                </div>
                <div style={{ width: '1px', background: 'rgba(128,128,128,0.12)', alignSelf: 'stretch' }} />
                <div style={{ flex: 1, paddingLeft: '8px' }}>
                  <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '3px' }}>Availability</span>
                  <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', fontWeight: 'bold' }}>OPEN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: Connect Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginTop: 'auto' }}>
            {/* Direct Connect Link */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Directly draft a message via your client
              </span>
              <a
                href="mailto:furyxzia@gmail.com"
                className="social-btn interactive"
                style={{
                  padding: '14px 20px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid rgba(128,128,128,0.2)',
                  color: 'var(--accent-color)',
                  borderRadius: '0',
                  background: 'transparent',
                }}
              >
                <span>SEND AN EMAIL</span>
                <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}>
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Embedded High-End Stylesheet for Hover Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .social-card:hover {
          border-color: rgba(121, 82, 255, 0.35) !important;
          transform: translateY(-6px);
          box-shadow: 0 25px 60px rgba(121, 82, 255, 0.08) !important;
        }
        
        .card-accent-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 0;
        }
        
        .social-card:hover .card-accent-glow {
          opacity: 1;
        }
        
        .ig-glow {
          background: radial-gradient(circle at 10% 10%, rgba(225, 48, 108, 0.06) 0%, transparent 60%);
        }
        
        .x-glow {
          background: radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.03) 0%, transparent 60%);
        }

        .yt-glow {
          background: radial-gradient(circle at 10% 10%, rgba(255, 0, 0, 0.04) 0%, transparent 60%);
        }

        .store-glow {
          background: radial-gradient(circle at 10% 10%, rgba(242, 169, 0, 0.04) 0%, transparent 60%);
        }

        .email-glow {
          background: radial-gradient(circle at 10% 10%, rgba(0, 230, 118, 0.04) 0%, transparent 60%);
        }

        .qr-container {
          width: 130px;
          height: 130px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(128,128,128,0.15);
          padding: 12px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 0;
        }
        
        .social-card:hover .qr-container {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(121, 82, 255, 0.25);
          transform: scale(1.04);
        }

        .corner-bracket {
          position: absolute;
          width: 8px;
          height: 8px;
          border: 2px solid var(--accent-color);
          opacity: 0.2;
          transition: all 0.3s ease;
        }
        
        .social-card:hover .corner-bracket {
          opacity: 0.7;
          border-color: var(--brand-purple);
        }
        
        .top-left { top: -1px; left: -1px; border-right: none; border-bottom: none; }
        .top-right { top: -1px; right: -1px; border-left: none; border-bottom: none; }
        .bottom-left { bottom: -1px; left: -1px; border-right: none; border-top: none; }
        .bottom-right { bottom: -1px; right: -1px; border-left: none; border-top: none; }

        .laser-line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--brand-purple), transparent);
          opacity: 0;
          z-index: 2;
          pointer-events: none;
        }

        .social-card:hover .laser-line {
          animation: scanLine 2s linear infinite;
          opacity: 0.7;
        }

        @keyframes scanLine {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }

        .social-btn {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .social-btn:hover {
          background: var(--brand-purple) !important;
          border-color: var(--brand-purple) !important;
          color: #ffffff !important;
          box-shadow: 0 0 15px rgba(121, 82, 255, 0.3);
        }
        
        @media(max-width: 950px) {
          .social-hub-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media(max-width: 500px) {
          .social-card {
            padding: 30px 20px !important;
          }
          .qr-container {
            width: 100px !important;
            height: 100px !important;
            padding: 8px !important;
          }
        }
      `}} />

    </section>
  );
}
