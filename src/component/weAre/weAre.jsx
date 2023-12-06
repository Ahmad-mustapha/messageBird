import React from 'react'
import './weAre.css'
function weAre({weAreImage, countryName}) {
  return (
    <div className='messageBird__weAre-container'>
      <div className="messageBird__weAre-image">
        <img src={weAreImage} />
        <p>{countryName}</p>
      </div>
    </div>
  )
}

export default weAre
