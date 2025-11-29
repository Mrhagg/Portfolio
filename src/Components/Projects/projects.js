import './projects.css';
import { useEffect, useState } from 'react';

const allowedRepos = [
    "Portfolio",
    "BlazorGraduateAssignment",
    "UmbracoCMS",
    "Js-frontend",
    "Js-backendGraphQl",
    "ASP-Assignment",
    "WebbApi-assignment"
  ];

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  

  const languageColors = {
    "JavaScript": "#f1e05a",
    "C#": "#d84bcfff",
    "HTML": "#e34c26",
    "CSS": "#563d7c",
    "TypeScript": "#3bafcfff",
    "Python": "#3572A5",
    "Unknown": "#6c757d"
  };

  const BACKEND_URL = "https://portfolio-williamhagg.onrender.com"

  useEffect(() => {
    fetch(`${BACKEND_URL}/projects`)
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter((repo) =>
          allowedRepos.includes(repo.name)
        );
        setRepos(filtered);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="projects-section">
      <h1 className="projects-heading">My Projects</h1>
      <h2 className="project-information">These are some of my projects i have been working or have worked on.</h2>
      <div className="projects-container">
        {repos.map((repo) => {
         
          const color = languageColors[repo.language] || languageColors["Unknown"];
          return (
            <div key={repo.name} className="project-card">
              <h2 className="project-title">
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </h2>
              <p className="project-description">
                {repo.description || "Ingen beskrivning"}
              </p>
              <span className="project-language" style={{ color: color, fontWeight: "bold" }}>
                {repo.language || "Okänt språk"}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
