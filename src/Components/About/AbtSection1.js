import React from 'react'
import './Styles/AbtSection1.css'

const AbtSection1 = () => {
  return (
    <div className='s1-major'>
       <div className='s1-wrapper'>
        <div className='s1-textarea'>
          <h1 className='s1-heading'>About Ecoyaan</h1>
          <p className='s1-para'>At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
         <br/>
         <br/>

         We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:
         <ul className='abt-list'>
            <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
            <li>Videos, posts, and quizzes on climate change and sustainability</li>
            <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
         </ul>
      </p>
        </div>
        {/* <div className='s1-image'> */}
          <img className='s1-img' src='https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png' alt='img'/>
        {/* </div> */}
        </div> 
    </div>
  )
}

export default AbtSection1