import React, { useState } from 'react';

function Message() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search Google..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button target="_self" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Message;