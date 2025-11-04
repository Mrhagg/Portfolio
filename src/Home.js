import React from 'react'
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/skills';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';


function Home() {

  return (
    <div className="Home">

      <section id="hero">
         <Hero />
      </section>
      <section id="skills">
         <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}

export default Home