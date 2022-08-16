import React from "react";
import Lottie from "react-lottie";
const l01d = require("../lotties/l01d.json");
const l01n = require("../lotties/l01n.json");
const l02d = require("../lotties/l02d.json");
const l03d = require("../lotties/l03d.json");
const l04d = require("../lotties/l04d.json");
const l10d = require("../lotties/l10d.json");

const Forecast = ({ title, data }) => {
  const defaultOptions = (lottie: any) => {
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
    <div className="mb-6">
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium uppercase -mb-5">{title}</p>
      </div>
      <hr className="my-2 rounded-full border-1" />
      <div className="flex flex-row items-center justify-between text-white">
        {data.map((item: any) => {
          return (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center"
            >
              <p className="font-medium text-sm">{item.title}</p>
              <div className="w-12 my-1">
              {item.icon === "01d" ||
          item.icon === "01n" ||
          item.icon === "02d" ||
          item.icon === "03d" ||
          item.icon === "04d" ||
          item.icon === "04n" ||
          item.icon === "10d" ||
          item.icon === "10n" ||
          item.icon === "09n" ? (
            <Lottie
              options={defaultOptions(
                item.icon === "01d"
                  ? l01d
                  : item.icon === "01n"
                  ? l01n
                  : item.icon === "02d"
                  ? l02d
                  : item.icon === "03d"
                  ? l03d
                  : item.icon === "04d"
                  ? l04d
                  : item.icon === "04n"
                  ? l04d
                  : item.icon === "09n"
                  ? l10d
                  : item.icon === "10d"
                  ? l10d
                  : item.icon === "10n"
                  ? l10d
                  : null
              )}
              height={50}
              width={50}
            />
          ) : (
            <img
              src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt=""
            />
          )}
              </div>
              <p className="font-medium">{item.temp.toFixed()}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
