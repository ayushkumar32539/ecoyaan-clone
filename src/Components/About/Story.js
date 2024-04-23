import React from 'react'
import './Styles/Story.css'

const Story = () => {
  return (
    <div className='story-main-container'>
        <div className='story-wrapper'>
          <h1>Our story</h1>
          <div className='story-img-container'>
            <img className='founder' src='https://ecoyaan.com/images/about-us-founding-team-01.png' alt=''/>
            <img className='founder' src='https://ecoyaan.com/images/about-us-founding-team-02.png' alt=''/>
          </div>
          <div className='story-section'>
            <p>We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. That moment ignited our mission.
<br/>
<br/>

Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. We also noticed that there is a lack of support for eco-friendly businesses.
<br/>
<br/>

We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.
<br/>
<br/>

As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we’ll make a difference.</p>
          </div>
        </div>
    </div>
  )
}

export default Story