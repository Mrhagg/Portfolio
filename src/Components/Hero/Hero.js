import './Hero.css';
import WilliamProfil from '../../images/William_profilpic.jpg'



function Hero() {
  

   return (
    <section className="hero">
      <div className="hero-content">
        <div className="img-container">
          <img className="img-logo" src={WilliamProfil} alt="William Hagg" />
        </div>
        <h1>Hello, I'm William</h1>
        <h2 className="hero-title">.NET Web Developer</h2>
        <p className="hero-subtitle">
          Turning ideas into robust web applications <br />
          Focused on clean architecture, responsive frontend design, APIs and fullstack solutions.
        </p>
      </div>
      <div className="about-section">
      </div>
    </section>
  );
}

export default Hero;
