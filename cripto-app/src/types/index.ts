import { ChartData } from 'chart.js';

export interface CryptoChartData {
  bitcoin?: ChartData<'line'>;
  ethereum?: ChartData<'line'>;
}

export interface CryptoData {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}
