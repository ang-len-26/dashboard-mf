import { Bar } from "react-chartjs-2";
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
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CryptoBarChart = () => {
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

  const labels = data.prices.map(([timestamp]) =>
    new Date(timestamp).toLocaleDateString()
  );

  const prices = data.prices.map(([, value]) => value);

  const chartData: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: `Precio de ${
          crypto.charAt(0).toUpperCase() + crypto.slice(1)
        } (USD)`,
        data: prices,
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
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
    hover: {
      mode: "index" as const,
      intersect: false,
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.dataset.label}: $${tooltipItem.raw.toFixed(
              2
            )}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: (tickValue: string | number) =>
            typeof tickValue === "number" ? formatNumber(tickValue) : tickValue,
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
          <Bar data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default CryptoBarChart;
