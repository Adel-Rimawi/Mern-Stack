import React from 'react'

const  Vars= (props)=> {
    return (
        <div>
            {
                isNaN(+props.var) ? 
                    <h1 style={{color:props.color,backgroundColor:props.background}}>The word you sent is: {props.var}</h1>
                :
                    <h1 style={{color:props.color,backgroundColor:props.background}}>The number you sent is: {props.var}</h1>
            }
        </div>
    )
}

export default Vars
