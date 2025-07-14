import React from "react";
import "./ForecastBlock.css";

type ForecastBlockProps = {
  label: string; // Hora o día, por ejemplo: "06:00" o "Lun"
  value: string; // Temperatura, humedad, etc.
  icon?: React.ReactNode; // (Opcional) Ícono relacionado con el clima
};

const ForecastBlock = ({ label, value, icon }: ForecastBlockProps) => {
  return (
    <div className="forecast-block">
      {icon && <div className="forecast-icon">{icon}</div>}
      <div className="forecast-label">{label}</div>
      <div className="forecast-value">{value}</div>
    </div>
  );
};

export default ForecastBlock;
