import Message from '../components/searchBar/message.jsx'
import React from "react";
import { render } from "react-dom";
import "../assets/style.css";
import Weather from "../components/weather/Weather.jsx";

function Tab() {
  return (
    <>
    <div className="relative">
      <Message />
      <Weather />
    </div>
    </>
  );
}

render(<Tab />, document.getElementById("root"));
