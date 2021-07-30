import React from 'react'

const Number = (props) => {
    return (
        <div>
            {
                isNaN(+props.num) ? 
                    <h1>The word you sent is: {props.num}</h1>
                :
                    <h1>The number you sent is: {props.num}</h1>
            }
        </div>
    )
}

export default Number
