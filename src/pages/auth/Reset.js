import { useState } from 'react'
import loginImg from '../../assets/images/Illustration.png'
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';


const Reset = () => {

  const [email, setEmail] = useState("");

  const resetPassword = (e) => {
    
    e.preventDefault()
    alert(email)

    sendPasswordResetEmail(auth, email)
  .then(() => {
    
    toast.success("Check your email for reset link")
    
    // ..
  })
  .catch((error) => {
    toast.error(error.message)
    // ..
  });
  }

  return (
    <section >
    <div className='left' >
        <img src={loginImg} alt="Login"  />
    </div>
    
    <div  className='right'>
    
      <div className='right-details'>
        <h2>Recover Password</h2>
        <form onSubmit={resetPassword}>
          <input type="text" placeholder='Email or Phone number' required value={email} onChange={(e) => 
              setEmail(e.target.value)} />
          
         
          <button type='submit' className='btn'>Recover</button>
        </form>
        
      </div> 
      
      
    </div>
    
</section>
  )
}

export default Reset