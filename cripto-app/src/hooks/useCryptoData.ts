import { useEffect, useState } from 'react';
import { fetchCryptoChartData } from '../services/cryptoService';
import { ChartData } from 'chart.js';
import { CryptoChartData } from '../types';

export const useCryptoData = (range: string) => {
  const [data, setData] = useState<CryptoChartData>({});

  useEffect(() => {
    const load = async () => {
      const btc = await fetchCryptoChartData('bitcoin', range);
      const eth = await fetchCryptoChartData('ethereum', range);
      setData({
        bitcoin: btc,
        ethereum: eth
      });
    };
    load();
  }, [range]);

  return data;
};
