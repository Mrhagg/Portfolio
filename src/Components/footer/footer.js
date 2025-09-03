import './footer.css'

function Footer () {
  return (
    <div className="footer-links">
      <p className="footer-copy">&copy; 2025 William's Portfolio</p>
      <nav className="socials">
          <a href="https://github.com/Mrhagg"><i class="fa-brands fa-linkedin"></i>github</a>
          <a href="https://www.linkedin.com/in/william-h%C3%A4gg-b2a524269/"><i class="fa-brands fa-github"></i>Linkedin</a>
      </nav>
    </div>
  );
}

export default Footer;