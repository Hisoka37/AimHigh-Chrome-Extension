import React from "react";
import { render } from "react-dom";
import "../assets/style.css";
import Weather from "../components/weather/Weather.jsx";
import RandomWallpaper from "../components/wallpaper/RandomWallpaper.jsx";
import Geolocation from "../components/geolocation/Geolocation.jsx";
import Message from '../components/searchBar/message.jsx';
import TodoApp from '../components/todoList/todoList.jsx'
import RandomQuote from "../components/quotes/Quote.jsx";



function Tab() {
  return (
    <>
    <div className="relative">
      <RandomWallpaper />
      <Message />
      <Weather />
      <TodoApp />
      <RandomQuote/>   
      <Geolocation />
    </div>
    </>
  );
}

render(<Tab />, document.getElementById("root"));
