import React from 'react'

const Product = ({product}) => {
    return (
        <div>
            <h2 className='border p-4 rounded-lg shaadow-md'>{product.name}</h2>
            <p>{product.description}</p>
            <link to={'product/${product.id}'} className=''></link>
        </div>
    )
};

