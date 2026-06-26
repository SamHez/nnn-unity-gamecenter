import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/nnn-logo.png';

const navigationLinks = [
  { label: 'Home', to: '/' },
  
  { label: 'Pool Tables', to: '/pool-tables' },
  { label: 'Restaurant & BBQ', to: '/restaurant-bbq' },
  { label: 'Live Matches', to: '/live-matches' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container header__inner">
        <NavLink className="brand-link" to="/">
          <img
            className="brand-link__logo"
            src={logo}
            alt="Triple NNN Unity Game Center logo"
          />
        </NavLink>

        <nav
          className="primary-nav"
          aria-label="Primary navigation"
        >
          {navigationLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'primary-nav__link primary-nav__link--active' : 'primary-nav__link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <NavLink className="button button--primary" to="/contact">
            Book Now
          </NavLink>
          <a className="menu-toggle" href="#mobile-navigation" aria-label="Open navigation menu">
            <Menu aria-hidden="true" size={22} />
          </a>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
      >
        <div className="container mobile-nav__inner">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'mobile-nav__link mobile-nav__link--active' : 'mobile-nav__link'
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink className="button button--primary" to="/contact">
            Book Now
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
