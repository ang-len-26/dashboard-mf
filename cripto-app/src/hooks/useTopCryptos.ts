import { useContext, useMemo } from "react";
import { CryptoMarketContext } from "../context/CryptoMarketContext";
import { CryptoMarket } from "../types";

type SortType = "market_cap" | "price_change";
type ReturnType = CryptoMarket[];

const useTopCryptos = (type: SortType = "market_cap", topN = 5): ReturnType => {
  const { cryptos } = useContext(CryptoMarketContext);

  const sortedData = useMemo(() => {
    if (!cryptos || cryptos.length === 0) return [];

    const data = [...cryptos];
    return data
      .sort((a, b) => {
        if (type === "market_cap") {
          return b.market_cap - a.market_cap;
        } else {
          return (
            b.price_change_percentage_24h - a.price_change_percentage_24h
          );
        }
      })
      .slice(0, topN);
  }, [cryptos, type, topN]);

  return sortedData;
};

export default useTopCryptos;
