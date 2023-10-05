import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating}) {// eslint-disable-next-line
    const [{cart}, dispatch] = useStateValue();


    const addToCart = ()=>{
        //Dispatch action into Data layer
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }
return (
    <div className='product'>
    <div className='product_info'>
        <p>{title}</p>
        <p className='product_price'>
        <small>₹</small>
        <strong>{price}</strong>
        </p>
        <div className='product_rating'>
        {Array(rating).fill().map((_, i) => (
            // eslint-disable-next-line
            <p>⭐</p>
        ))}
        </div>
        
    </div>
    <img src={image} alt='book' />
    <button onClick={addToCart} >Add to cart</button>
</div>
)
}

export default Product;