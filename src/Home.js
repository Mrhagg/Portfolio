import React from 'react'
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/skills';
import Projects from './Components/Projects/projects';
import Contact from './Components/Contact/contact';
import FadeInSection from './misc/Components/scroll';
function Home() {

  return (
    <div className="Home">

      <FadeInSection>
        <section id="hero">
          <Hero />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="skills">
          <Skills />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="projects">
          <Projects />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section id="contact">
          <Contact />
        </section>
      </FadeInSection>

    </div>
  );
}

export default Home;
