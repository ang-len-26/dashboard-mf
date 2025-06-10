import { useEffect, useState } from 'react';
import { fetchWeather } from '../services/weatherService';
import { WeatherData } from '../types/weather';

export const useWeather = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const result = await fetchWeather();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, []);

  return { data, loading, error };
};
