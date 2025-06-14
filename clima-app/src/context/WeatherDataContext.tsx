import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { fetchWeather } from "../services/weatherService";
import { WeatherData } from "../types/weather";

interface WeatherDataContextProps {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
}

const WeatherDataContext = createContext<WeatherDataContextProps | undefined>(
  undefined
);

export const WeatherDataProvider = ({ children }: { children: ReactNode }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchWeather();
        setWeatherData(data);
      } catch (err) {
        console.error(err);
        setError("No se pudo obtener el clima.");
      } finally {
        setLoading(false);
      }
    };

    loadWeather();
  }, []);

  return (
    <WeatherDataContext.Provider value={{ weatherData, loading, error }}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export const useWeatherData = (): WeatherDataContextProps => {
  const context = useContext(WeatherDataContext);
  if (!context) {
    throw new Error(
      "useWeatherData debe usarse dentro de un WeatherDataProvider"
    );
  }
  return context;
};
