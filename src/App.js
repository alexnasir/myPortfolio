import React, { useRef } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', action: () => scrollToSection(homeRef) },
    { name: 'About', action: () => scrollToSection(aboutRef) },
    { name: 'Skills', action: () => scrollToSection(skillsRef) },
    { name: 'Projects', action: () => scrollToSection(projectsRef) },
    { name: 'Contact', action: () => scrollToSection(contactRef) },
  ];

  return (
    <div className="min-h-screen  bg-gray-100">
      <Header navItems={navItems} />
      
      <main className="flex-grow">
        <section ref={homeRef} className="min-h-screen">
          <Home />
        </section>
        <section ref={aboutRef} className="min-h-screen">
          <About />
        </section>
        <section ref={skillsRef} className="min-h-screen">
          <Skills />
        </section>
        <section ref={projectsRef} className="min-h-screen">
          <Projects />
        </section>
        <section ref={contactRef} className="min-h-screen">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;