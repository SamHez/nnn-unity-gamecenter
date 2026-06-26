import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/nnn-logo.png';

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Pool Tables', to: '/pool-tables' },
  { label: 'Restaurant & BBQ', to: '/restaurant-bbq' },
  { label: 'Live Matches', to: '/live-matches' },
  { label: 'Competitions', to: '/competitions' },
  { label: 'Contact', to: '/contact' },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__inner">
        <section className="footer__brand" aria-label="Triple NNN Unity Game Center">
          <img
            className="footer__logo"
            src={logo}
            alt="Triple NNN Unity Game Center logo"
          />
          <p>
            Pool tables, BBQ, live football, rooftop Kigali views, and good
            vibes in Remera.
          </p>
        </section>



        <address className="footer__contact">
          <span>
            <MapPin aria-hidden="true" size={16} />
            Remera, Kigali-Rwanda
          </span>
          <span>
            <Phone aria-hidden="true" size={16} />
            +250 7895774621
          </span>
          <span>
            <Mail aria-hidden="true" size={16} />
            info@triplennn.rw
          </span>
        </address>

        <div className="footer__socials" aria-label="Social links">
          <a href="/" aria-label="Facebook">
            <FaFacebookF aria-hidden="true" size={16} />
          </a>
          <a href="/" aria-label="X">
            <FaXTwitter aria-hidden="true" size={16} />
          </a>
          <a href="/" aria-label="Instagram">
            <FaInstagram aria-hidden="true" size={16} />
          </a>
          <a href="/" aria-label="TikTok">
            <FaTiktok aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
      <div className="footer__bar">
        <div className="container">
          <p>&copy; 2026 Triple NNN Unity Game Center Remera. Powered by UMULI SYSTEMS.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
