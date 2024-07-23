import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  setCategories: () => {
    state.categories = action.payload;
  },
});


export const { setCategories } = shopSlice.reducer;
