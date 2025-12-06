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
 


  

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

 
  return (
    <div className="navbar-wrapper">
      <button className="menu-toggle" onClick={handleToggle}>
        { isOpen ? <X size={28} /> : <Menu size={40} /> }
      </button>
    <nav className={`my-navbar ${isOpen ? "open" : ""}`}>
        
    {isHome ? (
        <ScrollLink
          to="hero"
          smooth={true}
          duration={100}
          offset={-100}
          spy={true} 
          onSetActive={() => setActive('hero')}
          onSetInactive={() => setActive('')} 
          onClick={() => setIsOpen(false)} 
          className={active === 'hero' ? 'active' : ''} 
        > Home
        </ScrollLink>
    ) : (
        <RouterLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={location.pathname === '/' ? 'active' : ''} 
        > Home
        </RouterLink>
    )}

    {isHome && (
      <>
      
        <ScrollLink
          to="skills"
          smooth={true}
          duration={100}
          spy={true}
          offset={-70}
          className={active === '#skills' ? 'active' : ''}
          onClick={() => setActive('#skills') ?? setIsOpen(false)}
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
          onClick={() => setActive('#projects') ?? setIsOpen(false)}
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
          onClick={() => setActive('#contact') ?? setIsOpen(false)}
        >
          Contact
        </ScrollLink>
      </>
    )}
     
      <RouterLink
        to="about"
        className={window.location.pathname === '/about' ? 'active' : ''}
        onClick={() => setIsOpen(false) }
        > About
      </RouterLink>
      </nav>
    </div>
  );
}

export default Navbar;
