import React, { Component } from 'react'
import Input from '../cycles/Input'

 
 class FocusInput extends Component {

    constructor(props) {
      super(props)
    
     this.componentRef = React.createRef()
    }
    
   clickHandler = ( ) => {
    this.componentRef.current.focusInput()
   }

  render() {
    return (
      <div>
        <Input ref={this.componentRef} /> 
        <button onClick={this.clickHandler}> Trigger of the InputRef </button>
      </div>
    )
  }
}

export default FocusInput
