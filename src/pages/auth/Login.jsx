import React from 'react';

import './Auth.css';
import loginImg from '../../assets/images/Illustration.png';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <section >
        <div className='left' >
            <img src={loginImg} alt="Login"  />
        </div>
        <div className='right'>
            <h2>Nice to see you again!</h2>
            <form action="">
              <input type="text" placeholder='Email or Phone number' required/>
              <input type="password" placeholder='password' required/>
              <div className='password-option-cont'>
                <Link to="/reset">forgot password?</Link>
              </div>
              <button className='btn'>Sign In</button>
            </form>
            <p>--or--</p>
            <button className='google'>Login With Google</button>
            <p>Don't have an account?<Link to='/register'> Get started</Link></p>
            
        </div>
    </section>
  )
}

export default Login