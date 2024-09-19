import React from 'react'
import Slider from "react-slick";
import phamacy1 from '../img/phamacy1.jpg'
import phamacy2 from '../img/shelf-medicine-bottles-with-lot-medicine-bottles-it_1204564-109649.avif'
import phamacy3 from '../img/shelves-with-medicines-pharmacy_1161-230.jpg'
const Home = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplay: true,
        autoplaySpeed: 3000

    };

    return (
        <div className=' -z-0'>
            <div>
                <Slider {...settings}>
                    <div className='md:h-[400px]'>
                        <img src={phamacy2} className='w-full h-screen' alt="phamacy1" />
                    </div>

                    <div className='h-[400px]'>
                        <img src={phamacy3} className='w-full h-screen' alt="phamacy1" />
                    </div>
                    <div className='h-[400px]'>
                        <img src={phamacy1} className='w-full h-screen' alt="phamacy1" />
                    </div>
                                    </Slider>
            </div>
        </div>
    )
}

export default Home
