export interface WeatherData {
  temperature: number;         // °C
  windspeed: number;           // km/h
  winddirection?: number;      // grados (opcional, si se incluye en la API)
  weathercode: number;         // código numérico del tiempo
  time: string;                // ISO 8601
  humidity: number;            // %
  visibility: number;          // metros
  precipitation: number;       // mm
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
