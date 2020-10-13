import React, { useState, useEffect } from 'react';
import db from '../firebase';

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  // Request Data
  useEffect(() => {
    db.collection('products').onSnapshot((snapshot) =>
      setProducts(snapshot.docs.map((item) => item.data()))
    );
  }, []);
  return (
    <ProductContext.Provider value='Hi'>{children}</ProductContext.Provider>
  );
}
