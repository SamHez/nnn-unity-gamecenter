import PageShell from '../components/layout/PageShell.jsx';

function About() {
  return (
    <PageShell>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__content">
            <p className="page-hero__eyebrow">Triple NNN Unity Game Center Remera</p>
            <h1>Where Games, Food & Fun Unite</h1>
            <p className="page-hero__text">
              Triple NNN Unity Game Center is a social entertainment spot in
              Remera, Kigali, bringing together pool games, BBQ, restaurant
              dining, live football viewing, big screens, rooftop views, and a
              community atmosphere.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container inner-grid">
          <div className="section-title">
            <p className="section-title__eyebrow">The Triple NNN vibe</p>
            <h2>Built for squads, matches, and long nights</h2>
            <p className="section-title__text">
              The venue combines competition energy with restaurant comfort,
              giving guests a place to play, eat, watch, relax, and repeat.
            </p>
          </div>
          <div className="inner-panel">
            <h3>Play. Eat. Relax. Repeat.</h3>
            <p>
              From friendly pool games to live soccer nights and rooftop
              conversations, Triple NNN is designed as a bold Remera social hub.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export default About;
