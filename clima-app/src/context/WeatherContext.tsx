import { createContext, useContext, useEffect, useState } from "react";

export type WeatherType =
  | "weather"
  | "temperature"
  | "humidity"
  | "visibility"
  | "precipitation"
  | "wind";

interface WeatherContextProps {
  currentCard: number;
  nextCard: () => void;
  prevCard: () => void;
  isExpanded: boolean;
  toggleExpand: () => void;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(
  undefined
);

const cardTypes: WeatherType[] = [
  "weather",
  "temperature",
  "humidity",
  "visibility",
  "precipitation",
  "wind",
];

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextCard = () =>
    setCurrentIndex((prev) => (prev + 1) % cardTypes.length);
  const prevCard = () =>
    setCurrentIndex((prev) => (prev - 1 + cardTypes.length) % cardTypes.length);

  useEffect(() => {
    const interval = setInterval(nextCard, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        currentCard: currentIndex,
        nextCard,
        prevCard,
        isExpanded,
        toggleExpand: () => setIsExpanded((prev) => !prev),
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context)
    throw new Error("WeatherContext must be used within WeatherProvider");
  return context;
};
