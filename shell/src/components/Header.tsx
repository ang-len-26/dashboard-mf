import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeToggle } from "./ThemeToggle";
import "./Header.css";
import logo from "../assets/logo.png";

const ClimaApp = React.lazy(() => import("climaApp/App"));
const AuthApp = React.lazy(() => import("authApp/AuthModule"));

const Header = () => {
  return (
    <header className="shell-header">
      <div className="shell-header-title">
        <img src={logo} alt="Logo" style={{ height: "40px" }} />
      </div>

      <div className="shell-header-center">
        <Suspense fallback={<div>Cargando clima...</div>}>
          <ErrorBoundary>
            <ClimaApp />
          </ErrorBoundary>
        </Suspense>
      </div>

      <div className="shell-header-right">
        <ThemeToggle />
        <Suspense fallback={<div>Cargando usuario...</div>}>
          <ErrorBoundary>
            <AuthApp />
          </ErrorBoundary>
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
