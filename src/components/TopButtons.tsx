import React from "react";

const TopButtons = () => {
  const cities = [
    {
      id: 1,
      title: "Ankara",
    },
    {
      id: 2,
      title: "London",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "New York",
    },
    {
      id: 5,
      title: "Istanbul",
    },
  ];
  return <div className="outline-double rounded-xl outline-white flex items-center justify-around my-6">
    {cities.map((city) => (
        <button key={city.id} className="cursor-pointer transition ease-out hover:scale-110 text-white text-lg font-medium">{city.title}</button>
    ))}
  </div>
};

export default TopButtons;
