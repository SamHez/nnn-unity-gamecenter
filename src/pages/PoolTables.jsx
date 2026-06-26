import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell.jsx';

const poolPageFeatures = [
  'Many pool tables',
  'Friendly games',
  'Group bookings',
  'Pool challenge CTA',
];

function PoolTables() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__content">
            <p className="page-hero__eyebrow">Triple NNN Unity Game Center Remera</p>
            <h1>Take Your Shot at Triple NNN</h1>
            <p className="page-hero__text">
              Challenge your friends, sharpen your game, and enjoy many pool
              tables in a lively Remera atmosphere.
            </p>
            <div className="page-hero__actions">
              <Link className="button button--primary" to="/contact">Book a Table</Link>
              <Link className="button button--ghost" to="/competitions">Join Competition</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-title">
            <p className="section-title__eyebrow">Pool lounge</p>
            <h2>Friendly games and serious shots</h2>
            <p className="section-title__text">
              Whether you are warming up with friends or preparing for a
              competition, the pool zone is made for steady play and strong energy.
            </p>
          </div>
          <div className="detail-card-grid">
            {poolPageFeatures.map((item) => (
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

export default PoolTables;
