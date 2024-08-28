import React from 'react'

import { ProductContext, ProductProvider, } from '../context/ProductContext';

import { ProductList, products } from '../components/ProductList';
import { ProductDetails } from '../components/ProductDetail';
export const HomePage = () => {
    return(
        <>
            <h1>Products</h1>
        </>
    );
}