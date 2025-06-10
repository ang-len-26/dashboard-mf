import { Line } from "react-chartjs-2";
import { useCryptoContext } from "../../context/CryptoContext";
import { useCryptoData } from "../../context/CryptoDataProvider";
import type { ChartData } from "chart.js";
import { formatNumber } from "../../utils/formatNumber";
import { useRef } from "react";
import { Fullscreen } from "lucide-react"; // Usa íconos si los tienes disponibles

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoLineChart = () => {
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

  const labels = data.total_volumes.map(([timestamp]) =>
    new Date(timestamp).toLocaleDateString()
  );

  const volumes = data.total_volumes.map(([, value]) => value);

  const chartData: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: `Volumen de ${
          crypto.charAt(0).toUpperCase() + crypto.slice(1)
        } (USD)`,
        data: volumes,
        fill: true,
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        tension: 0.3,
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
    plugins: {
      title: {
        display: true,
        text: `Evolución del Volumen ${
          crypto.charAt(0).toUpperCase() + crypto.slice(1)
        }`,
        padding: {
          top: 2,
          bottom: 2,
        },
      },
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `Volumen: $${formatNumber(context.raw)}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (tickValue: string | number) {
            if (typeof tickValue === "number") {
              return `$${formatNumber(tickValue)}`;
            }
            return tickValue;
          },
        },
      },
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
          <Line data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default CryptoLineChart;
