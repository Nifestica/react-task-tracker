import React, { Component } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

 class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: `Greatness`
      }
    }

    componentDidMount (){
        setInterval(() => {
      this.setState({
        name: `Greatness`
      })      
        }, 50000) 
    }

  render() {
    console.log(`************* Parent Component **********`)
    return (
      <div>
        Parent Component
        {/* <RegComp name= {this.state.name}> </RegComp>
        <PureComp name= {this.state.name}> </PureComp> */}
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
