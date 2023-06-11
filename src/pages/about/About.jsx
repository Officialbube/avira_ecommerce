import React from 'react';
import './About.css'
import aboutImg from '../../assets/images/image 2 (2).png'

const About = () => {
  return (
    <section className='about'>
      <div className='about-left'>
        <div className='about-text'>
        <h2>ABOUT US</h2>
        <p>Avira caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find elsewhere. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.

          We are here to serve you and make sure you find the Perfect Look for every occasion. Our passion for fashion is the reason why we are here. We absolutely love what we do, and our goal is to help our customers by providing them with unique outfit and accessories that make them stand-out from the crowd.</p>
        <div className='stat'>
          <div>
            <h2>50k+</h2>
            <p>Happy Customers</p>
          </div>
          <div>
            <h2>50k+</h2>
            <p>Happy Customers</p>
          </div>
          <div>
            <h2>50k+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
        </div>
      </div>
      <div className='about-right'>
        <img src={aboutImg} alt="" />
      </div>
    </section>
  )
}

export default About