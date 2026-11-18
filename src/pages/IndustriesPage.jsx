import { INDUSTRIES } from '../content/config';

export default function IndustriesPage() {
  return (
    <div>
      <section className="section" style={{ background: '#0b0b0b', color: '#fff' }}>
        <div className="container">
          <div className="section-heading" style={{ color: '#fff' }}>
            <h1 style={{ color: '#fff' }}>Industries</h1>
            <p style={{ color: '#6b6b6b' }}>Custom solutions for your industry. From healthcare to gaming, we build what you need.</p>
          </div>
          <div className="grid grid--3" style={{ gap: '24px' }}>
            {INDUSTRIES.map((ind) => (
              <div key={ind.label} className="case-study-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <h3 style={{ fontSize: '1.1rem', color: '#fff' }}>{ind.label}</h3>
                  <p style={{ color: '#6b6b6b', fontSize: '0.9rem' }}>Over {ind.count} projects delivered</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
