import { Bubble } from "react-chartjs-2";
import { useCryptoContext } from "../../context/CryptoContext";
import { useCryptoData } from "../../context/CryptoDataProvider";
import type { ChartData } from "chart.js";
import { formatNumber } from "../../utils/formatNumber";
import "chartjs-adapter-date-fns";
import { useRef } from "react";
import { Fullscreen } from "lucide-react"; // Usa íconos si los tienes disponibles

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, TimeScale);

const CryptoBubbleChart = () => {
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

  const bubblePoints = data.market_caps.map(
    ([timestamp, marketCap], i: number) => {
      const volume = data.total_volumes[i]?.[1] ?? 0;
      const normalizedVolume = Math.sqrt(volume) / 100000;

      return {
        x: timestamp,
        y: marketCap,
        r: normalizedVolume,
      };
    }
  );

  const chartData: ChartData<"bubble"> = {
    datasets: [
      {
        label: "Capitalización vs Tiempo (Volumen como tamaño)",
        data: bubblePoints,
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Capitalizacion del  ${
          crypto.charAt(0).toUpperCase() + crypto.slice(1)
        }`,
        padding: {
          top: 2,
          bottom: 30,
        },
      },
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const { x, y, r } = context.raw;
            const date = new Date(x).toLocaleDateString();
            return `Fecha: ${date}, Market Cap: $${y.toLocaleString()}, Volumen (tamaño): $${
              (r * 2000) ** 2
            }`;
          },
        },
      },
    },
    scales: {
      x: {
        type: "time" as const,
        time: {
          unit: "day" as const,
          tooltipFormat: "PP",
        },
        title: {
          display: true,
          text: "Fecha",
        },
      },
      y: {
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
          <Bubble data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default CryptoBubbleChart;
