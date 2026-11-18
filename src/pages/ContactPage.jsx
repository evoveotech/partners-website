import { SITE } from '../content/config';

export default function ContactPage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h1>Get in touch</h1>
            <p>
              Tell us about what you&apos;re building. A short note is enough&mdash;we&apos;ll reply within one business day.
            </p>
          </div>
          <div className="grid grid--2">
            <form className="project-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="company">Company (optional)</label>
                <input id="company" name="company" type="text" />
              </div>
              <div>
                <label htmlFor="message">What are you building?</label>
                <textarea id="message" name="message" required />
              </div>
              <button type="submit" className="btn btn--accent" style={{ alignSelf: 'flex-start' }}>
                Send message
              </button>
            </form>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Alternatively, reach out directly</h3>
              <ul style={{ color: 'var(--ink-soft)', lineHeight: '1.8' }}>
                <li>
                  <a href={`mailto:${SITE.social.email}`}>{SITE.social.email}</a>
                </li>
                <li>
                  <a href="https://x.com/PartnersStudio" target="_blank" rel="noreferrer">Twitter / X</a>
                </li>
                <li>
                  <a href={SITE.social.github} target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li>
                  <a href={SITE.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
              </ul>
              <p style={{ color: 'var(--ink-muted)', marginTop: '16px', fontSize: '0.92rem' }}>
                {SITE.location} &middot; We typically respond within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
