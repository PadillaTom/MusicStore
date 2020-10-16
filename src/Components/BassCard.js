import React from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

// Main:
const BassCard = ({
  description,
  imageUrl,
  price,
  subtitle,
  title,
  id,
  amount,
}) => {
  const { addCart } = React.useContext(CartContext);
  const history = useHistory();
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
            addCart(id, imageUrl, price, title, amount);
            history.push('/cart');
          }}
        >
          <h4>Add to Cart</h4>
        </button>
      </div>
    </article>
  );
};

export default BassCard;
