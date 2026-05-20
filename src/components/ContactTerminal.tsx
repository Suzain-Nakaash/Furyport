'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';

const dataRegistry = {
  x_comms: {
    headline: "Furyxzia",
    handle: "@Furyxzia",
    platform: "X // Twitter System",
    network: "12.2K Followers // 699 Following",
    comms: "furyxzia@gmail.com",
    registry: "payhip.com/Furyxzia",
    bg: "X",
    biography: "21 | DHU26 | Motion Design / Film / experimental CG<br/>Sasuke Haraguchi | Empty Old City | Paper skies<br/>Commissions/collabs - furyxzia@gmail.com",
    url: "https://x.com/Furyxzia?s=20",
    index: "X_NODE // 5736_POSTS",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  ig_comms: {
    headline: "furyxzia",
    handle: "Darshan Arsid",
    platform: "Instagram // Vault",
    network: "114K Followers // 464 Following",
    comms: "commissions/Collabs-furyxzia@gmail.com",
    registry: "payhip.com/b/XwFNU",
    bg: "IG",
    biography: "21 | 📍 Tokyo<br/>いつか自分を愛してみたい<br/>~ Visual artist / experimentalist<br/>@furyxiasocial",
    url: "https://www.instagram.com/furyxzia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    index: "IG_NODE // 194_POSTS",
    img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80"
  }
};

export default function ContactTerminal() {
  const [activeNode, setActiveNode] = useState<'x_comms' | 'ig_comms'>('x_comms');
  
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);
  const commsRef = useRef<HTMLDivElement>(null);
  const registryRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const executeDataShift = (targetNodeId: 'x_comms' | 'ig_comms') => {
    if (targetNodeId === activeNode) return;
    
    const db = dataRegistry[targetNodeId];
    setActiveNode(targetNodeId);

    const textRefs = [
      headlineRef.current, handleRef.current, platformRef.current, 
      networkRef.current, commsRef.current, registryRef.current, 
      bioRef.current, bgRef.current, indexRef.current
    ];

    gsap.timeline()
      .to(textRefs, {
        opacity: 0,
        x: -12,
        duration: 0.2,
        stagger: 0.01,
        onComplete: () => {
          if(headlineRef.current) headlineRef.current.innerText = db.headline;
          if(handleRef.current) handleRef.current.innerText = db.handle;
          if(platformRef.current) platformRef.current.innerText = db.platform;
          if(networkRef.current) networkRef.current.innerText = db.network;
          if(commsRef.current) commsRef.current.innerHTML = `<a href="mailto:furyxzia@gmail.com" style="color:var(--brand-purple);text-decoration:none;">${db.comms}</a>`;
          if(registryRef.current) registryRef.current.innerHTML = `<a href="${db.url}" target="_blank" style="color:var(--brand-purple);text-decoration:none;">${db.registry}</a>`;
          if(bioRef.current) bioRef.current.innerHTML = db.biography;
          if(bgRef.current) bgRef.current.innerText = db.bg;
          if(indexRef.current) indexRef.current.innerText = db.index;
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
        opacity: 0.3,
        scale: 0.98,
        duration: 0.2,
        onComplete: () => {
          if(imageRef.current) imageRef.current.src = db.img;
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
    <section id="contact" style={{ padding: '100px 5%', position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}>
      <div className="interface-container glass-panel" style={{
        width: '100%', maxWidth: '1380px', height: 'auto', minHeight: '760px', 
        display: 'grid', gridTemplateColumns: '90px 480px 1fr',
        padding: 0, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)'
      }}>
        {/* Selector Rail */}
        <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', padding: '35px 0', background: 'rgba(5, 5, 5, 0.2)' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '3px', color: 'var(--muted-color)', transform: 'rotate(-90deg)', whiteSpace: 'nowrap' }}>COMMS.INDEX</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div 
              className="interactive"
              onClick={() => executeDataShift('x_comms')}
              style={{ width: '52px', height: '52px', background: '#111115', border: activeNode === 'x_comms' ? '1px dashed var(--brand-purple)' : '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '2px', transition: 'all 0.4s' }}
            >
              <img src={dataRegistry.x_comms.img} alt="X" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: activeNode === 'x_comms' ? 'grayscale(0)' : 'grayscale(1)', transition: 'filter 0.3s' }} />
            </div>
            <div 
              className="interactive"
              onClick={() => executeDataShift('ig_comms')}
              style={{ width: '52px', height: '52px', background: '#111115', border: activeNode === 'ig_comms' ? '1px dashed var(--brand-purple)' : '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '2px', transition: 'all 0.4s' }}
            >
              <img src={dataRegistry.ig_comms.img} alt="IG" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: activeNode === 'ig_comms' ? 'grayscale(0)' : 'grayscale(1)', transition: 'filter 0.3s' }} />
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', letterSpacing: '3px', color: 'var(--muted-color)', transform: 'rotate(-90deg)', whiteSpace: 'nowrap' }}>LOC: TOKYO</div>
        </div>

        {/* Telemetry Panel */}
        <div style={{ padding: '50px 45px', display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255, 255, 255, 0.05)', position: 'relative', overflow: 'hidden' }}>
          <div ref={bgRef} style={{ position: 'absolute', top: '20px', left: '-10px', fontFamily: 'var(--font-display)', fontSize: '140px', color: 'var(--accent-color)', opacity: 0.03, fontWeight: 700, zIndex: -1, pointerEvents: 'none', letterSpacing: '-8px' }}>
            {activeData.bg}
          </div>

          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '2px', color: 'var(--muted-color)', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
            <span style={{ color: 'var(--brand-purple)', fontWeight: 'bold', border: '1px solid var(--brand-purple)', padding: '1px 4px', fontSize: '8px' }}>REC</span>
            DATASTREAM SOURCE MAPPING
          </div>

          <div style={{ display: 'flex', gap: '5px', marginBottom: '25px' }}>
            {[1,2,3,0.4,0.1].map((o, i) => (
              <div key={i} style={{ width: '12px', height: '12px', background: 'var(--accent-color)', opacity: o > 1 ? 0.2 : o, clipPath: 'polygon(50% 0%, 100% 35%, 100% 100%, 0 100%, 0 35%)' }}></div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '25px' }}>
            <div style={{ background: 'var(--brand-purple)', padding: '4px 8px', display: 'flex', alignItems: 'center', color: '#fff' }}>
              <svg viewBox="0 0 24 24" style={{ width: '12px', height: '12px', fill: '#fff' }}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
            </div>
            <h1 ref={headlineRef} style={{ fontFamily: 'var(--font-display)', fontSize: '38px', fontWeight: 600, color: 'var(--accent-color)', letterSpacing: '-1px' }}>{activeData.headline}</h1>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'rgba(255, 255, 255, 0.05)', marginBottom: '30px' }}>
            {[
              { label: 'Handle', id: 'handle', ref: handleRef, val: activeData.handle },
              { label: 'Platform', id: 'platform', ref: platformRef, val: activeData.platform },
              { label: 'Network', id: 'network', ref: networkRef, val: activeData.network }
            ].map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', background: 'rgba(0,0,0,0.4)', fontSize: '12px', alignItems: 'center' }}>
                <div style={{ padding: '10px 14px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', background: 'rgba(255, 255, 255, 0.01)', borderRight: '1px solid rgba(255, 255, 255, 0.03)', textTransform: 'uppercase' }}>{item.label}</div>
                <div ref={item.ref} style={{ padding: '10px 14px', color: 'var(--accent-color)', fontFamily: 'var(--font-sans)' }}>{item.val}</div>
              </div>
            ))}
            <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', background: 'rgba(0,0,0,0.4)', fontSize: '12px', alignItems: 'center' }}>
              <div style={{ padding: '10px 14px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', background: 'rgba(255, 255, 255, 0.01)', borderRight: '1px solid rgba(255, 255, 255, 0.03)', textTransform: 'uppercase' }}>Comms</div>
              <div ref={commsRef} style={{ padding: '10px 14px', color: 'var(--accent-color)', fontFamily: 'var(--font-sans)' }}><a href={`mailto:furyxzia@gmail.com`} style={{ color: 'var(--brand-purple)', textDecoration: 'none' }}>{activeData.comms}</a></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr', background: 'rgba(0,0,0,0.4)', fontSize: '12px', alignItems: 'center' }}>
              <div style={{ padding: '10px 14px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', background: 'rgba(255, 255, 255, 0.01)', borderRight: '1px solid rgba(255, 255, 255, 0.03)', textTransform: 'uppercase' }}>Registry</div>
              <div ref={registryRef} style={{ padding: '10px 14px', color: 'var(--accent-color)', fontFamily: 'var(--font-sans)' }}><a href={activeData.url} target="_blank" style={{ color: 'var(--brand-purple)', textDecoration: 'none' }}>{activeData.registry}</a></div>
            </div>
          </div>

          <a href={activeData.url} target="_blank" className="interactive" style={{ position: 'relative', background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '15px 24px', color: 'var(--accent-color)', fontFamily: 'var(--font-sans)', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', transition: 'border-color 0.3s, background 0.3s', marginBottom: '30px' }}
             onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--brand-purple)'; e.currentTarget.style.background = 'rgba(121, 82, 255, 0.05)'; }}
             onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.background = 'transparent'; }}>
            <span>INITIALIZE TARGET UPLINK</span>
            <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }}><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" /></svg>
          </a>

          <div ref={bioRef} style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--muted-color)', fontWeight: 300, borderTop: '1px dashed rgba(255, 255, 255, 0.08)', paddingTop: '20px', overflowY: 'auto' }} dangerouslySetInnerHTML={{ __html: activeData.biography }}></div>
        </div>

        {/* Theatre Panel */}
        <div className="theatre-panel-responsive" style={{ position: 'relative', background: '#050507', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 3, border: '15px solid rgba(9, 9, 11, 0.5)' }}></div>
          
          {/* Interface Notches */}
          <div style={{ position: 'absolute', width: '10px', height: '10px', border: '1px solid var(--brand-purple)', zIndex: 4, top: '25px', left: '25px', borderRight: 'none', borderBottom: 'none' }}></div>
          <div style={{ position: 'absolute', width: '10px', height: '10px', border: '1px solid var(--brand-purple)', zIndex: 4, top: '25px', right: '25px', borderLeft: 'none', borderBottom: 'none' }}></div>

          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <img ref={imageRef} src={activeData.img} alt="Core Identity Interface" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', filter: 'brightness(0.9) contrast(1.05)', transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s' }} />
          </div>

          <div ref={indexRef} style={{ position: 'absolute', bottom: '30px', right: '30px', fontFamily: 'var(--font-sans)', fontSize: '10px', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', background: 'rgba(0, 0, 0, 0.6)', padding: '4px 10px', border: '1px solid rgba(255, 255, 255, 0.05)', zIndex: 5 }}>
            {activeData.index}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
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
