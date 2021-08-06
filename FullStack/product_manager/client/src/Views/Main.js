import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Products from '../components/Products'
import { Router } from '@reach/router'
import Product from '../components/Product'
import Editproduct from '../components/Editproduct'
import ProductForm from '../components/ProductForm'

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data.products);
                setLoaded(true);
            });
    },[])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }
    const createProduct = product => {
        axios.post('http://localhost:8000/api/products/new', product)
            .then(res=>{
                setProducts([...products, res.data]);
            })
    }
    return (
        <div>
            <Router>
            <ProductForm onSubmitProp={createProduct} path = "/" initialTitle="" initialAge="" initialDescription="" />
            
            <Product  path = "/product/:id"/>
            <Editproduct path = "/:id/edit"/>
            </Router>
            {loaded && (
            <Products products={products}   removeFromDom={removeFromDom} />)}
        </div>
    );
}

export default Main