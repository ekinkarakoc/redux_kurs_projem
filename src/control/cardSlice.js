import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../assets/courseItems";

const initialState = {
  cardItems: courseItems,
  quantity: 0,
  totalPrice: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearCard: (state) => {
      state.cardItems = [];
    },
    removeItem: (state, action) => {
      state.cardItems = state.cardItems.filter(
        (item) => item.id !== action.payload
      );
    },
    increase: (state, action) => {
      const increaseCard = state.cardItems.find((item) => {
        return item.id == action.payload;
      });
      increaseCard.quantity++;
    },
    decrease: (state, action) => {
      const decreaseCard = state.cardItems.filter((item) => {
        return item.id == action.payload;
      });
      if (decreaseCard[0].quantity > 0) {
        decreaseCard[0].quantity--;
      }
    },
    calculatePrice: (state) => {
      let total = 0;
      let quantity = 0;
      state.cardItems.map((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.totalPrice = total;
    },
    addAll: (state) => {
      state.cardItems = courseItems;
    },
  },
});

export const {
  clearCard,
  removeItem,
  increase,
  decrease,
  calculatePrice,
  addAll,
} = cardSlice.actions;

export default cardSlice.reducer;
