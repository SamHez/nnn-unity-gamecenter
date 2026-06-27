import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [location.pathname]);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((current) => !current);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

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
          <button
            className="menu-toggle"
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={isMobileNavOpen}
            aria-label={isMobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleMobileNav}
          >
            {isMobileNavOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={isMobileNavOpen ? 'mobile-nav mobile-nav--open' : 'mobile-nav'}
        aria-label="Mobile navigation"
      >
        <div className="container mobile-nav__inner">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMobileNav}
              className={({ isActive }) =>
                isActive ? 'mobile-nav__link mobile-nav__link--active' : 'mobile-nav__link'
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink className="button button--primary" to="/contact" onClick={closeMobileNav}>
            Book Now
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
