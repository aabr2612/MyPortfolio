import React from 'react';
import { personalInfo } from '../data/personalInfo';

const About: React.FC = () => {
  return (
    <>
      {/* About Section Start */}
      <section className="about" id="about">
        <h2 className="heading">About <span>Me</span><span className="animate scroll" style={{ '--i': 0.5 } as React.CSSProperties}></span></h2>

        <div className="about-box">
          {/* About Image */}
          <div className="about-img">
            <img src="images/about.png" alt="Profile" />
            {/* Spin Animation */}
            <span className="circle-spin"></span>
            <span className="animate scroll" style={{ '--i': 1 } as React.CSSProperties}></span>
          </div>

          {/* About Content */}
          <div className="about-content">
            {/* About Data */}
            {personalInfo.aboutText.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
                <span className="animate scroll" style={{ '--i': 1.5 + (index * 0.5) } as React.CSSProperties}></span>
              </p>
            ))}
          </div>
        </div>
      </section>
      {/* About Section End */}
    </>
  );
};

export default About;
