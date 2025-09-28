import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/skills';
import Footer from './Components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
         <Hero />
         <Skills />
      </section>
      <Footer />
     
    </div>
  );
}

export default App;
