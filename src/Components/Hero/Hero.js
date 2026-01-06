import './Hero.css';
import WilliamPic from '../../images/williamhaggpic.jpg'



function Hero() {
  

   return (
    <section className="hero">
      <div className="hero-content">
        <div className="img-container">
          <img className="img-logo" src={WilliamPic} alt="William Hagg" />
        </div>
        <h1>Hello, I'm William</h1>
        <h2>Junior .NET Developer</h2>
      </div>
      <div className="about-section">
      </div>
    </section>
  );
}

export default Hero;
