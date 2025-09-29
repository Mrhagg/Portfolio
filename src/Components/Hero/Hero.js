import './Hero.css';
import { useState } from 'react';
import WilliamPic from '../../images/williamhaggpic.jpg'

function Hero() {
  const [activeBtn, setActiveBtn] = useState(null);
   return (
    <section className="hero">
      <div className="hero-content">
        <div className="img-container">
          <img className="img-logo" src={WilliamPic}></img>
        </div>
        <h1>Hello, I'm William</h1>
        <h2>.NET Fullstack Developer</h2>
        <p>
          I build modern and scalable web applications using <strong>C#</strong>, <strong>ASP.NET Core</strong>, 
          and <strong>React</strong>. Passionate about creating user-friendly solutions 
          that make a real impact.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className={`btn ${activeBtn === '#projects' ? 'active' : ''}`} onClick={() => setActiveBtn('#projects')}>
            View My Projects
          </a>
          <a href="#contact" className={`btn secondary ${activeBtn === '#contact' ? 'active' : ''}`} onClick={() => setActiveBtn('#contact')}>
            Get In Touch
          </a>
        </div>
      </div>
      <div className="about-section">
      </div>
    </section>
  );
}

export default Hero;
