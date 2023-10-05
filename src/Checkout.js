import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    // eslint-disable-next-line
    const[{ cart , user }, dispatch]=useStateValue();
return (
<div className='checkout'>
<div className='checkout_left'>
<img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
        className='checkout_ad' alt='ad' />

<div>
        <h3>Hello, {user?.email}</h3>
            <h2 className='checkout_title'>Your Amazon Cart</h2>

            {cart.map(item =>(
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                />
            ))}
            {/* Checkout items */}
            {/* Checkout items */}
            {/* Checkout items */}
            {/* Checkout items */}
            {/* Checkout items */}
        </div>
</div>



<div className='checkout_right'>
        <Subtotal />
</div>

</div>
)
}

export default Checkout


