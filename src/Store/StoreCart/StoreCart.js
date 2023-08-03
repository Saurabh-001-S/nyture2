import { createSlice } from "@reduxjs/toolkit";
import productData from '../../Data/ItemData';

const initialCart = {
  cart: [],
  buyItem: [],
  notification: [],
  item: productData,
  totalQuantity: 0,
  totalPrice: 0,
  UserloginOrNot: "false"
}
const Message_props = [
  {
    id: 1,
    type: "success",
    title: "Item Added To Shopping Cart"
  },
  {
    id: 2,
    type: "danger",
    title: "Item Deleted From Cart"
  },
  {
    id: 3,
    type: "info",
    title: "Order Successfully Order"
  },
  {
    id: 4,
    type: "warning",
    title: "Removed all Items from Shopping Cart"
  },
  {
    id: 5,
    type: "warning",
    title: "Please enter text in search box"
  },
  {
    id: 6,
    type: "warning",
    title: "Please enter another email it already registered"
  },
  {
    id: 7,
    type: "success",
    title: "Login succcessfully"
  },
  {
    id: 8,
    type: "success",
    title: "Register successfully"
  },
  {
    id: 9,
    type: "success",
    title: "Order succefully"
  }
];

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
        state.totalQuantity += 1;
        state.notification.push(Message_props[0])
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
      state.notification.push(Message_props[3])
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
      state.notification.push(Message_props[1])
    },

    removeFromBuy: (state, action) => {
      state.buyItem = state.buyItem.filter((item) => item.id !== action.payload);
    },
    removeFromNotification: (state) => {
      state.notification.shift();
    },
    callNotification: (state, action) => {
      state.notification.push(Message_props[action.payload])
    },
    AuthTrueorNot: (state, action) => {
      state.UserloginOrNot = action.payload;
    }
  },
});
export const {
  addToCart, increaseItemQuantity, decreaseItemQuantity, removeFromCart,
  clearCart, buyNow, getCartTotal, removeFromBuy, buyAllCartItem, clearBuy,
  removeFromNotification, callNotification, AuthTrueorNot
} = cartSlice.actions;
export default cartSlice.reducer;