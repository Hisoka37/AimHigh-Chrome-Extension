import axios from "axios";
import { useState, useEffect } from "react";

import React from 'react'

const Quote = () => {

    const [quotes, setQuotes] = useState([])
    const [randomQuote,setRandomQuote] = useState()

    const getQuote = async() => {
        try{
            const response = await axios.get('https://api.adviceslip.com/advice')
            setQuote(response.data.slip)
            }catch (error){
                console.log(error)
            }
    }

    const generateRanddomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setRandomQuote(quotes[randomIndex])
        console.log(quotes[randomIndex])
    }

    useEffect(() => {
        getQuotes()
      },[])



  return (
    <div>Quote</div>
  )
}

export default Quote