import React from "react";
import quotes from "../../objects/quotes.json";

const RandomQuote = () => {
  const quoteKeys = Object.keys(quotes);
  const randomIndex = Math.floor(Math.random() * quoteKeys.length);
  const randomQuoteKey = quoteKeys[randomIndex];
  const randomQuoteSrc = quotes[randomQuoteKey];

  return (
    <div className="absolute inset-x-0 top-0 items-start max-w-xl mx-auto mt-2 ml-25  pt-96 lg:pt-72">
      <h3 className=" text-lg font-bold tracking-tight text-white max-w-2xl filter transition duration-300 drop-shadow-xl">{randomQuoteSrc}</h3>
    </div>
  );
};

export default RandomQuote;