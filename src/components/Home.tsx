import React from "react";
import { personalInfo } from "../data/personalInfo";

const Home: React.FC = () => {
  return (
    <>
      {/* Home Section Start*/}
      <section className="home show-animate" id="home">
        {/* Ambient Background Glow */}
        <div className="hero-glow" aria-hidden="true"></div>

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
                title={link.name}
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Home Content */}
        <div className="home-content">
          <div className="hero-badge">
            <span className="status-dot"></span>
            <span className="badge-text">
              Available for Full-Stack &amp; Backend Roles
            </span>
          </div>

          <h1>
            Hi, I'm <span className="nowrap-name">{personalInfo.name}</span>
          </h1>

          <h2>{personalInfo.headline}</h2>

          {/* Introduction */}
          <p>{personalInfo.introduction}</p>

          {/* Buttons */}
          <div className="btn-box">
            <a href="#journey" className="btn">
              <i className="bx bx-briefcase-alt-2"></i> View My Work
            </a>
            <a href="#contact" className="btn">
              <i className="bx bx-send"></i> Contact Me
            </a>
            <a href="AbdulRehman.pdf" download className="btn btn-secondary">
              <i className="bx bx-download"></i> Download CV
            </a>
          </div>

          {/* Social Icons (Mobile Only) */}
          <div className="home-sci mobile-only">
            {personalInfo.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                title={link.name}
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
