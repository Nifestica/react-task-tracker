import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    

  render() {
    
    //  The Short Circuit Method
    // Now to display just one agrument 
   return  (this.state.isLoggedIn && <div> Welcome Greatness </div>)


        // The Ternary Condiational operator Method
    // return(
    //     this.state.isLoggedIn ? (<div> Welcome Greatness</div>) :
    //     ( <div>Welcome guest</div>)
    // )


    //  The Element Variable method
    // let message

    // if (this.state.isLoggedIn) {
    //     message = <div>Hello Greatness</div>
    // } else{
    //     message = <div>Hello Guest</div>
    // }

    // return <div> {message} </div>



    // If and Else method
    // if(this.state.isLoggedIn){
    //     return( <div>Welcome Greatness</div> )
    // } else{
    //     return(<div>Welcome Guest</div>)
    // }

  }
}

export default UserGreeting
