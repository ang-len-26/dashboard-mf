import { Radar } from "react-chartjs-2";
import { useCryptoMarket } from "../../context/CryptoMarketContext";
import { useRef } from "react";
import { Fullscreen } from "lucide-react"; // Usa íconos si los tienes disponibles

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const colors = [
  "rgba(255, 99, 132, 0.4)",
  "rgba(54, 162, 235, 0.4)",
  "rgba(255, 206, 86, 0.4)",
  "rgba(75, 192, 192, 0.4)",
  "rgba(153, 102, 255, 0.4)",
];

const CryptoRadarChart = () => {
  const { cryptos, loading } = useCryptoMarket();

  const cardRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      cardRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  if (loading || !cryptos) return <p>Cargando datos...</p>;

  const maxValues = {
    current_price: Math.max(...cryptos.map((c) => c.current_price)),
    market_cap: Math.max(...cryptos.map((c) => c.market_cap)),
    total_volume: Math.max(...cryptos.map((c) => c.total_volume)),
    circulating_supply: Math.max(...cryptos.map((c) => c.circulating_supply)),
    price_change_percentage_24h: 100,
    ath_change_percentage: 100,
  };

  const labels = [
    "Precio Actual",
    "Market Cap",
    "Volumen Total",
    "Supply",
    "% Cambio 24h",
    "% Desde ATH",
  ];

  const datasets = cryptos.map((crypto, i) => ({
    label: crypto.name,
    data: [
      crypto.current_price / maxValues.current_price,
      crypto.market_cap / maxValues.market_cap,
      crypto.total_volume / maxValues.total_volume,
      crypto.circulating_supply / maxValues.circulating_supply,
      Math.abs(crypto.price_change_percentage_24h ?? 0) /
        maxValues.price_change_percentage_24h,
      Math.abs(crypto.ath_change_percentage ?? 0) /
        maxValues.ath_change_percentage,
    ],
    backgroundColor: colors[i % colors.length],
    borderColor: colors[i % colors.length].replace("0.4", "1"),
    borderWidth: 2,
    pointBackgroundColor: colors[i % colors.length].replace("0.4", "1"),
  }));

  const chartData = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        ticks: {
          callback: function (this: any, tickValue: string | number) {
            return tickValue.toString();
          },
          color: "#666",
          backdropColor: "transparent",
        },
        pointLabels: {
          font: {
            size: 14,
          },
          color: "#333",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        angleLines: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.chart.data.labels[context.dataIndex];
            const value = context.raw;
            return `${label}: ${value.toFixed(2)}`;
          },
        },
      },
      title: {
        display: true,
        text: `Radar financiero de  criptomonedas`,
        padding: {
          top: 2,
          bottom: 30,
        },
      },
      legend: {
        display: true,
      },
    },
    elements: {
      line: {
        tension: 0.4,
        borderWidth: 2,
        backgroundColor: "rgba(36, 24, 194, 0.2)",
        borderColor: "rgb(189, 22, 38)",
        fill: false,
      },
      point: {
        radius: 5,
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "#fff",
        borderWidth: 2,
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
          <Radar data={chartData} options={options} />
        </div>
      )}
    </div>
  );
};

export default CryptoRadarChart;
