import { useState } from "react";
import { Link } from "react-scroll";
import { Menu,X } from "lucide-react";
import './navbar.css'



function Navbar() {
  const [active, setActive] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <header>
      <button className="menu-toggle" onClick={handleToggle}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    <nav className={`my-navbar ${isOpen ? "open" : ""}`}>
         
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
    </header>
  );
}

export default Navbar;
