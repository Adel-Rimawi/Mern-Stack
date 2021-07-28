import React , { useState } from 'react';

const Todo = (props)=> {
    const [newevents, setNewevents] = useState(props.events);
    const [checked, setChecked] = useState(false);
    const deleteDone = (index) =>{
    let temp = newevents.filter((_item, i) => i !== index)
        console.log(temp)
        setNewevents(temp);
    }
    return (
        <div>
            { console.log(events)}{
            events.map((value,i)=>{ return(
                    <p>  {checked   ? <span className= "done">{value}</span> :  <span>{value}</span> }
                    <input type="checkbox"  checked = {checked} onClick={(e) => setChecked(e.target.checked)}/>
                    <input type=  "submit" value = "Delete" onClick={() => deleteDone({i})}></input>
                    </p> 
                    
                    )
                }
                )
            }
        </div>
    )
}

export default Todo
// it has some problems i'll fix it later 