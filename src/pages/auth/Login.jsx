import { React, useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import './Auth.css';
import loginImg from '../../assets/images/Illustration.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      toast.success("Login Successful..")
      navigate("/");
    })
    .catch((error) => {
    
      toast.error(error.message)
    });

    }

  const provider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    toast.success("Login successfully")
    navigate("/")
    // ...
  }).catch((error) => {
    // Handle Errors here.
    toast.success(error.message)
  });

  }

  return (
    <section >
        <div className='left' >
            <img src={loginImg} alt="Login"  />
        </div>
        <div className='right'>
            <h2>Nice to see you again!</h2>
            <form onSubmit={loginUser}>
              <input type="text" placeholder='Email or Phone number' required value={email} onChange={(e) => 
              setEmail(e.target.value)} />
              <input type="password" placeholder='password' required value={password} onChange={(e) => 
              setPassword(e.target.value)}/>
              <div className='password-option-cont'>
                <Link to="/reset">forgot password?</Link>
              </div>
              <button type='submit' className='btn'>Sign In</button>
            </form>
            <p>--or--</p>
            <button onClick={loginWithGoogle} className='google'>Login With Google</button>
            <p>Don't have an account?<Link to='/register'> Get started</Link></p>
            
        </div>
    </section>
  )
}

export default Login