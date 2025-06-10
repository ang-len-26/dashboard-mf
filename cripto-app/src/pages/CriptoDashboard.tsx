import "../styles/chart-card.css";
import {
  CryptoBarChart,
  CryptoPieChart,
  CryptoLineChart,
  CryptoDoughnutChart,
  CryptoRadarChart,
  CryptoMixedChart,
  CryptoScatterChart,
  CryptoBubbleChart,
  CryptoPolarChart,
} from "../components/charts";

const CryptoDashboard = () => {
  return (
    <div className="chart-grid">
      <CryptoScatterChart />
      <CryptoMixedChart />
      <CryptoLineChart />
      <CryptoBubbleChart />
      <CryptoRadarChart />
      <CryptoPieChart />
      <CryptoPolarChart />
      <CryptoDoughnutChart />
      <CryptoBarChart />
    </div>
  );
};

export default CryptoDashboard;
