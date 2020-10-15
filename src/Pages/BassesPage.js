import React, { useState, useEffect } from 'react';
import db from '../firebase';

const BassesPage = () => {
  const [bassses, setBasses] = useState([]);

  return (
    <div>
      <h1>Hello from Basses Page</h1>
    </div>
  );
};

export default BassesPage;
