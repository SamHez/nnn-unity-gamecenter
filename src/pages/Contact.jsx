import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell.jsx';

function Contact() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__content">
            <p className="page-hero__eyebrow">Triple NNN Unity Game Center Remera</p>
            <h1>Visit Triple NNN in Remera</h1>
            <p className="page-hero__text">
              Located in Remera, Kigali-Rwanda. Built for games, food, live
              sports, rooftop evenings, and fun.
            </p>
            <div className="page-hero__actions">
              <Link className="button button--primary" to="/contact">Contact Us</Link>
              <Link className="button button--ghost" to="/contact">Book a Table</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container contact-grid">
          <div>
            <div className="section-title">
              <p className="section-title__eyebrow">Contact</p>
              <h2>Plan your Triple NNN visit</h2>
              <p className="section-title__text">
                Reserve a table, ask about live match nights, or plan a group
                booking for food, pool, and rooftop views.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button--primary" href="https://wa.me/">
                <MessageCircle aria-hidden="true" size={18} />
                WhatsApp
              </a>
              <a className="button button--ghost" href="tel:+250">
                <Phone aria-hidden="true" size={18} />
                Call Now
              </a>
            </div>
          </div>
          <div className="contact-card-list">
            <article className="contact-card">
              <MapPin aria-hidden="true" size={22} />
              <h3>Location</h3>
              <p>Remera, Kigali-Rwanda</p>
            </article>
            <article className="contact-card">
              <Phone aria-hidden="true" size={22} />
              <h3>Contact</h3>
              <p>Booking contact coming soon</p>
            </article>
            <article className="contact-card">
              <Clock aria-hidden="true" size={22} />
              <h3>Opening Hours</h3>
              <p>Open hours placeholder</p>
            </article>
          </div>
        </div>
      </section>
      <section className="map-placeholder-section">
        <div className="container">
          <div className="map-placeholder">
            <span>Map placeholder</span>
            <strong>Remera, Kigali</strong>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default Contact;
