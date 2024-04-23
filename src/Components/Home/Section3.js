import React from 'react'
import './Styles/Section3.css'

const Section3 = () => {
  return (
    <div className='s3-major'>
       <div className='s3-wrapper'>
        <div className='s3-textarea'>
          <h1 className='s3-heading'>For businesses that care deeply about sustainability</h1>
          <p className='s3-para'>Do you run a business that is committed to sustainability in every aspect of your work?
         <br/>
         <br/>

         Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?
<br/>
<br/>
If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:


</p>
        </div>
        {/* <div className='s3-image'> */}
          <img className='s3-img' src='https://ecoyaan.com/images/OurStory4.png' alt='img'/>
        {/* </div> */}
        </div> 
    </div>
  )
}

export default Section3