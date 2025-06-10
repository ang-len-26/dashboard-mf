import React from "react";
import { WeatherData } from "../types/weather";

interface Props {
  data: WeatherData;
}

const WeatherCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="card">
      <h2>Clima actual</h2>
      <p>🌡️ Temperatura: {data.temperature}°C</p>
      <p>💨 Viento: {data.windspeed} km/h</p>
      <p>🕒 Hora: {new Date(data.time).toLocaleTimeString()}</p>
    </div>
  );
};

export default WeatherCard;
