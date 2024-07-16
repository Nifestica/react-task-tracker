import React from 'react'

function MemoComp({name}) {
    console.log(`Rendering Memo Components `)
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
