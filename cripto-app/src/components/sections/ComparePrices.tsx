import { useState } from "react";
import { useCompareData } from "../../hooks/useCompareData";
import { Line } from "react-chartjs-2";
import "../../components/sections/section-styles.css";

const ComparePrices = () => {
  const [cryptoA, setCryptoA] = useState("bitcoin");
  const [cryptoB, setCryptoB] = useState("ethereum");
  const [days, setDays] = useState(7);

  const { data, loading } = useCompareData(cryptoA, cryptoB, days);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
    },
  };

  const chartData = {
    labels: data?.labels || [],
    datasets: [
      {
        label: cryptoA,
        data: data?.pricesA || [],
        borderColor: "#4bc0c0",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: cryptoB,
        data: data?.pricesB || [],
        borderColor: "#ff6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <div className="section-container">
      <h2>Comparar Precios</h2>

      <div className="compare-controls">
        <select value={cryptoA} onChange={(e) => setCryptoA(e.target.value)}>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="solana">Solana</option>
          <option value="cardano">Cardano</option>
          <option value="ripple">XRP</option>
        </select>

        <select value={cryptoB} onChange={(e) => setCryptoB(e.target.value)}>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="solana">Solana</option>
          <option value="cardano">Cardano</option>
          <option value="ripple">XRP</option>
        </select>

        <select value={days} onChange={(e) => setDays(Number(e.target.value))}>
          <option value={1}>1 día</option>
          <option value={7}>7 días</option>
          <option value={30}>30 días</option>
        </select>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <Line data={chartData} options={options} />
      )}
    </div>
  );
};

export default ComparePrices;
