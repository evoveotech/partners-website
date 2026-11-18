import { SITE } from '../content/config';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <p className="nav__logo-mark">P</p>
            <div>
              <p className="nav__logo" style={{ fontSize: '1.1rem', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
                Partners
              </p>
              <p style={{ color: 'var(--ink-muted)', margin: 0, mt: '8px' }}>
                Production software, engineered for scale. A boutique development practice in Bangalore.
              </p>
            </div>
          </div>
          <div className="footer__col">
            <h4>Work</h4>
            <ul>
              <li><a href="/work">Selected projects</a></li>
              <li><a href="/about">About the practice</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Engineering notes</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Reach out</h4>
            <ul>
              <li><a href={`mailto:${SITE.social.email}`}>{SITE.social.email}</a></li>
              <li><a href="https://x.com/PartnersStudio" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href={SITE.social.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href={SITE.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Address</h4>
            <ul>
              <li>Bangalore, India</li>
              <li>hello@partners.dev</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Partners. All rights reserved.</p>
          <ul>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
