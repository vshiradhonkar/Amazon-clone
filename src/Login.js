import React , { useState } from 'react';
import { Link ,useHistory  } from 'react-router-dom';
import "./Login.css";
import { auth } from './firebase';



function Login() {
    const history= useHistory();
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    const signIn = e =>{
        e.preventDefault();
        
        //firebase things go here
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();

        //firebase register things go here.
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                //it successfully created a new user with
                // email and password
                if (auth) {
                    history.push('/')
                }
                console.log(auth);
            })
            .catch(
                error => alert(error.message)
            )
    }

return (
    <div className='login'>
        <Link to='/'>    
            <img className='login_logo' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/330px-Amazon_logo.svg.png'
                alt='logo'
            />
        </Link>
        <div className='login_container'>
            <h1>Sign in</h1>
            
            <form>
                <h5>E-mail</h5>
                <input className='inputField' type='text' value={email} onChange={e => setEmail(e.target.value)} />
            
                <h5>Password</h5>
                <input className='inputField' type='password' value={password} onChange={e => setPassword(e.target.value)} />
            
                <button type='submit' onClick={signIn} 

                className='login_signInButton'>Sign in</button>

                <p className='privacyPolicy'>
                <a 
                href='https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ' >
                By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.
                </a>
                </p>
                <button onClick={register} 
                    
                className='login_registerButton'>Create Your Amazon Account</button>
            </form>
        </div>
    </div>
)
}

export default Login;