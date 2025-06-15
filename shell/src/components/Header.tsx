import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { ThemeToggle } from "./ThemeToggle";

const ClimaApp = React.lazy(() => import("climaApp/App"));
const AuthApp = React.lazy(() => import("authApp/AuthModule"));

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#20232a",
        color: "white",
        gap: "1rem",
      }}
    >
      {/* Sección izquierda: título */}
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Dashboard Modular
      </div>

      {/* Sección central: Clima */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Suspense fallback={<div>Cargando clima...</div>}>
          <ErrorBoundary>
            <ClimaApp />
          </ErrorBoundary>
        </Suspense>
      </div>

      {/* Sección derecha: Tema + Auth */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
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
