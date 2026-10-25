import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "journey",
        "skills",
        "projects",
        "testimonials",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
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
    { name: "Home", href: "#home", section: "home" },
    { name: "About", href: "#about", section: "about" },
    { name: "Experience", href: "#journey", section: "journey" },
    { name: "Skills", href: "#skills", section: "skills" },
    { name: "Projects", href: "#projects", section: "projects" },
    { name: "Reviews", href: "#testimonials", section: "testimonials" },
    { name: "Contact", href: "#contact", section: "contact" },
  ];

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <a href="#home" className="logo">
        Abdul<span>Rehman.</span>
      </a>

      <div
        className={`bx bx-menu ${isMenuOpen ? "bx-x" : ""}`}
        id="menu-icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></div>

      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={activeSection === link.section ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <span className="active-nav"></span>
      </nav>
    </header>
  );
};

export default Header;
