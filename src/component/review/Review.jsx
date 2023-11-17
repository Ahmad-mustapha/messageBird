import React from 'react'
import './review.css'
function Review({ peopleReview, content, name, email, title }) {
  return (
    <div className='messageBird__review-container'>
      <div className="messageBird__review-content-image">
        <img src={peopleReview} alt="" />
        <p>{content}</p>
      </div>
      <div className="messageBird__review-titles">
        <h4>{name}</h4>
        <h5>{title}</h5>
        <p>{email}</p>
      </div>     
    </div>
  )
}

export default Review
