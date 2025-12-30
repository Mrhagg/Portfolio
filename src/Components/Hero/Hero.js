import './Hero.css';
import WilliamPic from '../../images/williamhaggpic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile }  from '@fortawesome/free-solid-svg-icons' 


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
