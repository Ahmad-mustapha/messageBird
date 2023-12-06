import React from 'react'
import './whereWeAre.css'
import WeAre from '../../component/weAre/WeAre'
import { london, sanFrasisco, bogota, singapore, shanghai, dublin } from './import'
function WhereWeAre() {
  return (
    <div className='messageBird__whereWeAre'>
      <div className="messageBird__whereWeAre-heading section__padding">
          <h1>Where We Are</h1>
          <p>Situation amidst the vibrant tech hub of singapore, san francisco, shanghai, bogota, dublin, london. Our Headequarters serves as a beacon of innovation, driving transformative solutions that connect businesses and their customers on a global scale</p>
      </div>
      <div className="messageBird__whereWeAre_weAre-container">
        <WeAre weAreImage={singapore} countryName='SINGAPORE'/>
        <WeAre weAreImage={sanFrasisco} countryName='SAN FRASISCO'/>
        <WeAre weAreImage={shanghai} countryName='SHANGHAI'/>
        <WeAre weAreImage={london} countryName='LONDON'/>
        <WeAre weAreImage={bogota} countryName='BOGOTA'/>
        <WeAre weAreImage={dublin} countryName='DUBLIN'/>
      </div>
    </div>
  )
}

export default WhereWeAre
