import WeatherCard from "./WeatherCard";
import { DropletIcon } from "../icons";
import { useWeatherData } from "../../context/WeatherDataContext";

type Props = {
  isExpanded: boolean;
  onMoreDetails: () => void;
};

const HumidityCard = ({ isExpanded, onMoreDetails }: Props) => {
  const { weatherData } = useWeatherData();

  if (!weatherData) return null;

  return (
    <WeatherCard
      title="Humedad"
      icon={<DropletIcon />}
      value={`${weatherData.humidity}%`}
      backgroundClass="bg-humidity"
      onMoreDetails={onMoreDetails}
      isExpanded={isExpanded}
    >
      <p>
        La humedad relativa actual es del {weatherData.humidity}%. Esto puede
        afectar la sensación térmica y la comodidad al aire libre.
      </p>
    </WeatherCard>
  );
};

export default HumidityCard;
