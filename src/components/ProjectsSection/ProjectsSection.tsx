import React from 'react';
import './ProjectsSection.module.scss';

const ProjectsSection: React.FC = () => {
  const projects = [
    { title: 'Project One', description: 'A great project.', link: '#' },
    { title: 'Project Two', description: 'Another great project.', link: '#' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
