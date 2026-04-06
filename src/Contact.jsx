
import instagramLogo from './assets/instagram.svg';

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>jeevangill@msn.com</p>
      <a
        href="https://www.instagram.com/barkandloungedoggydaycare/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5em', textDecoration: 'none', color: 'inherit', marginTop: '1em' }}
      >
        <img src={instagramLogo} alt="Instagram" style={{ width: '24px', height: '24px', verticalAlign: 'middle' }} />
        Instagram
      </a>
    </section>
  );
}

export default Contact