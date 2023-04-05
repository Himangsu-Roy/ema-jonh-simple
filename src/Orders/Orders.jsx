import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../components/Cart/Cart';

const Orders = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='shop-container'>
            <div className='products-container'>
            <h1>Orders page</h1>
            </div>
            <div className='cart-container'>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
}

export default Orders;
