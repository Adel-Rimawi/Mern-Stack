import React, { useState } from 'react';
import BoxGenerator from './BoxGenerator';

const BoxForm = (props) => {
    const [colors, setColors] = useState([]);
    const [color, setColor] = useState('');

    const handleColor = e => {
        setColor(e.target.value);
    }

    const handleAdd = e => {
        e.preventDefault();

        const newColor = { 
            color: color,
        };

        setColors([...colors, newColor]);
    }

    return (
        <>
            <form onSubmit={handleAdd}>
                <label htmlFor="colorSelect">Color of Box</label>
                <input
                    type="text" name="color" value={color}
                    onChange={handleColor}
                />  
                
                <button type="submit">Add</button>
            </form>
            <BoxGenerator colors={colors} />
        </>
    );
}

export default BoxForm;