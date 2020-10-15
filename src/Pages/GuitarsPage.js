import React, { useState, useEffect } from 'react';
import db from '../firebase';

const GuitarsPage = () => {
  const [guitars, setGuitars] = useState([]);

  return (
    <div>
      <h1>Hello from Guitars Page</h1>
    </div>
  );
};

export default GuitarsPage;
