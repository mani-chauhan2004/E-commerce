import React, {useContext} from 'react'

import {CartProvider, CartContext} from "../context/CartContext";

export default function Cart(){
    const {cart, removeFromCart} = useContext(CartContext);

    return(
        <div className='p4 border rounder-lg shadow-md'>
            <h2 className='font-bold mb'>Cart Items</h2>
            {cart.map((items) => (
                <div key={items.id}>
                    <p>{items.name}</p>
                    <button onClick={() => removeFromCart(items.id)}>Remove Item</button>
                </div>
                
            ))}
        </div>

    );
}