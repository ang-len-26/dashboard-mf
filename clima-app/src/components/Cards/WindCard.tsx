import WeatherCard from "./WeatherCard";
import { Wind } from "lucide-react";
import { useWeatherData } from "../../context/WeatherDataContext";
import ForecastBlock from "../UI/ForecastBlock";

type Props = {
  isExpanded: boolean;
  onMoreDetails: () => void;
};

const getWindDirectionLabel = (deg: number) => {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round(deg / 22.5) % 16;
  return directions[index];
};

const WindCard = ({ isExpanded, onMoreDetails }: Props) => {
  const { weatherData, hourlyData } = useWeatherData();

  if (!weatherData) return null;

  const currentTime = weatherData.time.slice(0, 13) + ":00";
  const currentIndex = hourlyData.findIndex((h) => h.time === currentTime);
  const upcomingWind =
    currentIndex >= 0 ? hourlyData.slice(currentIndex, currentIndex + 5) : [];

  return (
    <WeatherCard
      title="Viento"
      icon={<Wind />}
      value={`${weatherData.windspeed} km/h`}
      backgroundClass="bg-wind"
      onMoreDetails={onMoreDetails}
      isExpanded={isExpanded}
    >
      {!isExpanded ? (
        <p>
          El viento sopla a {weatherData.windspeed} km/h desde{" "}
          {weatherData.winddirection !== undefined
            ? `${getWindDirectionLabel(weatherData.winddirection)} (${
                weatherData.winddirection
              }°)`
            : "dirección desconocida"}
          . Si hay ráfagas, ten precaución al aire libre.
        </p>
      ) : (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {upcomingWind.map((item, i) => (
            <ForecastBlock
              key={i}
              label={item.time.split("T")[1].slice(0, 5)}
              value={`${item.windspeed} km/h ${getWindDirectionLabel(
                item.winddirection
              )} (${item.winddirection}°)`}
            />
          ))}
        </div>
      )}
    </WeatherCard>
  );
};

export default WindCard;
