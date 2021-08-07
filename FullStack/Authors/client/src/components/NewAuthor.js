import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const NewAuthor = props => {

    const [name, setAuthor] = useState("");
    const [errors, setErrors] = useState([]); 

    const onSubmitHandler = e => {
        e.preventDefault();
        //Send a post request to our API to create a authors
        axios.post("http://localhost:8000/api/authors/new", {
            name
        })
            .then(res => navigate("/")) // If successful, do something with the response. 
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            });          
    }

    return (
        <div>
            <button onClick={()=> navigate("/")}>Home</button>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Author</label>
                    <input type="text" onChange={e => setAuthor(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewAuthor