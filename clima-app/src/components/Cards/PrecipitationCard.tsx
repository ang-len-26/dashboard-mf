import WeatherCard from "./WeatherCard";
import { CloudRainIcon } from "../icons";
import { useWeatherData } from "../../context/WeatherDataContext";

type Props = {
  isExpanded: boolean;
  onMoreDetails: () => void;
};

const PrecipitationCard = ({ isExpanded, onMoreDetails }: Props) => {
  const { weatherData } = useWeatherData();

  if (!weatherData) return null;

  return (
    <WeatherCard
      title="Precipitación"
      icon={<CloudRainIcon />}
      value={`${weatherData.precipitation} mm`}
      backgroundClass="bg-rain"
      onMoreDetails={onMoreDetails}
      isExpanded={isExpanded}
    >
      <p>
        Se han registrado {weatherData.precipitation} mm de precipitaciones en
        la última hora. Considera llevar paraguas o impermeable si sales.
      </p>
    </WeatherCard>
  );
};

export default PrecipitationCard;
