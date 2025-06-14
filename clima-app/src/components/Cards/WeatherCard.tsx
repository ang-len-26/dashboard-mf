import { ReactNode } from "react";
import "../../styles/weather-card.css";

interface WeatherCardProps {
  title: string;
  icon: ReactNode;
  value: string;
  backgroundClass: string;
  onMoreDetails: () => void;
  isExpanded: boolean;
  children?: ReactNode;
}

const WeatherCard = ({
  title,
  icon,
  value,
  backgroundClass,
  onMoreDetails,
  isExpanded,
  children,
}: WeatherCardProps) => {
  return (
    <div
      className={`weather-card ${backgroundClass} ${
        isExpanded ? "expanded" : ""
      }`}
    >
      <div className="card-header">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
      </div>
      <div className="card-value">{value}</div>
      <button className="details-button" onClick={onMoreDetails}>
        {isExpanded ? "Menos detalles" : "Ver más"}
      </button>
      {isExpanded && <div className="card-details">{children}</div>}
    </div>
  );
};

export default WeatherCard;
