import React , { useState , useEffect} from 'react';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link , useHistory} from 'react-router-dom';
import { CardElement , useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';


function Payment() {    // eslint-disable-next-line
    const[{cart, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();


    const [succeeded, setSucceeded] = useState(false); 
    const [processing, setProcessing] = useState(""); 



    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);


    useEffect(()=>{
            // generate special stripe secret which allows us to charge customer

        const getClientSecret = async () =>{
            const response = await axios({
                    method: 'post',
                    // stripe expects total in currencies subunits *here 100 paise = 1 rupee
                    url: `/payments/create?total=${getCartTotal(cart) * 100}`
                });
                setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [cart])

    console.log('THE SECRET IS >>>', clientSecret);

    const handleSubmit = async (event) =>{
        //do all stripes
        event.preventDefault();
        setProcessing(true);

 // eslint-disable-next-line
        const payload = await stripe.confirmCardPayment(clientSecret , {
            payment_method:{
                card : elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                cart: cart,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            
            dispatch({
                type: 'EMPTY_CART'
            })

            history.replace('/orders')
        })


    }
    const handleChange = event =>{
        //listen changes in CardElement
        // & display any errors as customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }





return (
<div className='payment'>
<div className='payment_container'>
    <h1>
    <Link to="./checkout">Checkout ({cart?.length} items)</Link>
    </h1>


        {/* payment Section-address */}
    <div className='payment_section'>
        <div className='payment_title'>
            <h3>Delivery Address</h3>
        </div>
        <div className='payment_address'>
            <p>{user?.email}</p>
            <p>Seattle, Washington</p>
            <p>Arlington County, Virginia, U.S.</p>
        </div>

    </div>
        {/* payment section-review items */}
    <div className='payment_section'>
        <div className='payment_title'>
            <h3>Review items and delivery</h3>
            </div>
            <div className="payment_items">
                {cart.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        
    </div>
        {/* payment section-payment method */}
    <div className='payment_section'>
        <div className='payment_title'>
            <h3>Payment Method</h3>
        </div>
        <div className='payment_details'>
            {/* stripe will go here */}

            <form onSubmit={handleSubmit}> 
                    <CardElement onChange={handleChange}/>

                    <div className='payment_priceContainer'>
                    <CurrencyFormat
                        renderText={(value)=>(
                        <h3>Order Total: {value}</h3>
                        )}
                        decimalScale={2}
                        value={getCartTotal(cart)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}
                    />
                    <button disabled={processing || disabled || succeeded}>
                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                    </div>

                    {/* Errors */}
                    {error && <div>{error}</div>}
            </form>
        </div>
    </div>

</div>
</div>
)
}

export default Payment