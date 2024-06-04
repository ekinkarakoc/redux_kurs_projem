import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../assets/courseItems";

const initialState = {
  cardItems: courseItems,
  quantity: 3,
  totalPrice: 7,
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
  },
});

export const { clearCard, removeItem, increase, decrease } = cardSlice.actions;

export default cardSlice.reducer;
