import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import "./Orders.css";

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    console.log(savedCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='review-container'>
            {
                cart.map(product => {
                   return <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>
                })
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
            </div>
        </div>
    );
}

export default Orders;
