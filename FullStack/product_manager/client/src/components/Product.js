import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Product = (props) => {
    const [product, setProduct] = useState("")
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/'+props.id)
            .then(res=>{
                setProduct(res.data.product);
            });
    },[])
    return (
        <div>
            {console.log("Product")}
            <h2>{product.title}</h2>
            <p>{product.age}</p>
            <p>{product.descreption}</p>
        </div>
    )
}

export default Product
