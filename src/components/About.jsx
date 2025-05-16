import React, { useState } from 'react';
import '../styles/About.css';

export const About = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="about" className="about">
      <div className="container about-content">
        <div className="about-image">
          <img src="/images/Photo.jpeg" alt="Sai Balaji Siva Rama Krishna" />
        </div>
        
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p>
            I'm a passionate full stack developer and a Computer Science and Engineering undergraduate, driven by a love for crafting responsive, user-focused web applications. My expertise lies in modern technologies like Spring Boot, React, and RESTful APIs.
          </p>
          <p>
            I combine strong technical skills with a mindset of continuous learning and creative problem-solving. I take pride in writing clean, maintainable code and delivering seamless, intuitive digital experiences.
          </p>
          <p>
            Outside of development, I enjoy exploring emerging tech stacks, engaging in hackathons, and staying up to date with the latest innovations in full stack development.
          </p>
          
          <div className="about-actions">
            <button
              className="btn btn-secondary"
              onClick={() => setShowResume(true)}
            >
              View Resume
            </button>

          </div>
        </div>
      </div>

      {showResume && (
        <div className="fullscreen-iframe-container">
          <button
            onClick={() => setShowResume(false)}
            className="close-resume-btn"
          >
            Close Resume
          </button>
          <iframe
            src="/files/Resume.pdf"
            width="100%"
            height="100%"
            title="Resume Fullscreen"
          />
        </div>
      )}
    </section>
  );
};