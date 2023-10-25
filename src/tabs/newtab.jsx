import React from 'react'
import { render } from 'react-dom'
import '../assets/style.css'

function Tab() {
  return (
    <div className='bg-red-500'>
      <h1 className='bg-green-500 text-3xl'>Hello Extension</h1>
      <p>This is a demo</p>
    </div>
  )
}

render(<Tab />, document.getElementById("react-targettwo"))