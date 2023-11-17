import React from 'react'
import './header.css'
function Header() {
  return (
    <div className='messageBird__header section__padding'>
      <div className="messageBird__header-image">
        <div className="messageBird__header-content">
          <h1>Welcome To <span>MessageBird</span>: Your <span>Commnunication</span> Solution</h1>
        </div>
        <a href="#">Explore Service</a>
      </div>
    </div>
  )
}

export default Header
