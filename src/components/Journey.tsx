import React from "react";
import { education } from "../data/education";
import { experience } from "../data/experience";

const Journey: React.FC = () => {
  return (
    <>
      {/* Journey Section Start */}
      <section className="journey" id="journey">
        <div className="section-header">
          <span className="section-tag">Career &amp; Academics</span>
          <h2 className="heading">
            My <span>Journey</span>
          </h2>
        </div>

        <div className="journey-grid">
          {/* Professional Experience Column */}
          <div className="journey-column experience-col">
            <h3 className="title">
              <i className="bx bx-briefcase-alt-2"></i> Professional Experience
            </h3>
            <div className="journey-box">
              {experience.map((exp) => (
                <div className="journey-content" key={exp.id}>
                  <div className="content">
                    <div className="card-top">
                      <div>
                        <h3>{exp.role}</h3>
                        <span className="company-badge">{exp.company}</span>
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="journey-column education-col">
            <h3 className="title">
              <i className="bx bxs-graduation"></i> Education
            </h3>
            <div className="journey-box">
              {education.map((edu) => (
                <div className="journey-content" key={edu.id}>
                  <div className="content">
                    <div className="card-top">
                      <div>
                        <h3>{edu.degree}</h3>
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
        </div>
      </section>
      {/* Journey Section End */}
    </>
  );
};

export default Journey;
