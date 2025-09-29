import { useState } from "react";
import { Link } from "react-scroll";
import './navbar.css'



function Navbar() {
  const [active, setActive] = useState('#home');
  

  return (
    <nav className="navbar">

      <Link
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        className={active === '#home' ? 'active' : ''}
        onClick={() => setActive('#home')}
      >
        Home
      </Link>

      <Link
        to="skills"
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        className={active === '#skills' ? 'active' : ''}
        onClick={() => setActive('#skills')}
      >
        Skills
      </Link>

      
      <Link
        to="projects"
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        className={active === '#projects' ? 'active' : ''}
        onClick={() => setActive('#projects')}
      >
        Projects
      </Link>

      <Link
        to="contact"

        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        className={active === '#contact' ? 'active' : ''}
        onClick={() => setActive('#contact')}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
