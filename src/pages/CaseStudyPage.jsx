import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../content/projects';
import { Helmet } from 'react-helmet-async';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="section">
        <div className="container text-center">
          <h1>Project not found</h1>
          <Link to="/work" className="btn">Back to work</Link>
        </div>
      </section>
    );
  }

  const results = project.results;

  return (
    <div>
      <Helmet>
        <title>{project.name} — Partners</title>
        <meta name="description" content={project.description} />
        <link rel="canonical" href={`https://partners.dev/work/${project.slug}`} />
      </Helmet>
      <section className="section">
        <div className="container">
          <div className="case-study-card">
            <div className="case-study-card__left">
              <div className="project-card__meta">
                <span className="tag tag--accent">{project.category}</span>
                <span style={{ fontWeight: 400, color: 'var(--ink-faint)' }}>{project.year}</span>
              </div>
              <h1 style={{ marginBottom: '16px' }}>{project.name}</h1>
              <p style={{ color: 'var(--ink-soft)', marginBottom: '24px' }}>{project.tagline}</p>
              <p style={{ color: 'var(--ink-soft)', lineHeight: '1.7' }}>{project.description}</p>
            </div>
            <div className="case-study-card__right">
              <div className="project-card__image">
                <span className="project-card__image-label" style={{ fontSize: '2.8rem' }}>{project.name}</span>
              </div>
            </div>
          </div>

          <div className="section-heading" style={{ marginTop: '64px', maxWidth: '820px' }}>
            <h2>The challenge</h2>
            <blockquote style={{ fontSize: '1.15rem', color: 'var(--ink-soft)', lineHeight: '1.6', marginTop: '12px', padding: '16px 20px', borderLeft: '3px solid var(--accent)', fontStyle: 'italic' }}>
              &ldquo;{project.challenge}&rdquo;
            </blockquote>
          </div>

          <div className="section-heading" style={{ marginTop: '40px', maxWidth: '820px' }}>
            <h2>How we solved it</h2>
            <p style={{ lineHeight: '1.7', color: 'var(--ink-soft)' }}>{project.solution}</p>
          </div>

          <div style={{ marginTop: '64px' }}>
            <h2 style={{ marginBottom: '24px' }}>Results</h2>
            <div className="grid grid--3">
              {results.map((r) => (
                <div key={r.label} className="case-study-card__result">
                  <div className="value">{r.value}</div>
                  <div className="label">
                    <strong>{r.label}</strong>
                    <div style={{ fontSize: '0.8rem', color: 'var(--ink-muted)' }}>{r.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '64px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '16px' }}>Technology</h2>
            <div className="project-card__tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '64px', textAlign: 'center' }}>
            <Link to="/work" className="btn btn--accent">
              Back to all work
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
