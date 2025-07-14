import { useWeatherContext } from "../context/WeatherContext";
import { useWeatherData } from "../context/WeatherDataContext";
import {
  ConditionCard,
  HumidityCard,
  PrecipitationCard,
  TemperatureCard,
  VisibilityCard,
  WindCard,
} from "../components/Cards";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const { currentCard, nextCard, prevCard, isExpanded, toggleExpand } =
    useWeatherContext();
  const { weatherData, loading, error } = useWeatherData();

  if (loading) return <div className="loading">Cargando clima...</div>;
  if (error || !weatherData) return <div className="error">Error: {error}</div>;

  // Array de componentes de tarjetas
  const cards = [
    <ConditionCard
      key="condition"
      isExpanded={isExpanded}
      onMoreDetails={toggleExpand}
    />,
    <TemperatureCard
      key="temperature"
      isExpanded={isExpanded}
      onMoreDetails={toggleExpand}
    />,
    <HumidityCard
      key="humidity"
      isExpanded={isExpanded}
      onMoreDetails={toggleExpand}
    />,
    <VisibilityCard
      key="visibility"
      isExpanded={isExpanded}
      onMoreDetails={toggleExpand}
    />,
    <PrecipitationCard
      key="precipitation"
      isExpanded={isExpanded}
      onMoreDetails={toggleExpand}
    />,
    <WindCard
      key="wind"
      isExpanded={isExpanded}
      onMoreDetails={toggleExpand}
    />,
  ];

  return (
    <div className={`weather-header`}>
      {/* Botón izquierdo */}
      <button
        onClick={prevCard}
        className="nav-button left-button"
        aria-label="Anterior"
      >
        <ChevronLeft className="nav-icon" />
      </button>

      {/* Tarjeta actual */}
      <div className="weather-card">{cards[currentCard]}</div>

      {/* Botón derecho */}
      <button
        onClick={nextCard}
        className="nav-button right-button"
        aria-label="Siguiente"
      >
        <ChevronRight className="nav-icon" />
      </button>
    </div>
  );
};

export default Home;
