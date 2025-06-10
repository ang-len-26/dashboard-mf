import React, { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { ThemeProvider } from "../context/ThemeContext";

const ClimaApp = React.lazy(() => import("climaApp/App"));
const CriptoApp = React.lazy(() => import("criptoApp/App"));
const AuthApp = React.lazy(() => import("authApp/AuthModule"));

const Dashboard = () => {
  return (
    <main style={{ padding: "1rem" }}>
      <Suspense fallback={<p>Cargando módulo de clima...</p>}>
        <ErrorBoundary>
          <ClimaApp />
        </ErrorBoundary>
      </Suspense>

      <Suspense fallback={<p>Cargando módulo de cripto...</p>}>
        <ErrorBoundary>
          <ThemeProvider>
            <CriptoApp />
          </ThemeProvider>
        </ErrorBoundary>
      </Suspense>

      <Suspense fallback={<p>Cargando módulo de autenticación...</p>}>
        <ErrorBoundary>
          <AuthApp />
        </ErrorBoundary>
      </Suspense>
    </main>
  );
};

export default Dashboard;
