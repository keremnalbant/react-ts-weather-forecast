import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import Loading from "./components/Loading";
import getFormattedWeatherData from "./services/WeatherService";
import { WeatherData } from "./models/WeatherData";

type IQuery = {
  q: string;
};

type ICoord = {
  q?: string;
  lat?: number;
  lon?: number;
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [query, setQuery] = useState<IQuery | ICoord>({});
  const [units, setUnits] = useState<string>("metric");
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const message = query.q ? query.q : "current location.";
    const fetchWeather = async () => {
      setLoading(true);
      await getFormattedWeatherData({ ...query, units })
        .then((data) => {
          setWeatherData(data);
          setLoading(false);
          toast.info(
            "Fetched weather for " +
              message.charAt(0).toUpperCase() +
              message.slice(1)
          );
        })
        .catch((error) => {
          setLoading(false);
        });
    };

    fetchWeather();
  }, [query, units]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setQuery({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      toast.error("Your browser does not support geolocation");
    }
  }, []);

  const handleButtonClick = (query) => {
    setQuery(query);
  };

  const handleInput = (value) => {
    setQuery({ q: value });
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const fetchWithPosition = async (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    setQuery({ lat, lon });
  };

  const formatBackground = () => {
    if (!weatherData) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 25 : 70;
    if (weatherData.temp <= threshold) return "from-orange-600 to-blue-900";

    return "from-orange-600 to-yellow-900 ";
  };

  return (
    <div className="pt-10 h-screen">
      <div
        className={`rounded-3xl mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br ${formatBackground()} h-fit shadow-2xl shadow-black`}
      >
        <TopButtons handleButtonClick={handleButtonClick} />
        <Inputs
          units={units}
          handleUnitsChange={handleUnitsChange}
          handleInput={handleInput}
          handleLocationButton={fetchWithPosition}
        />
        {!isLoading && weatherData ? (
          <div>
            <TimeAndLocation data={weatherData!} />
            <TemperatureAndDetails data={weatherData!} />
            <Forecast data={weatherData!.hourly} title="hourly forecast" />
            <Forecast data={weatherData!.daily} title="daily forecast" />
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
