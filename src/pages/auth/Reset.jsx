import React from 'react'
import loginImg from '../../assets/images/Illustration.png'
import Card from '../../components/card/card'

const Reset = () => {
  return (
    <section >
    <div className='left' >
        <img src={loginImg} alt="Login"  />
    </div>
    
    <div className='right'>
    <Card>
      <div className='right-details'>
        <h2>Recover Password</h2>
        <form action="">
          <input type="text" placeholder='Email or Phone number' required/>
          <input type="password" placeholder='password' />
         
          <button className='btn'>Recover</button>
        </form>
        
      </div> 
      </Card>
      
    </div>
    
</section>
  )
}

export default Reset