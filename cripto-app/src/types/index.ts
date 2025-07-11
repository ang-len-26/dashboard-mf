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

export interface CryptoMarket {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
  price_change_percentage_24h: number;
  ath_change_percentage: number;
}