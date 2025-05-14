import React from 'react';
import '../styles/Certifications.css';

export const Certifications = () => {
  const certifications = [
    {
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      date: "2024",
      image: "/images/redhat.png",
      credentialLink: "https://www.credly.com/go/SGVuwUan"
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "2024",
      image: "/images/postman.png",
      credentialLink: "https://api.badgr.io/public/assertions/M3Eip5kfTQ-d_ZHZxNKcKg?identity__email=2200030798msbsrk%40gmail.com"
    },
    
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">Issued: {cert.date}</p>
                <a 
                  href={cert.credentialLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};