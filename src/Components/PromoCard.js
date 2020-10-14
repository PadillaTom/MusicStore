import React from 'react';
import { Link } from 'react-router-dom';

const PromoCard = ({ title, subtitle, imageUrl }) => {
  return (
    <article className='promo-card'>
      <img src={imageUrl} alt='promoted' className='promo-img' />
      <div className='promo-info'>
        <h4 className='promo-subtitle'>{subtitle}</h4>
        <h2 className='promo-title'> {title}</h2>
        <Link to='/' className='cta-promo'>
          <p>See all Instruments...</p>
        </Link>
      </div>
    </article>
  );
};

export default PromoCard;
