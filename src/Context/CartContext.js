import React, { useReducer, useEffect } from 'react';
import { auth } from '../firebase';

// Reducer:
import CartReducer from './CartReducer';

export const CartContext = React.createContext();

const initialState = {
  cart: [],
  total: 0,
  amount: 0,
  user: null,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // USER TRACK:
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Is Logged In:
        dispatch({ type: 'SET_USER', user: authUser });
      } else {
        // Is Logged Out:
        dispatch({ type: 'SET_USER', user: null });
      }
    });
    return () => {
      // CLEAN UP:
      unsuscribe();
    };
  }, []);

  // Cart Functions :
  const addCart = (id, imageUrl, price, title, amount) => {
    dispatch({
      type: 'ADD_CART',
      payload: { id, imageUrl, price, title, amount },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  const increaseAmount = (id) => {
    dispatch({ type: 'INCREASE_AMOUNT', payload: id });
  };
  const decreaseAmount = (id) => {
    dispatch({ type: 'DECREASE_AMOUNT', payload: id });
  };

  // Use Effect for Totals: Everytime something has changed: update totals:
  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  // Main :
  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
