import React, { useState } from 'react'
import axios from 'axios';

import { Form, Button }   from 'react-bootstrap';
const Newproduct = () => {
const [title, setTitle] = useState("");
const [age, setAge] = useState("");
const [descreption, setDescription] = useState("");
const onSubmitHandler = e => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new person
    axios.post('http://localhost:8000/api/products/new', {
        title,
        age,
        descreption
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    setAge("")
    setTitle("")
    setDescription("")
}
return (
        <div>
            <h3>New Product</h3>
            {console.log("newProduct")}
        <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title </Form.Label>
                <Form.Control type="text" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Age </Form.Label>
                <Form.Control type="text" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)} value={age}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description </Form.Label>
                <Form.Control type="text" placeholder="Enter Description" onChange={(e)=>setDescription(e.target.value)} value={descreption}/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
    </Form>
        </div>
    )
}

export default Newproduct
