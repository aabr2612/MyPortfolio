import React from "react";
import { projects } from "../data/projects";

const Projects: React.FC = () => {
  return (
    <>
      {/* Projects Section Start */}
      <section className="projects" id="projects">
        <h2 className="heading">
          My <span>Work</span>
          <span
            className="animate scroll"
            style={{ "--i": 0.5 } as React.CSSProperties}
          ></span>
        </h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-content" key={project.id}>
              {/* Project Details */}
              <h3>{project.title}</h3>
              <span>{project.techStack}</span>
              <img src={project.image} alt={project.title} loading="lazy" />
              <p>{project.description}</p>
              {/* Buttons */}
              <div className="btn-box">
                <a
                  href={project.links.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  View Code
                </a>
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Live Visit
                  </a>
                )}
              </div>
              <span
                className="animate scroll"
                style={{ "--i": 1 + index * 0.5 } as React.CSSProperties}
              ></span>
            </div>
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
            View More Projects
          </a>
        </div>
      </section>
      {/* Projects Section End */}
    </>
  );
};

export default Projects;
