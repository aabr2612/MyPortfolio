import React from "react";
import { education } from "../data/education";
import { experience } from "../data/experience";

const Journey: React.FC = () => {
  return (
    <>
      {/* Journey Section Start */}
      <section className="journey" id="journey">
        <div className="section-header">
          <span className="section-tag">Career Progression</span>
          <h2 className="heading">
            Professional <span>Experience</span>
          </h2>
        </div>

        {/* Alternating Left-Right Staircase Timeline */}
        <div className="staircase-timeline">
          <div className="timeline-spine" aria-hidden="true"></div>

          {experience.map((exp, index) => {
            const side = index % 2 === 0 ? "left" : "right";
            const iconClass =
              exp.icon === "bx bx-code-Block" ? "bx bx-code-alt" : exp.icon;

            return (
              <div className={`stair-item ${side}`} key={exp.id}>
                {/* Center Spine Node with Icon */}
                <div className="stair-node" title={exp.role}>
                  <i className={iconClass}></i>
                </div>

                {/* Experience Card */}
                <div className="stair-card">
                  <div className="stair-connector" aria-hidden="true"></div>

                  <div className="stair-card-header">
                    <div className="stair-role-group">
                      <span className="stair-step-num">
                        0{index + 1} · {exp.badge}
                      </span>
                      <h3>{exp.role}</h3>
                      <span className="company-badge">
                        <i className="bx bx-buildings"></i> {exp.company}
                      </span>
                    </div>

                    <div className="year">
                      <i className="bx bxs-calendar"></i>
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="journey-points">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {exp.skills && (
                    <div className="stair-skills">
                      {exp.skills.map((skill) => (
                        <span className="stair-skill-tag" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Foundation Sub-Section */}
        <div className="education-showcase">
          <div className="edu-header">
            <i className="bx bxs-graduation"></i>
            <h3>Academic Foundation</h3>
          </div>

          <div className="education-cards">
            {education.map((edu) => (
              <div className="edu-card" key={edu.id}>
                <div className="edu-icon">
                  <i className="bx bxs-institution"></i>
                </div>
                <div className="edu-body">
                  <div className="edu-top">
                    <div>
                      <h4>{edu.degree}</h4>
                      <span className="company-badge">{edu.institution}</span>
                    </div>
                    <div className="year">
                      <i className="bx bxs-calendar"></i>
                      {edu.duration}
                    </div>
                  </div>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Journey Section End */}
    </>
  );
};

export default Journey;
