import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, quantity, price, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <h4 className="product-price">Price: ${price}</h4>
        <p>Manufacturer: {seller}</p>
        <p>Ranting: {ratings} Stars</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
