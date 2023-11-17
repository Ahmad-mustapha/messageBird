import React from 'react'
import './howWeWork.css'
import { headPhone, alerm, chat, spanner, wheel, box } from '../../component/weWork/import'
import { WeWork } from '../../component/import'
import { DiveIn } from '../import'
function HowWeWork() {
  return (
    <div className='messageBird__howWeWork section__padding'>
      <div className="messageBird__howWeWork-container">
        <div className="messageBird__howWeWork-heading">
          <h1>How we work</h1>
          <p>We Help You Create Meaningful Interactions That Lead To Growth and elevate custumer Relationships to unprecedented heights</p>
        </div>
        <div className="messageBird__howWeWork_weWork-container">
          <WeWork toolsImage={headPhone} toolsImageText= 'We Customer Greeks'/>
          <WeWork toolsImage={alerm} toolsImageText= 'We Move At 200miles Per Hour And Get Shit Done'/>
          <WeWork toolsImage={spanner} toolsImageText= 'Roll Up Your Sleeves And Take A Look Under The Hook'/>
          <WeWork toolsImage={chat} toolsImageText= 'We Are Excellent Communicators'/>
          <WeWork toolsImage={box} toolsImageText= 'We Are All Owners'/>
          <WeWork toolsImage={wheel} toolsImageText= 'Ignore The Noise, Stay Focus On The Job'/>
        </div>
        <div className="messageBird__howWeWork-diveIn__container">
          <DiveIn />
        </div>
      </div>
    </div>
  )
}

export default HowWeWork
