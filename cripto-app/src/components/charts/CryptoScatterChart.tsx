import { Scatter } from "react-chartjs-2";
import { useCryptoContext } from "../../context/CryptoContext";
import { useCryptoData } from "../../context/CryptoDataProvider";
import type { ChartData } from "chart.js";
import { formatNumber } from "../../utils/formatNumber";
import { useRef } from "react";
import { Fullscreen } from "lucide-react"; // Usa íconos si los tienes disponibles

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const CryptoScatterChart = () => {
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

  const scatterPoints = data.prices.map((item: [number, number], i: number) => {
    const price = item[1];
    const volume = data.total_volumes[i]?.[1] ?? 0;
    return { x: price, y: volume };
  });

  const chartData: ChartData<"scatter"> = {
    datasets: [
      {
        label: `Precio vs Volumen  ${
          crypto.charAt(0).toUpperCase() + crypto.slice(1)
        } (USD)`,
        data: scatterPoints,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) =>
            `Precio: $${context.raw.x.toFixed(
              2
            )} | Volumen: $${context.raw.y.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Precio (USD)",
        },
        ticks: {
          callback: function (this: any, tickValue: string | number) {
            if (typeof tickValue === "number") {
              return formatNumber(tickValue);
            }
            return tickValue;
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Volumen (USD)",
        },
        ticks: {
          callback: function (this: any, tickValue: string | number) {
            if (typeof tickValue === "number") {
              return formatNumber(tickValue);
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
          <Scatter data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default CryptoScatterChart;
