import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';
import loginImg from '../../assets/images/Illustration.png';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const navigate = useNavigate()

  const registerUser = (e) => {
    e.preventDefault()
    if(password !== cPassword){
      toast.error("password do not match")
    }
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
     
    const user = userCredential.user;
    console.log(user)
    toast.success("Registration Successful...")
    navigate("/login")
  })
  .catch((error) => {
    
    toast.error(error.message)
    // ..
  });

  }
  
  return (
    <>
    
    <section >
      <div className='left' >
        <img src={loginImg} alt="Login" />
      </div>
      <div className='right'>
        <h2>Create an Account</h2>
        <p>Hello there, Lets start your journey with us.</p>
        <form onSubmit={registerUser}>
          <input type="text" placeholder='Email or Phone number' required value={email} onChange={(e) =>
            setEmail(e.target.value)} />
          <input type="password" placeholder='password' required value={password} onChange={(e) =>
            setPassword(e.target.value)} />
          <input type="password" placeholder='Confirm password' required value={cPassword} onChange={(e) =>
            setCPassword(e.target.value)} />
          <button type='submit' className='btn'>Sign up</button>
        </form>
        <p>--or--</p>
        <button className='google'>Sign up With Google</button>
        <p>Already have an account?<Link to='/login'> Login now</Link></p>

      </div>
    </section>
    </>
  )
}

export default Register