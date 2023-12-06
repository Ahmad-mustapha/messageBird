import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/Frame8.png'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

function Menu(){
  return(
    <>
      <ul className="messageBird__navbar-menu__container-links">
        <li><a href="#">Product</a></li>
        <li><a href="">Solutions</a></li>
        <li><a href="">Developers</a></li>
        <li><a href="">Resources</a></li>
        <li><a href="">Pricing</a></li>
      </ul>
    </>
  ) 
}

function Navbar() {
  const [ toggle, setToggle] = useState(false)
  return (
    <div className='messageBird__navbar section__padding'>
      <div className="messageBird__navbar-container">
        <div className="messageBird__navbar-logo">
          <img src={logo} />
        </div>
        <ul className="messageBird__navbar-links">
          <li><a href="#">Product</a></li>
          <li><a href="">Solutions</a></li>
          <li><a href="">Developers</a></li>
          <li><a href="">Resources</a></li>
          <li><a href="">Pricing</a></li>
        </ul>
      </div>
      <div className="messageBird__navbar-signIn">
        <a href='#'>signIn</a>
        <a href='#'>Contact Sales</a>
      </div>
      <div className="messageBird__navbar-menu">
        {toggle
        ? <RiCloseLine style={{fontSize: '1.7rem', fontWeight: '900', cursor: 'pointer', color: '#0a8cfc'}} onClick={() => setToggle(false)}/>
        : <RiMenu3Line style={{fontSize: '1.7rem', fontWeight: '900', cursor: 'pointer', color: '#0a8cfc'}} onClick={() => setToggle(true)}/>
        }
        {toggle &&
          <div className="messageBird__navbar-menu__container scale-up-center">
            <Menu />
            <div className="messageBird__navbar-menu__signIn">
              <a href='#'>signIn</a>
              <a href='#'>Contact Sales</a>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
