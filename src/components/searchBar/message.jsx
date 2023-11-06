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
          <BiLogoBing className="mr-2 text-xl text-red-500" />
        </div>
      ),
    },
    {
      value: "yahoo",
      label: (
        <div>
          <BiLogoYahoo className="mr-2 text-xl text-yellow-500" />
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

  const customStyles = {
    control: (provided) => ({
      ...provided,
      background: 'transparent',
      display: 'flex',
      flexWrap: 'nowrap', 
      borderColor: 'hsl(0deg 78.56% 55.56%);',
      width: '7em'
    }),
    menu: (provided) => ({
      ...provided,
      background: 'transparent',
      width: '4em'
    }),
  };
  return (
    <div className="  flex items-center absolute top-56 left-20  justify-center  ">
      <div className="flex gap-4"> {/* Increase icon size */}
        <input
          className=" h-9.5 text-gray-60 bg-gray-300 bg-opacity-40  rounded-lg outline-none focus:bg-opacity-100 transition duration-300 hover:bg-opacity-100"
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
            styles={customStyles}
            isSearchable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Message;
