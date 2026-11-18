import { SITE } from '../content/config';

export default function ContactPage() {
  return (
    <div>
      <section className="section" style={{ background: '#0b0b0b', color: '#fff' }}>
        <div className="container">
          <div className="section-heading" style={{ color: '#fff' }}>
            <h1 style={{ color: '#fff' }}>Get in touch</h1>
            <p style={{ color: '#6b6b6b' }}>Tell us about what you&apos;re building. A short note is enough — we&apos;ll reply within one business day.</p>
          </div>
          <div className="grid grid--2" style={{ gap: '48px' }}>
            <div>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ color: '#6b6b6b', fontSize: '0.85rem', fontWeight: 600 }}>Name</label>
                  <input style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#fff', padding: '12px', borderRadius: '8px', fontFamily: 'inherit' }} placeholder="Your name" />
                </div>
                <div>
                  <label style={{ color: '#6b6b6b', fontSize: '0.85rem', fontWeight: 600 }}>Email</label>
                  <input style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#fff', padding: '12px', borderRadius: '8px', fontFamily: 'inherit' }} placeholder="you@company.com" />
                </div>
                <div>
                  <label style={{ color: '#6b6b6b', fontSize: '0.85rem', fontWeight: 600 }}>Message</label>
                  <textarea style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#fff', padding: '12px', borderRadius: '8px', fontFamily: 'inherit', minHeight: '140px' }} placeholder="Tell us about your project..." />
                </div>
                <button type="button" className="btn btn--accent" style={{ border: '1px solid #0b0b0b', marginTop: '8px' }}>Send message</button>
              </form>
            </div>
            <div>
              <h3 style={{ color: '#fff', marginBottom: '16px' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="mailto:hello@partners.dev" style={{ color: '#6b6b6b', fontSize: '0.92rem' }}>
                  <span style={{ color: '#fff', fontWeight: 600, width: '120px', display: 'inline-block' }}>Company</span>
                  hello@partners.dev
                </a>
                <a href="tel:+15550123456" style={{ color: '#6b6b6b', fontSize: '0.92rem' }}>
                  <span style={{ color: '#fff', fontWeight: 600, width: '120px', display: 'inline-block' }}>Phone</span>
                  +1 555 012 3456
                </a>
                <a href="mailto:hr@partners.dev" style={{ color: '#6b6b6b', fontSize: '0.92rem' }}>
                  <span style={{ color: '#fff', fontWeight: 600, width: '120px', display: 'inline-block' }}>HR</span>
                  hr@partners.dev
                </a>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                  <p style={{ color: '#6b6b6b', fontSize: '0.85rem' }}>Headquarters</p>
                  <p style={{ color: '#6b6b6b', fontSize: '0.92rem' }}>Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
