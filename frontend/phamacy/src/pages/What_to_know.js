import React from 'react'
import farmily1 from '../img/family/family-1111818_1280.jpg'
import farmily2 from '../img/family/family-2485714_1280.jpg'
import farmily3 from '../img/family/pregnant-6189040_1280.jpg'
const What_to_know = () => {
    return (
        <div className='py-4 px-3'>
            <div className='grid md:grid-cols-3 gap-x-2 gap-y-4'>
                <div className=' shadow-lg'>
                    <img src={farmily1} className='hover:scale-105 transition-all duration-200' alt="farmily1" />
                    <div className='py-3 px-4'>
                        <p>Understanding the side Effects of Family Planning</p>
                        <p>
                            Explore our guide to the side effects of family planning methods, from hormonal options like pills and implants to non-hormonal choices like IUDs and condoms. Get informed to make the best decisions for your reproductive health.
                        </p>
                    </div>
                </div>
                <div className=' shadow-lg'>
                    <img src={farmily2} className='hover:scale-105 transition-all duration-200' alt="farmily2" />
                    <div className='py-3 px-4'>
                        <p>The main important of Family Planning</p>
                        <p>
                            Empower yourself with family planning. Discover the benefits of making informed choices. Take control of your reproductive health and achieve your goals.
                        </p>
                   </div>
                </div>
                <div className=' shadow-lg'>
                    <img src={farmily3} alt="farmily2" className='hover:scale-105 transition-all duration-200' />
                    <div className='py-4 px-4'>
                        <p>The Disruptive Nature of Pregnancy On Students</p>
                        <p>
                            Empower yourself with family planning. Discover the benefits of making informed choices. Take control of your reproductive health and achieve your goals.
                        </p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default What_to_know
