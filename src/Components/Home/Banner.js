import React from 'react';
import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";

const slides = [
    {
        image: 'https://cdn.corporatefinanceinstitute.com/assets/cryptocurrency.jpg',
        text: 'Get all the latest updates on the crypto market'
    },
    {
        image: 'https://www.exodus.com/download/img/mobile.png',
        text: 'On the go. Use the app on portable devices'
    },
    {
        image: 'https://wp-blog-assets.coingate.com/2022/06/c5b18b5e-howtoswap_blog-1024x530.png',
        text: 'The latest technologies will have you ahead of others.'
    }
];

export default function Banner() {
    
  return (
    <div>
    <Slider classname='slider'>
        {slides.map((item, index) => (
            <div 
            key={index} 
            className='slider-content'
            style={{background: `url('${item.image}') no-repeat center center`, height:'700px'}}>
                <div className='content'>
                    <h1>{item.text}</h1>
                </div>
            </div>
        ))}
    </Slider>
    <div className='home1'>
        <h1>Cryptocurrency is for the future - Buy, trade & Hold 300+ cryptocurrencies on Cryptomerate</h1>
        <ul className='numbers'>
            <li>
                <p className='numbers2'>150</p>
                <p>Countries</p>
            </li>
            <li>
                <p className='numbers2'>10+</p>
                <p>Million Users</p>
            </li>
            <li>
                <p className='numbers2'>300+</p>
                <p>Cryptocurrencies</p>
            </li>
        </ul>
        </div>
    </div>
  )
}