import React, { useState, useEffect } from 'react';
import db from '../firebase';

const ProductsDB = () => {
  const [products, setProducts] = useState([]);

  // Getting Products from Firebase DB: Colletion -> Docs -> Data
  useEffect(() => {
    db.collection('products').onSnapshot((snapshot) =>
      setProducts(snapshot.docs.map((item) => item.data()))
    );
  }, []);
  return <div></div>;
};

export default ProductsDB;
