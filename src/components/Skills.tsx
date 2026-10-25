import React from "react";
import { skills } from "../data/skills";

const Skills: React.FC = () => {
  return (
    <>
      {/* Skills Section Start */}
      <section className="skills" id="skills">
        <div className="section-header">
          <span className="section-tag">Technical Arsenal</span>
          <h2 className="heading">
            Core <span>Skills</span>
          </h2>
        </div>

        <div className="skills-main-content">
          <div className="skills-description">
            <p>
              Architecting end-to-end systems across{" "}
              <b>Backend Engineering</b>, <b>Database Architecture</b>,{" "}
              <b>Enterprise ERP Workflows</b>, and{" "}
              <b>Full-Stack Applications</b>—built for scale, data integrity,
              and clean maintainability.
            </p>
          </div>

          <div className="skills-bento">
            {/* Group 1: Languages & Frameworks */}
            <div className="skills-group-card">
              <div className="skills-group-header">
                <i className="bx bx-code-block"></i>
                <h3>Languages, Frameworks &amp; Databases</h3>
              </div>
              <div className="skills-chip-grid">
                {skills.coding.map((skill, i) => (
                  <div className="skill-chip" key={i}>
                    <i className={skill.iconClass}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Group 2: Architecture & Engineering */}
            <div className="skills-group-card">
              <div className="skills-group-header">
                <i className="bx bx-layer"></i>
                <h3>Architecture, Tools &amp; Practices</h3>
              </div>
              <div className="skills-chip-grid">
                {skills.tools.map((skill, i) => (
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
        </div>
      </section>
      {/* Skills Section End */}
    </>
  );
};

export default Skills;
