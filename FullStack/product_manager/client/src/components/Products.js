import { navigate } from '@reach/router'
import React from 'react'
import axios from 'axios';


const Products = (props) => {
    const { removeFromDom } = props;
    const deletef = (personId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
    }
    return (
        <div>
            <h3>All Products: </h3>
            <ul>
            {props.products.map((product, idx)=>{                
                return <li><button onClick={()=>navigate("/product/"+product._id)} key={idx}> {product.title}</button> <button onClick={()=>navigate("/"+product._id+"/edit")}>Edit</button> <button onClick={(e)=>{deletef(product._id)}}>Delete</button></li>
            })}
            </ul>
        </div>
    )
}

export default Products
