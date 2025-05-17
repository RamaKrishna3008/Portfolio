import React from 'react';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export const Projects = () => {
  const projects = [
    {
      title: "Enterprise Resource Planning For a University",
      description: "An ERP system built with Spring Boot, integrated with Razorpay for secure and efficient fee payments.",
      technologies: ["Springboot", "Java", "JSP", "MySQL"],
      githubLink: "https://github.com/yourusername/project1"
    },
    {
      title: "Ecommerce Project with Springboot and JSP",
      description: "An eCommerce application built with Spring Boot and JSP for seamless online shopping experiences.",
      technologies: ["Springboot", "Java", "JSP", "MySQL"],
      githubLink: "https://github.com/RamaKrishna3008/Ecommerce_JSP"
    },
    {
      title: "Placement And Activity Management System",
      description: "A Placement Management System developed using Java EE beans and JSF to streamline student placement process.",
      technologies: ["Java EE", "Servlets", "JSF","MySQL"],
      githubLink: "https://github.com/yourusername/project3"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
            
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '8px' }} />
    GitHub
  </a>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};