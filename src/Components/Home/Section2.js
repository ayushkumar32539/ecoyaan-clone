import React from 'react'
import './Styles/Section2.css'

const Section2 = () => {
  return (
    <div className='s2-major'>
       <div className='s2-wrapper'>
        <div className='s2-textarea'>
          <h1 className='s2-heading'>Carefully curated Eco-friendly products</h1>
          <p className='s2-para'>We believe that every purchase you make can have a positive impact on the planet and the future.
         <br/>
         <br/>

         Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.</p>
</div>
        <div className='s2-image'>
          <img className='s2-img' src='https://media.istockphoto.com/id/1426974319/photo/the-concept-of-zero-waste-and-recycling-top-view-of-eco-friendly-items-and-paper-packaging.jpg?s=612x612&w=0&k=20&c=tqBQygQkXpWG8qRAghoG7tWmH1xEfDHgmY6ESoH5xPk=' alt='img'/>
          
        </div>
        </div> 
    </div>
  )
}

export default Section2