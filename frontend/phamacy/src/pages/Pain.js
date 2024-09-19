import React from 'react'
import Slider from "react-slick";
import pain1 from '../img/pain/pain1.avif'
import pain2 from '../img/pain/pain2.avif'
import pain3 from '../img/pain/pain3.avif'
import pain4 from '../img/pain/pain4.webp'
import pain5 from '../img/pain/pain5.avif'
import lotion from '../img/makeup/cream-4713579_1280.jpg'

//makeup
import makeup1 from '../img/makeup/makeup1.webp'
import makeup2 from '../img/makeup/makeup2.webp'
import makeup3 from '../img/makeup/makeup3.webp'
import makeup4 from '../img/makeup/makeup4.webp'
import makeup5 from '../img/makeup/makeup5.webp'
import { Link } from 'react-router-dom';
const Pain = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const pains = [
        {
            img: pain1,
            title: 'Pain Management',
            id: 1,
        },
        {
            img: pain2,
            title: 'Cough & Cold',
            id: 2,
        },
        {
            img: pain3,
            title: 'Chronic Diaseses',
            id: 3,
        },
        {
            img: pain4,
            title: 'Vitamins & supplements',
            id: 4,
        },
        {
            img: pain5,
            title: 'Reproductive Health',
            id: 5,
        },
    ]
    const makeups = [
        {
            img: makeup1,
            title: 'Makeup',
            id: 1,
        },
        {
            img: makeup2,
            title: 'Haircare',
            id: 2,
        },
        {
            img: makeup3,
            title: 'Skincare',
            id: 3,
        },
        {
            img: makeup4,
            title: "Men's Grooming",
            id: 4,
        },
        {
            img: makeup5,
            title: 'Massage Oils',
            id: 5,
        },
    ]
    return (
        <div className='py-7 -z-0'>
            <p className='py-3 px-1 md:px-4 font-semibold text-2xl text-blue'>Shop Category</p>
            <div className='grid md:grid-cols-5'>
                {
                    pains.map((data) => (
                        <Link>
                            <div key={data.id} className='hover:scale-105 transition-all duration-300'>
                                <div className='md:w-52'>
                                    <img src={data.img} className='w-full h-[300px] object-scale-down' alt={data.title} />
                                </div>
                                <p className='text-center text-orange-400'>{data.title}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className='px-3 md:px-10 py-10'>
                <div style={{ background: `url(${lotion})` }} className='py-7 px-10 h-[400px] object-cover relative'>
                    <div className=' w-full absolute inset-0 py-3'>
                        <Slider {...settings}>
                            {
                                makeups.map((datas) => (
                                    <Link>
                                        <div key={datas.id} className='px-2 hover:scale-105 transition-all duration-300'>
                                            <p><img src={datas.img} alt={datas.title} className='w-[300px]' /></p>
                                            <p className='text-center text-orange-400'>{datas.title}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pain
