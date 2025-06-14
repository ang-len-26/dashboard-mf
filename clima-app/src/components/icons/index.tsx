// Íconos por tipo de tarjeta
export const SunIcon = () => (
  <img src="/svg/sun.svg" alt="Sol" className="icon" />
);
export const ThermometerIcon = () => (
  <img src="/svg/thermometer.svg" alt="Temperatura" className="icon" />
);
export const DropletIcon = () => (
  <img src="/svg/droplet.svg" alt="Humedad" className="icon" />
);
export const EyeIcon = () => (
  <img src="/svg/eye.svg" alt="Visibilidad" className="icon" />
);
export const CloudRainIcon = () => (
  <img src="/svg/cloud-rain.svg" alt="Lluvia" className="icon" />
);
export const WindIcon = () => (
  <img src="/svg/wind.svg" alt="Viento" className="icon" />
);

// Íconos de navegación
export const PrevIcon = () => (
  <img src="/svg/prev.svg" alt="Anterior" className="nav-icon" />
);
export const NextIcon = () => (
  <img src="/svg/next.svg" alt="Siguiente" className="nav-icon" />
);
export const ExpandIcon = ({ expanded }: { expanded: boolean }) =>
  expanded ? (
    <img src="/svg/collapse.svg" alt="Menos detalles" className="nav-icon" />
  ) : (
    <img src="/svg/expand.svg" alt="Ver más detalles" className="nav-icon" />
  );
