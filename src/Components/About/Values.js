import React from 'react'
import "./Styles/Values.css"

const Values = () => {
  return (
    <div className='main-container'>
        <div className='wrapper'>
            <h1>Our Values</h1>            
            <div class="container">
   <div class="row">
    <div class="col-lg-12">
       <div class="featuredPropBox">
        <ul className='ul-column'>
           <li> 
             <div class="fplogo"><h1>Trust we Own</h1></div>
             <div class="fptext">
              <p>We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>
            </div>
             </li>

           <li> 
             <div class="fplogo"><h1>Authenticity We Have</h1></div>
             <div class="fptext">
              <p>We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire towards sustainability.</p>
            </div>
             </li>
           <li> 
             <div class="fplogo"><h1>Impact We Create</h1></div>
             <div class="fptext">
              <p>We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being.</p>
            </div>
           </li>
             <li> 
             <div class="fplogo"><h1>Fun & Engaging</h1></div>
             <div class="fptext">
              <p>Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do.</p>
            </div>
             </li> 
             <li>
             <div class="fplogo"><h1>New Innovation</h1></div>
             <div class="fptext">
              <p>We embrace creativity and innovation to continuously improve our offerings and find new ways to make a positive impact. By staying open to new ideas and technologies, we can lead the way towards a more sustainable future while keeping our community engaged and excited about the journey.</p>
            </div>
             </li>   
         </ul>
      </div>
     </div>
  </div>
 </div>

            </div>
        </div>
  )
}

export default Values