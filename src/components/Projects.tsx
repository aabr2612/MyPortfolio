import React, { useState, useEffect } from "react";
import { projects, type ProjectItem } from "../data/projects";

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  // Close modal on Escape key press and lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const parseTechTags = (techStack: string) =>
    techStack
      .split(/\|\||,/)
      .map((t) => t.trim())
      .filter(Boolean);

  const getImageUrl = (path?: string) => {
    if (!path) return "";
    if (path.startsWith("http") || path.startsWith("data:")) return path;
    return path.startsWith("/") ? path : `/${path}`;
  };

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
                {project.image ? (
                  <img
                    src={getImageUrl(project.image)}
                    alt={project.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="project-media-placeholder">
                    <div className="placeholder-glow" aria-hidden="true"></div>
                    <div className="placeholder-icon">
                      <i className={project.icon}></i>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-body">
                <div className="project-meta-top">
                  <h3>{project.title}</h3>
                  <span className="project-timeline">
                    <i className="bx bxs-calendar"></i> {project.timeline}
                  </span>
                </div>

                <p>{project.description}</p>

                <div className="project-tags">
                  {parseTechTags(project.techStack).map((tag) => (
                    <span className="tech-pill" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <button
                    type="button"
                    className="project-link read-more-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <i className="bx bx-info-circle"></i> More
                  </button>

                  {project.links.code && (
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <i className="bx bxl-github"></i> Code
                    </a>
                  )}

                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link primary"
                    >
                      <i className="bx bx-link-external"></i> Live
                    </a>
                  )}

                  {project.links.contactDemo && (
                    <a href="#contact" className="project-link primary">
                      <i className="bx bx-send"></i> {project.links.contactDemo}
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="project-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header-meta">
              <div className="modal-header-left">
                <h2 id="modal-project-title">{selectedProject.title}</h2>
                <span className="project-timeline">
                  <i className="bx bxs-calendar"></i> {selectedProject.timeline}
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                <i className="bx bx-x"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body-content">
              {/* Detailed Overview */}
              <div className="modal-section">
                <h4>
                  <i className="bx bx-detail"></i> Overview
                </h4>
                <p>{selectedProject.detailedOverview}</p>
              </div>

              {/* Key Features */}
              {selectedProject.keyFeatures.length > 0 && (
                <div className="modal-section">
                  <h4>
                    <i className="bx bx-check-shield"></i> Key Features
                  </h4>
                  <ul className="modal-feature-list">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture & Engineering */}
              {selectedProject.architecture.length > 0 && (
                <div className="modal-section">
                  <h4>
                    <i className="bx bx-code-curly"></i> Engineering &amp;
                    Architecture
                  </h4>
                  <ul className="modal-feature-list architecture-list">
                    {selectedProject.architecture.map((arch, i) => (
                      <li key={i}>{arch}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer - Single Clean Close Button */}
            <div className="modal-footer-actions">
              <button
                type="button"
                className="modal-footer-close-btn"
                onClick={() => setSelectedProject(null)}
              >
                <i className="bx bx-x"></i> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
