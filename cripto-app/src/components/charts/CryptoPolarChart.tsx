import { PolarArea } from "react-chartjs-2";
import { useCryptoContext } from "../../context/CryptoContext";
import { useCryptoData } from "../../context/CryptoDataProvider";
import type { ChartData } from "chart.js";
import { useRef } from "react";
import { Fullscreen } from "lucide-react"; // Usa íconos si los tienes disponibles

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const CryptoPolarChart = () => {
  const { crypto } = useCryptoContext();
  const { data, loading } = useCryptoData();

  const cardRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      cardRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  if (loading || !data) return <p>Cargando datos...</p>;

  const charData: ChartData<"polarArea"> = {
    labels: [],
    datasets: [
      {
        label: `Distribución Polar de ${crypto}`,
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: "easeInOutQuad" as const,
    },
  };

  return (
    <div>
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <div className="chart-card" ref={cardRef}>
          <div className="chart-header">
            <button
              className="fullscreen-btn"
              onClick={toggleFullscreen}
              title="Pantalla completa"
            >
              <Fullscreen size={18} />
            </button>
          </div>
          <PolarArea data={charData} options={options} />
        </div>
      )}
    </div>
  );
};

export default CryptoPolarChart;
