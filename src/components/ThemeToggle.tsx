import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    return !window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Toggle the CSS class on the body when the state changes
  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  }, [isLightTheme]);

  return (
    <div
      id="theme-toggle"
      aria-label="Toggle Theme"
      title="Toggle Theme"
      onClick={() => setIsLightTheme((prev) => !prev)}
    >
      <i className={`bx ${isLightTheme ? "bx-sun" : "bx-moon"}`}></i>
    </div>
  );
};

export default ThemeToggle;
