import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         commets: '',
         topic: 'react'
      }
    }
    
    handleUsernameChange = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            commets: event.target.value
        })
    }

    handleTopicChange = (event)=>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event)=>{
        alert( `${this.state.username} ${this.state.commets} ${this.state.topic}`)
        event.preventDefault()
    }

  render() {
    const {username, commets, topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="username"> Username</label>
                <input type="text"  value={username}
                 onChange={this.handleUsernameChange}  />
            </div>
            <div>
                <label htmlFor="commets"> Comments</label>
                <textarea name="" id="" cols="30" rows="10" value={commets}
                onChange={this.handleCommentsChange}></textarea>
            </div>
            <div>
                <label htmlFor="topic"> Topic</label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value="React"> React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>    
                </select>
            </div>
            <button type='submit'> Submit</button>
      </form>
    )
  }
} 
 
export default Form
