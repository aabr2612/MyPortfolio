import React from "react";
import { personalInfo } from "../data/personalInfo";

const About: React.FC = () => {
  return (
    <>
      {/* About Section Start */}
      <section className="about" id="about">
        <div className="section-header">
          <span className="section-tag">Introduction</span>
          <h2 className="heading">
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-box">
          {/* About Image */}
          <div className="about-img">
            <img src="images/about.png" alt="Abdul Rehman" />
            <span className="circle-spin"></span>
          </div>

          {/* About Content */}
          <div className="about-content">
            {personalInfo.aboutText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      {/* About Section End */}
    </>
  );
};

export default About;
