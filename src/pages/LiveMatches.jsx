import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell.jsx';

const liveMatchPageFeatures = [
  'Big screens',
  'Live soccer match viewing',
  'World Cup updates',
  'Match night experience',
  'Reserve seating CTA',
];

function LiveMatches() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__content">
            <p className="page-hero__eyebrow">Triple NNN Unity Game Center Remera</p>
            <h1>Watch Every Big Game Live in Remera</h1>
            <p className="page-hero__text">
              Big screens, live soccer viewing, World Cup updates, match night
              energy, and food service in one Remera game center.
            </p>
            <div className="page-hero__actions">
              <Link className="button button--primary" to="/contact">Reserve Seating</Link>
              <Link className="button button--ghost" to="/">See Match Zone</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-title">
            <p className="section-title__eyebrow">Match nights</p>
            <h2>Football, food, and a crowd that reacts</h2>
            <p className="section-title__text">
              Follow major games with your squad and make the night bigger with
              pool tables, BBQ, drinks, and group seating.
            </p>
          </div>
          <div className="detail-card-grid">
            {liveMatchPageFeatures.map((item) => (
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

export default LiveMatches;
