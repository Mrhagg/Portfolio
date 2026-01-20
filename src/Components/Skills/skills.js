import './skills.css';

const skillGroups = [
  {
    id: 1,
    category: "Frontend",
    description: "I build responsive and interactive UIs with a focus on user experience and modern frameworks.",
    technologies: ["HTML/CSS/SCSS","Blazor","React", "TypeScript", "JavaScript",  "Bootstrap", "Tailwind"]
  },
  {
    id: 2,
    category: "Backend",
    description: "Experienced in building robust APIs and scalable server-side logic within the .NET and JavaScript ecosystem.",
    technologies: ["C#", "ASP.NET Core", "ASP.NET Core Web API", "MVC", "Node.js", "Express.Js", "ABP.IO"]
  },
  {
    id: 3,
    category: "Databases & CMS",
    description: "Skilled in managing data across relational and NoSQL databases, as well as content management systems.",
    technologies: ["SQL Server", "MySQL", "Azure Cosmos DB", "NoSQL", "Umbraco CMS"]
  },
  {
    id: 4,
    category: "DevOps & Tools",
    description: "Practiced in agile environments using professional tools for version control and project management.",
    technologies: ["Agile", "Git", "GitHub", "Jira", "Bitbucket"]
  }
];



function Skills() {

  
  return (
    <section className="main-container">
      <div className="main-content">
        <h2>I'm a dedicated web developer with a degree in .NET development.</h2>
        <p className="main-info">
          Over the course of my education and internship, I have developed a strong foundation in several key areas:
        </p>
        <div className="skills-title">
          <h1>Technical Skills</h1>
        </div>
        <div className="skills-grid">
          {skillGroups.map(group => (
            <div key={group.id} className="skill-item">
              
              <h3>{group.category}</h3>
              <p className="skill-description">{group.description}</p>
              
              <div className="tech-stack">
                {group.technologies.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;