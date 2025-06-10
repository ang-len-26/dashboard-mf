export interface WeatherData {
  temperature: number;
  windspeed: number;
  weathercode: number;
  time: string;
}
export interface WeatherResponse {
  data: WeatherData[];
  timezone: string;
}
export interface WeatherError {
  message: string;
  code: number;
}
export interface WeatherForecast {
  current: WeatherData;
  hourly: WeatherData[];
  daily: WeatherData[];
  timezone: string;
}
export interface WeatherLocation {
  latitude: number;
  longitude: number;
  name: string;
  country: string;
}