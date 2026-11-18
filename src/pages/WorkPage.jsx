import { Link } from 'react-router-dom';
import { PROJECTS } from '../content/projects';
import { CATEGORIES as ALL_CATEGORIES } from '../content/config';

export default function WorkPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h1>Selected work</h1>
            <p>
              A curated set of products we have designed, engineered, and scaled. Each project below is a real engagement with real outcomes.
            </p>
          </div>
          <div className="grid grid--3">
            {ALL_CATEGORIES.map((cat) => (
              <div key={cat.label} className="case-study-card" style={{ cursor: 'default', gridTemplateColumns: '1fr' }}>
                <div style={{ alignSelf: 'center', paddingTop: '8px' }}>
                  <span className="tag">{cat.label}</span>
                </div>
                <div className="case-study-card__left">
                  <p style={{ marginBottom: '12px' }}>
                    A filtered view of work by category. Each project is a full engagement: discovery, design, build, and ship.
                  </p>
                  <Link to="/work/meridian" className="btn btn--small">
                    View all projects
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
          <div className="section-heading">
            <h2>Projects</h2>
            <p>Click any project to read the full case study.</p>
          </div>
          <div className="grid grid--2">
            {PROJECTS.map((project) => (
              <Link to={`/work/${project.slug}`} key={project.id} className="project-card">
                <div className="project-card__image">
                  <span className="project-card__image-label">{project.name}</span>
                </div>
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span className="project-card__client">
                      <span aria-hidden="true">&#8250;</span> {project.client}
                    </span>
                    <span className="tag">{project.category}</span>
                    <span style={{ fontWeight: 400, color: 'var(--ink-faint)' }}>{project.year}</span>
                  </div>
                  <h3 className="project-card__name">{project.name}</h3>
                  <p className="project-card__tagline">{project.tagline}</p>
                  <div className="project-card__tech">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
