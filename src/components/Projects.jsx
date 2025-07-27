import React from 'react';
import '../styles/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export const Projects = () => {
  const projects = [
   
    {
      title: "Movie Ticket Booking Platform",
      description: "MovieTicketBookingPlatform is a full-stack web application for booking movie tickets, featuring role-based access for users, theatre owners, and admins. It integrates Razorpay for secure payments and uses AWS S3 Client to manage and store multimedia assets like posters and banners, ensuring a seamless and scalable movie booking experience.",
      technologies: ["Springboot", "Java", "React", "MySQL"],
      githubLink: "https://github.com/RamaKrishna3008/MovieTicketBookingPlatform"
    },
     {
      title: "Enterprise Resource Planning For a University",
      description: "A comprehensive ERP system developed using Spring Boot, designed to manage student information, academics, and administration efficiently. Integrated with Razorpay for secure fee payments. It ensures smooth operations for universities by providing different modules . ",
      technologies: ["Springboot", "Java", "JSP", "MySQL"],
      githubLink: "https://github.com/yourusername/project1"
    },
    {
      title: "Chat App",
      description: "A real-time Chat Application built using Spring Boot and React, leveraging WebSocket and STOMP.js for instant messaging. MongoDB is used to persist user data and chat logs. The system enables seamless one-to-one communication with efficient backend message routing and UI updates without page reloads.",
      technologies: ["Springboot", "Java", "React", "MongoDb"],
      githubLink: "https://github.com/RamaKrishna3008/chatApp-Backend"
    },
    {
      title: "Ecommerce Project with Springboot and JSP",
      description: "An eCommerce platform developed using Spring Boot and JSP, offering product browsing, cart management, and checkout functionalities. Integrated with MySQL for persistent product and user data. Designed for responsiveness and ease of use, the system supports basic CRUD operations and secure order processing.",
      technologies: ["Springboot", "Java", "JSP", "MySQL"],
      githubLink: "https://github.com/RamaKrishna3008/Ecommerce_JSP"
    },
    {
      title: "Placement And Activity Management System",
      description: "A Placement Management System developed using Java EE, JSF, and Servlets, aimed at simplifying the student placement lifecycle. It allows faculty and placement officers to manage student profiles, job postings, and applications efficiently. MySQL is used as the backend database to ensure reliable data storage and retrieval.",
      technologies: ["Java EE", "Servlets", "JSF","MySQL"],
      githubLink: "https://github.com/RamaKrishna3008/Placement-Management-"
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