import React, { useState } from 'react';
import HCData from './HCData';

export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(HCData);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
