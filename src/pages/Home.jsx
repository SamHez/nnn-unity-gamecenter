import { Beef, Building2, CircleDot, Gamepad2, GlassWater, MapPin, Phone, Send, Trophy, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/nnn-logo.png';
import nightViewsImage from '../assets/night-views.webp';
import poolImage from '../assets/pool-1.webp';
import bbqImage from '../assets/bbq.jpeg';
import viewimg from '../assets/views.jpg';
import icyansiImg from '../assets/icyansi.jpeg';


import heroImage from '../assets/images/hero/bg.png';

const worldCupMatches = [
  {
    group: 'Group I',
    time: 'TUE 7 PM',
    venue: 'Gillette Stadium',
    home: { name: 'Norway', logo: '🇳🇴' },
    away: { name: 'France', logo: '🇫🇷' },
  },
  {
    group: 'Group I',
    time: 'WED 11 PM',
    venue: 'BMO Field',
    home: { name: 'Senegal', logo: '🇸🇳' },
    away: { name: 'Iraq', logo: '🇮🇶' },
  },
  {
    group: 'Group G',
    time: 'FRI 9 PM',
    venue: 'Lumen Field',
    home: { name: 'Egypt', logo: '🇪🇬' },
    away: { name: 'IR Iran', logo: '🇮🇷' },
  },
  {
    group: 'Group G',
    time: 'SUN 8:30PM',
    venue: 'BC Place',
    home: { name: 'Australia', logo: '🇳🇿' },
    away: { name: 'India', logo: '🇧🇪' },
  },
  {
    group: 'Group H',
    time: 'SAT 11:45PM',
    venue: 'Estadio Akron',
    home: { name: 'Uruguay', logo: '🇺🇾' },
    away: { name: 'Spain', logo: '🇪🇸' },
  },
];

const heroChips = [
  'Many Pool Tables',
  'Big Screens & Games',
  'Great Food',
  'Live Match Nights',
  'Rooftop Kigali Views',
];

const experiences = [
  {
    title: 'Pool Tables',
    text: 'Challenge your friends, sharpen your game, and enjoy many pool tables in a lively Remera atmosphere.',
    icon: CircleDot,
  },
  {
    title: 'Big Screens & Games',
    text: 'Watch live sports, enjoy game nights, and experience the energy of Triple NNN with your squad.',
    icon: Gamepad2,
  },
  {
    title: 'BBQ & Restaurant',
    text: 'Enjoy BBQ, tasty meals, authentic Ugandan dishes, and refreshing drinks.',
    icon: Utensils,
  },
  {
    title: 'Rooftop Kigali Views',
    text: 'Relax with rooftop views and a social atmosphere in Remera, Kigali.',
    icon: Building2,
  },
];

const matchCards = [
  { title: "Tonight's Big Match", label: 'Live screen zone', meta: 'Kickoff energy', stat: '90' },
  { title: 'Weekend Match Night', label: 'Bring your squad', meta: 'Food + pool + football', stat: '11' },
  { title: 'World Cup Updates', label: 'Tournament watch', meta: 'Major games covered', stat: '24' },
  { title: 'Match Day Specials', label: 'BBQ and drinks', meta: 'Reserve seats early', stat: '8' },
];

const galleryItems = [
  { label: 'Pool Zone', text: 'Tables, cue lines, and competitive breaks.', image: poolImage },
  { label: 'Nyama Choma', text: 'Grill smoke, fresh plates, and group tables.', image: bbqImage },
  { label: 'Icyansi', text: 'Live football nights with crowd energy.', image: icyansiImg },
  { label: 'Rooftop View', text: 'Remera evenings above Kigali.', image: viewimg },
];

function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-decor" aria-hidden="true">
          <span className="home-hero-decor__beam home-hero-decor__beam--left" />
          <span className="home-hero-decor__beam home-hero-decor__beam--right" />
          <span className="home-hero-decor__felt" />
          
        </div>

        <div className="container home-hero__inner">
          <div className="home-hero__content">
            <img className="home-hero__logo" src={logo} alt="Triple NNN Unity Game Center logo" />
            <p className="home-hero__intro hidden">Get Ready...</p>
            <h1 id="home-hero-title">
              <span>Play. Eat.</span>
              <span>Relax. Repeat.</span>
            </h1>
            <p className="home-hero__brand-line hidden">Triple NNN Unity Game Center</p>
            <p className="home-hero__subheading">
              Pool tables, BBQ, restaurant dining, live football, big screens,
              and rooftop Kigali views in Remera.
            </p>
            <div className="home-hero__actions" aria-label="Hero actions">
              <Link className="button button--primary" to="/contact">Explore Gallery</Link>
              <Link className="button button--secondary" to="/competitions">View Menu</Link>
            </div>
          </div>
        </div>
      </section>


      {/* LIVE MATCH UPDATES */}
      <section className="home-highlight-strip world-cup-strip reveal-on-scroll" aria-label="World Cup live match viewing at Triple NNN">
        <div className="container">
          <div className="world-cup-strip__heading">
            <p className="hidden section-kicker">World Cup live match viewing</p>
            <h2 className="hidden">Watch Today's Games at Triple NNN</h2>
          </div>
          <div className="home-highlight-strip__grid world-cup-grid">
            {worldCupMatches.map((match) => (
              <article className="home-highlight-card world-cup-card reveal-on-scroll" key={`${match.home.name}-${match.away.name}`}>
                <div className="world-cup-card__teams">
                  <span className="team-logo" aria-label={`${match.home.name} logo`}>{match.home.logo}</span>
                  <strong>VS</strong>
                  <span className="team-logo" aria-label={`${match.away.name} logo`}>{match.away.logo}</span>
                </div>
                <div className="world-cup-card__content">
                  <h2>{match.home.name} vs {match.away.name}</h2>
                  <p>{match.time}</p>
                  <small className='hidden'>{match.venue}</small>
                  <span className="live-at">Live at Triple NNN</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GAME CENTER EXPERIENCE */}
      <section className="home-section gallery-preview reveal-on-scroll" aria-labelledby="gallery-title">
        <div className="container">
          <div className="gallery-preview__heading">
            <p className="section-kicker">The Triple NNN Unity Vibe</p>
            <h2 id="gallery-title" style={{letterSpacing: '0px'}}>Game Center Moments</h2><br />
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article
                className="gallery-tile reveal-on-scroll"
                key={item.label}
                style={{ '--gallery-image': `url(${item.image})` }}
              >
                <div>
                  <span>{item.label}</span>
                  <p className='hidden' style={{color: 'white'}}>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* ROOFTOP KIGALI VIEWS */}
      <section className="home-section rooftop-section" aria-labelledby="rooftop-title">
        <div className="container rooftop-section__inner">
          <div className="rooftop-card">
            <Building2 aria-hidden="true" size={34} />
            <span>Remera Nights</span>
            <strong>Rooftop View</strong>
          </div>
          <div>
            <p className="section-kicker">Above the Game</p>
            <h2 id="rooftop-title">Rooftop Kigali Views</h2>
            <br />
            <p>
              Unwind above Remera with a relaxed rooftop setting and a view of
              the city. Settle in with friends as the skyline opens up around
              you and the pace of the evening slows down. It is an easy spot
              for sunset drinks, casual catchups, and laid-back match nights.
              From early evening to late hours, the rooftop adds a calm city
              backdrop to the full Triple NNN experience.
            </p>
            <br />
            <Link className="button button--primary" to="/contact">Explore Gallery</Link>
          </div>
        </div>
      </section>

      

      <section className="home-section experience-section reveal-on-scroll" aria-labelledby="experience-title">
        <div className="container">
          <div className="section-title">
            <p className="section-title__eyebrow">Play. Eat. Watch. Relax.</p>
            <h2 id="experience-title">Built for Every Kind of Night Out</h2>
            <p className="section-title__text hidden">
              Triple NNN brings pool lounge energy, food, football, and rooftop
              hangouts into one Remera destination.
            </p>
          </div>
          <div className="experience-grid">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <article className="experience-card reveal-on-scroll" key={item.title}>
                  <span className="experience-card__number">{String(index + 1).padStart(2, '0')}</span>
                  <Icon aria-hidden="true" size={30} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="competition-banner" aria-labelledby="competition-title">
        <div className="container competition-banner__inner">
          <div className="competition-banner__icon" aria-hidden="true">
            <Trophy size={42} />
          </div>
          <div>
            <p className="section-kicker">Pool Challenge</p>
            <h2 id="competition-title">Join the Triple NNN Pool Challenge</h2>
            <p>
              Think you have the best shot in Remera? Register for upcoming pool
              competitions and compete with other players.
            </p>
          </div>
          <Link className="button button--primary" to="/competitions">Register Now</Link>
        </div>
      </section>

      <section className="home-section match-zone reveal-on-scroll" aria-labelledby="match-zone-title">
        <div className="container">
          <div className="section-title">
            <p className="section-title__eyebrow">Big Screens & Games</p>
            <h2 id="match-zone-title">Live World Cup Nights</h2>
            <p className="section-title__text">
              Watch major games, World Cup updates, and match-day events at
              Triple NNN Unity Game Center.
            </p>
          </div>
          <div className="match-grid">
            {matchCards.map((card) => (
              <article className="match-card reveal-on-scroll" key={card.title}>
                <div className="match-card__top">
                  <span>{card.label}</span>
                  <strong>{card.stat}</strong>
                </div>
                <h3>{card.title}</h3>
                <p>{card.meta}</p>
                <div className="match-card__bar">
                  <span />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section food-section" aria-labelledby="food-title">
        <div className="container split-section">
          <div>
            <p className="section-kicker">BBQ / Restaurant / Drinks</p>
            <h2 id="food-title">Great Food. Local Flavor. Good Vibes.</h2>
            <p>
              From BBQ nights to authentic Ugandan dishes and refreshing drinks,
              Triple NNN is built for food, games, and community.
            </p>
            <Link className="button button--primary" to="/restaurant-bbq">Explore Food & BBQ</Link>
          </div>
          <div className="food-stack" aria-label="Food highlights">
            <article>
              <Beef aria-hidden="true" size={28} />
              <div>
                <h3>BBQ Nights</h3>
                <p>Tasty meals made fresh for groups and long game nights.</p>
              </div>
            </article>
            <article>
              <Utensils aria-hidden="true" size={28} />
              <div>
                <h3>Ugandan Dishes</h3>
                <p>Enjoy local flavors with a social restaurant atmosphere.</p>
              </div>
            </article>
            <article>
              <GlassWater aria-hidden="true" size={28} />
              <div>
                <h3>Refreshing Drinks</h3>
                <p>Cold drinks for match viewing, pool breaks, and rooftop evenings.</p>
              </div>
            </article>
          </div>
        </div>
      </section>


      <section className="booking-strip reveal-on-scroll" aria-labelledby="booking-title">
        <div className="container booking-strip__inner">
          <div className="booking-strip__copy">
            <p className="section-kicker">Bring Your Squad</p>
            <h2 id="booking-title">LET'S UNITE FOR FUN</h2>
            <p>
              Book a pool table, plan a food night, or reserve your spot for
              live match viewing at Triple NNN Unity Game Center.
            </p>
          </div>
          <div className="booking-strip__actions">
            <a className="button button--primary" href="https://wa.me/">
              <Send aria-hidden="true" size={18} />
              Book on WhatsApp
            </a>
            <a className="button button--ghost" href="tel:+250">
              <Phone aria-hidden="true" size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>


      <section className="location-cta hidden" aria-labelledby="location-title">
        <div className="container location-cta__inner">
          <div>
            <p className="section-kicker">Remera, Kigali-Rwanda</p>
            <h2 id="location-title">Located in Remera, Kigali</h2>
            <p>
              Triple NNN Unity Game Center is easy to access in Kigali and built
              for games, food, live sports, and fun.
            </p>
          </div>
          <div className="location-cta__actions">
            <Link className="button button--primary" to="/contact">
              <MapPin aria-hidden="true" size={18} />
              Get Directions
            </Link>
            <Link className="button button--ghost" to="/contact">
              <Phone aria-hidden="true" size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
