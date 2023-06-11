import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import loginImg from '../../assets/images/Illustration.png';


const Register = () => {
  return (
    <section >
        <div className='left' >
            <img src={loginImg} alt="Login"  />
        </div>
        <div className='right'>
            <h2>Create an Account</h2>
            <p>Hello there, Lets start your journey with us.</p>
            <form action="">
              <input type="text" placeholder='Email or Phone number' required/>
              <input type="password" placeholder='password' required/>
              <button className='btn'>Sign up</button>
            </form>
            <p>--or--</p>
            <button className='google'>Sign up With Google</button>
            <p>Already have an account?<Link to='/login'> Login now</Link></p>
            
        </div>
    </section>
  )
}

export default Register