import { WeatherData } from "../types/weather";

export const fetchWeather = async (
  lat = -12.04,
  lon = -77.03
): Promise<WeatherData> => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m,visibility,precipitation&timezone=auto`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener el clima");

  const data = await res.json();

  // Extraer solo la hora redondeada hacia abajo, ejemplo: "2025-06-13T21:15" → "2025-06-13T21:00"
  const roundedHour = data.current_weather.time.slice(0, 13) + ":00"; // "YYYY-MM-DDTHH:00"

  const currentHourIndex = data.hourly.time.findIndex(
    (t: string) => t === roundedHour
  );

  if (currentHourIndex === -1) {
    console.warn("No se encontró índice para la hora:", roundedHour);
  }

  return {
    temperature: data.current_weather.temperature,
    windspeed: data.current_weather.windspeed,
    weathercode: data.current_weather.weathercode,

    time: data.current_weather.time,
    humidity: data.hourly.relativehumidity_2m?.[currentHourIndex],
    visibility: data.hourly.visibility?.[currentHourIndex],
    precipitation: data.hourly.precipitation?.[currentHourIndex],
  };
};
