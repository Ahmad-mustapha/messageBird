import React from 'react'
import './footer.css'
import footerLogo from '../../assets/Frame 13.png'
function Footer() {
  return (
    <div className='messageBird__footer section__padding'>
      <div className="messageBird__footer-logo">
        <img src={footerLogo} alt="" />
      </div>
      <div className="messageBird__footer-links">
        <div className="messageBird__footer-links_column">
          <p>Platforms</p>
          <ul>
            <li><a href="#">Inbox</a></li>
            <li><a href="#">Flows</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Campaign</a></li>
          </ul>
        </div>
        <div className="messageBird__footer-links_column">
          <p>Platforms</p>
          <ul>
            <li><a href="#">Inbox</a></li>
            <li><a href="#">Flows</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Campaign</a></li>
          </ul>
        </div>
        <div className="messageBird__footer-links_column">
          <p>Platforms</p>
          <ul>
            <li><a href="#">Inbox</a></li>
            <li><a href="#">Flows</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Campaign</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
