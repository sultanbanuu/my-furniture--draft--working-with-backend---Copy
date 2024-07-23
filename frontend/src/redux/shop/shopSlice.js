import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = shopSlice.actions;

export default shopSlice.reducer;
