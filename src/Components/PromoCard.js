import React from 'react';
import { Link } from 'react-router-dom';

const PromoCard = ({ title, subtitle, imageUrl, style }) => {
  return (
    <React.Fragment>
      <article className='promo-card'>
        <img src={imageUrl} alt='promoted' className='promo-img' />
        <div className='promo-info'>
          <h4 className='promo-subtitle'>{subtitle}</h4>
          <h2 className='promo-title'> {title}</h2>
          {style === 'bass' ? (
            <Link to='/basses' className='cta-promo'>
              <p>Explore...</p>
            </Link>
          ) : (
            <Link to='/guitars' className='cta-promo'>
              <p>Explore...</p>
            </Link>
          )}
        </div>
      </article>
    </React.Fragment>
  );
};

export default PromoCard;
