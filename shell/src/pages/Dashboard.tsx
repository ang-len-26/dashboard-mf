import React, { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { ThemeProvider } from "../context/ThemeContext";

const CriptoApp = React.lazy(() => import("criptoApp/App"));

const Dashboard = () => {
  return (
    <main
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "calc(100vh - 100px)", // altura menos header
        backgroundColor: "#f4f4f4",
      }}
    >
      <Suspense fallback={<p>Cargando módulo de criptomonedas...</p>}>
        <ErrorBoundary>
          <ThemeProvider>
            <div
              style={{
                width: "100%",
                maxWidth: "1200px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                padding: "2rem",
              }}
            >
              <CriptoApp />
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </Suspense>
    </main>
  );
};

export default Dashboard;
