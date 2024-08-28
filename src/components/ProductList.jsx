import React, {useContext} from 'react';

import { ProductContext } from '../context/ProductContext';

import {Product} from './Product';

export const ProductList = () => {
    const {products} = useContext(ProductContext);

    return (
        <div className="sm:grid-cols-3 lg:grid-cols-3 grid-cols-1">
            {
                products.map((product)=> (
                    <product key = {product.id} product={product} />
                ))
            }
        </div>
    );
}