import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';



function CheckoutProduct({id, image, title , price, rating, hideButton}) {
    // eslint-disable-next-line
    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = ()=>{
        //remove item form cart
        dispatch({
            type : "REMOVE_FROM_CART",
            id: id,
            
        })
    };
return (
    <div className='checkoutProduct'>
    {/* eslint-disable-next-line */}
        <img className='checkoutProduct_image' src={image} alt="Product image preview"/>

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>{title}</p>
            <p className='checkoutProduct_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct_rating'>
            {Array(Math.min(rating, 5))
                .fill()
                .map((_, i)=>(// eslint-disable-next-line
                    <p>⭐</p>
                ))}
            </div>
            {!hideButton &&  (
                <button onClick={removeFromCart}>Remove from Cart</button>
            )}
        </div>
    </div>
)
}

export default CheckoutProduct