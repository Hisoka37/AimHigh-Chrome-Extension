import axios from "axios";
import { useState, useEffect } from "react";
import React from 'react'

const Quote = () => {
    
    const [quotes, setQuotes] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState(null)

    const fetchQuote = async () => {
        // Set loading state to true
        setIsLoading(true);
      
        try {
          const category = 'success';
          const API_KEY = 'Cc7Hs/f+QcMWIBGsIrrgDw==6z957rQCg0Yhq4OT';
          const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
          const response = await fetch(url, {
            headers: {
              'Content-Type': 'application/json',
              'X-Api-Key': API_KEY,
            },
          });
      
          if (!response.ok) {
            throw new Error('Response was not ok 🤒');
          }
      
          const data = await response.json();
          console.log(data)
          setQuotes(data);
        } catch (error) {
          console.log('Error', error);
          setError(error);
        } finally {
          // Set loading state to false
          setIsLoading(false);
        }
      };
    
    useEffect(() => {
        fetchQuote();
      }, []);
    
      if (isLoading) {
        return <div>Loading quotes...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }


  return (
    <div className="absolute inset-x-0 top-0 items-start  mx-auto ml-25 pt-96 lg:pt-6">
    {quotes.map((quote) => (
      <div key={quote.id}>
         <h1 className=" text-center  text-lg tracking-tight text-white sm:text-5xl  filter transition duration-300 drop-shadow-xl">
             <span className="block">{quote.quote}</span>
        </h1>
        <h3 className="text-center text-lg text-white sm:text-5xl filter transition duration-300 drop-shadow-xl">{quote.author}</h3>
    </div>
    ))}
  </div>
  )
}

export default Quote