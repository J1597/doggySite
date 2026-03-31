import './App.css'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="p-0 navbar navbar-expand-sm bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="p-2 container">
          <a className="navbar-brand" href="#page-top">
            Jeevan Gill
          </a>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-2 px-2" href="#portfolio">
                  Projects
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-2 px-2" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-2 px-2" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="masthead bg-primary text-white text-center" id="page-top">
        <div className="container d-flex align-items-center flex-column">
          <h1 className="masthead-heading text-uppercase mt-5 mb-0">
            JEEVAN GILL
          </h1>

          <div className="mt-3 text-center">
            <p className="h1 masthead-subheading font-weight-light mb-2">
              My Portfolio
            </p>
            <p className="h5 font-weight-light mb-0">
              IT / Networking / Projects
            </p>
          </div>
        </div>
      </header>

      {/* PROJECTS */}
      <section className="bg-white page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="h2 page-section-heading text-center text-uppercase text-secondary mb-0">
            Projects
          </h2>

          <p className="text-center mt-4 mb-5">
            Click a project to view details.
          </p>

          <div className="row justify-content-center">
            {/* PIHOLE */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#projectModalPihole"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-white">
                    View Project
                  </div>
                </div>

                <img
                  className="img-fluid"
                  src="images/pihole-title.png"
                  alt="Pi-hole"
                />
              </div>

              <h3 className="h5 text-center text-secondary mt-3 mb-0">
                Pi-hole DNS Server
              </h3>
            </div>

            {/* VPN */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#projectModalVpn"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-white">
                    View Project
                  </div>
                </div>

                <img
                  className="img-fluid"
                  src="images/vpn-title.png"
                  alt="VPN"
                />
              </div>

              <h3 className="h5 text-center text-secondary mt-3 mb-0">
                VPN Setup
              </h3>
            </div>

            {/* UE5 */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div
                className="portfolio-item mx-auto"
                data-bs-toggle="modal"
                data-bs-target="#projectModalUe5"
              >
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-white">
                    View Project
                  </div>
                </div>

                <img
                  className="img-fluid"
                  src="/images/ue5-title.png"
                  alt="UE5"
                />
              </div>

              <h3 className="h5 text-center text-secondary mt-3 mb-0">
                Unreal Engine 5 Project
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            About
          </h2>

          <p className="h6 text-center mt-4">
            I’m a computer science graduate with an associate-level diploma and a
            strong focus on hands-on technical learning. This portfolio website,
            built with React, showcases my work and reflects my growing experience
            in frontend development and system design.
          </p>

          <p className="h6 text-center mt-4">
            I’ve built a home lab environment working with VPNs, DNS servers,
            Docker, and virtual machines. I also build Unreal Engine 5 projects,
            exploring level design and interactive systems.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-white page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contact
          </h2>

          <p className="h6 text-secondary text-center mt-4">
            jeevan1597@outlook.com
            <br />
            Surrey, BC
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-0 footer text-center">
        <div className="p-4 container">
          <p className="mb-0">
            © {new Date().getFullYear()} Jeevan Gill. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ================= MODALS ================= */}

      {/* PIHOLE MODAL */}
      <div className="portfolio-modal modal fade" id="projectModalPihole">
        <div className="modal-dialog modal-xl">
          <div className="modal-content text-center p-4">
            <button className="btn-close ms-auto" data-bs-dismiss="modal"></button>

            <h2 className="text-secondary mt-3">Pi-hole DNS Server</h2>

            <img className="img-fluid my-4" src="images/pihole-diagram.png" />

            <p className="text-secondary">
              Built a Pi-hole DNS server to block ads network-wide. This project
              involved configuring DNS routing, Docker deployment, and local network
              management.
            </p>

            <button className="btn btn-primary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>

      {/* VPN MODAL */}
      <div className="portfolio-modal modal fade" id="projectModalVpn">
        <div className="modal-dialog modal-xl">
          <div className="modal-content text-center p-4">
            <button className="btn-close ms-auto" data-bs-dismiss="modal"></button>

            <h2 className="text-secondary mt-3">VPN Setup</h2>

            <img className="img-fluid my-4" src="images/vpn-diagram.png" />

            <p className="text-secondary">
              Configured a home VPN for secure remote access. Worked with port
              forwarding, DDNS, firewall rules, and networking troubleshooting.
            </p>

            <button className="btn btn-primary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>

      {/* UE5 MODAL */}
      <div className="portfolio-modal modal fade" id="projectModalUe5">
        <div className="modal-dialog modal-xl">
          <div className="modal-content text-center p-4">
            <button className="btn-close ms-auto" data-bs-dismiss="modal"></button>

            <h2 className="text-secondary mt-3">Unreal Engine 5 Project</h2>

            <div className="ratio ratio-16x9 my-4">
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="UE5 Project"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-secondary">
              Built a UE5 project exploring level design and gameplay systems.
            </p>

            <button className="btn btn-primary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App