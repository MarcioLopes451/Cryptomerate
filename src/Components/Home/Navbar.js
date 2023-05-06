import React from 'react';
import ReactSwitch from 'react-switch';
import Logo from '../../images/cryptomerate-low-resolution-logo-color-on-transparent-background.png';

export default function Navbar() {
  return (
  <>
   <nav className='nav'>
        <img src={Logo} alt='logo' className='logo'/>
        <div className='navlinks'>
            <a href='/'>Home</a>
            <a href='/'>Crypto Market</a>
            <a href='/'>About Us</a>
        </div>
        <div className='extralinks'>
            <button className='loginBTN'>Login/Register</button>
            <ReactSwitch />
        </div>
  </nav>
  </>
  )
}
