import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell.jsx';

const restaurantPageFeatures = [
  'BBQ nights',
  'Authentic Ugandan dishes',
  'Restaurant meals',
  'Refreshing drinks',
  'Rooftop dining CTA',
];

function RestaurantBBQ() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__content">
            <p className="page-hero__eyebrow">Triple NNN Unity Game Center Remera</p>
            <h1>Great Food. Good Games. Good Company.</h1>
            <p className="page-hero__text">
              BBQ nights, authentic Ugandan dishes, restaurant meals,
              refreshing drinks, and group tables for the full Triple NNN experience.
            </p>
            <div className="page-hero__actions">
              <Link className="button button--primary" to="/contact">Reserve a Spot</Link>
              <Link className="button button--ghost" to="/contact">Rooftop Dining</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-title">
            <p className="section-title__eyebrow">Food & drink</p>
            <h2>Built for game nights and group meals</h2>
            <p className="section-title__text">
              The restaurant side supports match viewing, pool sessions, rooftop
              evenings, and people who want more than a quick snack.
            </p>
          </div>
          <div className="detail-card-grid">
            {restaurantPageFeatures.map((item) => (
              <article className="detail-card" key={item}>
                <span />
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="container cta-section__inner">
          <div>
            <p className="cta-section__eyebrow">Remera, Kigali-Rwanda</p>
            <h2>Ready for pool, BBQ, live football, and rooftop energy?</h2>
          </div>
          <Link className="button button--primary" to="/contact">Book Now</Link>
        </div>
      </section>
    </PageShell>
  );
}

export default RestaurantBBQ;
