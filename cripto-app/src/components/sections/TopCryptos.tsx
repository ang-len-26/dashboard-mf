import { useState } from "react";
import useTopCryptos from "../../hooks/useTopCryptos";
import "../../components/sections/section-styles.css";

const TopCryptos = () => {
  const [sortType, setSortType] = useState<"market_cap" | "price_change">(
    "market_cap"
  );
  const topCryptos = useTopCryptos(sortType, 5);

  return (
    <div className="section-container">
      <h2>Top Criptomonedas</h2>

      <div className="top-controls">
        <label>Ordenar por:</label>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value as any)}
        >
          <option value="market_cap">Capitalización</option>
          <option value="price_change">Cambio 24h</option>
        </select>
      </div>

      <ul className="crypto-list">
        {topCryptos.map((coin) => (
          <li key={coin.id} className="crypto-item">
            <img src={coin.image} alt={coin.name} className="crypto-icon" />
            <div className="crypto-info">
              <strong>{coin.name}</strong>
              <span>Precio: ${coin.current_price.toLocaleString()}</span>
              <span
                className={
                  coin.price_change_percentage_24h >= 0
                    ? "positive"
                    : "negative"
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
              <span>Cap: ${coin.market_cap.toLocaleString()}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCryptos;
