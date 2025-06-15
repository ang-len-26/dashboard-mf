import { WeatherProvider } from "./context/WeatherContext";
import { WeatherDataProvider } from "./context/WeatherDataContext";
import Home from "./pages/Home";
const App = () => {
  return (
    <WeatherProvider>
      <WeatherDataProvider>
        <Home />
      </WeatherDataProvider>
    </WeatherProvider>
  );
};

export default App;
