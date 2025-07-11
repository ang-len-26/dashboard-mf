import "./styles/crypto-app.css";
import "./components/Sidebar/Sidebar.css";

import { useEffect, useState } from "react";
import { CryptoProvider } from "./context/CryptoContext";
import { CryptoMarketProvider } from "./context/CryptoMarketContext";
import { CryptoDataProvider } from "./context/CryptoDataProvider";
import { SettingsProvider } from "./context/SettingsContext";

import CriptoDashboard from "./pages/CriptoDashboard";

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
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
  }, [theme]);

  return (
    <SettingsProvider>
      <CryptoProvider>
        <CryptoMarketProvider>
          <CryptoDataProvider>
            <div
              className={`crypto-app-container ${theme}`}
              style={{ display: "flex" }}
            >
              {/* Contenido desplazado dinámicamente */}
              <main
                style={{
                  marginLeft: isSidebarExpanded ? "220px" : "60px",
                  padding: "1rem",
                  flexGrow: 1,
                  transition: "margin-left 0.3s ease",
                }}
              >
                <CriptoDashboard
                  isSidebarExpanded={isSidebarExpanded}
                  setIsSidebarExpanded={setIsSidebarExpanded}
                />
              </main>
            </div>
          </CryptoDataProvider>
        </CryptoMarketProvider>
      </CryptoProvider>
    </SettingsProvider>
  );
};

export default App;
