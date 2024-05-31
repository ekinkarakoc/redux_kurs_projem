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
});

export default cardSlice.reducer;
