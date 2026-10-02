import React from "react";
import { education } from "../data/education";
import { experience } from "../data/experience";

const Journey: React.FC = () => {
  return (
    <>
      {/* Journey Section Start */}
      <section className="journey" id="journey">
        <h2 className="heading">
          My <span>Journey</span>
          <span
            className="animate scroll"
            style={{ "--i": 0.5 } as React.CSSProperties}
          ></span>
        </h2>

        {/* Education Row */}
        <div className="journey-row" style={{ marginBottom: "5rem" }}>
          <div className="journey-column" style={{ flex: "1 1 100%" }}>
            <h3 className="title">
              Education
              <span
                className="animate scroll"
                style={{ "--i": 1 } as React.CSSProperties}
              ></span>
            </h3>
            <div className="journey-box">
              {education.map((edu) => (
                <div className="journey-content" key={edu.id}>
                  <div className="content">
                    <div className="year">
                      <i className="bx bxs-calendar"></i>
                      {edu.duration}
                    </div>
                    <h3>{edu.institution}</h3>
                    <span>{edu.degree}</span>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
              <span
                className="animate scroll"
                style={{ "--i": 1.5 } as React.CSSProperties}
              ></span>
            </div>
          </div>
        </div>

        {/* Experience Row */}
        <div className="journey-row">
          <div className="journey-column" style={{ flex: "1 1 100%" }}>
            <h3 className="title">
              Professional Experience
              <span
                className="animate scroll"
                style={{ "--i": 2 } as React.CSSProperties}
              ></span>
            </h3>
            <div className="journey-box">
              {experience.map((exp) => (
                <div className="journey-content" key={exp.id}>
                  <div className="content">
                    <div className="year">
                      <i className="bx bxs-calendar"></i>
                      {exp.duration}
                    </div>
                    <h3>{exp.role}</h3>
                    <span>{exp.company}</span>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
              <span
                className="animate scroll"
                style={{ "--i": 2.5 } as React.CSSProperties}
              ></span>
            </div>
          </div>
        </div>
      </section>
      {/* Journey Section End */}
    </>
  );
};

export default Journey;
