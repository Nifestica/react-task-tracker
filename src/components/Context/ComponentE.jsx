import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'
class ComponentE extends Component {
  render() {
    return (
      <div>
        Component E context content {this.UserContext} yeah
        <ComponentF />
      </div>
    )
  }
}

ComponentE.contextType = UserContext

export default ComponentE
