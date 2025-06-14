import WeatherCard from "./WeatherCard";
import { ThermometerIcon } from "../icons";
import { useWeatherData } from "../../context/WeatherDataContext";

type Props = {
  isExpanded: boolean;
  onMoreDetails: () => void;
};

const TemperatureCard = ({ isExpanded, onMoreDetails }: Props) => {
  const { weatherData } = useWeatherData();

  if (!weatherData) return null;

  return (
    <WeatherCard
      title="Temperatura"
      icon={<ThermometerIcon />}
      value={`${weatherData.temperature}°C`}
      backgroundClass="bg-temp"
      onMoreDetails={onMoreDetails}
      isExpanded={isExpanded}
    >
      <p>
        La temperatura actual es de {weatherData.temperature}°C. Tenlo en cuenta
        para planificar tu día.
      </p>
    </WeatherCard>
  );
};

export default TemperatureCard;
