import WeatherCard from "./WeatherCard";
import { Eye, EyeOff, CloudFog } from "lucide-react";
import { useWeatherData } from "../../context/WeatherDataContext";
import ForecastBlock from "../UI/ForecastBlock";

type Props = {
  isExpanded: boolean;
  onMoreDetails: () => void;
};

const VisibilityCard = ({ isExpanded, onMoreDetails }: Props) => {
  const { weatherData, hourlyData } = useWeatherData();

  if (!weatherData) return null;

  const weatherHour = weatherData.time.slice(0, 13) + ":00";
  const currentIndex = hourlyData.findIndex((h) => h.time === weatherHour);
  const upcomingHours =
    currentIndex >= 0 ? hourlyData.slice(currentIndex, currentIndex + 5) : [];

  const currentVisibility = (weatherData.visibility / 1000).toFixed(1);

  // Ícono según nivel de visibilidad
  const getVisibilityIcon = (visKm: number) => {
    if (visKm < 2) return <CloudFog size={18} />;
    if (visKm < 5) return <EyeOff size={18} />;
    return <Eye size={18} />;
  };

  return (
    <WeatherCard
      title="Visibilidad"
      icon={<Eye />}
      value={`${currentVisibility} km`}
      backgroundClass="bg-visibility"
      onMoreDetails={onMoreDetails}
      isExpanded={isExpanded}
    >
      {!isExpanded ? (
        <p>
          La visibilidad actual es de {currentVisibility} kilómetros. Ideal para
          actividades al aire libre, aunque debes tener precaución si hay niebla
          o polvo.
        </p>
      ) : (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {upcomingHours.map((item, index) => {
            const km = (Number(item.visibility) / 1000).toFixed(1);
            return (
              <ForecastBlock
                key={index}
                label={item.time.split("T")[1].slice(0, 5)}
                value={`${km} km`}
                icon={getVisibilityIcon(Number(km))}
              />
            );
          })}
        </div>
      )}
    </WeatherCard>
  );
};

export default VisibilityCard;
