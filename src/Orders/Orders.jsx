import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import "./Orders.css";

const Orders = () => {
    const savedCart = useLoaderData();
    const [] = useState([]);
    console.log(savedCart)
    return (
        <div className='shop-container'>
            <div className='review-container'>
            {
                savedCart.map(product => {
                   return <ReviewItem key={product.id} product={product}></ReviewItem>
                })
            }
            </div>
            <div className='cart-container'>
                <Cart cart={savedCart}></Cart>
            </div>
        </div>
    );
}

export default Orders;
