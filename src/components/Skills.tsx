import React, { useState } from "react";
import { skills } from "../data/skills";

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"coding" | "tools">("coding");

  return (
    <>
      {/* Skills Section Start */}
      <section className="skills" id="skills">
        <h2 className="heading">
          My <span>Skills</span>
          <span
            className="animate scroll"
            style={{ "--i": 0.5 } as React.CSSProperties}
          ></span>
        </h2>

        {/* Content */}
        <div className="skills-main-content">
          {/* Description Full Width */}
          <div className="skills-description">
            <h3 className="title">
              Core Engineering Skillset
              <span
                className="animate scroll"
                style={{ "--i": 1 } as React.CSSProperties}
              ></span>
            </h3>
            <p>
              My technical skills include <b>Backend Development</b>,{" "}
              <b>Database Design</b>, <b>System Architecture</b>, and{" "}
              <b>Enterprise Software Development</b>. I have worked on ERP
              systems, custom database projects, AI-powered applications, REST
              APIs, and performance optimization. I enjoy solving complex
              engineering problems and building scalable, reliable software
              systems.
            </p>
          </div>

          {/* Skills Icons Below */}
          <div className="skills-display">
            {/* Toggle Buttons */}
            <div className="skills-toggle-switch">
              <div
                className="switch-slider"
                style={{ left: activeTab === "coding" ? "0.3rem" : "50%" }}
              ></div>
              <button
                className={`toggle-option ${activeTab === "coding" ? "active" : ""}`}
                onClick={() => setActiveTab("coding")}
              >
                Languages & Frameworks
              </button>
              <button
                className={`toggle-option ${activeTab === "tools" ? "active" : ""}`}
                onClick={() => setActiveTab("tools")}
              >
                Specialized Expertise
              </button>
              <span
                className="animate scroll"
                style={{ "--i": 2 } as React.CSSProperties}
              ></span>
            </div>

            {/* Skills Content */}
            <div className="skills-switch-content">
              {/* Languages & Frameworks */}
              <div
                className={`skills-content icons-view ${activeTab === "coding" ? "active" : ""}`}
              >
                {skills.coding.map((skill, i) => (
                  <div className="skill-icon" title={skill.name} key={i}>
                    <i className={skill.iconClass}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
                <span
                  className="animate scroll"
                  style={{ "--i": 2.5 } as React.CSSProperties}
                ></span>
              </div>

              {/* Specialized Expertise */}
              <div
                className={`skills-content icons-view ${activeTab === "tools" ? "active" : ""}`}
              >
                {skills.tools.map((skill, i) => (
                  <div className="skill-icon" title={skill.name} key={i}>
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
