import { useEffect, useState } from "react";
import { fetchHistoricalData } from "../services/cryptoService";

export const useCompareData = (
  cryptoA: string,
  cryptoB: string,
  days: number
) => {
  const [data, setData] = useState<{
    labels: string[];
    pricesA: number[];
    pricesB: number[];
  } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [resA, resB] = await Promise.all([
          fetchHistoricalData(cryptoA, days),
          fetchHistoricalData(cryptoB, days),
        ]);

        setData({
          labels: resA.map((point: any) =>
            new Date(point[0]).toLocaleDateString()
          ),
          pricesA: resA.map((point: any) => point[1]),
          pricesB: resB.map((point: any) => point[1]),
        });
      } catch (err) {
        console.error("Error comparando datos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cryptoA, cryptoB, days]);

  return { data, loading };
};
