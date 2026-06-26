import { Gamepad2, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageShell from '../components/layout/PageShell.jsx';

const competitionHighlights = [
  {
    title: 'Pool Challenge',
    text: 'Compete with other players and show who owns the table.',
    icon: Trophy,
  },
  {
    title: 'Squad Nights',
    text: 'Bring your squad for games, BBQ, drinks, and match-day energy.',
    icon: Gamepad2,
  },
];

function Competitions() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.classList.add('registration-form--submitted');
  };

  return (
    <PageShell>
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="page-hero__content">
            <p className="page-hero__eyebrow">Triple NNN Unity Game Center Remera</p>
            <h1>Register for the Pool Challenge</h1>
            <p className="page-hero__text">
              Think you have the best shot in Remera? Register interest for
              upcoming Triple NNN pool competitions and challenge other players.
            </p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container competition-page-grid">
          <div>
            <div className="section-title">
              <p className="section-title__eyebrow">Player registration</p>
              <h2>Join the next challenge</h2>
              <p className="section-title__text">
                Submit your details and the Triple NNN team can follow up with
                dates, rules, brackets, and match-night details.
              </p>
            </div>
            <div className="mini-card-stack">
              {competitionHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="mini-card" key={item.title}>
                    <Icon aria-hidden="true" size={24} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <form className="registration-form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input name="name" type="text" required />
            </label>
            <label>
              Phone / WhatsApp
              <input name="phone" type="tel" required />
            </label>
            <label>
              Email
              <input name="email" type="email" />
            </label>
            <label>
              Skill level
              <select name="skill" defaultValue="Intermediate">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>Champion level</option>
              </select>
            </label>
            <label>
              Preferred date
              <input name="date" type="date" />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" />
            </label>
            <button className="button button--primary" type="submit">
              Submit Registration
            </button>
            <p className="form-success" role="status">
              Thanks. Your pool challenge registration interest has been
              received for this sample preview.
            </p>
          </form>
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

export default Competitions;
