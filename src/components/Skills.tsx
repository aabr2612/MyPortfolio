import React from "react";
import { capabilities } from "../data/capabilities";

const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-header">
        <h2 className="heading">
          Technical <span>Skills</span>
        </h2>
        <p className="contact-intro">
          Full-stack engineering focused on production-ready web applications, performant backends, clean databases, and scalable enterprise workflows.
        </p>
      </div>

      <div className="capabilities-grid">
        {capabilities.map((cap) => (
          <div className="capability-card" key={cap.id}>
            <div className="capability-card-body">
              <div className="capability-card-top">
                <div className="capability-icon">
                  <i className={cap.icon}></i>
                </div>
                <h3>{cap.title}</h3>
              </div>

              <p className="capability-desc">{cap.description}</p>

              <div className="capability-deliverables">
                <ul>
                  {cap.deliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="capability-skills-side">
              <h5>
                <i className="bx bx-code-alt"></i> Tech Stack
              </h5>
              <div className="skills-chip-grid">
                {cap.skills.map((skill, i) => (
                  <div className="skill-chip" key={i}>
                    {skill.iconClass === "iconify" ? (
                      <span
                        className="iconify"
                        data-icon={skill.customAttr?.["data-icon"]}
                        style={skill.customAttr?.style}
                      ></span>
                    ) : (
                      <i className={skill.iconClass}></i>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
