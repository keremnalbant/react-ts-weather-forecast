import { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Inputs = ({
  units,
  handleUnitsChange,
  handleInput,
  handleLocationButton,
}) => {
  const [input, setInput] = useState<string>("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleLocationButton);
    } else {
      toast.error("Your browser does not support geolocation");
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search for a city"
          className="opacity-50 rounded-md text-xl font-light p-2 w-8/12 shadow-xl focus:outline-none capitalize placeholder:lowercase"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleInput(input);
          }}
        />

        <Unicons.UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-150"
          onClick={() => {
            handleInput(input);
          }}
        />

        <Unicons.UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-150"
          onClick={() => {
            getLocation();
          }}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className={`transition ease-out hover:scale-125 text-2xl text-white font-${
            units === "metric" ? "semibold" : "extralight"
          }`}
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className={`transition ease-out hover:scale-125 text-2xl text-white font-${
            units === "imperial" ? "semibold" : "extralight"
          }`}
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
