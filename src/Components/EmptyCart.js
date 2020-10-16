import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <section className='section empty-sect'>
      <div className='empty-cart-info'>
        <h3>Your cart is empty</h3>
        <Link to='/instruments' className='btn-empty'>
          <p>View Instruments</p>
        </Link>
      </div>
    </section>
  );
};

export default EmptyCart;
