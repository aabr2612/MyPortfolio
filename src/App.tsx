import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

const App: React.FC = () => {
  // Porting the scroll reveal animation logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = (sec as HTMLElement).offsetTop - 100;
        const height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
          sec.classList.add("show-animate");
        } else {
          sec.classList.remove("show-animate");
        }
      });
    };

    // Run once on load to show initial animations
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Journey />
      <Skills />
      <Contact />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default App;
