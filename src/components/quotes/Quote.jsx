import React from "react";
import quotes from "../../objects/quotes.json";

const RandomQuote = () => {
  const quoteKeys = Object.keys(quotes);
  const randomIndex = Math.floor(Math.random() * quoteKeys.length);
  const randomQuoteKey = quoteKeys[randomIndex];
  const randomQuoteSrc = quotes[randomQuoteKey];

  return (
    <div className="flex gap-1 absolute inset-x-0 top-0 items-start max-w-xl mx-auto mt-2 ml-25  pt-96 lg:pt-72">
        <svg
          className="w-6 h-6 text-gray-100 pb-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <h3 className=" text-lg italic font-bold tracking-tight text-white max-w-2xl">
          {randomQuoteSrc}
        </h3>
    </div>
  );
};

export default RandomQuote;