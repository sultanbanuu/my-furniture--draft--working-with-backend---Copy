import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { CATEGORY_URL } from "../constants";
import { apiSlice } from "./apiSlice";

// const categoryAdapter = createEntityAdapter();

// const initialState = categoryAdapter.getInitialState();



export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (newCategory) => ({
        url: `${CATEGORY_URL}`,
        method: "POST",
        body: newCategory,
      }),
    }),

    fetchCategories: builder.query({
      query: () => ({
        url: `${CATEGORY_URL}/categories`,
        transformResponse: (responseData) => {
          return categoryAdapter.setAll(initialState, responseData);
        },
        // responseHandler: (response) => {
        //   console.log("RESPONSE", response.json());
        //   return "tst";
        // },
      }),
    }),
  }),
});

export const { useCreateCategoryMutation, useFetchCategoriesQuery } =
  categoryApiSlice;

// export const selectCategoryRes =
//   categoryApiSlice.endpoints.fetchCategories.select();

// const selectCategResData = createSelector(
//   selectCategoryRes,
//   (categRes) => categRes.data
// );

// export const { selectAll: selectAllCategories } = categoryAdapter.getSelectors(
//   (state) => selectCategResData(state) ?? initialState
// );
