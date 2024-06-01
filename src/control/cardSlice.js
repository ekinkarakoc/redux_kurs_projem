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
      console.log(action);
      state.cardItems = state.cardItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { clearCard, removeItem } = cardSlice.actions;

export default cardSlice.reducer;
