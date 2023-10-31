import React from "react";
import { render } from "react-dom";
import "../assets/style.css";
import Weather from "../components/weather/Weather.jsx";
import RandomWallpaper from "../components/wallpaper/RandomWallpaper.jsx";

function Tab() {
  return (
    <div className="relative">
      <RandomWallpaper />
      <Weather />
    </div>
  );
}

render(<Tab />, document.getElementById("root"));
