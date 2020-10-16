import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
// Components:
import CartItem from '../Components/CartItem';
import EmptyCart from '../Components/EmptyCart';

const CartPage = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  let user = false;
  return (
    <React.Fragment>
      <section className='section cart-sect'>
        <div className='section-title'>
          <h2>Your Cart</h2>
        </div>
        <div className='cta-backshop'>
          <Link to='/instruments'>
            <p>Continue Shopping</p>
          </Link>
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
            <p className='cta-clearcart' onClick={clearCart}>
              Clear Cart
            </p>
            <div className='cartpage-footer'>
              <div className='cart-total'>
                <h4>
                  Subtotal: <span>${total}</span>
                </h4>
              </div>

              {user ? (
                <Link to='/checkout'>
                  <button className='btn-checkout'>Checkout</button>
                </Link>
              ) : (
                <Link to='/login'>
                  <button className='btn-checkout'>Login</button>
                </Link>
              )}
            </div>
          </React.Fragment>
        )}
      </section>
    </React.Fragment>
  );
};

export default CartPage;
