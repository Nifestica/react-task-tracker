import React from 'react'

function Hero({heroValidaty}) {
    if(heroValidaty === 'Joker'){
        throw new Error('NOt an Hero!')
    }
  return (
    <div>
      {heroValidaty}
    </div>
  )
}

export default Hero
