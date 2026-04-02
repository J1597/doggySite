import './styles.css'
import logo from './images/Logo.png'
import heroBackground from './images/Background.jpeg'

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bark-navbar fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#page-top">
            <img
              src={logo}
              alt="Bark and Lounge Doggy Daycare logo"
              className="nav-logo"
            />
            <span className="brand-text">Bark and Lounge</span>
          </a>

          <button
            className="navbar-toggler bark-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
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
        <div className="container d-flex justify-content-center align-items-center">
          <div className="hero-card">
            <img
              src={logo}
              alt="Bark and Lounge Doggy Daycare logo"
              className="hero-logo"
            />

            <div className="hero-copy">
              <h1 className="hero-title">Bark and Lounge</h1>
              <p className="hero-subtitle">Doggy Daycare</p>
              <p className="hero-text">
                A fun, beachy daycare space where dogs can play, relax, and be cared for in a warm and welcoming environment.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="page-section about-section" id="about">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <div className="info-card">
            <p className="section-copy">
              At Bark and Lounge, we believe daycare should feel happy, relaxed, and full of care. Our team brings a
              light-hearted energy to each day while always making your dog’s comfort and safety the priority. We love
              getting to know every pup’s personality, giving them gentle attention, playful interaction, and a calm,
              caring environment where they can feel right at home.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section services-section" id="services">
        <div className="container">
          <h2 className="section-title">Services</h2>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="info-card h-100">
                <h3 className="card-title">Half-Day Stay (2–6 Hours)</h3>
                <p className="section-copy">Perfect for pups who need a fun break in their day.</p>
                <p className="section-copy">Supervised playtime and socialization</p>
                <p className="section-copy">Outdoor potty breaks</p>
                <p className="section-copy">Cozy rest and cuddle time</p>
                <p className="section-copy">Mental enrichment activities</p>
                <p className="section-copy">Fresh water and a clean environment</p>
                <p className="section-copy">Personalized care and attention</p>
                <p className="section-copy strong-copy">
                  Great for busy mornings, errands, or a little time to yourself.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="info-card h-100">
                <h3 className="card-title">Full-Day Stay (6–12 Hours)</h3>
                <p className="section-copy">A full day of fun, care, and relaxation.</p>
                <p className="section-copy">Everything included in Half-Day Stay</p>
                <p className="section-copy">Feeding provided by owner</p>
                <p className="section-copy">Extended play and enrichment sessions</p>
                <p className="section-copy">Extra cuddle and rest periods</p>
                <p className="section-copy">Photo and video updates for peace of mind</p>
                <p className="section-copy strong-copy">
                  Perfect for full work days — your pup will come home happy and tired.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 pricing-row">
            <div className="col-md-6">
              <div className="info-card h-100">
                <h3 className="card-title">Pricing</h3>
                <div className="price-list">
                  <div className="price-row"><span>Hourly</span><strong>$16</strong></div>
                  <div className="price-row"><span>Half Day (1–6 hr)</span><strong>$35</strong></div>
                  <div className="price-row"><span>Full Day (6–12 hr)</span><strong>$50</strong></div>
                  <div className="price-row"><span>Walks</span><strong>$10</strong></div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-card h-100">
                <h3 className="card-title">Packages</h3>
                <div className="package-block">
                  <h4>10 Visits — Save 10%</h4>
                  <p className="section-copy">Half Day (10) — $315</p>
                  <p className="section-copy">Full Day (10) — $450</p>
                </div>

                <div className="package-block mb-0">
                  <h4>20 Visits — Save 15%</h4>
                  <p className="section-copy">Half Day (20) — $595</p>
                  <p className="section-copy">Full Day (20) — $850</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section book-section" id="book">
        <div className="container">
          <h2 className="section-title section-title-light">Book</h2>
          <div className="booking-shell">
            <h3 className="card-title">Book Your Dog’s Visit</h3>
            <p className="section-copy booking-copy">
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
      </section>

      <section className="page-section contact-section" id="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-card">
            <p className="section-copy">
              <a href="mailto:BarkAndLoungeDoggyDaycare@outlook.com">
                BarkAndLoungeDoggyDaycare@outlook.com
              </a>
            </p>
            <p className="section-copy">Unit 101 3010 148 St, Surrey BC</p>
            <p className="section-copy mb-0">
              <a href="tel:+16046772887">(604) 677-2887</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App