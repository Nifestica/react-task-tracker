import React, { Component } from 'react'

 class Eventbind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)

    }
    
    clickHandler(){
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

// the Fourth Method
// My Method 
// clickHandler = () => {
//  this.setState({
//    message: 'Goodbye!'
//  })
//}


  render() {
    return (
      <div> 
            <div> {this.state.message}</div>
            {/* <button onClick ={this.clickHandler.bind(this)}> here </button> */}
        {/*<button onClick={ ()=>  this.clickHandler()}> Here</button> */}
        <button onClick={ this.clickHandler}> Here</button>
      </div>
    )
  }
}

export default Eventbind

