// import { Suspense, lazy } from "react";
import { WeatherProvider } from "./context/WeatherContext";
import { WeatherDataProvider } from "./context/WeatherDataContext";
import Home from "./pages/Home";
// import Loader from "./components/UI/Loader";

// const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <WeatherProvider>
      <WeatherDataProvider>
        <Home />
        {/* <Suspense fallback={<Loader />}>
          <Home />
        </Suspense> */}
      </WeatherDataProvider>
    </WeatherProvider>
  );
};

export default App;
