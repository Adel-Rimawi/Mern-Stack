import React , { useState, useEffect }from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';
import { navigate } from '@reach/router';

const Editproduct = (props) => {
    const { id } = props;
    const [product, setProduct] = useState()
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
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
            {console.log(product)}
            {loaded && (
                <>
    <ProductForm
        onSubmitProp={updateProduct}
        initialTitle={product.title}
        initialAge={product.age}
        initialDescription ={product.descreption}
    />
    <DeleteButton productId={product._id} successCallback={() => navigate("/")} />
    </>
)}
    
        </div>
    )
}

export default Editproduct
