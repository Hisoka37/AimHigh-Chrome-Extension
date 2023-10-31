import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

function Message() {
  const [query, setQuery] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("google");

  const handleSearch = () => {
    if (query) {
      let searchUrl;
      switch (selectedEngine) {
        case "google":
          searchUrl = `https://www.google.com/search?q=${query}`;
          break;
        case "bing":
          searchUrl = `https://www.bing.com/search?q=${query}`;
          break;
        case "yahoo":
          searchUrl = `https://search.yahoo.com/search?p=${query}`;
          break;

        default:
          searchUrl = "";
      }

      window.location.href = searchUrl;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen p-0 ">
      <div className="flex gap-3 w-1/4">
        <BsSearch className="text-2xl" /> {/* Increase icon size */}
        <input
          className="w-3/4 h-10 px-2 bg-gray-300 bg-opacity-40 text-white rounded-lg outline-none focus:bg-opacity-100 transition duration-300 hover:bg-opacity-100"
          type="text"
          placeholder="Search Google..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          value={selectedEngine}
          onChange={(e) => setSelectedEngine(e.target.value)}
          target="_self"
          onClick={handleSearch}
          className="h-10 px-2 bg-gray-300 bg-opacity-40 text-white rounded-lg outline-none focus:bg-opacity-100 transition duration-300"
        >
          <option value="google">Google</option>
          <option value="bing">Bing</option>
          <option value="yahoo">Yahoo</option>
        </select>
        <button target="_self" onClick={handleSearch}>
          <FcGoogle className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Message;
