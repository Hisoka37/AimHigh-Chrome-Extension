import React from 'react'
import { render } from 'react-dom'
import '../assets/style.css'
import Message from '../components/message.jsx'

function Tab() {
  return (
    <div>
      <Message />
    </div>
  )
}

render(<Tab />, document.getElementById("react-targettwo"))