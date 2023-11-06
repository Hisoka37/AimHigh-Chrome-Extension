import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BiLogoBing, BiLogoYahoo } from "react-icons/bi";
import Select from "react-select";
// import 'react-select/dist/react-select.css';

function Message() {
  const [query, setQuery] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("google");

  const options = [
    {
      value: "google",
      label: (
        <div>
          <FcGoogle className="mr-2 text-xl" />
        </div>
      ),
    },
    {
      value: "bing",
      label: (
        <div>
          <BiLogoBing className="mr-2 text-xl" />
        </div>
      ),
    },
    {
      value: "yahoo",
      label: (
        <div>
          <BiLogoYahoo className="mr-2 text-xl" />
        </div>
      ),
    },
  ];

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

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };

  return (
    <div className=" bg-gray-900 bg-opacity-70 flex items-center absolute  buttom-0 left-0  justify-center h-screen p-0 ">
      <div className="flex gap-3 w-1/4">
        <BsSearch className="text-2xl" /> {/* Increase icon size */}
        <input
          className="w-[250px]  h-10 pl-55 text-gray-600 bg-gray-300 bg-opacity-40  rounded-lg outline-none focus:bg-opacity-100 transition duration-300 hover:bg-opacity-100"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <div className="relative inline-flex">
          <Select
            value={options.find((option) => option.value === selectedEngine)}
            onChange={(selectedOption) =>
              setSelectedEngine(selectedOption.value)
            }
            options={options}
          />
        </div>
      </div>
    </div>
  );
}

export default Message;
