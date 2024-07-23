/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
// import { apiSlice } from "./redux/api/apiSlice";
import { categoryApiSlice } from "./redux/api/categoryApiSlice.js";


store.dispatch(categoryApiSlice.endpoints.fetchCategories.initiate())

// promise.unsubscribe();


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
