import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="p-2 m-2 bg-green-500 text-white rounded-lg"
        onClick={handleClearCart}
        disabled={cartItems.length === 0}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="font-bold text-xl">
          Cart is Empty. Please Add Items to your Cart.🍀
        </h1>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
