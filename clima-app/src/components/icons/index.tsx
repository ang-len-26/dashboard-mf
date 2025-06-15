import sun from "../../assets/svg/sun.svg";
import thermometer from "../../assets/svg/thermometer.svg";
import droplet from "../../assets/svg/droplet.svg";
import eye from "../../assets/svg/eye.svg";
import cloudRain from "../../assets/svg/cloudRain.svg";
import wind from "../../assets/svg/wind.svg";
import prev from "../../assets/svg/prev.svg";
import next from "../../assets/svg/next.svg";
import expand from "../../assets/svg/expand.svg";
import collapse from "../../assets/svg/collapse.svg";
// Íconos por tipo de tarjeta
export const SunIcon = () => <img src={sun} alt="Sol" className="icon" />;
export const ThermometerIcon = () => (
  <img src={thermometer} alt="Temperatura" className="icon" />
);
export const DropletIcon = () => (
  <img src={droplet} alt="Humedad" className="icon" />
);
export const EyeIcon = () => (
  <img src={eye} alt="Visibilidad" className="icon" />
);
export const CloudRainIcon = () => (
  <img src={cloudRain} alt="Lluvia" className="icon" />
);
export const WindIcon = () => <img src={wind} alt="Viento" className="icon" />;

// Íconos de navegación
export const PrevIcon = () => (
  <img src={prev} alt="Anterior" className="nav-icon" />
);
export const NextIcon = () => (
  <img src={next} alt="Siguiente" className="nav-icon" />
);
export const ExpandIcon = ({ expanded }: { expanded: boolean }) =>
  expanded ? (
    <img src={collapse} alt="Menos detalles" className="nav-icon" />
  ) : (
    <img src={expand} alt="Ver más detalles" className="nav-icon" />
  );
