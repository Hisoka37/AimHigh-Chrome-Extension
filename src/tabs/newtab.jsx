import React from "react";
import { render } from "react-dom";
import "../assets/style.css";
import Weather from "../components/weather/Weather.jsx";

function Tab() {
  return (
    <div className="relative">
      <Weather />
    </div>
  );
}

render(<Tab />, document.getElementById("root"));
