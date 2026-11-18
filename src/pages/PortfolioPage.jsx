import { PROJECTS } from '../content/config';

export default function PortfolioPage() {
  return (
    <div>
      <section className="section" style={{ background: '#0b0b0b', color: '#fff' }}>
        <div className="container">
          <div className="section-heading" style={{ color: '#fff' }}>
            <h1 style={{ color: '#fff' }}>Portfolio</h1>
            <p style={{ color: '#6b6b6b' }}>Explore our portfolio of successful digital solutions delivered to clients worldwide.</p>
          </div>
          <div className="grid grid--2" style={{ gap: '24px' }}>
            {PROJECTS.map((p) => (
              <div key={p.id} className="project-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                <div className="project-card__image" style={{ height: '200px', backgroundColor: '#2a2a2a' }}>
                  <span className="project-card__image-label" style={{ fontSize: '1.4rem' }}>{p.name}</span>
                </div>
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span className="project-card__client" style={{ color: '#fff' }}>{p.client}</span>
                    <span className="tag" style={{ background: '#2a2a2a', color: '#fff' }}>{p.category}</span>
                  </div>
                  <h3 className="project-card__name" style={{ color: '#fff' }}>{p.name}</h3>
                  <p className="project-card__tagline" style={{ color: '#6b6b6b' }}>{p.tagline}</p>
                  <div style={{ display: 'flex', gap: '16px', marginTop: '12px' }}>
                    <span style={{ fontWeight: 700, color: '#fff' }}>{p.results[0]?.value}</span>
                    <span style={{ color: '#6b6b6b' }}>{p.tech.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
