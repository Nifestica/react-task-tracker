import React from "react"

const Greet = () =>
{
   // return (
    //<div className= 'classic'>
//<h1> Hello Vishwas</h1> 
// </div>
// )

return React.createElement('div', {id:'id-here', className:"whyNot"},
 React.createElement('h1', null, 'Hello vishwas'))

} 


export default Greet 