import WeatherCard from "./WeatherCard";
import { CloudRain, CloudDrizzle, Umbrella } from "lucide-react";
import { useWeatherData } from "../../context/WeatherDataContext";
import ForecastBlock from "../UI/ForecastBlock";

type Props = {
  isExpanded: boolean;
  onMoreDetails: () => void;
};

const PrecipitationCard = ({ isExpanded, onMoreDetails }: Props) => {
  const { weatherData, hourlyData } = useWeatherData();

  if (!weatherData) return null;

  const weatherHour = weatherData.time.slice(0, 13) + ":00";
  const currentIndex = hourlyData.findIndex((h) => h.time === weatherHour);
  const upcomingHours =
    currentIndex >= 0 ? hourlyData.slice(currentIndex, currentIndex + 5) : [];

  const currentPrecip = weatherData.precipitation?.toFixed(1) ?? "0.0";

  // Ícono según intensidad de lluvia
  const getRainIcon = (mm: number) => {
    if (mm === 0) return <Umbrella size={18} />;
    if (mm < 1.5) return <CloudDrizzle size={18} />;
    return <CloudRain size={18} />;
  };

  return (
    <WeatherCard
      title="Precipitación"
      icon={<CloudRain />}
      value={`${currentPrecip} mm`}
      backgroundClass="bg-rain"
      onMoreDetails={onMoreDetails}
      isExpanded={isExpanded}
    >
      {!isExpanded ? (
        <p>
          La precipitación actual es de {currentPrecip} mm. Asegúrate de llevar
          paraguas si planeas salir.
        </p>
      ) : (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {upcomingHours.map((item, index) => {
            const mm = Number(item.precipitation)?.toFixed(1);
            return (
              <ForecastBlock
                key={index}
                label={item.time.split("T")[1].slice(0, 5)}
                value={`${mm} mm`}
                icon={getRainIcon(Number(mm))}
              />
            );
          })}
        </div>
      )}
    </WeatherCard>
  );
};

export default PrecipitationCard;
