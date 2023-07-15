import React, { useState, useEffect } from 'react';

function Github() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/isamoreira/repos');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div className="card" key={project.id}>
          <h2 className="card-title">{project.name}</h2>
          <button className="card-button" onClick={() => window.open(project.html_url, '_blank')}>
            Acessar Projeto
          </button>
        </div>
      ))}
    </div>
  );
}

export default Github;