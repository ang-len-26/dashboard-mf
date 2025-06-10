import { useState } from "react";
import { useCryptoContext } from "../context/CryptoContext";

const CryptoFilter = () => {
  const { crypto, setCrypto, days, setDays } = useCryptoContext();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="filterContainer">
      <button onClick={() => setModalOpen(!modalOpen)}>Abrir Filtros</button>

      {modalOpen && (
        <div className="modal">
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
                  style={{
                    backgroundColor: d === days ? "#4bc0c0" : "#eee",
                    color: d === days ? "#fff" : "#333",
                  }}
                >
                  {d} días
                </button>
              ))}
            </div>

            <button
              onClick={() => setModalOpen(false)}
              style={{ marginTop: "1rem" }}
            >
              Aplicar filtros
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoFilter;
