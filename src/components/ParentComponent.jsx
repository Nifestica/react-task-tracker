import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent Tom'
      }

        this.greetParent = this.greetParent.bind(this)

    }
    
    greetParent(ChildName){
        alert( `Hello ${this.state.parentName}, from ${ChildName}`)
    }



  render() {
    return (
      <div>
         <ChildComponent greetHandler = {this.greetParent} />
      </div>
    )
  }
}

export default ParentComponent
