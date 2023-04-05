import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart)
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  cart.forEach((item) => {
    // item.quantity = item.quantity || 1;
    totalPrice += item.price * item.quantity;
    totalShipping += item.shipping;
    quantity += item.quantity;
  });

  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
//   console.log(cart)
  return (
    <div className="cart">
      <h3>Order summary</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
