import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import future1 from '../img/Feturep/176_70cd7ace-9624-4bd7-8f8c-c9ccf6e5b074.avif'
import future2 from '../img/Feturep/235503723-1_3abc8f8f-c08c-4bf4-974e-6a216d4ede69.webp'
import future3 from '../img/Feturep/4d55117d799154990691e03b82c29a63eaadf2e5_e8cfe6a6-7aef-4fb9-bfcc-8d38c7710cea.webp'
import future4 from '../img/Feturep/51WVDVtxu6L._AC_SS450_ffa2db5a-8c01-4d6c-b167-e6a533c886f6.webp'
import future5 from '../img/Feturep/Hawaii-Sabaya_9e6920b1-da5c-491e-93d0-f7c45d5f9521.webp'
import future6 from '../img/Feturep/OIP.webp'
import future7 from '../img/Feturep/bonjela-teething_7aa74fb4-f199-4bad-b805-069d97445708.webp'
import future8 from '../img/Feturep/online-pharmacy-product-image-placeholder_513e93ce-c191-425d-8e4a-bd9ef5c36caf.webp'

function Featuredproducts() {
    var settings = {
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
    const futures = [
        {
            id: 1,
            img: future1,
            title: 'Moko',
            title2: 'Moko Glycerine Borax',
            price: '₦900.00 '
        },
        {
            id: 2,
            img: future2,
            title: 'Topicrem',
            title2: 'Topicrem bar',
            price: '₦2,500.00 NGN'
        },
        {
            id: 3,
            img: future3,
            title: 'Evans Industries Limited ',
            title2: 'Hawaii Sabaya Deo Body Spray',
            price: '₦1,200.00 NGN'

        },
        {
            id: 4,
            img: future4,
            title: ' Always Soft Maxi Thick x7',
            title2: 'Procter & Gamble Always Soft Maxi Thick x7 Sale price',
            price: '₦581.00 NGN'
        },
        {
            id: 5,
            img: future5,
            title: '',
            title2: '',
            price: ''
        },
        {
            id: 6,
            img: future6,
            title: '',
            title2: '',
            price: ''
        },
        {
            id: 7,
            img: future7,
            title: '',
            title2: '',
            price: ''
        },
        {
            id: 8,
            img: future8,
            title: '',
            title2: '',
            price: ''
        },
    ]
    return (
        <div className='p-2 md:p-10 -z-0'>
            <div className='bg-gray-100 px-3 py-4'>
                <div>
                    <p className='py-2 text-blue-800'>Featured products</p>
                    <p className='py-2 text-blue-800'>Not sure where to start?</p>
                    <p className='py-2 text-blue-800'>We have highlighted some of the top picks from our Pharmacists <br />and Beauticians to help you get started.</p>
                    <p className='py-2 text-blue-800'>This section is updated weekly, so check back frequently!”</p>
                    <p className='bg-orange-500 rounded-sm text-white font-semibold p-2 w-20 text-center text-2xl mt-10'>
                        <Link>More</Link>
                    </p>
                </div>
            </div>
            <div className='py-7'>
                <Slider {...settings}>
                    {
                        futures.map((data) => (
                            <Link>
                                <div key={data.id} className='px-3 shadow-lg hover:scale-105 transition-all ease-in-out duration-300'>
                                    <p><img src={data.img} alt={data.title} className='w-[300px] h-[300px]' /></p>
                                    <div className='py-2 mb-3'>
                                        <p className='text-blue-700 text-xs py-1'>{data.title}</p>
                                        <p className='text-blue-700 py-1'>{data.title2}</p>
                                        <p className='py-1 text-orange-500'>{data.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }

                </Slider>
            </div>
        </div>
    )
}

export default Featuredproducts
