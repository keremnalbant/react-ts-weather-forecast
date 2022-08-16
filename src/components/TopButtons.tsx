import React from "react";

const TopButtons = ({ handleButtonClick }) => {
  const cities = [
    {
      id: 1,
      title: "Ankara",
    },
    {
      id: 2,
      title: "Istanbul",
    },
    {
      id: 3,
      title: "New York",
    },
    {
      id: 4,
      title: "London",
    },
    {
      id: 5,
      title: "Tokyo",
    }
  ];
  return (
    <div className="rounded-xl outline-white flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          onClick={() => handleButtonClick({ q: city.title })}
          key={city.id}
          className="cursor-pointer transition ease-out hover:scale-110 text-white text-lg font-medium"
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
