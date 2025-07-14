import { WeatherData, WeatherHourly } from "../types/weather";

export const fetchWeatherFull = async (
  lat = -12.04,
  lon = -77.03
): Promise<{ current: WeatherData; hourly: WeatherHourly[] }> => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&past_days=2&forecast_days=2&hourly=temperature_2m,relativehumidity_2m,visibility,precipitation,windspeed_10m,winddirection_10m,weathercode&current_weather=true&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener el clima extendido");

  const data = await res.json();

  const roundedHour = data.current_weather.time.slice(0, 13) + ":00";

  const currentHourIndex = data.hourly.time.findIndex(
    (t: string) => t === roundedHour
  );

  const current: WeatherData = {
    temperature: data.current_weather.temperature,
    windspeed: data.current_weather.windspeed,
    winddirection: data.current_weather.winddirection,
    weathercode: data.current_weather.weathercode,
    time: data.current_weather.time,
    humidity: data.hourly.relativehumidity_2m?.[currentHourIndex],
    visibility: data.hourly.visibility?.[currentHourIndex],
    precipitation: data.hourly.precipitation?.[currentHourIndex],
  };

  // Construimos historial/forecast completo
  const hourly: WeatherHourly[] = data.hourly.time.map((time: string, i: number) => ({
    time,
    temperature: data.hourly.temperature_2m[i],
    humidity: data.hourly.relativehumidity_2m[i],
    visibility: data.hourly.visibility[i],
    precipitation: data.hourly.precipitation[i],
    windspeed: data.hourly.windspeed_10m[i],
    winddirection: data.hourly.winddirection_10m[i],
	weathercode: data.hourly.weathercode[i],
  }));

  return { current, hourly };
};
