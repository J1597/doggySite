import './styles.css';
import logo from './images/Logo.png';
import heroBackground from './images/Background.jpeg';
import { useState } from 'react';
import instagramIcon from './images/instagramIcon.png';
import mailIcon from './images/mailIcon.png';
import mapsIcon from './images/mapsIcon.png';
import phoneIcon from './images/phoneIcon.png';
import { Routes, Route } from 'react-router-dom';
import Terms from './Terms.jsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <Routes>
      <Route path="/terms" element={<Terms />} />
      <Route path="/*" element={
        <>
          <nav className="navbar navbar-expand-lg bark-navbar" id="mainNav">
            <div className="container-fluid bark-nav-wrap">
              <a className="navbar-brand bark-brand" href="#page-top">
                <img src={logo} alt="Bark and Lounge Doggy Daycare logo - Dog daycare in Surrey BC and White Rock" className="nav-logo" />
                <span className="bark-brand-text">Bark and Lounge</span>
              </a>
              <button
                className="navbar-toggler bark-toggler"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-controls="navbarResponsive"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarResponsive">
                <ul className="navbar-nav bark-nav-links">
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#book">Book</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header
            className="hero-section"
            id="page-top"
            style={{ backgroundImage: `url(${heroBackground})` }}
          >
            <div className="container d-flex align-items-start">
              <div className="hero-card">
                <img src={logo} alt="Bark and Lounge Doggy Daycare logo - Dog daycare in Surrey BC and White Rock" className="hero-logo" />

                <div className="hero-copy">
                  <h1 className="hero-title">Bark and Lounge</h1>
                  <p className="hero-subtitle">Doggy Daycare</p>
                  <p className="hero-text">
                    A fun, beachy dog daycare in South Surrey BC (White Rock) where your dog can play, relax, and be cared for in a warm and welcoming environment. Flexible half-day and full-day options, small groups, and personalized care.
                  </p>
                </div>
              </div>
            </div>
          </header>

          <section className="page-section about-section" id="about">
            <div className="container">
              <h2 className="section-title">About Us</h2>
              <div className="about-shell">
                <div className="info-card">
                  <p className="section-copy">
                    Welcome to Bark and Lounge Doggy Daycare—Surrey and White Rock’s cozy home-from-home for dogs. We believe great care starts with personal meetings and services: every new family begins with a friendly meet-and-greet so we can understand your dog’s personality, routine, and special requests. Then we design a day that blends supervised play, enrichment, and peaceful lounge time, all tailored to your pup.

                    Our caring team keeps groups small for safety, manners, and happy socialization. Clean, secure play areas, comfy rest zones, and plenty of one-to-one attention keep tails wagging. Puppies, adults, and seniors are all welcome, with flexible half-day and full-day options to suit your schedule. Expect clear communication and cheerful updates, so you always know how your best friend is doing. Serving Surrey BC and White Rock.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section services-section" id="services">
            <div className="container">
              <h2 className="section-title">Services</h2>
              <div className="services-shell">
                <div className="info-card">
                  <h3 className="card-title">Half-Day Stay (2–6 Hours)</h3>
                  <p className="section-copy">Perfect for pups who need a fun break in their day.</p>
                  <p className="section-copy">Supervised playtime and socialization</p>
                  <p className="section-copy">Outdoor potty breaks</p>
                  <p className="section-copy">Cozy rest and cuddle time</p>
                  <p className="section-copy">Mental enrichment activities</p>
                  <p className="section-copy">Fresh water and clean environment</p>
                  <p className="section-copy">Personalized care and attention</p>
                  <p className="section-copy strong-copy">
                    Great for busy mornings, errands, or a little time to yourself.
                  </p>
                </div>
              </div>
              <div className="services-shell">
                <div className="info-card">
                  <h3 className="card-title">Full-Day Stay (7–12 Hours)</h3>
                  <p className="section-copy">A full day of fun, care, and relaxation.</p>
                  <p className="section-copy">Everything included in Half-Day Stay</p>
                  <p className="section-copy">Feeding (owner provides food)</p>
                  <p className="section-copy">Extended play and enrichment sessions</p>
                  <p className="section-copy">Extra cuddle and rest periods</p>
                  <p className="section-copy">Photo/video updates</p>
                  <p className="section-copy strong-copy">
                    Perfect for full work days — your pup will come home happy and tired.
                  </p>
                </div>
              </div>
              <div className="services-shell">
                <div className="info-card">
                  <h3 className="card-title">Pricing</h3>
                  <div className="price-list">
                    <div className="price-row"><span>Hourly</span><strong>$16</strong></div>
                    <div className="price-row"><span>Half Day</span><strong>$35</strong></div>
                    <div className="price-row"><span>Full Day</span><strong>$50</strong></div>
                    <div className="price-row"><span>Walks</span><strong>$10</strong></div>
                  </div>
                </div>
              </div>
              <div className="services-shell">
                <div className="info-card">
                  <h3 className="card-title">Packages</h3>
                  <p className="section-copy strong-copy">10 Visits — Save 10%</p>
                  <p className="section-copy">Half Day — $315</p>
                  <p className="section-copy">Full Day — $450</p>
                  <p className="section-copy strong-copy mt-3">20 Visits — Save 15%</p>
                  <p className="section-copy">Half Day — $595</p>
                  <p className="section-copy">Full Day — $850</p>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section book-section" id="book">
            <div className="container">
              <h2 className="section-title section-title-light">Book</h2>
              <div className="book-shell" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="booking-shell">
                  <h3 className="card-title">Temperament Assessment</h3>
                  <p className="section-copy">
                    If this is your dog's first visit book a free temperament assessment
                  </p>
                  <a
                    className="book-button"
                    href="https://barkandlounge.setmore.com/book?step=time-slot&products=ed99571c-2aaa-4634-9273-5cbbc5810a41&type=service&staff=gldmRbyp2Vo69aVk7rtCD66F9Dmkul99&staffSelected=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Assessment
                  </a>
                </div>
                <div className="booking-shell">
                  <h3 className="card-title">Book Your Dog’s Visit</h3>
                  <p className="section-copy">
                    Ready to reserve your dog’s spot? Use our booking page to schedule a visit.
                  </p>
                  <a
                    className="book-button"
                    href="https://barkandlounge.setmore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section contact-section" id="contact">
            <div className="container">
              <h2 className="section-title">Contact</h2>
              <div className="contact-shell">
                <div className="contact-card">
                  <div className="section-copy contact-icons">
                    <a
                      href="mailto:BarkAndLoungeDoggyDaycare@outlook.com"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5em', color: 'var(--bark-navy)', textDecoration: 'underline', marginRight: '1.5em' }}
                    >
                      <img src={mailIcon} alt="Mail" style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} />
                      <span style={{ wordBreak: 'break-all' }}>
                        BarkAndLoungeDoggyDaycare@<wbr />outlook.com
                      </span>
                    </a>
                    <a
                      href="https://maps.google.com/?q=3010+148+St+unit+101,+Surrey,+BC+V4P+0G8"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5em', color: 'var(--bark-navy)', textDecoration: 'underline', marginRight: '1.5em' }}
                    >
                      <img src={mapsIcon} alt="Maps" style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} />
                      3010 148 St unit 101, Surrey, BC V4P 0G8
                    </a>
                    <a
                      href="tel:+16046772887"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5em', color: 'var(--bark-navy)', textDecoration: 'underline', marginRight: '1.5em' }}
                    >
                      <img src={phoneIcon} alt="Phone" style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} />
                      (604) 677-2887
                    </a>
                    <a
                      href="https://www.instagram.com/barkandloungedoggydaycare/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5em', color: 'var(--bark-navy)', textDecoration: 'underline' }}
                    >
                      <img src={instagramIcon} alt="Instagram" style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} />
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <footer style={{ background: 'var(--bark-cream)', color: 'var(--bark-navy)', textAlign: 'center', padding: '1.2rem 0', fontSize: '0.95rem', fontWeight: 700 }}>
            &copy; {new Date().getFullYear()} Bark and Lounge Doggy Daycare. All rights reserved.
          </footer>
        </>
      } />
    </Routes>
  )
}

export default App