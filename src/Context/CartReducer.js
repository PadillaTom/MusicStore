const CartReducer = (state, action) => {
  // We can use SWITCH / CASE instead of IFs*********

  // Add to Cart:
  if (action.type === 'ADD_CART') {
    return { ...state, cart: [...state.cart, action.payload] };
  }

  // Clear Cart:
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] };
  }
  // Remove Item:
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  // Increase Amount:
  if (action.type === 'INCREASE_AMOUNT') {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      // If NOT Return the same Item as it is
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  // Decrease Amount:
  if (action.type === 'DECREASE_AMOUNT') {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        // If NOT Return the same Item as it is
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }
  // Get Totals:
  if (action.type === 'GET_TOTALS') {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  // Main Return ---->
  return state;
};

export default CartReducer;
