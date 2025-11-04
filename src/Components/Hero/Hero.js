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
        
        <div className="cert">
            <div className="download-link">
              <p>If you are interested in my work and want to know more about me, <strong>Click here to download my CV</strong></p>
              <a className="btn btn-danger" href="CV.pdf" download="CV.pdf">Download</a>
            </div>
        </div>
       
      </div>
      <div className="about-section">
      </div>
    </section>
  );
}

export default Hero;
