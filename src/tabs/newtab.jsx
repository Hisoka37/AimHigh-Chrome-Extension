import React from "react";
import { render } from "react-dom";
import "../assets/style.css";
import Weather from "../components/weather/Weather.jsx";
import RandomWallpaper from "../components/wallpaper/RandomWallpaper.jsx";
import Geolocation from "../components/geolocation/Geolocation.jsx";

function Tab() {
  return (
    <div className="relative">
      <RandomWallpaper />
      <Weather />
      <Geolocation />
    </div>
  );
}

render(<Tab />, document.getElementById("root"));
