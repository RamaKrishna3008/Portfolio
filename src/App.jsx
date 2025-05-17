import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications.jsx';
import { Contact } from './components/Contact';
import './styles/global.css';
import { Skills } from './components/Skills.jsx';
import { About } from './components/About.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About/>
      <Skills/>
      <Projects />
      <Certifications />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;