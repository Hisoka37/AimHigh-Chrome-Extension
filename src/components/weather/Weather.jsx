import React, { useState } from 'react'
import axios from 'axios'

const Weather = () => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=meknes&units=metric&appid=00a9c72ebbcd35cf880d52e885549011`;

  return (
    <div className='bg-gray-100 shadow-xl w-[500px] h-[500px]'>
        <h1>Hello Weather</h1>
        <input type="text" placeholder='Enter location...' />
    </div>
  )
}

export default Weather
