import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { useCryptoMarket } from "../../context/CryptoMarketContext";
import { useRef } from "react";
import { Fullscreen } from "lucide-react"; // Usa íconos si los tienes disponibles

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CryptoPieChart = () => {
  const { cryptos, loading } = useCryptoMarket();

  const cardRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      cardRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const [chartData, setData] = useState<ChartData<"pie">>({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    if (!cryptos || cryptos.length === 0) return;

    const selectedCoins = [
      "bitcoin",
      "ethereum",
      "dogecoin",
      "shiba-inu",
      "ripple",
    ];
    const filtered = cryptos.filter((coin) => selectedCoins.includes(coin.id));

    const labels = filtered.map((coin) => coin.name);
    const prices = filtered.map((coin) => coin.ath_change_percentage);

    setData({
      labels,
      datasets: [
        {
          data: prices,
          backgroundColor: [
            "rgba(75, 192, 192, 0.6)",
            "rgba(255, 205, 86, 0.6)",
            "rgba(255, 99, 132, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(255, 205, 86, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [cryptos]);

  if (loading || !cryptos) return <p>Cargando datos...</p>;

  const pieOptions = {
    responsive: true,
    title: {
      display: true,
      text: "Distribución de precios actuales",
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
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
          <Pie data={chartData} options={pieOptions} />
        </div>
      )}
    </div>
  );
};

export default CryptoPieChart;
