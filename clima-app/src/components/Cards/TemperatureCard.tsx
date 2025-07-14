import WeatherCard from "./WeatherCard";
import { Thermometer, Sun, Cloud, Snowflake } from "lucide-react";
import { useWeatherData } from "../../context/WeatherDataContext";
import ForecastBlock from "../UI/ForecastBlock";

type Props = {
  isExpanded: boolean;
  onMoreDetails: () => void;
};

const TemperatureCard = ({ isExpanded, onMoreDetails }: Props) => {
  const { weatherData, hourlyData } = useWeatherData();

  if (!weatherData) return null;

  // Encuentra la hora actual redondeada
  const weatherHour = weatherData.time.slice(0, 13) + ":00";
  const currentIndex = hourlyData.findIndex((h) => h.time === weatherHour);
  const upcomingHours =
    currentIndex >= 0 ? hourlyData.slice(currentIndex, currentIndex + 5) : [];

  // Lógica para decidir el ícono según temperatura
  const getTempIcon = (temp: number) => {
    if (temp < 15) return <Snowflake size={18} />;
    if (temp < 25) return <Cloud size={18} />;
    return <Sun size={18} />;
  };

  return (
    <WeatherCard
      title="Temperatura"
      icon={<Thermometer />}
      value={`${weatherData.temperature}°C`}
      backgroundClass="bg-temp"
      onMoreDetails={onMoreDetails}
      isExpanded={isExpanded}
    >
      {!isExpanded ? (
        <p>
          La temperatura actual es de {weatherData.temperature}°C. Tenlo en
          cuenta para planificar tu día.
        </p>
      ) : (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {upcomingHours.map((item, index) => (
            <ForecastBlock
              key={index}
              label={item.time.split("T")[1].slice(0, 5)} // HH:MM
              value={`${item.temperature}°C`}
              icon={getTempIcon(Number(item.temperature))}
            />
          ))}
        </div>
      )}
    </WeatherCard>
  );
};

export default TemperatureCard;
