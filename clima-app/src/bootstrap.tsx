import ReactDOM from "react-dom/client";
import ClimaModule from "./components/ClimaModule";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<ClimaModule />);
}
