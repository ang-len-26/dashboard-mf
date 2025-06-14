// src/pages/Home.tsx

import { useWeatherContext } from "../context/WeatherContext";
import { useWeatherData } from "../context/WeatherDataContext";
import ConditionCard from "../components/Cards/ConditionCard";
import HumidityCard from "../components/Cards/HumidityCard";
import PrecipitationCard from "../components/Cards/PrecipitationCard";
import TemperatureCard from "../components/Cards/TemperatureCard";
import VisibilityCard from "../components/Cards/VisibilityCard";
import WindCard from "../components/Cards/WindCard.tsx";

import { PrevIcon, NextIcon, ExpandIcon } from "../components/icons";

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
    <div className={`weather-header ${isExpanded ? "expanded" : ""}`}>
      <div className="card-controls">
        <button onClick={prevCard} aria-label="Anterior">
          <PrevIcon />
        </button>
        <button onClick={toggleExpand} aria-label="Ver más">
          <ExpandIcon expanded={isExpanded} />
        </button>
        <button onClick={nextCard} aria-label="Siguiente">
          <NextIcon />
        </button>
      </div>

      <div className="weather-card-container">{cards[currentCard]}</div>
    </div>
  );
};

export default Home;
