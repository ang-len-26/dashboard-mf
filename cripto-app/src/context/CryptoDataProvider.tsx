import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useCryptoContext } from "./CryptoContext";
import { getCryptoChartData } from "../services/cryptoService";
import type { CryptoData } from "../types";

interface CryptoDataContextType {
  data: CryptoData | null;
  loading: boolean;
}

const CryptoDataContext = createContext<CryptoDataContextType>({
  data: null,
  loading: true,
});

export const useCryptoData = () => useContext(CryptoDataContext);

export const CryptoDataProvider = ({ children }: { children: ReactNode }) => {
  const { crypto, days } = useCryptoContext();
  const [data, setData] = useState<CryptoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getCryptoChartData(crypto, days);
        setData(result);
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [crypto, days]);

  return (
    <CryptoDataContext.Provider value={{ data, loading }}>
      {children}
    </CryptoDataContext.Provider>
  );
};
