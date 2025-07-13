import React, { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { ThemeProvider } from "../context/ThemeContext";
import "./Dashboard.css";

const CriptoApp = React.lazy(() => import("criptoApp/App"));

const Dashboard = () => {
  return (
    <main className="shell-dashboard">
      <Suspense fallback={<p>Cargando módulo de criptomonedas...</p>}>
        <ErrorBoundary>
          <ThemeProvider>
            <div className="dashboard-wrapper">
              <CriptoApp />
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </Suspense>
    </main>
  );
};

export default Dashboard;
