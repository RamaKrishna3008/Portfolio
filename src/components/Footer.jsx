import React from 'react';
import '../styles/Footer.css';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-logo">M Siva Rama Krishna</h3>
            <p className="footer-tagline">Java Backend Developer</p><br/>
            <div className="footer-section">
            <p className="footer-description">
              Follow me on social media to see my latest projects and updates.
            <div className="social-links">
              <a href="https://www.linkedin.com/in/siva-rama-krishna-mandalaneni/" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Ramakrishna3008" className="social-link" aria-label="GitHub">
                <FaGithub />
                </a>
                </div>
                </p>
          </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-nav">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills-and-tools" className="footer-link">Skills</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#certifications" className="footer-link">Certifications</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-description">
              Feel free to reach out to me for collaborations or just a friendly chat.
            </p>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>mandalaneni.sivaramakrishna@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Guntur, India</span>
            </div>
          </div>

        </div>
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} Mandalaneni Sai Balaji Siva Rama Krishna. All rights reserved.
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;