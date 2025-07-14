import WeatherCard from "./WeatherCard";
import { useWeatherData } from "../../context/WeatherDataContext";
import ForecastBlock from "../UI/ForecastBlock";
import {
  Sun,
  Cloud,
  CloudSun,
  CloudFog,
  CloudDrizzle,
  CloudRain,
  CloudLightning,
  HelpCircle,
} from "lucide-react";

type Props = {
  isExpanded: boolean;
  onMoreDetails: () => void;
};

const weatherCodeMap: Record<number, { label: string; icon: JSX.Element }> = {
  0: { label: "Despejado", icon: <Sun size={18} /> },
  1: { label: "Mayormente despejado", icon: <CloudSun size={18} /> },
  2: { label: "Parcialmente nublado", icon: <CloudSun size={18} /> },
  3: { label: "Nublado", icon: <Cloud size={18} /> },
  45: { label: "Niebla", icon: <CloudFog size={18} /> },
  48: { label: "Niebla con escarcha", icon: <CloudFog size={18} /> },
  51: { label: "Llovizna ligera", icon: <CloudDrizzle size={18} /> },
  53: { label: "Llovizna moderada", icon: <CloudDrizzle size={18} /> },
  55: { label: "Llovizna densa", icon: <CloudDrizzle size={18} /> },
  61: { label: "Lluvia leve", icon: <CloudRain size={18} /> },
  63: { label: "Lluvia moderada", icon: <CloudRain size={18} /> },
  65: { label: "Lluvia fuerte", icon: <CloudRain size={18} /> },
  80: { label: "Chubascos leves", icon: <CloudRain size={18} /> },
  81: { label: "Chubascos moderados", icon: <CloudRain size={18} /> },
  82: { label: "Chubascos intensos", icon: <CloudLightning size={18} /> },
};

const ConditionCard = ({ isExpanded, onMoreDetails }: Props) => {
  const { weatherData, hourlyData } = useWeatherData();

  if (!weatherData) return null;

  const currentCondition =
    weatherCodeMap[weatherData.weathercode]?.label ?? "Condición desconocida";
  const currentIcon = weatherCodeMap[weatherData.weathercode]?.icon ?? (
    <HelpCircle size={18} />
  );

  const weatherHour = weatherData.time.slice(0, 13) + ":00";
  const currentIndex = hourlyData.findIndex((h) => h.time === weatherHour);
  const upcomingHours =
    currentIndex >= 0 ? hourlyData.slice(currentIndex, currentIndex + 5) : [];

  return (
    <WeatherCard
      title="Estado General"
      icon={currentIcon}
      value={currentCondition}
      backgroundClass="bg-sun"
      onMoreDetails={onMoreDetails}
      isExpanded={isExpanded}
    >
      {!isExpanded ? (
        <p>
          El clima actual se reporta como: <strong>{currentCondition}</strong>.
          Este dato proviene del código meteorológico más reciente.
        </p>
      ) : (
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {upcomingHours.map((item, i) => {
            const code = item.weathercode;
            const condition = weatherCodeMap[code]?.label ?? "Desconocido";
            const icon = weatherCodeMap[code]?.icon ?? <HelpCircle size={18} />;
            return (
              <ForecastBlock
                key={i}
                label={item.time.split("T")[1].slice(0, 5)} // HH:MM
                value={condition}
                icon={icon}
              />
            );
          })}
        </div>
      )}
    </WeatherCard>
  );
};

export default ConditionCard;
