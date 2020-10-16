import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Context API:
import ProductProvider from './Context/ProductContext';
import CartProvider from './Context/CartContext';

ReactDOM.render(
  <CartProvider>
    <ProductProvider>
      <App />
    </ProductProvider>
  </CartProvider>,
  document.getElementById('root')
);
