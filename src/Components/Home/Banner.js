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
        image: 'https://pixelplex.io/wp-content/uploads/2019/07/work-cryptocurrency-mobile-wallet-for-android-and-ios-1920.jpg',
        text: 'On the go. Use the app on portable devices'
    }
];

export default function Banner() {
    
  return (
    <Slider classname='Slider'>
        {slides.map((item, index) => (
            <div 
            key={index} 
            className='slider-content'
            style={{background: `url('${item.image}') no-repeat center center`}}>
                <div className='content'>
                    <h1>{item.text}</h1>
                </div>
            </div>
        ))}
    </Slider>
  )
}