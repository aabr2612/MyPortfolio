import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Footer Start */}
      <footer className="footer">
        {/* Copyright Text */}
        <div className="footer-text">
          <p>
            Copyright &copy; {currentYear} by Abdul Rehman | All Rights
            Reserved.
          </p>
        </div>
        {/* Top Icon */}
        <div className="footer-iconTop">
          <a href="#home">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
};

export default Footer;
