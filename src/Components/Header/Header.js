import './Header.css'
import Navbar from '../navbar/navbar';

function Header() {
  return (
    <header className="App-header">
      <div>
        <h1 className="headline-text">William's Portfolio</h1>       
      </div>
      <Navbar />
      
      
    </header>
  );
}

export default Header;