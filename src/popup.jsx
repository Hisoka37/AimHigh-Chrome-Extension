import React from 'react'
import { render } from 'react-dom'

function Popup() {
  return (
    <div>
      <h1>Hello Extension</h1>
      <p>This is a demo</p>
    </div>
  )
}

render(<Popup />, document.getElementById("react-target"))