import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   removeFromCart,
//   decreaseQuantity,
//   increaseQuantity,
//   clearCart,
//   getTotals,
// } from "../../features/cartSlice";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // console.log(cart.cartItems.length);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseQuantity = (cartItem) => {
    dispatch(decreaseQuantity(cartItem));
  };

  const handleIncreaseQuantity = (cartItem) => {
    dispatch(increaseQuantity(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Your cart is currently empty</p>
          <Link to="/">Go home</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => {
              return (
                <div className="cart-item" key={cartItem.id}>
                  <h4>{cartItem.title}</h4>
                  <div className="cart-product-price">{cartItem.price}</div>
                  <button onClick={() => handleRemoveFromCart(cartItem)}>
                    Remove
                  </button>

                  <div className="cart-product-quantity">
                    <button onClick={() => handleDecreaseQuantity(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleIncreaseQuantity(cartItem)}>
                      +
                    </button>
                  </div>

                  {/* <div className="cart-prod-total-qntity">
                    {cartItem.price * cartItem.cartQuantity}
                  </div> */}
                </div>
              );
            })}
            <div>
              <button onClick={() => handleClearCart()}>Clear cart</button>
            </div>

            <div>
              <h3>${cart.cartTotalAmount}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
