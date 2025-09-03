import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Footer from './Components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
         <Hero />
      </section>
      <Footer />
     
    </div>
  );
}

export default App;
