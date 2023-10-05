import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';


const promise = loadStripe
("pk_test_51NxS4wSAFfI6nMC5jVRHjbmp8P8qsJDkgm7j4I73OYnR9iurQSclSaS1a7MK6HSeNInhqJsnu7vBBtroq9RpZ7yD00g6GGmn3Q"
);



function App() {// eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    //This will run only when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>>> ' , authUser);

      if (authUser){
        //user was logged in / just logged in
        dispatch({
            type: 'SET_USER',
            user: authUser
        })

      } else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
      })
      }
    })// eslint-disable-next-line
  }, [])
  return (
    //BEM convention used
    <Router>
    <div className='App'>
        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
