import { SERVICE_TIERS } from '../content/skills';

export default function ServicesPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h1>Services</h1>
            <p>Strategic guidance and hands-on engineering, from first question to steady-state operations.</p>
          </div>
          <div className="grid grid--4">
            {SERVICE_TIERS.map((tier) => (
              <div key={tier.name} className="project-card" style={{ flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{tier.name}</h3>
                <p style={{ color: 'var(--ink-soft)', lineHeight: '1.6' }}>{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>What you get</h2>
            <p>A product process designed to de-risk delivery and keep the outcome in focus.</p>
          </div>
          <div className="grid grid--2">
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>1. Discover</h3>
              <ul style={{ color: 'var(--ink-soft)', lineHeight: '1.7', paddingLeft: '20px' }}>
                <li>Stakeholder interviews and problem framing</li>
                <li>Technical audit of existing systems</li>
                <li>Scoped roadmap with measurable outcomes</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>2. Design &amp; build</h3>
              <ul style={{ color: 'var(--ink-soft)', lineHeight: '1.7', paddingLeft: '20px' }}>
                <li>Interactive prototypes and design systems</li>
                <li>Component libraries and shared patterns</li>
                <li>Continuous integration and automated testing</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>3. Ship &amp; monitor</h3>
              <ul style={{ color: 'var(--ink-soft)', lineHeight: '1.7', paddingLeft: '20px' }}>
                <li>Canary deployments androllback plans</li>
                <li>Real-user performance monitoring</li>
                <li>On-call handover and runbooks</li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>4. Scale</h3>
              <ul style={{ color: 'var(--ink-soft)', lineHeight: '1.7', paddingLeft: '20px' }}>
                <li>Performance and accessibility audits</li>
                <li>Security hardening and dependency review</li>
                <li>Ongoing product mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
