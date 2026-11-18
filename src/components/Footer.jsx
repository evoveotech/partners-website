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
            <h4>Pages</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><a href="/services">Software Development</a></li>
              <li><a href="/services">AI Development</a></li>
              <li><a href="/services">Mobile Apps</a></li>
              <li><a href="/services">Cloud & DevOps</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@partners.dev">hello@partners.dev</a></li>
              <li><a href="tel:+15550123456">+1 555 012 3456</a></li>
              <li><a href="/contact">Get a free consult</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
