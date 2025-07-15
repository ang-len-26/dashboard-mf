import React, { useEffect, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeToggle } from "./ThemeToggle";
import logo from "../assets/logo.png";
import { loadRemote } from "../utils/loadRemote";
import "./Header.css";

const Header = () => {
  const [ClimaApp, setClimaApp] = useState<React.ComponentType | null>(null);
  const [AuthApp, setAuthApp] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const loadApps = async () => {
      const climaUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3001/remoteEntry.js"
          : "https://clima-app-orpin.vercel.app/remoteEntry.js";

      const authUrl =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3003/remoteEntry.js"
          : "https://auth-app-beta-seven.vercel.app/remoteEntry.js";

      const Clima = await loadRemote(climaUrl, "climaApp", "./App");
      const Auth = await loadRemote(authUrl, "authApp", "./AuthModule");
      setClimaApp(() => Clima.default);
      setAuthApp(() => Auth.default);
    };
    loadApps();
  }, []);

  return (
    <header className="shell-header">
      <div className="shell-header-title">
        <img src={logo} alt="Logo" style={{ height: "66px" }} />
      </div>

      <div className="shell-header-center">
        {ClimaApp ? (
          <ErrorBoundary>
            <ClimaApp />
          </ErrorBoundary>
        ) : (
          <div>Cargando clima...</div>
        )}
      </div>

      <div className="shell-header-right">
        <ThemeToggle />
        {AuthApp ? (
          <ErrorBoundary>
            <AuthApp />
          </ErrorBoundary>
        ) : (
          <div>Cargando usuario...</div>
        )}
      </div>
    </header>
  );
};

export default Header;
