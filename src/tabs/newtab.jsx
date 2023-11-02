import Message from '../components/searchBar/message.jsx'
import React from "react";
import { render } from "react-dom";
import "../assets/style.css";
import Weather from "../components/weather/Weather.jsx";
import TodoApp from '../components/todoList/todoList.jsx';

function Tab() {
  return (
    <>
    <div className="relative">
      <Message />
      <Weather />
      <TodoApp />
    </div>
    </>
  );
}

render(<Tab />, document.getElementById("root"));
