import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import { ProductProvider } from './context/ProductContext';
import {HomePage} from './page/HomePage'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { CartPage } from './page/CartPage';


import { CartProvider } from './context/CartContext';
import ProductDetailPage from './page/ProductDetailPage';
import { Header } from './components/Header';
function Main() {
  return(
    
    <Router>
      
      <ProductProvider>
        <CartProvider>
        <Switch>
          <Route exact path="/">
            <CartPage/>
          </Route>
          <Route path="/products/:id">
            <ProductDetailPage/>
          </Route>
        </Switch>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
}


export default Main;
