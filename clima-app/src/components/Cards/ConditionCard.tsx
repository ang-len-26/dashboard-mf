import WeatherCard from "./WeatherCard";
import { SunIcon } from "../icons";
import { useWeatherData } from "../../context/WeatherDataContext";

type Props = {
  isExpanded: boolean;
  onMoreDetails: () => void;
};

const weatherCodeMap: Record<number, string> = {
  0: "Despejado",
  1: "Principalmente despejado",
  2: "Parcialmente nublado",
  3: "Nublado",
  45: "Niebla",
  48: "Niebla con escarcha",
  51: "Llovizna ligera",
  53: "Llovizna moderada",
  55: "Llovizna densa",
  61: "Lluvia leve",
  63: "Lluvia moderada",
  65: "Lluvia fuerte",
  80: "Chubascos leves",
  81: "Chubascos moderados",
  82: "Chubascos intensos",
};

const ConditionCard = ({ isExpanded, onMoreDetails }: Props) => {
  const { weatherData } = useWeatherData();

  if (!weatherData) return null;

  const condition = weatherCodeMap[weatherData.weathercode] || "Desconocido";

  const history = [
    "Soleado",
    "Parcial nublado",
    "Nublado",
    "Lluvia",
    "Soleado",
  ]; // Puede venir de una API en el futuro

  return (
    <WeatherCard
      title="Estado General"
      icon={<SunIcon />}
      value={condition}
      backgroundClass="bg-sun"
      onMoreDetails={onMoreDetails}
      isExpanded={isExpanded}
    >
      <ul className="history">
        {history.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </WeatherCard>
  );
};

export default ConditionCard;
