import { useState } from "react";
import './navbar.css'

function Navbar() {
  const [active, setActive] = useState('#home');

  return (
    <nav className="navbar">

      <a
        href="#home"
        className={active === '#home' ? 'active' : ''}
        onClick={() => setActive('#home')}
      >
        Home
      </a>

      <a
        href="#skills"
        className={active === '#skills' ? 'active' : ''}
        onClick={() => setActive('#skills')}
      >
        Skills
      </a>

      <a
        href="#courses"
        className={active === '#courses' ? 'active' : ''}
        onClick={() => setActive('#courses')}
      >
        Courses
      </a>

      <a
        href="#projects"
        className={active === '#projects' ? 'active' : ''}
        onClick={() => setActive('#projects')}
      >
        Projects
      </a>

      <a
        href="#contact"
        className={active === '#contact' ? 'active' : ''}
        onClick={() => setActive('#contact')}
      >
        Contact
      </a>
    </nav>
  );
}

export default Navbar;
