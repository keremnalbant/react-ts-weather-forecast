import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./services/WeatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "london" });
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="bg-slate-800 pt-10 h-screen">
      <div className="rounded-3xl mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br from-cyan-600 to-blue-900 h-fit shadow-2xl shadow-black">
        <TopButtons />
        <Inputs />

        <TimeAndLocation />
        <TemperatureAndDetails />
        <Forecast title="hourly forecast" />
        <Forecast title="daily forecast" />
      </div>
    </div>
  );
}

export default App;
