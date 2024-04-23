import React from 'react'
import './Styles/Section1.css'

const Section1 = () => {
  return (
    <div className='s1-major'>
       <div className='s1-wrapper'>
        <div className='s1-textarea'>
          <h1 className='s1-heading'>Join our community in creating a more sustainable future for everyone</h1>
          <p className='s1-para'>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.
         <br/>
         <br/>

Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</p>
        </div>
        {/* <div className='s1-image'> */}
          <img className='s1-img' src='https://ecoyaan.com/images/Impact.png' alt='img'/>
        {/* </div> */}
        </div> 
    </div>
  )
}

export default Section1