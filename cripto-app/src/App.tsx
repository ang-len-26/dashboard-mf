import "./styles/crypto-app.css";
import CryptoDashboard from "./pages/CriptoDashboard";
import CryptoFilter from "./components/CryptoFilter";
import { CryptoProvider } from "./context/CryptoContext";
import { CryptoDataProvider } from "./context/CryptoDataProvider";
import { CryptoMarketProvider } from "./context/CryptoMarketContext";
import { useEffect, useState } from "react";

const getInitialTheme = (): "light" | "dark" => {
  const fromStorage = localStorage.getItem("theme") as "light" | "dark" | null;
  const fromCookies = document.cookie.match(/theme=(light|dark)/)?.[1] as
    | "light"
    | "dark"
    | undefined;
  return fromStorage || fromCookies || "light";
};

const App = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme());

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
  }, [theme]);

  return (
    <div className={`crypto-app-container ${theme}`}>
      <CryptoProvider>
        <CryptoMarketProvider>
          <CryptoDataProvider>
            <header className="crypto-header">
              <h1>📈 Cripto Dashboard</h1>
              <button
                className="theme-toggle"
                onClick={() =>
                  setTheme((prev) => (prev === "light" ? "dark" : "light"))
                }
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </header>

            <CryptoFilter />
            <CryptoDashboard />
          </CryptoDataProvider>
        </CryptoMarketProvider>
      </CryptoProvider>
    </div>
  );
};

export default App;
