import '../styles/Skills.css';

export const Skills = () => {
  
  const skillsData = [
    { name: "Java" },
    { name: "SQL" },
    { name: "MySQL" },
    { name: "MongoDB" },
    { name: "Hibernate" },
    { name: "JPA" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Spring" },
    { name: "SpringBoot" },
    { name: "JSP" },
    { name: "JSF" },
    { name: "Servlets" },
    { name: "JavaScript" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "Postman" },
    { name: "Maven" }
  ];

  
  const toolsData = [
    { name: "Java", image: "/images/java.png"},
    { name: "Spring", image: "/images/Spring.png" },
    { name: "MySQL", image: "/images/mysql.jpeg"},
    { name: "Postman", image: "/images/postmanlogo.png"},
    { name: "Git", image: "/images/git.jpg"},
    { name: "MongoDB", image: "/images/mongodb.png"}
  ];

  return (
    <section id="skills-and-tools" className={`skills-section`}>
      <div className="container">

        <div className="skills-container">
          <h2 className="section-title">Skills & Tech Stack</h2>
          <div className="tec-tags-container">
            {skillsData.map((skill, index) => (
              <span key={index} className="tec-tag">{skill.name}</span>
            ))}
          </div>
        </div>
        

        <div className="tools-container">
          <div className="tools-grid">
            {toolsData.map((tool, index) => (
              <div key={index} className="tool-card">
                <div className="tool-icon">
                  <img src={tool.image} alt={tool.name} />
                </div>
                <h3 className="tool-name">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
        
       
      </div>
    </section>
  );
};