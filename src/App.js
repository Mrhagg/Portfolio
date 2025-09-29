import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/skills';
import Contact from './Components/Contact/contact';
import Footer from './Components/footer/footer';

function App() {
 
  
  return (
    <div className="App">
      <Header />
      <section id="hero">
         <Hero />
      </section>
      <section id="skills">
         <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
      
     
    </div>
  );
}

export default App;
