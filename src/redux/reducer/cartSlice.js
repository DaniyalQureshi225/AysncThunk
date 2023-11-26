import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {items: []}, // Define initialState with 'items' key
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find(
        item => item.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.quantity++;
        itemInCart.price * itemInCart.quantity;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.items.find(
        item => item.id === action.payload.id,
      );
      if (itemInCart) {
        itemInCart.quantity++;
        itemInCart.price * itemInCart.quantity;
      }
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.items.find(
        item => item.id === action.payload.id,
      );
      if (itemInCart) {
        if (itemInCart.quantity === 1) {
          state.items = state.items.filter(
            item => item.id !== action.payload.id,
          );
        } else {
          itemInCart.quantity--;
          itemInCart.price * itemInCart.quantity;
        }
      }
    },
  },
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} =
  cartSlice.actions;
export default cartSlice.reducer;
