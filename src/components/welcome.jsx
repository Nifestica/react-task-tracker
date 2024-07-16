import { Component } from "react";

// An example of Class Component

class Welcome extends Component {
    render(){
        const {name, heroName} = this.props
        
        return (<h1> Welcome {name}  a.k.a {heroName}</h1> 
        )
    }

}
export default Welcome