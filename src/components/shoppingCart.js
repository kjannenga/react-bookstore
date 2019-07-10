import React from 'react';
import CartItem from './cartItem.js'
import {loadOptions} from "@babel/core";

function  ShoppingCart({items, removeItemFromCart}) {
    let itemList = items.map(item => <CartItem key={item.id} id={item.id} title={item.title} quantity={item.quantity} price={item.price} author={item.author} removeItemFromCart={removeItemFromCart} />
);
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        sum += items[i].price * items[i].quantity
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <h4>Cart total: {sum} </h4>
            {items.length > 0 && itemList}
        </div>
    )
}

export default ShoppingCart;
