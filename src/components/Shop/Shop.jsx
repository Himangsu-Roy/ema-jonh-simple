import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleAddToCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = []
    // if product doesn't exist in the cart then set quantity = 1;
    // if exist update quantity by 1;
    const exists = cart.find(pd => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    }else {
      product.quantity = exists.quantity + 1;
      newCart = [...cart];
    }
    
    setCart(newCart);
    addToDb(product.id);
  };

  // Set cart to local storage
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id
    for (const id in storedCart) {
      // step 2: get the product by using the id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
        console.log(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;





// if (!newCart.find((p) => p.id === product.id)) {
//   newCart.push({
//     id: product.id,
//     name: product.name,
//     price: product.price,
//     quantity: 1,
//   });
// } else {
//   newCart.find((p) => p.id === product.id).quantity++;
// }
// setCart(newCart);
// addToDb(newCart);