import { useState, useEffect } from "react";

const useDarkTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;

    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newMode ? "dark" : "light");
    setIsDarkMode(newMode);
  };

  const enableDarkMode = () => {
    document.documentElement.classList.add("dark");
    setIsDarkMode(true);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      enableDarkMode();
    } else if (savedTheme === "light") {
      // Optionally handle light theme setup here
    } else {
      // Auto theme detection and setup
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDarkMode) {
        enableDarkMode();
      }
    }
  }, []);

  return {
    isDarkMode,
    toggleDarkMode,
  };
};

export default useDarkTheme;
