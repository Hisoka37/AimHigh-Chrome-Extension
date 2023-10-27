import React from 'react'
import { render } from 'react-dom'
import '../assets/style.css'
import Message from '../components/message.jsx'

function Tab() {
  return (
    <div className='bg-red'>
      <h1 className='bg-green-500 text-3xl'>Hello Extension</h1>
      <p>This is a demo</p>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  )
}

render(<Tab />, document.getElementById("react-targettwo"))