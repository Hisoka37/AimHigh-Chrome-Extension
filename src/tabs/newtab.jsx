import React from "react";
import { render } from "react-dom";
import "../assets/style.css";
import Weather from "../components/weather/Weather.jsx";

function Tab() {
  return (
    <div className="bg-red">
      <h1 className="bg-green-500 text-3xl">Hello Extension</h1>
      <Weather />
    </div>
  );
}

render(<Tab />, document.getElementById("root"));
