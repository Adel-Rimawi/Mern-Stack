import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const { initialTitle, initialAge, initialDescription , onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [age, setAge] = useState(initialAge);
    const [description, setDescription] = useState(initialDescription)

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, age, description});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title </label><br />
                <input 
                    type="text" 
                    name="title" value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
            </p>
            <p>
                <label>Age </label><br />
                <input 
                    type="text" 
                    name="age" 
                    value={age} 
                    onChange={(e) => { setAge(e.target.value) }} />
            </p>
            <p>
                <label>Description </label><br />
                <input 
                    type="text" 
                    name="description" 
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    )
}