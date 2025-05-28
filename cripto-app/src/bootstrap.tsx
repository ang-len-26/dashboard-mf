import ReactDOM from "react-dom/client";
import CriptoModule from "./components/CriptoModule";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(<CriptoModule />);
}
