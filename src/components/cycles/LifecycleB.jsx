
import React, { Component } from 'react'
 class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "Niffy Yoyo"
    }
    console.log('LifecycleB Constructor')
  }
  
  static getDerivedStateFromProps(props, state)
  //This method is called when the State is dependent on the Props
  {
    console.log('LifecycleB getDerivedStateFromProps')
    return null
  }

  componentDidMount()
  {
    console.log("LifecycleB componentDidMount")
  }

  shouldComponentUpdate ()
  // Majorly used for Performance Optimization
  // It also dictate if the component should Re-render or not
  {
    console.log('LifecycleB shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState)
  {
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate (){
    console.log('LifecycleB componentDidUpdate')
  }


  render()
  // it Reads Props and State then returns JSX
  // Avoid Changing the state or interacting with the DOm or make Ajax calls
  {
    console.log("LifecycleB render")
    return (
      <div>  LifecycleB    </div>
    )
  }
}

export default LifecycleB
