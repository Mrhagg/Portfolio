import './projects.css'
import { use, useEffect, useState } from 'react';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const allowedRepos = [
    "Portfolio",
    "BlazorGraduateAssignment",
    "UmbracoCMS",
    "Js-frontend",
    "Js-backendGraphQl",
    "ASP-Assignment",
    "WebbApi-assignment"
  ]

 useEffect(() => {
    fetch("https://api.github.com/users/Mrhagg/repos?sort=updated")
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
    <h2 className="project-information">These are some of my projects i have been/is working on </h2>
    <div className="projects-container">
      {repos.map((repo) => (
        <div key={repo.id} className="project-card">
          <h2 className="project-title">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </h2>
          <p className="project-description">
            {repo.description || "Ingen beskrivning"}
          </p>
          <span className="project-language">
            {repo.language || "Okänt språk"}
          </span>
        </div>
      ))}
    </div>
  </section>
  );

}
