import React , { useState, useEffect }from 'react';
import axios from 'axios';
// import DeleteButton from './DeleteButton';
import { navigate } from '@reach/router';

const Editauthor = (props) => {
    const { id } = props;
    const [name, setName] = useState()
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    const [author, setAuthor] = useState()
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])


    const onSubmitHandler = e => {
        e.preventDefault();
        //Send a post request to our API to create a authors
        author.name = name;
        axios.put("http://localhost:8000/api/products/update/ " + id, {
            author
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
                    <input type="text" onChange={e => setName(e.target.value)} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Editauthor
