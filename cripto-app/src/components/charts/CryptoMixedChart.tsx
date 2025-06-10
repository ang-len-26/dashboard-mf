import { Chart } from "react-chartjs-2";
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
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Legend
);

const CryptoMixedChart = () => {
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

  const priceData = data.prices.map((item: [number, number]) => item[1]);
  const volumeData = data.total_volumes.map(
    (item: [number, number]) => item[1]
  );

  const chartData: ChartData<"bar" | "line"> = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Precio (USD)",
        data: priceData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        yAxisID: "y",
      },
      {
        type: "bar" as const,
        label: "Volumen (USD)",
        data: volumeData,
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: `Mixed Precio vs Volumen - ${crypto}`,
        padding: {
          top: 2,
          bottom: 2,
        },
      },
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
        title: {
          display: true,
          text: "Precio (USD)",
        },
        ticks: {
          callback: function (tickValue: string | number) {
            if (typeof tickValue === "number") {
              return `$${formatNumber(tickValue)}`;
            }
            return tickValue;
          },
        },
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Volumen (USD)",
        },
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
          <Chart type="bar" data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default CryptoMixedChart;
