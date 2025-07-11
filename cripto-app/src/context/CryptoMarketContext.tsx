import { createContext, useContext, useEffect, useState } from "react";
import { CryptoMarket } from "../types";

type CryptoMarketContextType = {
  cryptos: CryptoMarket[];
  loading: boolean;
};

export const CryptoMarketContext = createContext<CryptoMarketContextType>({
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
  const [cryptos, setCryptos] = useState<CryptoMarket[]>([]);
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

export const useCryptoMarket = () => {
  const context = useContext(CryptoMarketContext);
  if (!context) {
    throw new Error(
      "useCryptoMarket debe utilizarse dentro de un CryptoMarketProvider"
    );
  }
  return context;
};
