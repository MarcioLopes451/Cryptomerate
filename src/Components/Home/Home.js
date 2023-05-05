import React from 'react'

export default function Home() {

    const mobileImg = 'https://coindeal.com/wp-content/uploads/2020/03/You-have-a-choice.png';

  return (
    <div className='trade-On-The-Go'>
        <div className='trade'>
        <h3>Trade on the go, Anywhere, anytime</h3>
        <p>Stay updated with our app & desktop client.</p>
        <img src={mobileImg} alt='mobile' />
        </div>
        <div className='support'>
            <h1>Hello</h1>
        </div>
    </div>
  )
}
