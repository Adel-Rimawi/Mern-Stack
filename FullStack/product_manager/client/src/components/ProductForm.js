import React, { useState } from 'react';

const ProductForm = props => {
    
    const { initialTitle, initialAge, initialDescription , onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [age, setAge] = useState(initialAge);
    const [descreption, setDescription] = useState(initialDescription)

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, age, descreption});
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
                    name="descreption" 
                    value={descreption} 
                    onChange={(e) => { setDescription(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    )
}

export default ProductForm