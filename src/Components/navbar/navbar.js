import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation} from "react-router-dom"
import { Menu,X } from "lucide-react";
import './navbar.css'



function Navbar() {
  const [active, setActive] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleHomeClick = () => {
    setIsOpen(false);
    if (isHome) {
      ScrollLink.scrollTo('hero', {smooth: true, duration: 100, offset: -70});
      setActive('hero');
    } else {
      setActive('#hero')
    }
  }


  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }


  return (
    <header>
      <button className="menu-toggle" onClick={handleToggle}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    <nav className={`my-navbar ${isOpen ? "open" : ""}`}>
         
      <RouterLink
        to="/"
        onClick={handleHomeClick}
        className={location.pathname === '/' ? 'active' : ''}
      > Home
      </RouterLink>

    {isHome && (
      <>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={100}
          spy={true}
          offset={-70}
          className={active === '#skills' ? 'active' : ''}
          onClick={() => setActive('#skills')}
        >
          Skills
        </ScrollLink>

        
        <ScrollLink
          to="projects"
          smooth={true}
          duration={100}
          spy={true}
          offset={-70}
          className={active === '#projects' ? 'active' : ''}
          onClick={() => setActive('#projects')}
        >
          Projects
        </ScrollLink>

        <ScrollLink
          to="contact"

          smooth={true}
          duration={100}
          spy={true}
          offset={-70}
          className={active === '#contact' ? 'active' : ''}
          onClick={() => setActive('#contact')}
        >
          Contact
        </ScrollLink>
      </>
    )}
     
      <RouterLink
        to="about"
        className={window.location.pathname === '/about' ? 'active' : ''}
        onClick={() => setIsOpen(false)}
        > About
      </RouterLink>
      </nav>
    </header>
  );
}

export default Navbar;
