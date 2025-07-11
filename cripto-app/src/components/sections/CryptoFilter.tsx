import { useCryptoContext } from "../../context/CryptoContext";
import "../../components/sections/section-styles.css";

const CryptoFilter = ({ onClose }: { onClose: () => void }) => {
  const { crypto, setCrypto, days, setDays } = useCryptoContext();

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modalContent">
        <h3>Filtros</h3>

        <label>Criptomoneda:</label>
        <select value={crypto} onChange={(e) => setCrypto(e.target.value)}>
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="tether">Tether (USDT)</option>
          <option value="binancecoin">BNB</option>
          <option value="solana">Solana</option>
          <option value="ripple">XRP</option>
          <option value="usd-coin">USD Coin (USDC)</option>
          <option value="cardano">Cardano (ADA)</option>
        </select>

        <label>Días:</label>
        <input
          type="number"
          min={1}
          value={days}
          onChange={(e) => setDays(e.target.valueAsNumber)}
        />

        <div className="day-buttons">
          {[1, 7, 14, 30, 90].map((d) => (
            <button
              key={d}
              onClick={() => setDays(d)}
              className={`day-btn ${d === days ? "active" : ""}`}
            >
              {d} días
            </button>
          ))}
        </div>

        <div className="modal-actions">
          <button
            onClick={onClose}
            style={{ marginTop: "1rem" }}
            className="btn-apply"
          >
            Aplicar filtros
          </button>

          <button
            onClick={onClose}
            style={{ marginTop: "1rem" }}
            className="btn-close"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoFilter;
