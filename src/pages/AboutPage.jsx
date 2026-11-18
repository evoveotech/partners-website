import { PROJECTS, SERVICES, INDUSTRIES } from '../content/config';

export default function AboutPage() {
  return (
    <div>
      <section className="section" style={{ background: '#0b0b0b', color: '#fff' }}>
        <div className="container">
          <div className="section-heading" style={{ color: '#fff' }}>
            <h1 style={{ color: '#fff' }}>About Partners</h1>
            <p style={{ color: '#6b6b6b' }}>A boutique development practice building high-performance web products for startups and established brands.</p>
          </div>
          <div className="grid grid--2" style={{ gap: '48px' }}>
            <div>
              <p style={{ color: '#6b6b6b', lineHeight: '1.7' }}>
                Partners began as a handful of engineers working on a single product. Over the years, we grew into a practice that partners with startups and established brands alike. We stay senior: every engagement is led by a principal engineer, and we hire for depth of judgment, not just breadth of vocabulary.
              </p>
              <p style={{ color: '#6b6b6b', lineHeight: '1.7' }}>
                Our work spans the full stack, but we specialise in the hardest parts of building software: performance, reliability, and the slow, unglamorous work that makes a product feel effortless.
              </p>
            </div>
            <div>
              <p style={{ color: '#6b6b6b', lineHeight: '1.7' }}>
                We believe the best technology is the technology that disappears. When the interface is fast, the system is legible, and the tooling is consistent, nobody notices the engineering — they just feel the outcome.
              </p>
              <p style={{ color: '#6b6b6b', lineHeight: '1.7' }}>
                This website itself is built with that principle in mind: deliberately fast to load, deliberately clean to read, and deliberately free of the decorative noise that passes for modern web design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface" style={{ background: '#0f0f0f', color: '#fff' }}>
        <div className="container">
          <div className="section-heading" style={{ color: '#fff' }}>
            <h2 style={{ color: '#fff' }}>Capabilities</h2>
            <p style={{ color: '#6b6b6b' }}>The technologies we work with and the problems we enjoy solving.</p>
          </div>
          <div className="grid grid--3" style={{ gap: '24px' }}>
            <div className="project-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>Frontend</h3>
              <div className="project-card__tech">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'D3.js'].map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div className="project-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>Backend</h3>
              <div className="project-card__tech">
                {['Node.js', 'Python', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Kubernetes', 'AWS'].map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
            <div className="project-card" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
              <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>AI / ML</h3>
              <div className="project-card__tech">
                {['LLM orchestration', 'OpenAI API', 'LangChain', 'Vector search', 'AI analytics', 'Real-time data pipelines'].map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
