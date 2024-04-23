import React from 'react'
import './Styles/Team.css'

const Team = () => {
  return (
    <div className="team-container">
        <h1>Our Team</h1>
    <div className=" flip-boxes">
        <div className='top-box'> 
      <div className="col-md-3 col-sm-4 col-8 flip-box">
        <div className="front" style={{backgroundImage: "url(https://ecoyaan.com/images/about-us-social-media-team-01.png)"}}>
          <div className="content text-center">
          SHRUTHI<br />
          SOCIAL MEDIA
            <span className="click-for-more"></span>
          </div>
        </div>
        <div className="back">
          <div className="content back-content">
          Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability.
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-4 col-8 flip-box">
        <div className="front" style={{backgroundImage: "url(https://ecoyaan.com/images/about-us-social-media-team-02.png)"}}>
          <div className="content text-center">
          URMIL<br />
          SOCIAL MEDIA
            <span className="click-for-more"></span>
          </div>
        </div>
        <div className="back">
          <div className="content back-content">
          Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion.
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-4 col-8 flip-box">
        <div className="front" style={{backgroundImage: "url(https://ecoyaan.com/images/about-us-product-team-01.png)"}}>
          <div className="content text-center">
          DIVYA<br />
          UX DESIGNER
            <span className="click-for-more"></span>
          </div>
        </div>
        <div className="back">
          <div className="content back-content">
          Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on Behance
          </div>
        </div>
      </div>
      </div>
      <div className='bottom-box'>
      <div className="col-md-3 col-sm-4 col-8 flip-box">
        <div className="front" style={{backgroundImage: "url(https://ecoyaan.com/images/about-us-product-team-03.png)"}}>
          <div className="content text-center">
          SAI ABHILASH<br />
          ENGINEERING
            <span className="click-for-more"></span>
          </div>
        </div>
        <div className="back">
          <div className="content back-content">
          Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-4 col-8 flip-box">
        <div className="front" style={{backgroundImage: "url(https://ecoyaan.com/images/about-us-product-team-02.png)"}}>
          <div className="content text-center">
          PRASHANITH<br />
          ENGINEERING
            <span className="click-for-more"></span>
          </div>
        </div>
        <div className="back">
          <div className="content back-content">
          Prashanith is our front-end engineer, who brings the UX designs to life
          </div>
        </div>
      </div>
      </div>
     
    </div>
  </div>
  )
}

export default Team