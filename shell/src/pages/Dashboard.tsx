import React, { useEffect, useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { ThemeProvider } from "../context/ThemeContext";
import { loadRemote } from "../utils/loadRemote";
import "./Dashboard.css";

const Dashboard = () => {
  const [CriptoApp, setCriptoApp] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const loadApp = async () => {
      const criptoUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3002/remoteEntry.js"
          : "https://cripto-app-six.vercel.app/remoteEntry.js";

      const Cripto = await loadRemote(criptoUrl, "criptoApp", "./App");
      setCriptoApp(() => Cripto.default);
    };
    loadApp();
  }, []);

  return (
    <main className="shell-dashboard">
      <ThemeProvider>
        {CriptoApp ? (
          <ErrorBoundary>
            <CriptoApp />
          </ErrorBoundary>
        ) : (
          <p>Cargando módulo de criptomonedas...</p>
        )}
      </ThemeProvider>
    </main>
  );
};

export default Dashboard;
