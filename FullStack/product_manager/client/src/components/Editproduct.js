import React , { useState, useEffect }from 'react';
import { Form, Button }   from 'react-bootstrap';
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from './ProductForm';


const Editproduct = (props) => {
    const { id } = props;
    const [product, setProduct] = useState()
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data.product);
                setLoaded(true);
            })
    }, [])
// const [title, setTitle] = useState("")
// const [age, setAge] = useState("")
// const [descreption, setDescription] = useState("")


const updateProduct = product => {
    axios.put('http://localhost:8000/api/products/update/' + id, product)
        .then(res => console.log(res));
}

    return (
        <div>
            {loaded && (
    <ProductForm
        onSubmitProp={updateProduct}
        initialTitle={product.title}
        initialAge={product.age}
        initialDescription ={product.descreption}
    />
)}
        </div>
    )
}

export default Editproduct
