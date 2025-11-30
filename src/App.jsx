import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import ExperienceEducation from './components/ExperienceEducation.jsx';
import ContactFooter from './components/ContactFooter.jsx';



export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50 selection:bg-primary/30 selection:text-primary-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <ContactFooter />
      </main>
      
    </div>
  );
}
