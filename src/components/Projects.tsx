import React from "react";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  const parseTechTags = (techStack: string) =>
    techStack
      .split(/\|\||,/)
      .map((t) => t.trim())
      .filter(Boolean);

  return (
    <>
      {/* Projects Section Start */}
      <section className="projects" id="projects">
        <div className="section-header">
          <h2 className="heading">
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="projects-container">
          {projects.map((project) => (
            <article className="project-content" key={project.id}>
              <div className="project-media">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>

              <div className="project-body">
                <div className="project-tags">
                  {parseTechTags(project.techStack).map((tag) => (
                    <span className="tech-pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-links">
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <i className="bx bxl-github"></i> Source Code
                  </a>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link primary"
                    >
                      <i className="bx bx-link-external"></i> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Projects */}
        <div className="btn-box projects-btn">
          <a
            href="https://github.com/aabr2612?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <i className="bx bxl-github"></i> View More on GitHub
          </a>
        </div>
      </section>
      {/* Projects Section End */}
    </>
  );
};

export default Projects;
