import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
// Components:
import CartItem from '../Components/CartItem';
import EmptyCart from '../Components/EmptyCart';

const CartPage = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  return (
    <React.Fragment>
      <section className='section cart-sect'>
        <div className='section-title'>
          <h2>Your Cart</h2>
        </div>
        {cart.length === 0 ? (
          <EmptyCart></EmptyCart>
        ) : (
          <React.Fragment>
            <div className='section-center'>
              {cart.map((item, itemIndex) => {
                return <CartItem key={itemIndex} {...item}></CartItem>;
              })}
            </div>
            <div className='cartpage-footer'>
              <div className='cart-total'>
                <h4>
                  Subtotal: <span>${total}</span>
                </h4>
              </div>
              <button className='btn-clearcart' onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </React.Fragment>
        )}
      </section>
    </React.Fragment>
  );
};

export default CartPage;
