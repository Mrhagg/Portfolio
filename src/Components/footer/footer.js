import './footer.css'

function Footer () {
  return (
    <div className="footer-links">
      <p className="footer-copy">&copy; 2025 William's Portfolio</p>
      <div className="footer-container">
      </div>
      <nav className="socials">
        <a href="https://github.com/Mrhagg">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/william-h%C3%A4gg-b2a524269/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </nav>
    </div>
  );
}

export default Footer;