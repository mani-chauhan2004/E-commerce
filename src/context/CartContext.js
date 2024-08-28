import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider= ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(...cart, product);
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((product) => product.id !== id));
    }

    return (
        <CartContext.Provider value={{cart, removeFromCart, addToCart}}>
            {children}
        </CartContext.Provider>    
    );
}
