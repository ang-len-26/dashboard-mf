import WeatherCard from "./WeatherCard";
import { EyeIcon } from "../icons";
import { useWeatherData } from "../../context/WeatherDataContext";

type Props = {
  isExpanded: boolean;
  onMoreDetails: () => void;
};

const VisibilityCard = ({ isExpanded, onMoreDetails }: Props) => {
  const { weatherData } = useWeatherData();

  if (!weatherData) return null;

  const visibilityKm = (weatherData.visibility / 1000).toFixed(1);

  return (
    <WeatherCard
      title="Visibilidad"
      icon={<EyeIcon />}
      value={`${visibilityKm} km`}
      backgroundClass="bg-visibility"
      onMoreDetails={onMoreDetails}
      isExpanded={isExpanded}
    >
      <p>
        La visibilidad actual es de {visibilityKm} kilómetros. Ideal para
        actividades al aire libre, aunque debes tener cuidado si hay niebla o
        polvo.
      </p>
    </WeatherCard>
  );
};

export default VisibilityCard;
