import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    const savedWeatherData = JSON.parse(localStorage.getItem("weatherData"));
    if (savedWeatherData) {
      setData(savedWeatherData);
    }
  }, []);

  const searchLocation = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=00a9c72ebbcd35cf880d52e885549011`;
    axios.get(url).then((res) => {
      setData(res.data);

      localStorage.setItem("weatherData", JSON.stringify(res.data));
    });
    setLocation("");
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 bg-opacity-70 w-[400px] h-[400px] absolute top-0 right-0 rounded-sm">
      <div className="flex items-center">
        <input
          onChange={(event) => setLocation(event.target.value)}
          type="text"
          value={location}
          placeholder="Enter location..."
          className="m-8 w-[250px] h-12 rounded-lg outline-blue-300 pl-4 bg-slate-100 text-gray-600 text-lg"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              searchLocation();
            }
          }}
        />
        <button
          type="submit"
          onClick={searchLocation}
          className="text-2xl text-gray-200"
        >
          <IoIosSearch />
        </button>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <img
            src={`https://openweathermap.org/img/wn/${
              data.weather && data.weather[0].icon
            }.png`}
            alt="Weather"
            className="w-[100px] h-[100px]"
          />
          <p className="text-lg text-gray-200">
            {data.weather && data.weather[0].description}
          </p>
        </div>
        <h1 className="text-5xl text-gray-200">
          {data.main && data.main.temp.toFixed()} °C
        </h1>
        <h3 className="text-lg text-gray-300 font-bold">{data.name}</h3>
        <div className="flex item justify-center gap-8 mt-10">
          <h4 className="flex flex-col items-center text-lg text-gray-200">
            {data.main && data.main.humidity.toFixed()}%<span>Humidity</span>
          </h4>
          <h4 className="flex flex-col items-center text-lg text-gray-200">
            {data.wind && data.wind.speed.toFixed()}km/h
            <span> Wind</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Weather;
