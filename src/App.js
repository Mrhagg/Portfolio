import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/footer/footer';
import Home from './Home';
import About from './About';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
 
  
  return (
    <div className="App">
     <BrowserRouter>
        <Header />
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
