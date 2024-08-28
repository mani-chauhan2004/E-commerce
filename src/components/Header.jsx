import React from 'react';
import {link} from 'reactRouterDom';

export const Header = () => {
    return (
        <header className='p-4 text-white bg-gray-800'>
            <nav>
                <link to="/">E-Commerce</link>
                <link to="/Cart"></link>
            </nav>
        </header>
    )
}