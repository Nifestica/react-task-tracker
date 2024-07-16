import React from "react";

const Cool = props => {
    const {name, surname} = props
    return(
        <>
            <div>
                <h1>
                    I am {name} and my surname is {surname}
                </h1>
            </div>
        </>
    )
}

export default Cool