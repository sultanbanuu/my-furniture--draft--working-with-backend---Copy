import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import { Wishlist } from "./components/Wishlist/Wishlist";
import ProductItem from "./components/ProductItem/ProductItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Cart } from "./components/Cart/Cart";
import { Category } from "./components/Sidebar/Category/Category";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<Products />} path="products" />
          <Route element={<ProductItem />} path={"/products/:id"} />
          <Route element={<Wishlist />} path="wishlist" />
          <Route element={<Cart />} path="cart" />
          <Route element={<Category/>} path="cattt" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
