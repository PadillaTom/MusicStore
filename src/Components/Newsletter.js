import React from 'react';

const Newsletter = () => {
  return (
    <section className='section newsletter-sect'>
      <div className='newsletter-contianer'>
        <div className='newsletter-title-container'>
          <div className='title-element'></div>
          <h3 className='newsletter-title'>Keep up to Date</h3>
          <div className='title-element'></div>
        </div>
        <p className='newsletter-cta-text'>
          Be the first to find out about new products and exclusive offers, and
          get 20% off your first purchase ;)
        </p>
        <div className='newsletter-control'>
          <input
            type='email'
            className='newsletter-input'
            placeholder='Your email'
          />
          <button className='btn-newsletter'>Join!</button>
        </div>
        <div className='division-element'></div>
      </div>
    </section>
  );
};

export default Newsletter;
