import { createSlice } from "@reduxjs/toolkit";
import productData from '../../Data/ItemData';

const initialCart = {
  cart: [],
  buyItem: [],
  item: productData,
  totalQuantity: 0,
  totalPrice: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {

    addToCart: (state, action) => {
      const find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload)
      }
    },

    buyNow: (state, action) => {
      const find = state.buyItem.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.buyItem[find].quantity += 1;
        state.cart[find].quantity += 1;
      } else {
        state.buyItem.push(action.payload)
        state.cart.push(action.payload)
      }
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },

    buyAllCartItem: (state) => {
      if (state.buyItem.length !== 0) {
        state.buyItem = [];
        state.cart.forEach(item => {
          state.buyItem.push(item)
        });
      } else {
        state.cart.forEach(item => {
          state.buyItem.push(item)
        });
      }
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    clearBuy: (state) => {
      state.buyItem = [];
    },

    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },

    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    removeFromBuy: (state, action) => {
      state.buyItem = state.buyItem.filter((item) => item.id !== action.payload);
    },

  },
});
export const {
  addToCart, increaseItemQuantity, decreaseItemQuantity, removeFromCart,
  clearCart, buyNow, getCartTotal, removeFromBuy, buyAllCartItem, clearBuy
} = cartSlice.actions;
export default cartSlice.reducer;