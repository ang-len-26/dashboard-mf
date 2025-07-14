import WeatherCard from "./WeatherCard";
import { Droplet, Droplets, CloudRain } from "lucide-react";
import { useWeatherData } from "../../context/WeatherDataContext";
import ForecastBlock from "../UI/ForecastBlock";

type Props = {
  isExpanded: boolean;
  onMoreDetails: () => void;
};

const HumidityCard = ({ isExpanded, onMoreDetails }: Props) => {
  const { weatherData, hourlyData } = useWeatherData();

  if (!weatherData) return null;

  const weatherHour = weatherData.time.slice(0, 13) + ":00";
  const currentIndex = hourlyData.findIndex((h) => h.time === weatherHour);
  const upcomingHours =
    currentIndex >= 0 ? hourlyData.slice(currentIndex, currentIndex + 5) : [];

  // Ícono dinámico según el porcentaje de humedad
  const getHumidityIcon = (humidity: number) => {
    if (humidity < 40) return <Droplet size={18} />;
    if (humidity < 70) return <Droplets size={18} />;
    return <CloudRain size={18} />;
  };

  return (
    <WeatherCard
      title="Humedad"
      icon={<Droplet />}
      value={`${weatherData.humidity}%`}
      backgroundClass="bg-humidity"
      onMoreDetails={onMoreDetails}
      isExpanded={isExpanded}
    >
      {!isExpanded ? (
        <p>
          La humedad relativa actual es del {weatherData.humidity}%. Esto puede
          afectar la sensación térmica y la comodidad al aire libre.
        </p>
      ) : (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {upcomingHours.map((item, index) => (
            <ForecastBlock
              key={index}
              label={item.time.split("T")[1].slice(0, 5)}
              value={`${item.humidity}%`}
              icon={getHumidityIcon(Number(item.humidity))}
            />
          ))}
        </div>
      )}
    </WeatherCard>
  );
};

export default HumidityCard;
