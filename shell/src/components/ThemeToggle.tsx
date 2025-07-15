import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "./ThemeToggle.css";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initial = savedTheme || "light";
    setTheme(initial);
    document.body.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    setAnimating(true);
    setTimeout(() => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
      setAnimating(true);
    }, 200); // Tiempo suficiente para el efecto
  };

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      title="Cambiar tema"
    >
      <div
        className={`icon-wrapper ${theme === "dark" ? "toggle-on" : ""} ${
          animating ? "scale-effect" : ""
        }`}
      >
        <Sun className="icon sun-icon" />
        <Moon className="icon moon-icon" />
      </div>
    </button>
  );
};
