import { useWeather } from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/UI/Loader";

const App = () => {
  const { data, loading, error } = useWeather();

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>No hay datos</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <WeatherCard data={data} />
    </div>
  );
};

export default App;
