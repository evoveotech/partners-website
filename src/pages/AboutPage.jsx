import { PROJECTS } from '../content/projects';
import { TECH_STACK, FRONTEND, BACKEND, AI_OR_TOOLS } from '../content/skills';
import { SITE } from '../content/config';

export default function AboutPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h1>About Partners</h1>
            <p>
              We are a small, senior-led engineering practice. We take pride in shipping software that is fast, accessible, and easy to maintain&mdash;and in the relationships we build with the teams we work with.
            </p>
          </div>
          <div className="grid grid--2">
            <div>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7' }}>
                Partners began as a handful of engineers working on a single product. Over time, we grew into a practice that partners with startups and established brands alike. We stay senior: every engagement is led by a principal engineer, and we hire for depth of judgment, not just breadth of vocabulary.
              </p>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7' }}>
                Our work spans the full stack, but we specialise in the hardest parts of building software: performance, reliability, and the slow, unglamorous work that makes a product feel effortless.
              </p>
            </div>
            <div>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7' }}>
                We believe the best technology is the technology that disappears. When the interface is fast, the system is legible, and the tooling is consistent, nobody notices the engineering&mdash;they just feel the outcome.
              </p>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7' }}>
                This website itself is built with that principle in mind: deliberately slow to load, deliberately clean to read, and deliberately free of the decorative noise that passes for modern web design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Capabilities</h2>
            <p>The technologies we work with, and the problems we enjoy solving.</p>
          </div>
          <div className="grid grid--3">
            <div className="project-card">
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>Frontend</h3>
              <div className="project-card__tech">
                {FRONTEND.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div className="project-card">
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>Backend</h3>
              <div className="project-card__tech">
                {BACKEND.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div className="project-card">
              <h3 style={{ fontSize: '1.15rem', marginBottom: '12px' }}>AI / ML</h3>
              <div className="project-card__tech">
                {AI_OR_TOOLS.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
          <div style={{ marginTop: '32px' }}>
            <h3 style={{ marginBottom: '16px' }}>Full stack</h3>
            <div className="grid grid--4">
              {TECH_STACK.map((t) => (
                <span key={t} className="tag" style={{ cursor: 'default' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Selected work</h2>
            <p>A small sample of the engagements that shaped the practice.</p>
          </div>
          <div className="grid grid--3">
            {PROJECTS.slice(0, 3).map((p) => (
              <div key={p.id} className="project-card">
                <div className="project-card__image">
                  <span className="project-card__image-label">{p.name}</span>
                </div>
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span className="project-card__client"><span aria-hidden="true">&#8250;</span> {p.client}</span>
                    <span className="tag tag--accent">{p.category}</span>
                  </div>
                  <h3 className="project-card__name">{p.name}</h3>
                  <p className="project-card__tagline">{p.tagline}</p>
                  <Link to={`/work/${p.slug}`} className="btn btn--small">
                    Read case study
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
