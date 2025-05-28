import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <>
    <Header />
    <Dashboard />
  </>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
