import React from 'react';
import ReactSwitch from 'react-switch';

export default function Home() {
  return (
    <nav className='nav'>
        <img src='' alt=''/>
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
  )
}
