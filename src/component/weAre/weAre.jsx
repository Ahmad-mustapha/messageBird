import React from 'react'
import './weAre.css'
function WeAre({weAreImage, countryName}) {
  return (
    <div className='messageBird__weAre-container'>
      <div className="messageBird__weAre-image">
        <img src={weAreImage} />
        <p>{countryName}</p>
      </div>
    </div>
  )
}

export default WeAre
