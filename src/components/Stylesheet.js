import React from 'react'
import './Mystyle.css'



function Stylesheet(props) {
    let className = props.primary ? 'primary' : 'secondary'
  return (
    <div>
      <p className={`${className} font-xl`}> Stylesheet</p>
    </div>
  )
}

export default Stylesheet
