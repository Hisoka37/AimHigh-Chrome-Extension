import React, { useState } from "react";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const searchLocation = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=00a9c72ebbcd35cf880d52e885549011`;
    axios.get(url).then((res) => {
      setData(res.data);
    });
    setLocation('');
  };

  return (
    <div className="bg-gray-100 shadow-xl w-[500px] h-[500px] absolute top-0 right-0">
      <div className="flex items-center">
        <input
          onChange={(event) => setLocation(event.target.value)}
          type="text"
          value={location}
          placeholder="Enter location..."
          className="m-8 w-[250px] h-12 rounded-lg outline-blue-500 pl-4 text-gray-600 text-lg"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              searchLocation();
            }
          }}
        />
        <button
          type="submit"
          onClick={searchLocation}
          className="w-[100px] h-[80px]"
        >
          <IoIosSearch />
        </button>
      </div>

      <div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${
              data.weather && data.weather[0].icon
            }.png`}
            alt="Weather"
          />
          <p>{data.weather && data.weather[0].description}</p>
          <h1>{data.main && data.main.temp} °C</h1>
        </div>
        <h3>{data.name}</h3>
        <h4>{data.main && data.main.humidity}% Humidity</h4>
        <h4>{data.wind && data.wind.speed} km/h Wind</h4>
      </div>
    </div>
  );
};

export default Weather;
