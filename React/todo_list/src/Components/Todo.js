import React from 'react';

const Todo = (props)=> {
    const events = props.events;
    return (
        <div>
            { console.log(events)}{
            events.map((value,i)=>{ return(
                <form>
                    <p>{value} <input type = "checkbox"></input> <input type = "submit" value = "Delete" ></input> </p> 
                    </form>
                    )
                }
                )
            }
        </div>
    )
}

export default Todo
