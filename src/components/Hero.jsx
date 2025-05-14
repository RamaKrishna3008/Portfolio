import React, { useState } from 'react';
import { Github as GitHub, Linkedin, Mail, FileText } from 'lucide-react';
import '../styles/Hero.css';

export const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Mandalaneni Sai Balaji Siva Rama Krishna</span></h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            I create beautiful and functional web applications with a strong focus on user experience, clean code, and robust backend development using Spring Boot.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
            <button
              className="btn btn-secondary"
              style={{ marginLeft: '10px' }}
              onClick={() => setShowResume(true)}
            >
              View Resume
            </button>
          </div>

          <div className="social-links">
            <a href="https://github.com/RamaKrishna3008" target="_blank" rel="noopener noreferrer">
              <GitHub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/siva-rama-krishna-mandalaneni/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mandalaneni.sivaramakrishna@gmail.com">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/Pass Photo.jpg" alt="Profile" />
        </div>
      </div>


      {showResume && (
        <div
          className="fullscreen-iframe-container"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <button
            onClick={() => setShowResume(false)}
            style={{
              alignSelf: 'flex-end',
              margin: '20px',
              padding: '10px 20px',
              background: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              zIndex: 10000
            }}
          >
            Close Resume
          </button>
          <iframe
            src="/files/Resume.pdf"
            width="100%"
            height="100%"
            style={{ border: 'none', flexGrow: 1 }}
            title="Resume Fullscreen"
          />
        </div>
      )}
    </section>
  );
};
