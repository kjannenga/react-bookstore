import React from 'react';


function  BookCard({ id, title, subtitle, author, addItemToCart}) {
    return (
        <div className="card my-4 p-3 mx-4" >
            <div className='row'>
                <div className='col-8'>
                    <h4>{title}</h4>
                    <h5>By: {author}</h5>
                </div>
                <div className='col-4 align-self-center'>
                    <button onClick={addItemToCart} id={id}>Add To Cart</button>
                </div>
            </div>

        </div>
    )
}

export default BookCard;
