export const ThemeToggle = () => {
  const toggleTheme = () => {
    console.log("Cambiar tema");
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "none",
        border: "none",
        color: "white",
        fontSize: "1.2rem",
        cursor: "pointer",
      }}
      title="Cambiar tema"
    >
      🌗
    </button>
  );
};
