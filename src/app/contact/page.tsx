import type { Metadata } from 'next';
import ContactTerminal from '../../components/ContactTerminal';

export const metadata: Metadata = {
  title: 'FURYXZIA — Contact & Client Commissions',
  description: 'Inquire about digital art collaborations, cinematic video editing, or 3D visual campaigns. // 2026',
};

export default function ContactPage() {
  return (
    <div style={{ padding: '160px 0 120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Main Terminal Section */}
      <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        <ContactTerminal />
      </div>

      {/* Modern Contact Form Section */}
      <div style={{ width: '100%', maxWidth: '1200px', padding: '0 5%', marginTop: '-40px' }}>
        <div 
          className="glass-panel"
          style={{
            width: '100%',
            background: 'var(--contact-bg)',
            border: '1px solid var(--contact-border)',
            padding: '50px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            borderRadius: '0',
            boxShadow: '0 40px 100px rgba(0,0,0,0.1)'
          }}
        >
          {/* Form Header */}
          <div style={{ position: 'relative', borderBottom: '1px dashed rgba(128,128,128,0.2)', paddingBottom: '20px' }}>
            <div style={{ position: 'absolute', top: '0', left: '-20px', width: '2px', height: '24px', background: 'var(--brand-purple)' }}></div>
            <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
              SEND AN INQUIRY
            </h3>
            <p style={{ fontSize: '11px', color: 'var(--muted-color)', marginTop: '5px', fontFamily: 'var(--font-sans)', letterSpacing: '1px' }}>
              RECRUITMENT / COMMISSIONS / DESIGN INQUIRIES
            </p>
          </div>

          {/* Actual Form */}
          <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            
            {/* Input Name */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
                Sender Name [Identity]
              </label>
              <input 
                type="text" 
                required
                className="form-input interactive"
                placeholder="e.g. DARSHAN ARSID"
                style={{
                  padding: '14px 20px',
                  background: 'rgba(128, 128, 128, 0.04)',
                  border: '1px solid var(--contact-border)',
                  color: 'var(--accent-color)',
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)',
                  width: '100%',
                  borderRadius: '0',
                  outline: 'none',
                  transition: 'all 0.3s'
                }}
              />
            </div>

            {/* Input Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
                Sender Contact [Email Node]
              </label>
              <input 
                type="email" 
                required
                className="form-input interactive"
                placeholder="e.g. furyxzia@gmail.com"
                style={{
                  padding: '14px 20px',
                  background: 'rgba(128, 128, 128, 0.04)',
                  border: '1px solid var(--contact-border)',
                  color: 'var(--accent-color)',
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)',
                  width: '100%',
                  borderRadius: '0',
                  outline: 'none',
                  transition: 'all 0.3s'
                }}
              />
            </div>

            {/* Input Subject (Spans full width) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: '1 / span 2' }}>
              <label style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
                Inquiry Classification [Subject]
              </label>
              <input 
                type="text" 
                required
                className="form-input interactive"
                placeholder="e.g. FILM EDITING COMMISSION / BRAND ARTWORK / VFX INQUIRY"
                style={{
                  padding: '14px 20px',
                  background: 'rgba(128, 128, 128, 0.04)',
                  border: '1px solid var(--contact-border)',
                  color: 'var(--accent-color)',
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)',
                  width: '100%',
                  borderRadius: '0',
                  outline: 'none',
                  transition: 'all 0.3s'
                }}
              />
            </div>

            {/* Input Message (Spans full width) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', gridColumn: '1 / span 2' }}>
              <label style={{ fontSize: '10px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
                Inquiry Details [Message Payload]
              </label>
              <textarea 
                rows={6}
                required
                className="form-input interactive"
                placeholder="Type details of your project here. Include timeline constraints, visual direction inspiration, budget brackets..."
                style={{
                  padding: '18px 20px',
                  background: 'rgba(128, 128, 128, 0.04)',
                  border: '1px solid var(--contact-border)',
                  color: 'var(--accent-color)',
                  fontSize: '14px',
                  fontFamily: 'var(--font-sans)',
                  width: '100%',
                  borderRadius: '0',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'all 0.3s'
                }}
              />
            </div>

            {/* Submit Button */}
            <div style={{ gridColumn: '1 / span 2', display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
              <button 
                type="submit" 
                className="btn-contact interactive"
                style={{
                  padding: '18px 45px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  border: '1px solid rgba(121, 82, 255, 0.3)',
                  transition: 'all 0.3s',
                  borderRadius: '0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <span>TRANSMIT INQUIRY payload</span>
                <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'currentColor' }}>
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>

          </form>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .form-input:focus {
          border-color: var(--brand-purple) !important;
          box-shadow: 0 0 10px rgba(121, 82, 255, 0.15) !important;
          background: rgba(121, 82, 255, 0.02) !important;
        }
        @media(max-width: 768px) {
          form {
            grid-template-columns: 1fr !important;
          }
          .form-input {
            grid-column: 1 / span 1 !important;
          }
          button[type="submit"] {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}} />

    </div>
  );
}
