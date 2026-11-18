import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../content/projects';
import { FEATURED_PROJECT_IDS } from '../content/config';
import { SITE } from '../content/config';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--x', x + '%');
      el.style.setProperty('--y', y + '%');
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>
            Production software,{' '}
            <span style={{ background: 'linear-gradient(135deg, #0b0b0b 0%, #3a3a3a 60%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              engineered for scale.
            </span>
          </h1>
          <p>
            Partners is a boutique development practice building high-performance web products for startups and established brands. We take ideas from concept to shipped, and scale as you grow.
          </p>
          <div className="hero__cta">
            <Link to="/work" className="btn btn--accent">
              View our work
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link to="/contact" className="btn">
              Get in touch
            </Link>
          </div>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <h3 data-testid="stat-projects">3+</h3>
            <p>Products shipped</p>
          </div>
          <div className="hero__stat">
            <h3 data-testid="stat-years">2024&ndash;present</h3>
            <p>Software practice</p>
          </div>
          <div className="hero__stat">
            <h3 data-testid="stat-clients">3</h3>
            <p>Client engagements</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: '3+', label: 'Products shipped' },
    { value: '2024&ndash;present', label: 'Software practice' },
    { value: '3', label: 'Client engagements' },
  ];
  return (
    <section className="section section--surface">
      <div className="container">
        <div className="grid grid--3">
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const featured = PROJECTS.filter((p) => FEATURED_PROJECT_IDS.includes(p.id));
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Selected work</h2>
          <p>A sample of the products we&apos;ve designed, engineered, and scaled.</p>
        </div>
        <div className="grid grid--3">
          {featured.map((project) => (
            <Link to={`/work/${project.slug}`} key={project.id} className="project-card">
              <div className="project-card__image">
                <span className="project-card__image-label">{project.name}</span>
              </div>
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__client">
                    <span aria-hidden="true">&#8250;</span> {project.client}
                  </span>
                  <span className="tag tag--accent">{project.category}</span>
                </div>
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__tagline">{project.tagline}</p>
                <div className="project-card__tech">
                  {project.tech.slice(0, 4).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPreview() {
  const services = [
    { name: 'Strategy', description: 'Architecture review, tech selection, and roadmap.' },
    { name: 'Build', description: 'Product engineering from spec to deployment.' },
    { name: 'Ship', description: 'CI/CD, monitoring, and handoff.' },
    { name: 'Scale', description: 'Performance tuning, security hardening, and support.' },
  ];
  return (
    <section className="section section--surface">
      <div className="container">
        <div className="section-heading">
          <h2>How we work</h2>
          <p>A proven process that keeps products fast, reliable, and easy to maintain.</p>
        </div>
        <div className="grid grid--4">
          {services.map((s) => (
            <div key={s.name}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{s.name}</h3>
              <p style={{ color: 'var(--ink-muted)', fontSize: '0.95rem' }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', padding: '48px 0' }}>
          <div style={{ fontSize: '4rem', lineHeight: 1, marginBottom: '24px', color: 'var(--accent)' }}>&ldquo;</div>
          <blockquote style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--ink-soft)' }}>
            Partners rebuilt our core reporting layer from the ground up. The result was a predictable, fast product that our users actually enjoy using.
          </blockquote>
          <p style={{ marginTop: '24px', fontWeight: '600', color: 'var(--ink)' }}>J. Rivera</p>
          <p style={{ color: 'var(--ink-muted)', fontSize: '0.9rem' }}>Engineering lead, Meridian platform</p>
        </div>
      </div>
    </section>
  );
}

function BlogPreview() {
  const posts = [
    { title: 'React Performance Patterns That Actually Move the Metric', slug: 'react-performance-patterns' },
    { title: 'How to Structure a Large-Scale React Monorepo', slug: 'large-scale-react-monorepo' },
    { title: 'Core Web Vitals Playbook for Single-Page Apps', slug: 'core-web-vitals-spa' },
  ];
  return (
    <section className="section section--surface">
      <div className="container">
        <div className="section-heading">
          <h2>From the blog</h2>
          <p>Engineering notes on performance, architecture, and building things that last.</p>
        </div>
        <div className="grid grid--3">
          {posts.map((p) => (
            <Link to={`/blog/${p.slug}`} key={p.slug} className="blog-card">
              <div className="blog-card__image">
                <span className="blog-card__image-label">{p.title.charAt(0)}</span>
              </div>
              <div className="blog-card__body">
                <h3 className="blog-card__name">{p.title}</h3>
                <p className="blog-card__tagline" style={{ marginTop: '8px', color: 'var(--ink-muted)', fontSize: '0.9rem' }}>
                  Engineering&nbsp;&middot;&nbsp;Performance
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturedWork />
      <ServicesPreview />
      <Testimonial />
      <BlogPreview />
    </div>
  );
}
