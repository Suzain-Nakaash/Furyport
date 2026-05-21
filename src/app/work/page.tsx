import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FURYXZIA — Digital Artworks & Campaigns',
  description: 'Digital art exhibition, CG compositing projects, and structural visual works by Furyxzia. // 2026',
};

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  img: string;
  details: string;
  techTags: string[];
}

const projectsList: Project[] = [
  {
    id: '01',
    title: 'BLACK SARANA',
    category: 'VFX / CG Compositions',
    year: '2026',
    img: '/assets/Comp_1_00011.png',
    details: 'Burial of Black Sarana experimental visual campaign focusing on geometric balance and lighting structures.',
    techTags: ['After Effects', 'Cinema 4D', 'Redshift']
  },
  {
    id: '02',
    title: 'VACANCE AT 4AM',
    category: 'Motion Design',
    year: '2025',
    img: '/assets/Comp_1_00069.png',
    details: 'Experimental CG layout rendering neon hues, high reflectivity, and traditional Japanese overlays.',
    techTags: ['Houdini', 'Blender', 'Octane']
  },
  {
    id: '03',
    title: 'EMPTY OLD CITY',
    category: 'Cinematics / Art',
    year: '2026',
    img: '/assets/Comp_1_00087.png',
    details: 'A nostalgic look at empty city pathways utilizing hyper-dynamic color grading and camera tracking.',
    techTags: ['Resolve', 'Photoshop', 'Vantage']
  },
  {
    id: '04',
    title: 'SYNTHETIC DREAMING',
    category: '3D VFX Design',
    year: '2025',
    img: '/assets/Comp_1_00278.png',
    details: 'A conceptual study of volumetric light scattering through geometric structures.',
    techTags: ['C4D', 'Octane Render', 'Nuke']
  },
  {
    id: '05',
    title: 'LIVE AS YOU SHOULD',
    category: 'Visual Poetry',
    year: '2026',
    img: '/assets/Live_as_you_should_00085.png',
    details: 'A collaborative experimental film project that explores the depth of human expression and spatial elements.',
    techTags: ['Premiere', 'AE', 'Sound Design']
  },
  {
    id: '06',
    title: 'BURIAL FRAMEWORKS',
    category: 'Graphic Composition',
    year: '2026',
    img: '/assets/frame_00089.png',
    details: 'Graphic-motion poster integrations designed around standard Japanese structural typographic styles.',
    techTags: ['Illustrator', 'After Effects', 'InDesign']
  }
];

export default function WorkPage() {
  return (
    <div style={{ padding: '160px 0 120px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* Page Title */}
      <div style={{ width: '100%', maxWidth: '1400px', borderTop: '1px solid rgba(128,128,128,0.3)', borderBottom: '1px solid rgba(128,128,128,0.3)', padding: '30px 0', marginBottom: '60px', textAlign: 'center', margin: '0 5%' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '8px', margin: 0 }}>PORTFOLIO WORKS</h2>
      </div>

      {/* Grid Layout Container */}
      <div style={{ width: '100%', maxWidth: '1400px', padding: '0 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
          
          {projectsList.map((project) => (
            <div 
              key={project.id} 
              className="glass-panel interactive"
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(128,128,128,0.2)',
                background: 'var(--bg-color)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s',
                borderRadius: '0'
              }}
            >
              
              {/* Image Frame with hover transition handled by class wrapper */}
              <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden', borderBottom: '1px solid rgba(128,128,128,0.15)' }}>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="project-card-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                    borderRadius: '0'
                  }} 
                />
              </div>

              {/* Information Panel */}
              <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{ fontSize: '9px', fontFamily: 'var(--font-sans)', color: 'var(--muted-color)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {project.category}
                </span>
                
                <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-display)', color: 'var(--accent-color)', marginBottom: '15px', letterSpacing: '-0.5px' }}>
                  {project.title}
                </h3>
                
                <p style={{ fontSize: '13px', color: 'var(--muted-color)', lineHeight: 1.6, fontFamily: 'var(--font-sans)', marginBottom: '25px', flexGrow: 1 }}>
                  {project.details}
                </p>

                {/* Tech Tags Container */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', borderTop: '1px dashed rgba(128,128,128,0.2)', paddingTop: '20px' }}>
                  {project.techTags.map((tag, i) => (
                    <span 
                      key={i}
                      style={{ 
                        fontSize: '9px', 
                        fontFamily: 'var(--font-sans)', 
                        color: 'var(--brand-purple)', 
                        border: '1px solid rgba(121, 82, 255, 0.3)', 
                        padding: '3px 8px', 
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Embedded CSS rules for hover effects */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .glass-panel.interactive:hover {
          border-color: var(--brand-purple) !important;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(121, 82, 255, 0.08);
        }
        .glass-panel.interactive:hover .project-card-image {
          transform: scale(1.08);
        }
      `}} />

    </div>
  );
}
