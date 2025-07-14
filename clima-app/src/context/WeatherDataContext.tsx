import { createContext, useContext, useEffect, useState } from "react";
import { WeatherData, WeatherHourly } from "../types/weather";
import { fetchWeatherFull } from "../services/fetchWeatherFull";

type WeatherDataContextType = {
  weatherData: WeatherData | null;
  hourlyData: WeatherHourly[]; // <-- nuevo
  loading: boolean;
  error: string | null;
};

const WeatherDataContext = createContext<WeatherDataContextType | undefined>(
  undefined
);

export const WeatherDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [hourlyData, setHourlyData] = useState<WeatherHourly[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchWeatherFull()
      .then(({ current, hourly }) => {
        setWeatherData(current);
        setHourlyData(hourly);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Error al cargar el clima");
        setLoading(false);
      });
  }, []);

  return (
    <WeatherDataContext.Provider
      value={{ weatherData, hourlyData, loading, error }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

export const useWeatherData = () => {
  const context = useContext(WeatherDataContext);
  if (!context)
    throw new Error("useWeatherData debe usarse dentro de WeatherDataProvider");
  return context;
};
