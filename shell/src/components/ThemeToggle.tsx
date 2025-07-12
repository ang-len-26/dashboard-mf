export const ThemeToggle = () => {
  const toggleTheme = () => {
    const current = document.body.getAttribute("data-theme") || "light";
    const newTheme = current === "light" ? "dark" : "light";

    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "none",
        border: "none",
        color: "inherit",
        fontSize: "1.2rem",
        cursor: "pointer",
      }}
      title="Cambiar tema"
    >
      🌗
    </button>
  );
};
