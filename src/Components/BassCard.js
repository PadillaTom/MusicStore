import React from 'react';

const BassCard = ({ description, imageUrl, price, subtitle, title }) => {
  return (
    <article className='bass-card'>
      <img src={imageUrl} alt={title} className='bass-card-img' />

      <div className='bass-info'>
        <p className='bass-subtitle'>{subtitle}</p>
        <h3 className='bass-title'>{title}</h3>
        <p className='bass-desc'>{description}</p>
        <h6 className='bass-price'>${price}</h6>
      </div>
    </article>
  );
};

export default BassCard;
