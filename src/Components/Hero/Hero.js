import './Hero.css';
import { useState } from 'react';
import WilliamPic from '../../images/williamhaggpic.jpg'
import DownloadPDF from '../../DownloadPDF';



function Hero() {
  const [activeBtn, setActiveBtn] = useState(null);
   return (
    <section className="hero">
      <div className="hero-content">
        <div className="img-container">
          <img className="img-logo" src={WilliamPic}></img>
        </div>
        <h1>Hello, I'm William</h1>
        <h2>Junior .NET Developer</h2>
        <p>
          I'm a junior web developer who builds modern and scalable web applications using <strong>C#</strong>, <strong>ASP.NET Core</strong>, 
          and <strong>JavaScript</strong>. Passionate about creating user-friendly solutions 
          that make a real impact. On my spare time i like to get creative with different kinds of coding projects or spend the time with my girlfriend and our dog.
        </p>
        <div className="cert">
            <div className="download-link">
              <h4>If you are interested in my work and want to know more about me, <strong>Click here to download my CV</strong></h4>
              <a className="btn btn-success" href="CV.pdf" download="CV.pdf">Download</a>
            </div>
        </div>
       
      </div>
      <div className="about-section">
      </div>
    </section>
  );
}

export default Hero;
