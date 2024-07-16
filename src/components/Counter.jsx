import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    
    }
    
    increment(){
     // this.setState({
     //   count:this.state.count + 1
     // }, 
     // () => {
        //asynchronous Call-back function
     //   console.log ('Callback value', this.state.count)
     // })

      this.setState( (prevState, props) => ({
          count: prevState.count + 1
      } ) )

      //synchronous Call-back function
      console.log(this.state.count)
    }

    incrementThree(){
      this.increment()
      this.increment()
      this.increment()  
      
    }
  render() {
    return (
      <div>
        Count = {this.state.count}
        <button onClick={()=>this.incrementThree()}> Increment</button>
      </div>
    )
  }
}

export default Counter
