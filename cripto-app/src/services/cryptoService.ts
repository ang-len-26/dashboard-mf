import { ChartData } from 'chart.js';
import type { CryptoData } from "../types";

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoChartData = async (
  coinId: string,
  range: string
): Promise<ChartData<'line'>> => {
  const daysMap: Record<string, string> = {
    '1D': '1',
    '1W': '7',
    '1M': '30',
    '3M': '90',
    '1Y': '365'
  };

  const res = await fetch(
    `${BASE_URL}/coins/${coinId}/market_chart?vs_currency=usd&days=${daysMap[range]}`
  );
  const json = await res.json();

  const labels = json.prices.map((entry: number[]) =>
    new Date(entry[0]).toLocaleDateString()
  );
  const data = json.prices.map((entry: number[]) => entry[1]);

  return {
    labels,
    datasets: [
      {
        label: `${coinId.toUpperCase()} Price`,
        data,
        borderColor: coinId === 'bitcoin' ? '#f7931a' : '#3c3c3d',
        fill: false
      }
    ]
  };
};

export const getCryptoChartData = async (
  cryptoId: string,
  days: number
): Promise<CryptoData> => {
  const res = await fetch(
    `${BASE_URL}/coins/${cryptoId}/market_chart?vs_currency=usd&days=${days}`
  );
  const result = await res.json();
  return {
    prices: result.prices,
    market_caps: result.market_caps,
    total_volumes: result.total_volumes,
  };
};
