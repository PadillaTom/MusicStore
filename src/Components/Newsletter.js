import React from 'react';

const Newsletter = () => {
  return (
    <section className='section newsletter-sect'>
      <div className='newsletter-contianer'>
        <div className='newsletter-title-contianer'>
          <div className='title-element'></div>
          <h3 className='newsletter-title'>Keep up to Date</h3>
          <div className='title-element'></div>
        </div>
        <input type='email' className='newsletter-input' />
        <button className='btn-newsletter'>Join!</button>
      </div>
    </section>
  );
};

export default Newsletter;
