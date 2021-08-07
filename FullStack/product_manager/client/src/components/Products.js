import { navigate } from '@reach/router'
import React, { useState } from 'react'
import DeleteButton from './DeleteButton';

const Products = (props) => {
    const [products, setProducts] = useState(props.products)
    // const { removeFromDom } = props;
    // const deletef = (productId) => {
    //     axios.delete('http://localhost:8000/api/products/delete/' + productId)
    //         .then(res => {
    //             removeFromDom(productId)
    //         })
    // }
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }
    return (
        <div>
            <h3>All Products: </h3>
            <ul>
            {products.map((product, idx)=>{                
                return <li key={idx}>
                        <button onClick={()=>navigate("/product/"+product._id)} key={idx}> {product.title}</button>
                        <button onClick={()=>navigate("/"+product._id+"/edit")}>Edit</button>
                        <DeleteButton productId={product._id} successCallback={()=> removeFromDom(product._id)}/>
                    </li>
            })}
            </ul>
        </div>
    )
}

export default Products
