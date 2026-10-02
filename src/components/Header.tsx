import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);

      const sections = [
        "home",
        "about",
        "services",
        "projects",
        "journey",
        "skills",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Header Start*/}
      <header className={`header ${isSticky ? "sticky" : ""}`}>
        {/* Logo */}
        <a href="#home" className="logo">
          AbdulRehman.
          <span
            className="animate"
            style={{ "--i": 0.5 } as React.CSSProperties}
          ></span>
        </a>

        {/* Mobile Navbar */}
        <div
          className={`bx bx-menu ${isMenuOpen ? "bx-x" : ""}`}
          id="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className="animate"
            style={{ "--i": 1 } as React.CSSProperties}
          ></span>
        </div>

        {/* Navbar */}
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={
                activeSection === link.name.toLowerCase() ? "active" : ""
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <span className="active-nav"></span>
          <span
            className="animate"
            style={{ "--i": 1 } as React.CSSProperties}
          ></span>
        </nav>
      </header>
      {/* Header End */}
    </>
  );
};

export default Header;
