import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'

function Message() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  }

  return (
    <div className='flex items-center justify-center h-screen p-0 '>
      <div className='flex gap-3 w-1/4'>
        <BsSearch className="text-2xl" /> {/* Increase icon size */}
        <input
          className='w-3/4 h-10 px-2 bg-gray-300 bg-opacity-40 text-white rounded-lg outline-none focus:bg-opacity-100 transition duration-300 hover:bg-opacity-100'
          type="text"
          placeholder="Search Google..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button target="_self" onClick={handleSearch}>
          <FcGoogle className="text-xl" /> {/* Increase icon size */}
        </button>
      </div>
    </div>
  );
  
}

export default Message;