import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Context API:
import ProductProvider from './Context/ProductContext';

ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById('root')
);
