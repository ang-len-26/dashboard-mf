import "../../styles/chart-card.css";
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
} from "../charts";

const CryptoDashboard = () => {
  return (
    <div className="chart-grid">
      <div className="col-span-8">
        <CryptoMixedChart />
      </div>
      <div className="col-span-4">
        <CryptoPieChart />
      </div>
      <div className="col-span-3">
        <CryptoRadarChart />
      </div>
      <div className="col-span-3">
        <CryptoPolarChart />
      </div>
      <div className="col-span-6">
        <CryptoScatterChart />
      </div>
      <div className="col-span-4">
        <CryptoDoughnutChart />
      </div>
      <div className="col-span-8">
        <CryptoBarChart />
      </div>
      {/* <div className="col-span-4">
        <CryptoLineChart />
      </div>
      <div className="col-span-4">
        <CryptoBubbleChart />
      </div> */}
    </div>
  );
};

export default CryptoDashboard;
