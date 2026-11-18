import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../content/config';

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink to="/" className="nav__logo">
          <span className="nav__logo-mark" aria-hidden="true">P</span>
          Partners
        </NavLink>
        <nav className="nav__links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="btn btn--small nav__cta">
            Get in touch
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
