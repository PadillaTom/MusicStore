import React from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const CartItem = ({ imageUrl, price, name, amount }) => {
  return (
    <article className='cart-item'>
      <img src={imageUrl} alt={name} className='cartitem-img' />
      <div className='cartitem-info'>
        <h3 className='cartitem-name'>{name}</h3>
        <p className='cartitem-price'>{price}</p>
        <p className='cartitem-remove'>Remove</p>
      </div>
      <div className='cartitem-amount-container'>
        <AiOutlinePlus id='amount-control'></AiOutlinePlus>
        <p className='cartitem-amount'>{amount}</p>
        <AiOutlineMinus id='amount-control'></AiOutlineMinus>
      </div>
    </article>
  );
};

export default CartItem;
