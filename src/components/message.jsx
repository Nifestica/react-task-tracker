import { Component } from "react";

class Message extends Component {

    constructor(){
        super()
        this.state ={
            message:"Welcome Visitor",
            SubText: "Subscribe Here"
        }
    }

    changeMessage(){
       this.setState({
        message:"Thank you for subscribing,",
        name:"Nifesimi",
        SubText: "Subscribed"
       }) 
    }

    render(){
        return (
        <div>
              <h1> {this.state.message}  { this.state.name}</h1>
              <button onClick={()=> this.changeMessage()}> { this.state.SubText}</button>
        </div>
)    }

}
export default Message 