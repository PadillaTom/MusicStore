import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section error-sect'>
      <div className='error-container'>
        <h2>There is no such page.</h2>
        <button className='btn-primary'>Back to Home</button>
      </div>
    </section>
  );
};

export default Error;
