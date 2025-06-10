import { createContext, useContext, useEffect, useState } from "react";

type CryptoMarketData = {
  id: string;
  name: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
  price_change_percentage_24h: number;
  ath_change_percentage: number;
};

type CryptoMarketContextType = {
  cryptos: CryptoMarketData[];
  loading: boolean;
};

const CryptoMarketContext = createContext<CryptoMarketContextType>({
  cryptos: [],
  loading: true,
});

const cryptosToFetch = [
  "bitcoin",
  "ethereum",
  "dogecoin",
  "shiba-inu",
  "ripple",
];

export const CryptoMarketProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cryptos, setCryptos] = useState<CryptoMarketData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const ids = cryptosToFetch.join(",");
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`
        );
        const data = await res.json();
        setCryptos(data);
      } catch (error) {
        console.error("Error al cargar datos del mercado:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <CryptoMarketContext.Provider value={{ cryptos, loading }}>
      {children}
    </CryptoMarketContext.Provider>
  );
};

export const useCryptoMarket = () => useContext(CryptoMarketContext);
