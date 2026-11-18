import { SERVICES } from '../content/config';

export default function ServicesPage() {
  return (
    <div>
      <section className="section" style={{ background: '#0b0b0b', color: '#fff' }}>
        <div className="container">
          <div className="section-heading" style={{ color: '#fff' }}>
            <h1 style={{ color: '#fff' }}>Services</h1>
            <p style={{ color: '#6b6b6b' }}>Full-stack development, AI engineering, and everything in between.</p>
          </div>
          <div className="grid grid--4" style={{ gap: '24px' }}>
            {SERVICES.map((s) => (
              <div key={s.name} className="project-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>{s.name}</h3>
                <p style={{ color: '#6b6b6b', lineHeight: '1.6' }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
