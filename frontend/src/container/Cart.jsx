import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, deleteFromcart } from "../actions/cartActions";

const Cart = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;
  let subTotal = cartItems.reduce((x, item) => x + item.prices, 0);

  const dispatch = useDispatch();

  // console.log(cartItems);

  return (
    <div className="w-100 vh-100">
      <div style={{marginTop: 100}}>
        ini cart jan...
      </div>
    </div>
  );
};

export default Cart;
