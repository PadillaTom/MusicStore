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
        <div className='discounts-container'>
          {discounts.map(({ imageUrl, id, title, description }, index) => (
            <article className='discount-card' key={id} id={`pic${index}`}>
              <img src={imageUrl} alt={title} className='discount-img' />
              <div className='discount-info'>
                <h3 className='discount-title'>{title}</h3>
                <p className='discount-desc'> {description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Discounts;
