import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
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
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDarkMode) {
        enableDarkMode();
      }
    }
  }, []);
  
  const contextValues = {
    isDarkMode,
    toggleDarkMode,
  }
  
  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { ThemeProvider, useThemeContext };
