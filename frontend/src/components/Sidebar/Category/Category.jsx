import React, { useEffect } from "react";
import "../Category/Category.css";
import "../../../index.css";
import { useFetchCategoriesQuery } from "../../../redux/api/categoryApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../../redux/api/shopSlice";

export const Category = () => {
  // const { categories, error, isLoading } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  // console.log(categories);

  // const categoriesQuery = useFetchCategoriesQuery();
  const {categories, error, isLoading} = useFetchCategoriesQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error fetching categories:", error);
    return <div>Error fetching categories</div>;
  }

  // useEffect(() => {
  //   if (!categoriesQuery.isLoading) {
  //     dispatch(setCategories(categoriesQuery.data));
  //   }
  // }, [categoriesQuery.data, dispatch]);

  // console.log("Fetched categories:", categories);

  return (
    <div className="categories">
      <h3>Category List</h3>
      {categories?.map((category) => (
        <div key={category._id}>{category.name}</div>
      ))}
    </div>
  );
};
