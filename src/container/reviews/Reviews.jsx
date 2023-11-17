import React from 'react'
import './reviews.css'
import allStars from '../../assets/star 2.png'
import { coo, exDirector, manager } from './import'
import { Review } from '../../component/import'
function reviews() {
  return (
    <div className='messageBird__reviews '>
      <div className="messageBird__reviews-heading">
        <h1>Reviews</h1>
        <div className="messageBird__reviews-heading_image">
          <img src={allStars} />
          <img src={allStars} />
          <img src={allStars} />
          <img src={allStars} />
          <img src={allStars} />
        </div>
      </div>
      <div className="messageBird__reviews-review-container">
        <Review peopleReview= {exDirector} content ="MessageBird is not just a platform; it's a game-changer" title='Executive Director' name='Selena Bobs' email='@GIG LOGISTICS'/>
        <Review peopleReview= {manager} content ="MessageBird is not just a platform; it's a game-changer" title='Financial Manager' name='Nartha Singh' email='@WELLAHEALTH'/>
        <Review peopleReview= {coo} content ="MessageBird is not just a platform; it's a game-changer" title='COO' name='Selena Bobs' email='@MEGA BEAUTY'/>
      </div>
    </div>
  )
}

export default reviews
