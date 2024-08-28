import React, { useContext } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
export const ProductDetails = () =>{
    const {id} = useParams;
    const {products} = useContext(ProductContext)
    const {addToCart} = useContext(CartContext);

    const product = products.find(product => product.id === parseInt(id));
    return <div className='border rounded-lg shadow-md'>
        <h1 className='mb-2'>{product.name}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <button onClick={addToCart(product)}>Add to Cart</button>
    </div>;

}