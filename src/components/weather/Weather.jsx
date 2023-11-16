import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosSearch } from "react-icons/io";
import Clear from "../../assets/Weather Assets/clear.png";
import Cloud from "../../assets/Weather Assets/cloud.png";
import Drizzle from "../../assets/Weather Assets/drizzle.png";
import Rain from "../../assets/Weather Assets/rain.png";
import Snow from "../../assets/Weather Assets/snow.png";
import Humidity from "../../assets/Weather Assets/humidity.png";
import Wind from "../../assets/Weather Assets/wind.png";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  useEffect(() => {
    const savedWeatherData = JSON.parse(localStorage.getItem("weatherData"));
    if (savedWeatherData) {
      setData(savedWeatherData);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      });
    }
  }, []);

  const fetchWeatherData = (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=00a9c72ebbcd35cf880d52e885549011`;
    axios.get(url).then((res) => {
      setData(res.data);
      localStorage.setItem("weatherData", JSON.stringify(res.data));
    });
  };

  const searchLocation = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=00a9c72ebbcd35cf880d52e885549011`;
    axios.get(url).then((res) => {
      setData(res.data);
      localStorage.setItem("weatherData", JSON.stringify(res.data));
    });
    setLocation("");
  };

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
      case "01n":
        return Clear;
      case "02d":
      case "02n":
        return Cloud;
      case "03d":
      case "03n":
        return Drizzle;
      case "04d":
      case "04n":
        return Drizzle;
      case "09d":
      case "09n":
        return Rain;
      case "10d":
      case "10n":
        return Rain;
      case "13d":
      case "13n":
        return Snow;
      default:
        return Clear;
    }
  };

  return (
    <div className=" flex flex-col items-center bg-gray-900 bg-opacity-70 w-[350px] h-[280px] absolute top-0 right-0 rounded-sm">
      <div className="flex">
        <input
          onChange={(event) => setLocation(event.target.value)}
          type="text"
          value={location}
          placeholder="Enter location..."
          className="m-8 w-[250px] h-10 rounded-md outline-gray-300 pl-4 bg-gray-100 bg-opacity-70 text-gray-600 text-lg"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              searchLocation();
            }
          }}
        />
        <button
          type="submit"
          onClick={searchLocation}
          className="text-xl text-gray-200"
        >
          <IoIosSearch />
        </button>
      </div>

      <div>
        <div className="flex gap-4">
          <img
            src={getWeatherIcon(data.weather && data.weather[0].icon)}
            alt="Weather"
            className="w-[80px] h-[80px]"
          />
          <div>
            <h1 className="text-6xl text-gray-200">
              {data.main && data.main.temp.toFixed()} °C
            </h1>
            <h3 className="text-lg text-gray-300 font-bold">{data.name}</h3>
          </div>
        </div>

        <div className="flex item justify-center gap-8 mt-6 mb-2">
          <div className="flex gap-2">
            <img src={Humidity} alt="Humidity" className="w-[25px] h-[25px]" />
            <h4 className="flex flex-col items-center text-sm text-gray-200">
              {data.main && data.main.humidity.toFixed()}%<span>Humidity</span>
            </h4>
          </div>
          <div className="flex gap-2">
            <img src={Wind} alt="Wind" className="w-[25px] h-[25px]" />
            <h4 className="flex flex-col items-center text-sm text-gray-200">
              {data.wind && data.wind.speed.toFixed()}km/h
              <span> Wind</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
