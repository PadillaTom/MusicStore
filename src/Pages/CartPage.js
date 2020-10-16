import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
// Components:
import CartItem from '../Components/CartItem';
import EmptyCart from '../Components/EmptyCart';

const CartPage = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <React.Fragment>
      <section className='section cart-sect'>
        <div className='section-title'>
          <h2>Your Cart</h2>
        </div>
        {cart.length === 0 ? (
          <EmptyCart></EmptyCart>
        ) : (
          <div className='section-center'>
            {cart.map((item, itemIndex) => {
              return <CartItem key={itemIndex} {...item}></CartItem>;
            })}
          </div>
        )}
        <div className='cartpage-footer'>
          <div className='cart-total'>
            <h4>
              Subtotal: <span>$1000</span>
            </h4>
          </div>
          <button className='btn-clearcart'>Clear Cart</button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CartPage;
