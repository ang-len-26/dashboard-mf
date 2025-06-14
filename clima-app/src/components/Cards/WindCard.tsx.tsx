import WeatherCard from "./WeatherCard";
import { useWeatherData } from "../../context/WeatherDataContext";
import { WindIcon } from "../icons"; // Asegúrate de tener este ícono o créalo

type Props = {
  isExpanded: boolean;
  onMoreDetails: () => void;
};

const WindCard = ({ isExpanded, onMoreDetails }: Props) => {
  const { weatherData } = useWeatherData();

  if (!weatherData) return null;

  const windSpeed = weatherData.windspeed;
  const windDirection = weatherData.winddirection;

  // Opcional: convertir grados a dirección cardinal (N, NE, E, etc.)
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

  return (
    <WeatherCard
      title="Viento"
      icon={<WindIcon />}
      value={`${windSpeed} km/h`}
      backgroundClass="bg-wind"
      onMoreDetails={onMoreDetails}
      isExpanded={isExpanded}
    >
      <p>
        El viento sopla a {windSpeed} km/h desde el{" "}
        {windDirection !== undefined
          ? `${getWindDirectionLabel(windDirection)} (${windDirection}°)`
          : "dirección desconocida"}
        . Si hay ráfagas, ten precaución al aire libre.
      </p>
    </WeatherCard>
  );
};

export default WindCard;
