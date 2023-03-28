import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  cart.forEach((item) => {
    totalPrice += item.price;
    totalShipping += item.shipping;
  });

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
//   console.log(cart)
  return (
    <div className="cart">
      <h3>Order summary</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
