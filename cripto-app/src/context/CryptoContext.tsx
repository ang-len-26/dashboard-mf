import { createContext, useContext, useState, ReactNode } from "react";

// Define el tipo de datos para el contexto
interface CryptoContextType {
  crypto: string;
  setCrypto: (crypto: string) => void;
  days: number;
  setDays: (days: number) => void;
}

const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

export const CryptoProvider = ({ children }: { children: ReactNode }) => {
  const [crypto, setCrypto] = useState("bitcoin");
  const [days, setDays] = useState(30);

  return (
    <CryptoContext.Provider value={{ crypto, setCrypto, days, setDays }}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCryptoContext = () => {
  const context = useContext(CryptoContext);
  if (!context) {
    throw new Error(
      "useCryptoContext debe utilizarse dentro de un CryptoProvider"
    );
  }
  return context;
};
