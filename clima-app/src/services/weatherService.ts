import { WeatherData } from '../types/weather';

export const fetchWeather = async (lat = -12.04, lon = -77.03): Promise<WeatherData> => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
  const res = await fetch(url);

  if (!res.ok) throw new Error('Error al obtener el clima');

  const data = await res.json();

  return {
    temperature: data.current_weather.temperature,
    windspeed: data.current_weather.windspeed,
    weathercode: data.current_weather.weathercode,
    time: data.current_weather.time
  };
};
