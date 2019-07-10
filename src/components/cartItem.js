import React from 'react'

function CartItem({ id, title, quantity, price, author, removeItemFromCart}) {
    return (
        <div>
            <h5>Title: {title}</h5>
            <h6>Author: {author}</h6>
            <h6>Quantity: {quantity}</h6>
            <h6>Price: {price * quantity}</h6>
            <button onClick={removeItemFromCart} id={id}>Remove From Cart</button>
        </div>
    )
}

export default CartItem