import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { formatToLocalTime } from "../services/WeatherService";
import Lottie from "react-lottie";
const l01d = require("../lotties/l01d.json");
const l01n = require("../lotties/l01n.json");
const l02d = require("../lotties/l02d.json");
const l03d = require("../lotties/l03d.json");
const l04d = require("../lotties/l04d.json");
const l10d = require("../lotties/l10d.json");

const TemperatureAndDetails = ({ data }) => {
  const defaultOptions = (lottie) => {
    return {
      loop: true,
      autoplay: true,
      animationData: lottie,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  };

  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-white">
        <p>{data.details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <div className="w-28">
          {data.icon === "01d" ||
          data.icon === "01n" ||
          data.icon === "02d" ||
          data.icon === "03d" ||
          data.icon === "04d" ||
          data.icon === "04n" ||
          data.icon === "10d" ||
          data.icon === "10n" ||
          data.icon === "09n" ? (
            <Lottie
              options={defaultOptions(
                data.icon === "01d"
                  ? l01d
                  : data.icon === "01n"
                  ? l01n
                  : data.icon === "02d"
                  ? l02d
                  : data.icon === "03d"
                  ? l03d
                  : data.icon === "04d"
                  ? l04d
                  : data.icon === "04n"
                  ? l04d
                  : data.icon === "09n"
                  ? l10d
                  : data.icon === "10d"
                  ? l10d
                  : data.icon === "10n"
                  ? l10d
                  : null
              )}
              height={80}
              width={80}
            />
          ) : (
            <img
              src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
              alt=""
            />
          )}
        </div>
        <p className="ml-4 text-4xl font-semibold">{data.temp.toFixed()}°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <Unicons.UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">
              {data.feels_like.toFixed()}°
            </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <Unicons.UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{data.humidity.toFixed()}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <Unicons.UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">
              {data.speed.toFixed(1)} km/h
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-1 text-white text-sm py-3">
        <Unicons.UilSun className="mr-1" />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(data.sunrise, data.timezone, "hh:mm a")}
          </span>
        </p>

        <p className="font-light">|</p>

        <Unicons.UilSunset className="mr-1" />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(data.sunset, data.timezone, "hh:mm a")}
          </span>
        </p>

        <p className="font-light">|</p>

        <Unicons.UilArrowUp className="mr-1" />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{data.temp_max.toFixed()}°</span>
        </p>

        <p className="font-light">|</p>

        <Unicons.UilArrowDown className="mr-1" />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{data.temp_min.toFixed()}°</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
