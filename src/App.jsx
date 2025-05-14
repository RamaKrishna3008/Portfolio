import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications.jsx';
import { Contact } from './components/Contact';
import './styles/global.css';
import { Skills } from './components/Skills.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Skills/>
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;