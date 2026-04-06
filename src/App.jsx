import './styles.css'
import logo from './images/Logo.png'
import heroBackground from './images/Background.jpeg'
import { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bark-navbar" id="mainNav">
        <div className="container-fluid bark-nav-wrap">
          <a className="navbar-brand bark-brand" href="#page-top">
            <img src={logo} alt="Logo" className="nav-logo" />
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
              <li className="nav-item">
                <a className="nav-link" href="#terms">Terms</a>
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
            <img src={logo} alt="Logo" className="hero-logo" />

            <div className="hero-copy">
              <h1 className="hero-title">Bark and Lounge</h1>
              <p className="hero-subtitle">Doggy Daycare</p>
              <p className="hero-text">
                A fun, beachy daycare space where dogs can play, relax, and be cared for in
                a warm and welcoming environment.
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
                Welcome to Bark and Lounge Doggy Daycare—Surrey’s cozy home-from-home for dogs. We believe great care starts with Personal meetings and services: every new family begins with a friendly meet-and-greet so we can understand your dog’s personality, routine, and special requests. Then we design a day that blends supervised play, enrichment, and peaceful lounge time, all tailored to your pup.

                Our caring team keeps groups small for safety, manners, and happy socialization. Clean, secure play areas, comfy rest zones, and plenty of one-to-one attention keep tails wagging. Puppies, adults, and seniors are all welcome, with flexible half-day and full-day options to suit your schedule. Expect clear communication and cheerful updates, so you always know how your best friend is doing.
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
          <div className="book-shell">
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
              <p className="section-copy">
                <a href="mailto:BarkAndLoungeDoggyDaycare@outlook.com">
                  BarkAndLoungeDoggyDaycare@outlook.com
                </a>
              </p>
              <p className="section-copy">3010 148 St unit 101, Surrey, BC V4P 0G8</p>
              <p className="section-copy">
                <a href="tel:+16046772887">(604) 677-2887</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section terms-section" id="terms" style={{ background: 'linear-gradient(180deg, var(--bark-teal), var(--bark-teal-dark))', padding: '5rem 0', margin: 0 }}>
        <h2 className="section-title section-title-light" style={{ marginBottom: '2rem' }}>Terms & Waiver</h2>
        <button
          className="book-button"
          style={{ margin: '2rem auto', display: 'block', border: 'none' }}
          onClick={() => setShowTerms(true)}
        >
          Read Terms
        </button>
        {showTerms && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(44,62,80,0.55)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => setShowTerms(false)}
          >
            <div
              className="info-card"
              style={{
                maxWidth: 700,
                background: 'white',
                color: 'var(--bark-navy)',
                position: 'relative',
                zIndex: 2100,
                boxShadow: '0 8px 32px rgba(44,62,80,0.18)',
                padding: '2.5rem 2rem',
                borderRadius: 20,
                textAlign: 'left',
                overflowY: 'auto',
                maxHeight: '80vh',
              }}
              onClick={e => e.stopPropagation()}
            >
              <h2 className="section-title" style={{ color: 'var(--bark-navy)', textAlign: 'center' }}>Terms & Waiver</h2>
              <div className="section-copy" style={{ fontWeight: 700, marginBottom: '1.2rem' }}>Assumption of Risk</div>
              <div className="section-copy">You understand that participation in a dog daycare environment involves inherent risks, including but not limited to interaction with other dogs, minor injuries such as scratches or bites, and potential illness transmission.</div>
              <div className="section-copy" style={{ fontWeight: 700, margin: '1.2rem 0' }}>Release of Liability</div>
              <div className="section-copy">Bark and Lounge Doggy Daycare, its owners, and staff shall not be held liable for any injury, illness, accident, or death that may occur while your dog is in our care. You accept full responsibility for any risks associated with daycare participation.</div>
              <div className="section-copy" style={{ fontWeight: 700, margin: '1.2rem 0' }}>Emergency Care</div>
              <div className="section-copy">In the event of illness or injury, you authorize us to seek veterinary care if necessary. You agree to be fully responsible for any veterinary expenses incurred.</div>
              <div className="section-copy" style={{ fontWeight: 700, margin: '1.2rem 0' }}>Personal Belongings</div>
              <div className="section-copy">We are not responsible for lost or damaged items, including collars, leashes, toys, or other personal belongings.</div>
              <div className="section-copy" style={{ fontWeight: 700, margin: '1.2rem 0' }}>Media Release</div>
              <div className="section-copy">You grant permission for your dog to be photographed or recorded for social media and promotional purposes.</div>
              <div className="section-copy" style={{ fontWeight: 700, margin: '1.2rem 0' }}>Agreement</div>
              <div className="section-copy">By booking or using our services, you confirm that you have read, understood, and agreed to this waiver and all terms outlined above.</div>
              <button
                className="book-button"
                style={{ margin: '2rem auto 0', display: 'block', background: 'var(--bark-teal)', color: 'white' }}
                onClick={() => setShowTerms(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      <footer style={{ background: 'var(--bark-cream)', color: 'var(--bark-navy)', textAlign: 'center', padding: '1.2rem 0', fontSize: '0.95rem', fontWeight: 700 }}>
        &copy; {new Date().getFullYear()} Bark and Lounge Doggy Daycare. All rights reserved.
      </footer>
    </>
  )
}

export default App