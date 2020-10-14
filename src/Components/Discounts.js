import React, { useState, useEffect } from 'react';
import db from '../firebase';

const Discounts = () => {
  const [discounts, setDiscounts] = useState([]);
  useEffect(() => {
    db.collection('promo').onSnapshot((snapshot) =>
      setDiscounts(snapshot.docs.map((item) => item.data()))
    );
  }, []);

  // Main:
  return (
    <React.Fragment>
      <section className='section discount-sect'>
        <div className='section-title'>
          <h3>Products</h3>
        </div>
        {discounts.map(({ imageUrl, id, title, description }) => (
          <article className='discount-card' key={id}>
            <img src={imageUrl} alt={title} className='discount-img' />
            <div className='discount-info'>
              <h3 className='discount-title'>{title}</h3>
              <p className='discount-desc'> {description}</p>
            </div>
          </article>
        ))}
      </section>
    </React.Fragment>
  );
};

export default Discounts;
