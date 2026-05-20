'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';

const dataRegistry = {
  x_comms: {
    headline: "FURYXZIA",
    handle: "@Furyxzia",
    platform: "X",
    followers: "12.2K",
    following: "699",
    biography: "21 | DHU26 | Motion Design / Film / experimental CG<br/>Sasuke Haraguchi | Empty Old City | Paper skies<br/>Commissions/collabs - furyxzia@gmail.com",
    url: "https://x.com/Furyxzia?s=20",
    img: "/assets/x_contact.png"
  },
  ig_comms: {
    headline: "FURYXZIA",
    handle: "Darshan Arsid",
    platform: "Instagram",
    followers: "114K",
    following: "464",
    biography: "21 | 📍 Tokyo<br/>いつか自分を愛してみたい<br/>~ Visual artist / experimentalist<br/>@furyxiasocial",
    url: "https://www.instagram.com/furyxzia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    img: "/assets/ig_contact.png"
  }
};

export default function ContactTerminal() {
  const [activeNode, setActiveNode] = useState<'x_comms' | 'ig_comms'>('x_comms');

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const followersRef = useRef<HTMLDivElement>(null);
  const followingRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const executeDataShift = (targetNodeId: 'x_comms' | 'ig_comms') => {
    if (targetNodeId === activeNode) return;

    const db = dataRegistry[targetNodeId];
    setActiveNode(targetNodeId);

    const textRefs = [
      headlineRef.current, handleRef.current, platformRef.current,
      followersRef.current, followingRef.current, bioRef.current
    ];

    gsap.timeline()
      .to(textRefs, {
        opacity: 0,
        x: -12,
        duration: 0.2,
        stagger: 0.01,
        onComplete: () => {
          if (headlineRef.current) headlineRef.current.innerText = db.headline;
          if (handleRef.current) handleRef.current.innerText = db.handle;
          if (platformRef.current) platformRef.current.innerText = db.platform;
          if (followersRef.current) followersRef.current.innerText = db.followers;
          if (followingRef.current) followingRef.current.innerText = db.following;
          if (bioRef.current) bioRef.current.innerHTML = db.biography;
        }
      })
      .to(textRefs, {
        opacity: 1,
        x: 0,
        duration: 0.45,
        stagger: 0.01,
        ease: "power2.out"
      });

    gsap.timeline()
      .to(imageRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.25,
        ease: "power1.inOut",
        onComplete: () => {
          if (imageRef.current) imageRef.current.src = db.img;
        }
      })
      .to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out"
      });
  };

  const activeData = dataRegistry[activeNode];

  return (
    <section id="contact" style={{ padding: '80px 5% 120px 5%', position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {/* Headings */}
      <div style={{ width: '100%', maxWidth: '1400px', borderTop: '1px solid rgba(128,128,128,0.3)', borderBottom: '1px solid rgba(128,128,128,0.3)', padding: '30px 0', marginBottom: '60px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '8px', margin: 0 }}>CONTACT</h2>
      </div>

      <div className="interface-container glass-panel" style={{
        width: '100%', maxWidth: '1200px', height: 'auto', minHeight: '550px',
        display: 'grid', gridTemplateColumns: '70px 400px 1fr',
        padding: 0, overflow: 'hidden', border: '1px solid var(--contact-border)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.1)',
        background: 'var(--contact-bg)'
      }}>
        {/* Selector Rail */}
        <div style={{ borderRight: '1px solid rgba(128,128,128,0.15)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '30px 0', background: 'rgba(128,128,128,0.03)' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '3px', color: 'var(--muted-color)', transform: 'rotate(-90deg)', whiteSpace: 'nowrap' }}>-2005-</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div
              className="interactive"
              onClick={() => executeDataShift('x_comms')}
              style={{ width: '56px', height: '56px', background: activeNode === 'x_comms' ? 'var(--brand-purple)' : 'rgba(128,128,128,0.05)', border: activeNode === 'x_comms' ? 'none' : '1px solid rgba(128, 128, 128, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.4s ease', color: activeNode === 'x_comms' ? '#fff' : 'var(--muted-color)', boxShadow: activeNode === 'x_comms' ? '0 10px 25px rgba(121, 82, 255, 0.4)' : 'none' }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
            <div
              className="interactive"
              onClick={() => executeDataShift('ig_comms')}
              style={{ width: '56px', height: '56px', background: activeNode === 'ig_comms' ? 'var(--brand-purple)' : 'rgba(128,128,128,0.05)', border: activeNode === 'ig_comms' ? 'none' : '1px solid rgba(128, 128, 128, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.4s ease', color: activeNode === 'ig_comms' ? '#fff' : 'var(--muted-color)', boxShadow: activeNode === 'ig_comms' ? '0 10px 25px rgba(121, 82, 255, 0.4)' : 'none' }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '-1px', color: 'var(--muted-color)', transform: 'rotate(-90deg)', whiteSpace: 'nowrap' }}>LOC: TOKYO</div>
        </div>

        {/* Telemetry Panel */}
        <div style={{ padding: '60px 50px', display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(128,128,128,0.15)', position: 'relative', overflow: 'hidden' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <div style={{ background: 'var(--brand-purple)', padding: '6px 10px', display: 'flex', alignItems: 'center', color: '#fff' }}>
              <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: '#fff' }}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
            </div>
            <h1 ref={headlineRef} style={{ fontFamily: 'var(--font-display)', fontSize: '42px', fontWeight: 700, color: 'var(--accent-color)', letterSpacing: '-1.5px', textTransform: 'uppercase' }}>{activeData.headline}</h1>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'rgba(128,128,128,0.05)', marginBottom: '40px' }}>
            {[
              { label: 'Handle', id: 'handle', ref: handleRef, val: activeData.handle },
              { label: 'Platform', id: 'platform', ref: platformRef, val: activeData.platform }
            ].map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', background: 'rgba(128,128,128,0.03)', fontSize: '13px', alignItems: 'center' }}>
                <div style={{ padding: '12px 18px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', borderRight: '1px solid rgba(128,128,128,0.1)', textTransform: 'uppercase', fontWeight: 'bold' }}>{item.label}</div>
                <div ref={item.ref} style={{ padding: '12px 18px', color: 'var(--accent-color)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>{item.val}</div>
              </div>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr 90px 1fr', background: 'rgba(128,128,128,0.03)', fontSize: '12px', alignItems: 'center' }}>
              <div style={{ padding: '10px 14px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', borderRight: '1px solid rgba(128,128,128,0.1)', textTransform: 'uppercase', fontWeight: 'bold' }}>Followers</div>
              <div ref={followersRef} style={{ padding: '10px 14px', color: 'var(--accent-color)', fontFamily: 'var(--font-sans)', fontWeight: 500, borderRight: '1px solid rgba(128,128,128,0.1)' }}>{activeData.followers}</div>
              <div style={{ padding: '10px 14px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', borderRight: '1px solid rgba(128,128,128,0.1)', textTransform: 'uppercase', fontWeight: 'bold' }}>Following</div>
              <div ref={followingRef} style={{ padding: '10px 14px', color: 'var(--accent-color)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>{activeData.following}</div>
            </div>
          </div>

          <a href={activeData.url} target="_blank" className="interactive" style={{ position: 'relative', background: 'transparent', border: '1px solid rgba(128,128,128,0.25)', padding: '18px 28px', color: 'var(--accent-color)', fontFamily: 'var(--font-sans)', fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', transition: 'border-color 0.3s, background 0.3s, transform 0.3s', marginBottom: '35px', fontWeight: 'bold' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brand-purple)'; e.currentTarget.style.background = 'rgba(121, 82, 255, 0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(128,128,128,0.25)'; e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}>
            <span>VISIT PROFILE</span>
            <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" /></svg>
          </a>

          <div ref={bioRef} style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted-color)', fontWeight: 300, borderTop: '1px dashed rgba(128,128,128,0.2)', paddingTop: '25px', overflowY: 'auto' }} dangerouslySetInnerHTML={{ __html: activeData.biography }}></div>
        </div>

        {/* Theatre Panel */}
        <div className="theatre-panel-responsive" style={{ position: 'relative', background: 'var(--bg-color)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 3, border: '15px solid rgba(128,128,128,0.05)' }}></div>

          {/* Interface Notches */}
          <div style={{ position: 'absolute', width: '12px', height: '12px', border: '1px solid var(--brand-purple)', zIndex: 4, top: '25px', left: '25px', borderRight: 'none', borderBottom: 'none' }}></div>
          <div style={{ position: 'absolute', width: '12px', height: '12px', border: '1px solid var(--brand-purple)', zIndex: 4, top: '25px', right: '25px', borderLeft: 'none', borderBottom: 'none' }}></div>
          <div style={{ position: 'absolute', width: '12px', height: '12px', border: '1px solid var(--brand-purple)', zIndex: 4, bottom: '25px', left: '25px', borderRight: 'none', borderTop: 'none' }}></div>

          <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img ref={imageRef} src={activeData.img} alt="Core Identity Interface" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s' }} />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media(max-width: 1150px) {
          .interface-container {
            grid-template-columns: 80px 1fr !important;
            height: auto !important;
            max-width: 650px !important;
          }
          .theatre-panel-responsive {
            display: none !important;
          }
        }
        @media(max-width: 700px) {
          .interface-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}
