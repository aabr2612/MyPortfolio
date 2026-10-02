import React from "react";
import { personalInfo } from "../data/personalInfo";

const Home: React.FC = () => {
  return (
    <>
      {/* Home Section Start*/}
      <section className="home show-animate" id="home">
        {/* Social Icons Sidebar */}
        <div className="social-sidebar" id="social-sidebar">
          <div className="sidebar-toggle" id="sidebar-toggle">
            <i className="bx bx-chevron-right"></i>
          </div>
          <div className="home-sci">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Home Content */}
        <div className="home-content">
          <h1>
            Hi, I'm <span>{personalInfo.name}</span>
            <span
              className="animate"
              style={{ "--i": 1 } as React.CSSProperties}
            ></span>
          </h1>

          <h2>{personalInfo.title}</h2>

          {/* Introduction */}
          <p>
            {personalInfo.introduction}
            <span
              className="animate"
              style={{ "--i": 2 } as React.CSSProperties}
            ></span>
          </p>

          {/* Buttons */}
          <div className="btn-box">
            <a href="abdulrehman.pdf" download className="btn">
              Download CV
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn">
              Contact me
            </a>
            <span
              className="animate"
              style={{ "--i": 2.5 } as React.CSSProperties}
            ></span>
          </div>

          {/* Social Icons (Mobile Only) */}
          <div className="home-sci mobile-only">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* Home Section End */}
    </>
  );
};

export default Home;
