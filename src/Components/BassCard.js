import React from 'react';
import { CartContext } from '../Context/CartContext';
const BassCard = ({ description, imageUrl, price, subtitle, title, id }) => {
  const { addCart } = React.useContext(CartContext);
  // Main:
  return (
    <article className='bass-card'>
      <img src={imageUrl} alt={title} className='bass-card-img' />
      <div className='bass-info'>
        <p className='bass-subtitle'>{subtitle}</p>
        <h3 className='bass-title'>{title}</h3>
        <p className='bass-desc'>{description}</p>
        <h6 className='bass-price'>${price}</h6>
        <button
          className='btn-addcart'
          onClick={() => {
            addCart(id);
          }}
        >
          <h4>Add to Cart</h4>
        </button>
      </div>
    </article>
  );
};

export default BassCard;
