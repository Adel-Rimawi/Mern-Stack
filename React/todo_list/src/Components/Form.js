import React, { useState } from  'react';
import Todo from './Todo';


const Form = () => {
    const [events, setEvents] = useState([]);
    const [event, setEvent] = useState("");

    const addEvent = (e) => {
        e.preventDefault();
        setEvents([...events, event]);
        setEvent("");
        console.log(events);
    };
    return (
        <div>
            <form onSubmit={ addEvent }>
                <div>
                    <input type="text"  onChange={ (e)=> setEvent(e.target.value) } value={event}/><br/><br/><br/>
                    <input type="submit" value="Add" />
                </div>
            </form>
            <Todo events = {events}/>
        </div>

    )
};

export default Form
