import './projects.css';
import { useEffect, useState, useRef } from 'react';
import { BACKEND_URL } from '../../config'; 

const allowedRepos = [
    "Portfolio",
    "BlazorGraduateAssignment",
    "FootyHub",
    
  ];

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const scrollAmount = 350;
  const [showArrows, setShowArrows] = useState(false);

  const infiniteRepos = showArrows ? [...repos, ...repos] : repos;

 const checkOverflow = () => {
  if (sliderRef.current) {
    const isMobileView = window.innerWidth < 768;
    const projectCount = repos.length;

    if (isMobileView) {
      setShowArrows(projectCount > 1);
    } else {
      setShowArrows(projectCount > 3);
    }
  }
};

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= scrollAmount;

    if(sliderRef.current.scrollLeft <= 0) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 2;
    }
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += scrollAmount;

    if(
      sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >= sliderRef.current.scrollWidth - scrollAmount
    ) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 2;
    }
  };

  useEffect(() => {
  if (!sliderRef.current) return;
  sliderRef.current.scrollLeft = sliderRef.current.scrollWidth / 2;
}, []);

  
  

  const languageColors = {
    "JavaScript": "#d2bc19ff",
    "C#": "#d84bcfff",
    "HTML": "#e51010ff",
    "CSS": "#542f8cff",
    "TypeScript": "#0cc1f3ff",
    "Python": "#3572A5",
    "Unknown": "#f500acff"
  };


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

  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
    
  }, [repos]);

  if (loading) return <p className="fetch-projects">Loading...</p>;

  return (
    <section className="projects-section">
      <h1 className="projects-heading">My Projects</h1>
      <h2 className="project-information">These are some of my projects i have been working or have worked on.</h2>

      
        <div className="projects-wrapper">
        {showArrows && (
          <>
            <div className="arrow arrow-left" onClick={scrollLeft}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="arrow arrow-right" onClick={scrollRight}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </>
        )}
      

        <div className="projects-container" ref={sliderRef} style={{ justifyContent: showArrows ? 'flex-start' : 'center' }}>
          {infiniteRepos.map((repo, index) => {
            return (
              <div key={repo.name + "_" + index} className="project-card">
                <h2 className="project-title">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                  </a>
                </h2>
                <p className="project-description">
                  {repo.description || "Ingen beskrivning"}
                </p>
                  <div className="project-languages">
                    {repo.languages?.map(lang => {
                      const color = languageColors[lang] || languageColors["Unknown"];
                      return (
                        <span
                          key={lang}
                          className="project-language"
                          style={{ color: color }}
                        >
                          {lang}
                        </span>
                      );
                    })}
                  </div>
                  <div className="project-actions">
                    <a href={repo.url} target="_blank" rel="noopener noreferrer" className="btn-action btn-code">
                      <i className="fa-brands fa-github"></i>View Code
                    </a>
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn-action btn-demo">
                          <i className="fa-solid fa-rocket"></i> Live Demo
                      </a>
                    )}
                  </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
}
