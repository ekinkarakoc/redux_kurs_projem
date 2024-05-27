import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardItems: [],
  quantity: 0,
  totalPrice: 0,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
});

export default cardSlice.reducer;
