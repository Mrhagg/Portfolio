import './Header.css'
import Navbar from '../navbar/navbar';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="App-header">
      <h1 className="headline-text">William's Portfolio</h1>
        <Navbar />
    </header>
  );
}

export default Header;