import React, {useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Banner() {
    const slides = [
        {
            url: 'https://cdn.corporatefinanceinstitute.com/assets/cryptocurrency.jpg',
            text: 'Get all the latest updates on the crypto market'
        },
        {
            url: 'https://pixelplex.io/wp-content/uploads/2019/07/work-cryptocurrency-mobile-wallet-for-android-and-ios-1920.jpg',
            text: 'On the go. Use the app on portable devices'
        }
    ];

    const [currentInd, setCurrentInd] = useState(0);

    const prevSlide = () =>{
        const firstSlide = currentInd === 0;
        const newSlide = firstSlide ? slides.length - 1 : currentInd - 1;
        setCurrentInd(newSlide);
    }

    const nextSlide = () => {
        const lastSlide = currentInd === slides.length - 1;
        const newSlide = lastSlide ? 0 : currentInd + 1;
        setCurrentInd(newSlide)
    }

    const goToSlide = (slideInd) => {
        setCurrentInd(slideInd);
    }

  return (
    <div className='banners'>
    <div className='bannerImg'
    style={{backgroundImage: `url(${slides[currentInd].url})`}}>
        <div className='dots'>
        {slides.map((slide, slideInd) => (
            <div key={slideInd} 
            onClick={() => goToSlide(slideInd)} 
            className='dotsOnClick'>
                <RxDotFilled />
            </div>
        ))}
    </div>
    <h1 className='imgText' style={{transition: '2s ease'}}>{slides[currentInd].text}</h1>
    </div>
    <div className='icons1'>
    <BsChevronCompactLeft
     size={30}
     onClick={prevSlide}/>
    </div>
    <div className='icons2'>
    <BsChevronCompactRight 
    size={30}
    onClick={nextSlide}/>
    </div>
    </div>
  )
}