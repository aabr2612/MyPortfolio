import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import "./index.css";

const App: React.FC = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default App;
