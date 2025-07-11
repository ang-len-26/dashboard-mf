import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Settings = {
  currency: string;
  language: string;
  setCurrency: (value: string) => void;
  setLanguage: (value: string) => void;
};

const SettingsContext = createContext<Settings | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState("usd");
  const [language, setLanguageState] = useState("es");

  // Persistencia local
  useEffect(() => {
    const storedCurrency = localStorage.getItem("currency");
    const storedLanguage = localStorage.getItem("language");

    if (storedCurrency) setCurrencyState(storedCurrency);
    if (storedLanguage) setLanguageState(storedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setCurrency = (value: string) => setCurrencyState(value);
  const setLanguage = (value: string) => setLanguageState(value);

  return (
    <SettingsContext.Provider
      value={{ currency, language, setCurrency, setLanguage }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings debe usarse dentro de un <SettingsProvider>");
  }
  return context;
};
