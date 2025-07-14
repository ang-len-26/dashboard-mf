import { Info, MinusCircle } from "lucide-react";
import "../../styles/weather-card.css";

type WeatherCardProps = {
  title: string;
  icon?: React.ReactNode;
  value: string;
  backgroundClass: string;
  isExpanded: boolean;
  onMoreDetails: () => void;
  children?: React.ReactNode;
};

const WeatherCard = ({
  title,
  icon = <Info size={28} />,
  value,
  backgroundClass,
  isExpanded,
  onMoreDetails,
  children,
}: WeatherCardProps) => {
  return (
    <div
      className={`weather-card ${backgroundClass} ${
        isExpanded ? "expanded" : ""
      }`}
    >
      <div className="card-header">
        {icon}
        <div>
          <div className="card-title">{title}</div>
          <div className="card-value">{value}</div>
        </div>
      </div>

      {!isExpanded ? (
        <button className="details-button" onClick={onMoreDetails}>
          Ver más
        </button>
      ) : (
        <div className="card-details">
          {children}
          <button
            className="collapse-button"
            onClick={onMoreDetails}
            aria-label="Ver menos"
          >
            <MinusCircle size={20} />
            <span>Ver menos</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
