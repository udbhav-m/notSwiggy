import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    size: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      let [restaurant, food, price] = action.payload;
      if (!(restaurant in state.items)) {
        state.items[restaurant] = {
          [food]: { quantity: 1, price: price },
        };
        state.size ++;
        state.total += price;
      } else {
        Object.keys(state.items).forEach((res) => {
          if (res == restaurant) {
            let foodItems = state.items[res];
            if (food in foodItems) {
              foodItems[food].quantity += 1;
              foodItems[food].price  += price;
              state.size ++;
              state.total += price;
            } else {
              foodItems[food] = { quantity: 1, price: price };
              state.size ++;
              state.total += price;
            }
          }
        });
      }
    },
    removeFromCart: (state, action) => {
      let [restaurant, food, price] = action.payload;
      if (!(restaurant in state.items)) {
        console.log("restaurant not in cart");
      } else {
        Object.keys(state.items).forEach((res) => {
          if (res == restaurant) {
            let foodItems = state.items[res];
            if (food in foodItems) {
              if (foodItems[food].quantity > 1) {
                foodItems[food].quantity -= 1;
                foodItems[food].price -=  price;
                state.size --;
                state.total -= price;
              } else {
                delete state.items[restaurant][food];
                state.size --;
                state.total -= price;
              }
            }
            if (Object.entries(foodItems).length === 0) {
              delete state.items[restaurant];
            }
          }
        });
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
