import React from "react";


function NameListt() {

    const names = ['Bruce', 'Clark', 'Diana', 'Bruce' ]
    const nameListt = names.map((name, index) => <h2 key={index}> {name}  {index} </h2>)
  return (
<div> {nameListt}    </div>
  )
}

export default NameListt
