import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { CartContext } from '../Context/CartContext';

const CartItem = ({ imageUrl, price, title, amount, id }) => {
  const { removeItem, increaseAmount, decreaseAmount } = React.useContext(
    CartContext
  );

  return (
    <article className='cart-item'>
      <img src={imageUrl} alt='cartitem' className='cartitem-img' />
      <div className='cartitem-info'>
        <h3 className='cartitem-name'>{title}</h3>
        <p className='cartitem-price'>{price}</p>
        <button
          className='cartitem-remove'
          onClick={() => {
            removeItem(id);
          }}
        >
          Remove
        </button>
      </div>
      <div className='cartitem-amount-container'>
        <button id='amount-control' onClick={() => increaseAmount(id)}>
          <AiOutlinePlus></AiOutlinePlus>
        </button>
        <p className='cartitem-amount'>{amount}</p>
        <button id='amount-control' onClick={() => decreaseAmount(id)}>
          <AiOutlineMinus></AiOutlineMinus>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
