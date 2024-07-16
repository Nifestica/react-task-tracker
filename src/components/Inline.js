import React from 'react'


const heading = {
    fontSize: '27px',
    color: 'blue',
}

function Inline() {
  return (
    <div>
      <h1 style={heading}> Inline Styling</h1>
      <h1 className="error"> Error</h1>
    </div>
  )
}

export default Inline
